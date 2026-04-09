# HelenAI — Decisões e Contexto do Projeto

Arquivo de referência para o Claude Code reconstruir o contexto em qualquer máquina.
Ao iniciar uma nova conversa, leia este arquivo + `MVP_TELAS.md` + `ROADMAP_PROTOTIPO.md`.

---

## Sobre o Projeto

- **HelenAI** é uma EdTech inclusiva para preparação de PcDs (Pessoas com Deficiência) para ENEM, concursos e seleções
- Slogan: "Aprendizado sem barreiras — A tecnologia a favor da inclusão"
- Inscrito no programa **Centelha** (empreendedorismo/inovação)
- Stack: **Django** (Python) no backend, protótipos em HTML/CSS/JS puro
- Projeto roda com `python manage.py runserver` e serve os protótipos via `django.views.static.serve`

## Equipe

- **Ellen Souza** — IA e Tecnologias Assistivas (líder de pesquisa)
- **Hidelberg Albuquerque** — Machine Learning e PLN
- **Héldon Albuquerque** — Full Stack, sistemas distribuídos (usuário principal do Claude Code)
- **Romário Elias** — Tecnologias assistivas para deficiência intelectual (5+ anos na APAE)

## Sobre o Héldon (usuário)

- Tem visão de produto forte — pede ajustes de UX constantemente durante o protótipo
- Prefere ver funcionando para decidir (prototipagem iterativa)
- Não gosta de scroll horizontal, modais sobre modais, ou campos pequenos
- Prefere filtros com labels em cima, campo de busca grande, botão "Limpar filtros" condicional
- Quando diz "não gostei", quer que refaça a abordagem, não apenas ajuste

---

## Progresso do Protótipo (atualizado 2026-04-08)

### Completas
- **Fase 0:** Base (CSS global, componentes, acessibilidade, dados fake, navegação)
- **Fase 1:** Login (3 usuários fake), Cadastro, Recuperação de senha
- **Fase 3:** Conteudista — Dashboard, Importações (listagem + modal upload + loading), Revisão de questões, Banco de questões (Select2, filtros), Formulário (Quill.js)
- **Fase 4:** Conteudista — Simulados (lista + detalhes modal + form com composição), Resultados (Chart.js), Meus Alunos (turmas múltiplas), Curadoria (questão por questão)
- **Fase 5:** Aluno — Dashboard (continue de onde parou + trilha IA + resumo semanal IA + habilidades fracas/fortes + radar BNCC + simulados recentes com acertos/erros/em-andamento + simulados disponíveis), Explorar Simulados, Perfil (configs IA + acessibilidade), Ranking (top 3 + posição do aluno)
- **Fase 6:** Realizar Simulado — Início (com instruções DUA + toggle cronômetro + recursos ativos), Tela de Questão (modo focado sem sidebar regular, top bar com cronômetro, IA toolbar com Simplificar/Palavras-chave/Dica/Ouvir, painel de navegação lateral com mapa de questões), Resultado (header de comemoração, badge desbloqueado animado, comparativo com média, gabarito comentado com explicação IA por questão errada — Fase 8.5)

### Próximas
- **Fase 7:** Aluno criando simulados, importando PDF, compartilhamento
- **Fase 8:** IA, Linguagem Simples e DUA (integrar nas telas do aluno)
- **Fase 9:** Admin
- **Fase 10:** IA no Conteudista/Admin (futuro)

---

## Decisões de Arquitetura e Negócio

### Perfis de Acesso
- **Admin:** email + senha → gerencia plataforma
- **Conteudista:** email + senha → professor/curador
- **Aluno:** email + senha OU Google → faz simulados
- Login fake: `admin@helen.ai`, `conteudista@helen.ai`, `aluno@helen.ai` (senhas iguais ao perfil)
- Botão Google vai direto para aluno

### Turmas
- Professor pode criar **múltiplas turmas**
- Cada turma tem **código único** (ex: ENEM-INT-2026)
- Turma pode ser **pública** (qualquer aluno entra) ou **privada** (professor aprova)
- Aluno entra na turma via código
- Se turma privada → aluno solicita entrada → professor aprova/rejeita
- Professor pode convidar aluno por email (pré-cria o aluno)
- Turma tem status: Ativa / Encerrada
- Professor pode vincular simulados à turma

