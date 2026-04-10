# HelenAI — Tour Guiado pelas Telas

Guia rápido pra quem está vendo o protótipo pela primeira vez. Siga os fluxos na ordem — dá pra ver o produto inteiro em ~20 minutos.

> 🎯 **Quer ver o pitch direto?** Acesse `/apresentacao.html` no servidor (`http://127.0.0.1:8020/apresentacao.html`) — apresentação navegável de 14 slides com setas do teclado, ou abra `HelenAI/pdfs/apresentacao-completa.pdf` (5MB, 14 páginas).

---

## 🚀 Antes de começar

### Rodando localmente

```bash
# Na raiz do projeto
python manage.py runserver 8020
```

Acesse: **http://127.0.0.1:8020/compartilhado/login.html**

### 🔑 Usuários de teste

| Perfil | Email | Senha |
|---|---|---|
| Admin | `admin@helen.ai` | `admin` |
| Professor | `conteudista@helen.ai` | `conteudista` |
| Aluno | `aluno@helen.ai` | `aluno` |

O botão **"Entrar com Google"** faz login direto como aluno (sem pedir credenciais).

### 📄 PDFs

Todas as 36 telas têm PDFs prontos em `HelenAI/pdfs/`. Gere/atualize com:
```bash
./gerar-pdf.sh --all
```

---

## 🌟 Fluxo 1 — Primeiro acesso (aluno com deficiência)

> **Tempo:** 3 minutos · **Telas:** 5

Este fluxo mostra o principal diferencial da HelenAI: a plataforma se **adapta automaticamente** ao perfil do aluno.

### 1.1. Login
- **URL:** `/compartilhado/login.html`
- **PDF:** `compartilhado-login.pdf`
- **O que observar:**
  - Barra de acessibilidade fixa no canto inferior direito (já disponível antes de logar)
  - 6 toggles: contraste, fonte dislexia, A-/A+, color blind, ledor, LIBRAS
  - Credenciais de teste visíveis pra facilitar o demo

### 1.2. Cadastro
- **URL:** `/compartilhado/cadastro.html`
- **PDF:** `compartilhado-cadastro.pdf`
- **O que observar:**
  - Layout em 2 colunas (branding à esquerda, form à direita)
  - Após sucesso, redireciona pro **onboarding** — não pro dashboard

### 1.3. Onboarding inclusivo ⭐ **DIFERENCIAL**
- **URL:** `/aluno/onboarding.html`
- **PDF:** `aluno-onboarding.pdf`
- **Tempo esperado:** 60-90s
- **O que observar:**
  - **4 passos com progress bar** animada
  - Passo 1: Boas-vindas em tom acolhedor ("Olá! Que bom ter você aqui")
  - Passo 2: Seleção múltipla de tipo de deficiência (8 opções + "Nenhuma")
  - Passo 3: Switches de preferência + familiaridade com tecnologia
  - Passo 4: **Resumo automático** das configurações aplicadas
- **Mágica:** ao clicar em "Entrar na HelenAI 🚀", a plataforma ativa automaticamente os toggles corretos da barra de acessibilidade. Ex: se marcou "Dislexia", a fonte OpenDyslexic já vem ativada no dashboard.

### 1.4. Dashboard do Aluno
- **URL:** `/aluno/dashboard.html`
- **PDF:** `aluno-dashboard.pdf`
- **O que observar:**
  - **"Continue de onde parou"** — card laranja de simulado em andamento
  - **"Seus desafios ativos"** — cards de desafios em progresso
  - **Trilha personalizada IA** + **Resumo semanal da IA**
  - **Radar BNCC** mostrando desempenho por área
  - Simulados recentes + disponíveis

### 1.5. Perfil
- **URL:** `/aluno/perfil.html`
- **PDF:** `aluno-perfil.pdf`
- **O que observar:**
  - Badges/conquistas
  - Gráfico de evolução
  - **Configurações de IA** (Sempre usar Linguagem Simples, Mostrar dicas, Nível de simplificação)
  - Configurações de acessibilidade

---

## 📝 Fluxo 2 — Realizando um simulado (com IA da Helen)

> **Tempo:** 5 minutos · **Telas:** 5

Este fluxo mostra a experiência principal do aluno — fazer um simulado com todos os recursos de IA e DUA.

### 2.1. Explorar Simulados
- **URL:** `/aluno/explorar-simulados.html`
- **PDF:** `aluno-explorar-simulados.pdf`
- **O que observar:**
  - Filtros por status (chips no topo: não iniciados / em andamento / finalizados)
  - Filtros adicionais: área BNCC, nível, com/sem tempo
  - Card laranja destacando simulados "em andamento"
  - Tabs "Públicos" e "Compartilhados comigo"

