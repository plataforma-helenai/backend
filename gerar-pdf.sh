#!/usr/bin/env bash
# ================================================================
# HelenAI — Gerador de PDF a partir de uma tela do protótipo
# ================================================================
#
# Captura a tela inteira renderizada (modo screen, não print) via
# headless Chrome e converte para PDF, recortando automaticamente
# o espaço vazio abaixo do conteúdo. Mantém sidebar, appbar,
# barra de acessibilidade — tudo idêntico ao navegador.
#
# Pré-requisitos:
#   - Servidor de desenvolvimento rodando (python manage.py runserver)
#   - google-chrome instalado
#   - venv com Pillow (já configurado em ./venv)
#
# Uso:
#   ./gerar-pdf.sh <caminho-da-tela> [largura-px] [altura-px]
#   ./gerar-pdf.sh --all
#
# Exemplos:
#   ./gerar-pdf.sh aluno/dashboard.html
#   ./gerar-pdf.sh aluno/dashboard.html 1600
#   ./gerar-pdf.sh compartilhado/login.html 1440 900   # hero page: usa 100vh, precisa altura real
#   ./gerar-pdf.sh --all   (gera PDF de todas as telas existentes)
#
# Altura padrão é 5000 (captura alta, crop automático do bottom).
# Para telas que usam min-height: 100vh + justify-content: center
# (login, cadastro, recuperar-senha), passe altura realista (~900)
# pra não afundar o conteúdo no meio do viewport.
#
# O PDF é salvo em ./HelenAI/pdfs/<modulo>-<tela>.pdf
# ================================================================

set -e

# === Configuração padrão ===
HOST="http://127.0.0.1:8020"
LARGURA="${2:-1440}"
ALTURA_INICIAL="${3:-5000}"   # captura alta, depois corta no fim do conteúdo
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV_PYTHON="$SCRIPT_DIR/venv/bin/python3"
PASTA_PROTOTIPOS="$SCRIPT_DIR/HelenAI/prototipos"
PASTA_SAIDA="$SCRIPT_DIR/HelenAI/pdfs"

# === Validação ===
if [ -z "$1" ]; then
  echo "Uso: $0 <caminho-da-tela> [largura-px]"
  echo "     $0 --all"
  echo ""
  echo "Exemplos:"
  echo "  $0 aluno/dashboard.html"
  echo "  $0 conteudista/banco-questoes.html 1600"
  echo "  $0 --all"
  exit 1
fi

mkdir -p "$PASTA_SAIDA"