### Realizar Simulado (Fase 6 — modo prova)
- A tela `simulado-questao.html` é a única do módulo aluno **sem a sidebar regular** — substituída por uma top bar focada e um painel de navegação de questões à direita
- Top bar tem: botão `Sair` (com aviso "progresso será salvo"), nome do simulado, progresso "Questão X de N", barra de progresso visual, cronômetro (cor laranja, monoespaçada), botão `Finalizar` verde
- A IA é apresentada como **"Helen"** numa toolbar fixa acima do enunciado, com 4 botões: `Simplificar` (Linguagem Simples — Fase 8.1), `Palavras-chave` (Fase 8.3), `Pedir uma dica` (Fase 8.4), `Ouvir questão` (TTS)
- Quando "Simplificar" está ativo, mostra um card verde com a versão em Linguagem Simples (Lei 15.263/2025) acima do enunciado original
- Palavras-chave aparecem destacadas com underline amarelo + tooltip explicativo
- Dica da Helen aparece em card amarelo, em itálico, sem revelar resposta
- Mapa de questões: grid 5 colunas, cada botão tem cor por estado (atual/respondida/marcada/vazia)
- Resultado: header em gradient com emoji 🎉 + nota grande, badge desbloqueado em card amarelo animado (pulse), comparativo da nota vs média geral vs melhor nota em barras horizontais
- Gabarito comentado: cada questão errada tem **Helen explica** em card azul-ciano com texto humanizado ("Vamos revisar juntas? 💪") — DUA puro
- Tom em todas as mensagens: 1ª pessoa, encorajador, sem termos punitivos

### Continue de Onde Parou (futuro — backend)
- O dashboard do aluno destaca um card no topo "Continue de onde parou" quando há simulado em andamento (não finalizado)
- Estado a persistir por aluno: `{ simulado_id, questao_atual, respostas_parciais[], tempo_decorrido, ultima_atividade }`
- Card mostra: nome do simulado, questão atual / total, tempo desde início, % concluído (sobre o total), botão "Continuar" e link "Descartar progresso"
- Pode haver mais de um simulado pausado; o mais recente vira o card destacado, os outros aparecem na lista de "Simulados Recentes" com borda laranja e botão pequeno "Continuar"
- Cor laranja (`#ED8936`) é o código visual de "em andamento" em todas as telas do aluno
- Na lista de Simulados Recentes, a porcentagem dos em-andamento é calculada **sobre as questões já respondidas** (`acertos / (acertos + erros)`), não sobre o total
- A tela `explorar-simulados.html` também exibe simulados em andamento como card laranja (com barra de progresso, stats parciais e botão `▶ Continuar`) — entrada alternativa pro mesmo fluxo, caso o aluno chegue pelo Explorar e não pelo Dashboard
- Filtro por status no Explorar: chips no topo da barra de filtros — `Todos`, `⚪ Não iniciados`, `🟠 Em andamento`, `✓ Finalizados` — cada um com badge de contagem
- Os botões "Continuar" (dashboard + explorar) apontam para `simulado-questao.html` (assumindo retomada do estado salvo)

### Curadoria
- Curadoria é **somente para questões de importações de alunos** que marcaram como públicas
- Curador avalia **questão por questão** (não simulado inteiro)
- Curador só pode aprovar questões da **sua área de competência**
- Quando **todas** as questões de uma importação forem revisadas → simulado criado automaticamente só com as aprovadas
- Exemplo: 30 questões, 28 aprovadas, 2 rejeitadas → simulado com 28 questões
- Na tela: listagem de importações → clique abre detalhe com "suas questões" em cima + "demais questões" embaixo
- Mostra quem aprovou/rejeitou cada questão
- Único modal: ver detalhe da questão (enunciado, alternativas, etc.)