### 2.2. Início do Simulado
- **URL:** `/aluno/simulado-inicio.html`
- **PDF:** `aluno-simulado-inicio.pdf`
- **O que observar:**
  - **Instruções em tom DUA** acolhedor
  - Toggle "Usar cronômetro" — cronômetro é **sempre opcional**
  - Recursos disponíveis destacados (Helen IA, Linguagem Simples, etc.)

### 2.3. Tela de Questão ⭐ **CORE DO PRODUTO**
- **URL:** `/aluno/simulado-questao.html`
- **PDF:** `aluno-simulado-questao.pdf`
- **O que observar:**
  - **Modo focado** — SEM sidebar regular (única tela do aluno assim)
  - **Top bar** com: botão Sair (aviso de progresso salvo), nome do simulado, "Questão X de N", barra de progresso, cronômetro laranja monoespaçado, botão Finalizar verde
  - **IA Toolbar "Helen"** com 4 botões: `💡 Simplificar` · `🔑 Palavras-chave` · `📖 Pedir uma dica` · `🔊 Ouvir questão`
  - Quando "Simplificar" ativo: card verde com versão em Linguagem Simples **acima** do enunciado original
  - Palavras-chave destacadas com underline amarelo + tooltip
  - Dica da Helen em card amarelo, itálico, sem revelar resposta
  - **Painel de navegação lateral direita** com grid 5 colunas, cada botão colorido pelo estado (atual/respondida/marcada/vazia)

### 2.4. Resultado do Simulado
- **URL:** `/aluno/simulado-resultado.html`
- **PDF:** `aluno-simulado-resultado.pdf`
- **O que observar:**
  - **Header em gradient comemorativo** com emoji 🎉 + nota grande
  - **Badge desbloqueado** em card amarelo animado (pulse)
  - **Comparativo visual** — sua nota vs média geral vs melhor nota (barras horizontais)
  - **Gabarito comentado** — cada questão errada tem **"Helen explica"** em card azul-ciano com texto humanizado ("Vamos revisar juntas? 💪")
  - Tom nunca punitivo

### 2.5. Ranking Geral
- **URL:** `/aluno/ranking.html`
- **PDF:** `aluno-ranking.pdf`
- **O que observar:**
  - **3 tabs em URLs distintas** (não SPA): Geral / Desafios / Por Simulado
  - **4 cards de período simultâneos** (sem precisar filtrar): 🔥 Semana / 📅 Quinzena / 🗓 Mês / 🏆 Ano — cada um com top 5 e cor de destaque própria
  - Pódio top 3 animado + tabela completa
  - Linha do aluno logado destacada com "VOCÊ"

---

## ⚔ Fluxo 3 — Desafios (Períodos de Estudo Gamificados)

> **Tempo:** 4 minutos · **Telas:** 3

Diferencial HelenAI: professores e alunos podem criar **desafios temáticos** com ranking próprio.

### 3.1. Ranking · Desafios
- **URL:** `/aluno/ranking-desafios.html`
- **PDF:** `aluno-ranking-desafios.pdf`
- **O que observar:**
  - **Lista única ordenada** por "meu status" (Em andamento → Feitos → Disponíveis → Encerrados)
  - Filtros: busca + meu status + área + criador
  - **Cards grandes horizontais** com:
    - Ícone colorido (72×72) usando a cor do desafio
    - Título + criador (com ícone distinguindo professor/aluno/oficial) + turma se houver
    - Descrição + chips de metadados (simulados, participantes, dias, pontuação máx)
    - **Avatares sobrepostos** dos top 4 participantes + "+ N outros"
    - Badge "meu status" colorido (verde/azul/amarelo/cinza)
    - Bloco contextual que muda por status (barra de progresso, resultado final, etc.)
    - Ações contextuais à direita

### 3.2. Detalhe de um Desafio
- **URL:** `/aluno/desafio-detalhe.html?id=1`
- **PDF:** `aluno-desafio-detalhe.pdf`
- **O que observar:**
  - **Hero gradient** usando a cor do desafio
  - Card "Seu progresso" em grid 3 colunas (progresso / pontuação / posição)
  - Lista de simulados do desafio com status (✓ feito / ▶ próximo / 🔒 pendente)
  - Pódio top 3 do desafio + tabela completa

### 3.3. Criar Desafio (aluno)
- **URL:** `/aluno/criar-desafio.html`
- **PDF:** `aluno-criar-desafio.pdf`
- **O que observar:**
  - Grid 2 colunas: form à esquerda + **preview sticky** à direita (atualiza em tempo real)
  - Seletor de 10 ícones + 7 cores
  - Modal de seleção de simulados com tabs Público/Minhas Importações
  - 3 opções de visibilidade: Privado / Compartilhado / Solicitar publicação pública