# === Função: gera PDF de uma tela ===
gerar_pdf() {
  local tela="$1"
  local url="$HOST/$tela"
  local nome_arquivo
  nome_arquivo=$(echo "$tela" | sed 's|/|-|g; s|\.html$||').pdf
  local png_tmp="/tmp/helenai-screenshot-$$.png"
  local pdf_final="$PASTA_SAIDA/$nome_arquivo"

  # Verificar se a tela responde
  local http_code
  http_code=$(curl -s -o /dev/null -w "%{http_code}" "$url" || echo "000")
  if [ "$http_code" != "200" ]; then
    echo "  ✖ $tela (HTTP $http_code)"
    return 1
  fi

  # Capturar screenshot bem alto
  google-chrome \
    --headless=new \
    --disable-gpu \
    --no-sandbox \
    --hide-scrollbars \
    --window-size="${LARGURA},${ALTURA_INICIAL}" \
    --virtual-time-budget=8000 \
    --screenshot="$png_tmp" \
    "$url" 2>/dev/null

  if [ ! -f "$png_tmp" ]; then
    echo "  ✖ $tela (falha screenshot)"
    return 1
  fi

  # Converter para PDF com auto-crop via Pillow + numpy.
  # Estratégia: detectar a última linha que contém pixels "brancos" (cards),
  # ignorando sidebar (esquerda) e elementos fixos do canto direito
  # (acessibilidade bar / libras / ledor). Os cards são sempre brancos no
  # protótipo, então marcam o limite inferior real do conteúdo.
  "$VENV_PYTHON" - "$png_tmp" "$pdf_final" <<'PYEOF'
import sys
import numpy as np
from PIL import Image

png_path, pdf_path = sys.argv[1], sys.argv[2]
img = Image.open(png_path).convert("RGB")
arr = np.array(img)
h, w, _ = arr.shape

# Áreas a IGNORAR (elementos position:fixed que ficam ancorados no viewport)
RIGHT_FIXED_W = 440   # acessibilidade-bar / libras-janela / ledor-player
SIDEBAR_W = 280       # sidebar fixa à esquerda

# Detecta se a tela tem sidebar: pixel a x=20, y=h/3 deve ser azul-escuro
pixel_sidebar = arr[h // 3, 20, :]
tem_sidebar = pixel_sidebar[2] < 130 and pixel_sidebar[0] < 80

x0 = SIDEBAR_W if tem_sidebar else 0
x1 = max(w - RIGHT_FIXED_W, x0 + 200)

# Converte região analisada para grayscale
regiao = arr[:, x0:x1, :]
gray = regiao.mean(axis=2)

# Detecção de conteúdo por BORDAS (saltos pixel-a-pixel na horizontal).
# Cards brancos sobre fundo cinza, texto preto sobre branco, bordas de
# inputs, ícones — todos criam saltos abruptos de luminância (>25 de delta).
# Gradients diagonais são suaves (delta <5 por pixel), fundos uniformes não
# têm nenhum salto. Assim ignora o branding do login mas detecta texto/cards
# nele.
gray_diff = np.abs(np.diff(gray, axis=1))
edges_per_row = (gray_diff > 25).sum(axis=1)

# Threshold: linhas com pelo menos 30 pixels de borda contam como conteúdo
# real (ignora ruído / anti-aliasing esparso de gradientes).
MIN_EDGES = 30
linhas_com_conteudo = np.where(edges_per_row > MIN_EDGES)[0]

if len(linhas_com_conteudo) > 0:
    inicio = int(linhas_com_conteudo[0])
    fim = int(linhas_com_conteudo[-1])
else:
    # Sem conteúdo detectado — fallback pra altura mínima
    inicio = 0
    fim = h // 4

# Se o conteúdo começa bem abaixo do topo (> 200px de vazio), provavelmente é
# uma tela "hero" com conteúdo centralizado em 100vh. Nesse caso corta o topo
# também, deixando uma margem pra preservar elementos decorativos (gradient,
# círculos). Caso contrário, mantém o topo (telas normais com AppBar).
crop_top = 0
if inicio > 200:
    crop_top = max(inicio - 180, 0)

# Margem inferior + altura mínima
crop_h = min(fim + 50, h)
crop_h = max(crop_h, crop_top + 700)

cropped = img.crop((0, crop_top, w, crop_h))
cropped.save(pdf_path, "PDF", resolution=150.0)
print(f"  ✓ {pdf_path.split('/')[-1]} ({cropped.size[0]}x{cropped.size[1]})")
PYEOF

  rm -f "$png_tmp"
}

# === Modo --all: gerar todas as telas ===
if [ "$1" = "--all" ]; then
  echo "→ Gerando PDFs de todas as telas em $PASTA_PROTOTIPOS"
  echo "→ Saída: $PASTA_SAIDA"
  echo ""

  TOTAL=0
  OK=0
  for arquivo in $(find "$PASTA_PROTOTIPOS" -name "*.html" -not -name "index.html" | sort); do
    tela="${arquivo#$PASTA_PROTOTIPOS/}"
    TOTAL=$((TOTAL + 1))
    if gerar_pdf "$tela"; then
      OK=$((OK + 1))
    fi
  done

  echo ""
  echo "✓ $OK de $TOTAL PDFs gerados em $PASTA_SAIDA"
  exit 0
fi

# === Modo individual ===
TELA="${1#/}"
URL="$HOST/$TELA"

echo "→ Tela:    $URL"
echo "→ Largura: ${LARGURA}px (altura: auto-detectada)"
echo "→ Saída:   $PASTA_SAIDA"
echo ""

gerar_pdf "$TELA"