### Simulados
- Simulado pode ser criado a partir de importação (automático) ou manualmente (selecionando questões do banco)
- Na edição: questões à esquerda, config em cima, composição à direita
- Composição mostra: total, tempo estimado, distribuição por dificuldade/área/habilidade
- Simulado em rascunho: tudo editável
- Simulado publicado com aluno que realizou: **travado**
- Tempo é configurável e o aluno pode escolher usar ou não

### Banco de Questões
- Cada questão mostra: criador, origem (importação ou manual), simulados onde é usada
- "Usada em X simulados" — clique abre modal com lista
- Filtros com Select2, labels em cima, limpar filtros condicional
- Editor de enunciado usa Quill.js (rich text)

---

## Decisões de IA, DUA e Linguagem Simples

### IA na Importação de PDF (futuro — backend)
Ao importar PDF, a IA processa cada questão e gera automaticamente:
1. Versão em **Linguagem Simples** (Lei 15.263/2025)
2. **Palavras-chave** extraídas com explicação
3. **Classificação BNCC** (área, competência, habilidade)
4. **Nível de dificuldade** estimado
5. Versão para **ledor** (sem abreviações, parênteses complexos)

Tudo processado na importação, não sob demanda. Conteudista revisa antes de publicar.

### DUA — Desenho Universal para Aprendizagem
3 princípios aplicados em todas as telas do aluno:

1. **Representação** (o quê): texto + áudio + LIBRAS + Linguagem Simples + palavras-chave
2. **Ação e Expressão** (o como): navegação por teclado, tempo opcional, pausar/retomar
3. **Engajamento** (o porquê): gamificação, feedback humanizado, trilhas personalizadas

### Anamnese no Cadastro do Aluno
Cadastro em 2 etapas:
1. Dados básicos (nome, email, senha)
2. Anamnese de acessibilidade (opcional):
   - Tipo de deficiência (visual, auditiva, intelectual, motora, dislexia, daltonismo, TEA)
   - Preferências de leitura (simplificado, áudio, LIBRAS)
   - Familiaridade com tecnologia

Com base nas respostas, a plataforma configura automaticamente:
- Daltonismo → Color Blind
- Dislexia → fonte OpenDyslexic
- Visual → alto contraste + ledor + fonte grande
- Auditiva → LIBRAS
- Intelectual → Linguagem Simples + ledor
- TEA → interface calma (animações reduzidas)
- Pouca experiência → tutorial guiado

### IA no Módulo Aluno (Fase 8)
- Botão "Simplificar" na questão → mostra Linguagem Simples
- Botão "Palavras-chave" → destaca termos com tooltip
- Botão "Dica" → dica sem revelar resposta
- Explicação por questão errada no resultado
- Trilha personalizada no dashboard
- Resumo semanal da IA
- Configurações: "Sempre usar Linguagem Simples", nível de simplificação

### Design Centrado no Usuário (PcD)
- Feedback humanizado: "Vamos revisar juntos?" em vez de "Você errou"
- Interface calma: espaçamento generoso, cores suaves
- Tempo sem pressão: cronômetro sempre opcional

---

## Decisões de Interface/UX

### AppBar
- Fixo no topo em todas as telas com sidebar
- Breadcrumb à esquerda
- Notificações (dropdown com lista) + Perfil (dropdown com menu) à direita
- Gerado automaticamente por `navegacao.js`

### Barra de Acessibilidade
- Fixada no **canto inferior direito**
- Presente em TODAS as telas (inclusive login)
- Toggles: alto contraste, fonte dislexia, A-/A+, color blind, ledor, LIBRAS
- Preferências persistem no localStorage

### Filtros (padrão em todas as telas)
- Layout em linhas: busca maior (flex:3) + selects na mesma linha ou linha abaixo
- Labels em cima de cada campo (uppercase, pequeno)
- Botão "Limpar filtros" só aparece quando algo está preenchido
- Select2 no banco de questões (com busca)

### Sidebar
- Fixa à esquerda, azul profundo
- Menu varia por perfil (Admin, Conteudista, Aluno)
- Badge de notificação em "Curadoria"

---

## Estrutura de Arquivos do Protótipo

