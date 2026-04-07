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

## Progresso do Protótipo (atualizado 2026-04-06)

### Completas
- **Fase 0:** Base (CSS global, componentes, acessibilidade, dados fake, navegação)
- **Fase 1:** Login (3 usuários fake), Cadastro, Recuperação de senha
- **Fase 3:** Conteudista — Dashboard, Importações (listagem + modal upload + loading), Revisão de questões, Banco de questões (Select2, filtros), Formulário (Quill.js)
- **Fase 4:** Conteudista — Simulados (lista + detalhes modal + form com composição), Resultados (Chart.js), Meus Alunos (turmas múltiplas), Curadoria (questão por questão)

### Próximas
- **Fase 5:** Dashboard Aluno, Explorar Simulados, Perfil, Ranking
- **Fase 6:** Realizar Simulado (início, questão com IA/DUA, resultado)
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
├── aluno/                      # Fases 5-8 — pendente
└── index.html                  # Redireciona para login
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