---

## 📚 Fluxo 4 — Meus Simulados (Aluno como Criador)

> **Tempo:** 3 minutos · **Telas:** 4

### 4.1. Meus Simulados
- **URL:** `/aluno/meus-simulados.html`
- **PDF:** `aluno-meus-simulados.pdf`
- **O que observar:**
  - **3 tabs com contadores:** Criados por mim / Importados / Realizados
  - Mini-métricas no topo
  - Cards com **border-left colorido por status** (privado/compartilhado/público/pendente/rejeitado)
  - Simulados rejeitados mostram o motivo inline
  - Cards realizados têm layout diferente (com nota central)

### 4.2. Criar Simulado (aluno)
- **URL:** `/aluno/criar-simulado.html?id=101` (modo edição pra ver preenchido)
- **PDF:** `aluno-criar-simulado.pdf`
- **O que observar:**
  - Config topo em grid 3 colunas (nome/tempo/área)
  - Body grid: questões à esquerda + **composição sticky** à direita
  - Modal de seleção com tabs Público/Minhas Importações
  - **Drag & drop nativo** para reordenar questões

### 4.3. Importar PDF (aluno)
- **URL:** `/aluno/importar-pdf.html`
- **PDF:** `aluno-importar-pdf.pdf`
- **O que observar:**
  - **Info box azul de privacidade** — "Suas questões ficam privadas por padrão"
  - Upload inline (não é modal) com dropzone
  - Loading com 6 etapas (inclui "Gerando versão em Linguagem Simples...")
  - Histórico de importações anteriores

### 4.4. Revisão de Questões (aluno)
- **URL:** `/aluno/revisao-questoes.html`
- **PDF:** `aluno-revisao-questoes.pdf`
- **O que observar:**
  - **Info box azul da Helen** — "A Helen já processou seu PDF"
  - **Card verde "Versão em Linguagem Simples"** por questão (editável)
  - Tags "Classificado por IA" + "Linguagem Simples pronta"
  - Botão "Salvar no meu banco e criar simulado" (verde)

---

## 👨‍🏫 Fluxo 5 — Conteudista (Professor)

> **Tempo:** 6 minutos · **Telas:** 11 (só as principais aqui)

### 5.1. Dashboard Conteudista
- **URL:** `/conteudista/dashboard.html`
- **PDF:** `conteudista-dashboard.pdf`

### 5.2. Importar PDF (extração por IA)
- **URL:** `/conteudista/importar-pdf.html`
- **PDF:** `conteudista-importar-pdf.pdf`
- **Fluxo:** botão "+ Nova Importação" → modal com nome/código/PDF → loading fake com etapas → redireciona pra revisão

### 5.3. Revisão de Questões (conteudista)
- **URL:** `/conteudista/revisao-questoes.html`
- **PDF:** `conteudista-revisao-questoes.pdf`
- **O que observar:** questões já vêm com BNCC pré-preenchida (simulando classificação IA)

### 5.4. Banco de Questões
- **URL:** `/conteudista/banco-questoes.html`
- **PDF:** `conteudista-banco-questoes.pdf`
- **O que observar:**
  - **Select2** nos filtros (com busca dentro do dropdown)
  - Filtros em cima com labels
  - Cards de questão mostram "usada em X simulados"

### 5.5. Simulados
- **URL:** `/conteudista/simulados.html` → `/conteudista/simulado-form.html`
- **PDFs:** `conteudista-simulados.pdf`, `conteudista-simulado-form.pdf`
- **O que observar:**
  - Form com config topo + questões à esquerda + **composição sticky lateral** (total, tempo estimado, distribuição por dificuldade/área/habilidade)

### 5.6. Desafios (Conteudista)
- **URL:** `/conteudista/desafios.html` → `/conteudista/desafio-form.html`
- **PDFs:** `conteudista-desafios.pdf`, `conteudista-desafio-form.pdf`
- **O que observar:**
  - Lista com 4 métricas topo + filtros + cards coloridos com hero gradient
  - Form tem **card "Público-alvo"** único: "Público pra todos" OU seleciona uma das turmas do professor
  - 2 botões de ação: "Salvar rascunho" + "🚀 Criar e publicar"

### 5.7. Meus Alunos (Turmas)
- **URL:** `/conteudista/meus-alunos.html`
- **PDF:** `conteudista-meus-alunos.pdf`
- **O que observar:**
  - Professor pode ter **múltiplas turmas** com código único
  - Alunos entram por código ou por convite
  - Solicitações pendentes pra aprovação

### 5.8. Curadoria
- **URL:** `/conteudista/curadoria.html`
- **PDF:** `conteudista-curadoria.pdf`
- **O que observar:**
  - Curadoria questão por questão (não simulado inteiro)
  - Professor só aprova questões da sua área de competência
  - Quando todas são revisadas → simulado criado automaticamente