```
HelenAI/prototipos/
├── assets/
│   ├── css/
│   │   ├── global.css          # Reset, variáveis, paleta, tipografia
│   │   ├── componentes.css     # Botões, inputs, cards, sidebar, appbar, modais, tabelas
│   │   └── acessibilidade.css  # Alto contraste, dislexia, color blind, ledor, LIBRAS
│   ├── js/
│   │   ├── acessibilidade.js   # Toggles da barra de acessibilidade (localStorage)
│   │   ├── navegacao.js        # AppBar (breadcrumb, notificações, perfil dropdown)
│   │   └── fake-data.js        # Dados mockados
│   └── img/
│       └── logo-helen.png
├── compartilhado/
│   ├── login.html
│   ├── cadastro.html
│   └── recuperar-senha.html
├── conteudista/
│   ├── dashboard.html
│   ├── importar-pdf.html       # Listagem + modal upload + loading
│   ├── revisao-questoes.html
│   ├── banco-questoes.html     # Select2, filtros, modal simulados
│   ├── questao-form.html       # Quill.js editor
│   ├── simulados.html          # Lista + modal detalhes
│   ├── simulado-form.html      # Config topo + questões + composição
│   ├── simulado-resultados.html # Chart.js
│   ├── meus-alunos.html        # Turmas + alunos + solicitações
│   └── curadoria.html          # Vista lista + vista detalhe
├── admin/                      # Fase 9 — pendente
├── aluno/
│   ├── dashboard.html              # Continue de onde parou + trilha IA + resumo semanal IA + radar BNCC + recentes em andamento
│   ├── explorar-simulados.html     # Filtros (chips de status + selects) + cards + card "em andamento" exemplo + tabs
│   ├── perfil.html                 # Dados + badges + desempenho + configs IA + acessibilidade
│   ├── ranking.html                # Top 3 podium + tabela + posição do aluno fixa
│   ├── simulado-inicio.html        # Stats + instruções DUA + toggle cronômetro + recursos ativos
│   ├── simulado-questao.html       # Modo focado: top bar + IA toolbar + alternativas + nav grid
│   └── simulado-resultado.html     # Comemoração + badge unlock + comparativo + gabarito IA
└── index.html                      # Redireciona para login
```

---

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul profundo | `#1A3A6B` | Gradientes, sidebar, headers |
| Azul médio | `#2B6CB0` | Botões primários, links |
| Ciano/turquesa | `#3CC8D0` | Gradientes, acentos |
| Azul claro | `#A8D4F0` | Fundos de cards |
| Cinza azulado | `#EEF4FA` | Fundo geral |
| Branco | `#FFFFFF` | Cards, textos sobre escuro |
| Erro | `#E53E3E` | Vermelho |
| Sucesso | `#38A169` | Verde |
| Aviso | `#ECC94B` | Amarelo |

## Libs CDN Usadas
- Chart.js 4.4.0 — gráficos
- Select2 4.1.0 + jQuery 3.7.1 — filtros com busca
- Quill 2.0.3 — editor rich text
- OpenDyslexic — fonte para dislexia
- Inter — fonte principal

## Ferramentas de Apoio

### gerar-pdf.sh
Script na raiz do `backend/` que gera PDF de qualquer tela do protótipo via headless Chrome (modo screen, não print — preserva sidebar/appbar/barra de acessibilidade).

```bash
./gerar-pdf.sh aluno/dashboard.html              # default 1440x2300
./gerar-pdf.sh aluno/dashboard.html 2500          # altura customizada
./gerar-pdf.sh conteudista/banco-questoes.html 2800 1440  # altura + largura
```

- Salva em `HelenAI/pdfs/<modulo>-<tela>.pdf`
- Usa Pillow do venv local pra converter PNG → PDF (ImageMagick tem PDF bloqueado por policy no Ubuntu)
- Por que screenshot e não `--print-to-pdf`: modo print força `@media print`, e `position: fixed` (sidebar/appbar) não renderiza corretamente. Screenshot mantém o layout idêntico ao navegador.
- Pillow está em `requirements.txt`