### 5.9. Resultados
- **URL:** `/conteudista/simulado-resultados.html`
- **PDF:** `conteudista-simulado-resultados.pdf`
- **O que observar:** Chart.js com distribuição de notas, desempenho por BNCC

---

## 📊 Fluxo 6 — Admin (Diferencial Centelha)

> **Tempo:** 3 minutos · **Telas:** 5

### 6.1. Dashboard Admin ⭐ **PRINCIPAL TELA PRO CENTELHA**
- **URL:** `/admin/dashboard.html`
- **PDF:** `admin-dashboard.pdf`
- **O que observar:**
  - **5 métricas animadas** no topo (valor conta de 0 até o final)
  - **Seção "💙 Impacto e Inclusão"** em destaque com fundo gradient especial:
    - **Donut chart** — alunos PcD por tipo de deficiência (8 categorias)
    - **Barras horizontais animadas** — % de alunos usando cada recurso de acessibilidade (Linguagem Simples 47%, Ledor 34%, etc)
  - Gráficos normais abaixo: cadastros/mês (linha dupla), questões/área BNCC (pizza), top 10 simulados (barras), top 5 maior acerto/erro (listas)

### 6.2. Lista de Conteudistas
- **URL:** `/admin/conteudistas.html`
- **PDF:** `admin-conteudistas.pdf`

### 6.3. Form de Conteudista
- **URL:** `/admin/conteudista-form.html`
- **PDF:** `admin-conteudista-form.pdf`
- **O que observar:** Áreas de competência como **cards clicáveis** (não select múltiplo)

### 6.4. Lista de Alunos
- **URL:** `/admin/alunos.html`
- **PDF:** `admin-alunos.pdf`
- **O que observar:**
  - **Coluna "Acessibilidade"** com badges coloridas de deficiência
  - Filtro por tipo de deficiência (útil pra análises de impacto)
  - Contador mostra "N alunos · M PcD declarados"

### 6.5. Edição de Aluno
- **URL:** `/admin/aluno-form.html?id=1`
- **PDF:** `admin-aluno-form.pdf`
- **O que observar:**
  - Grid 2 colunas: form à esquerda + **painel lateral "Perfil"** à direita
  - Painel mostra acessibilidade declarada **somente leitura** — "Só o aluno pode alterar no perfil"
  - Respeito à autonomia do usuário PcD

---

## 📑 Resumo das telas

**Total:** 36 telas únicas, 65 itens implementados, 10 de 11 fases completas.

### Por módulo

- **Compartilhado** — 3 telas (login, cadastro, recuperar senha)
- **Aluno** — 16 telas (dashboard, explorar, meus simulados, criar simulado, importar PDF, revisão, onboarding, perfil, ranking + ranking-desafios + ranking-simulados, desafio-detalhe, criar-desafio, simulado-inicio, simulado-questao, simulado-resultado)
- **Conteudista** — 12 telas (dashboard, importar-pdf, banco-questoes, questao-form, simulados, simulado-form, simulado-resultados, revisao-questoes, meus-alunos, curadoria, desafios, desafio-form)
- **Admin** — 5 telas (dashboard, conteudistas, conteudista-form, alunos, aluno-form)

### Telas mais impactantes (ver primeiro se tempo for curto)

1. **`admin-dashboard.pdf`** — Métricas de inclusão (diferencial Centelha)
2. **`aluno-onboarding.pdf`** — Adaptação automática ao perfil
3. **`aluno-simulado-questao.pdf`** — Experiência da IA "Helen"
4. **`aluno-simulado-resultado.pdf`** — Feedback humanizado DUA
5. **`aluno-ranking-desafios.pdf`** — Sistema de desafios (gamificação)
6. **`aluno-dashboard.pdf`** — Hub do aluno (trilha IA + resumo semanal)

---

## 💡 Dicas para apresentar ao vivo

1. **Comece pelo onboarding** — é o primeiro "wow moment", mostra o diferencial na prática
2. **Faça um simulado com e sem "Simplificar"** — impacto visual forte
3. **Termine no admin-dashboard** — métricas de inclusão fecham o pitch com dados
4. Se o tempo for curto (5-10 minutos), foque nos fluxos 1, 2 e 6
5. Deixe a barra de acessibilidade sempre visível — alterne um toggle (ex: color blind) pra mostrar que funciona em tempo real em qualquer tela

---

*Documento organizado por Héldon Albuquerque. Para perguntas específicas sobre decisões de design, consulte `DECISOES_CLAUDE.md`. Para especificação completa do MVP, consulte `MVP_TELAS.md`.*
