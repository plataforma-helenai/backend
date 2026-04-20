# HelenAI — Roadmap do Protótipo HTML

Roadmap para construção dos protótipos de tela em HTML/CSS/JS puro.
Cada fase agrupa telas relacionadas por fluxo. Referências apontam para o `MVP_TELAS.md`.

---

## Estrutura do Projeto

```
HelenAI/
└── prototipos/
    ├── assets/
    │   ├── css/
    │   │   ├── global.css          # Reset, variáveis, paleta, tipografia
    │   │   ├── acessibilidade.css   # Estilos alto contraste, dislexia, color blind
    │   │   └── componentes.css      # Cards, tabelas, modais, badges, sidebar
    │   ├── js/
    │   │   ├── acessibilidade.js    # Toggles da barra de acessibilidade
    │   │   ├── navegacao.js         # Navegação entre telas, tabs, sidebar
    │   │   └── fake-data.js         # Dados mockados (questões, simulados, alunos)
    │   └── img/
    │       └── helenai-logo-*.png  # 5 variantes (color/white × horizontal/vertical + alt)
    ├── compartilhado/
    │   ├── login.html
    │   ├── cadastro.html
    │   └── recuperar-senha.html
    ├── admin/
    │   ├── dashboard.html
    │   ├── conteudistas.html
    │   ├── conteudista-form.html
    │   ├── alunos.html
    │   └── aluno-form.html
    ├── conteudista/
    │   ├── dashboard.html
    │   ├── importar-pdf.html
    │   ├── revisao-questoes.html
    │   ├── banco-questoes.html
    │   ├── questao-form.html
    │   ├── simulados.html
    │   ├── simulado-form.html
    │   ├── simulado-resultados.html
    │   ├── meus-alunos.html
    │   └── curadoria.html
    ├── aluno/
    │   ├── dashboard.html
    │   ├── explorar-simulados.html
    │   ├── simulado-inicio.html
    │   ├── simulado-questao.html
    │   ├── simulado-resultado.html
    │   ├── meus-simulados.html
    │   ├── importar-pdf.html
    │   ├── criar-simulado.html
    │   ├── ranking.html
    │   └── perfil.html
    └── index.html                   # Página inicial → redireciona para login
```

---

## Fases

### Fase 0 — Base e Componentes
> Fundação visual que todas as telas usam.

| # | Item | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 0.1 | Paleta de cores (variáveis CSS) | `assets/css/global.css` | Seção 6 + FIGMA_PROMPTS (Contexto Global) | [x] |
| 0.2 | Tipografia e reset | `assets/css/global.css` | — | [x] |
| 0.3 | Componentes base (botões, inputs, cards, badges, tabelas) | `assets/css/componentes.css` | — | [x] |
| 0.4 | Sidebar/Menu de navegação (3 variações: Admin, Conteudista, Aluno) | `assets/css/componentes.css` | Seção 10 — Navegação (Menus) | [x] |
| 0.5 | Barra de acessibilidade (toggles visuais) | `assets/css/acessibilidade.css` + `.js` | Seção 6.1 e 6.2 | [x] |
| 0.6 | Dados fake (JSON mockado) | `assets/js/fake-data.js` | Seção 8 — Estruturas de Dados | [x] |

---

### Fase 1 — Autenticação (Telas Compartilhadas)
> Porta de entrada da plataforma.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 1.1 | Login | `compartilhado/login.html` | Seção 2.1 | [x] |
| 1.2 | Cadastro do Aluno | `compartilhado/cadastro.html` | Seção 2.2 | [x] |
| 1.3 | Recuperação de Senha | `compartilhado/recuperar-senha.html` | Seção 2.3 | [x] |

**Interações fake:**
- Login redireciona para dashboard com base no perfil selecionado (dropdown ou usuários fake)
- Cadastro exibe validações e redireciona para login
- Recuperação exibe mensagem de sucesso

---

### Fase 2 — Módulo Admin (substituída pela Fase 9)

> ⚠ Fase reorganizada. O módulo Admin foi movido pro fim do roadmap (ver **Fase 9**) para entrar depois do fluxo completo do aluno, já com a seção "Impacto e Inclusão" — diferencial do Centelha.

---

### Fase 3 — Módulo Conteudista: Importação e Questões
> Fluxo core do sistema — base de tudo.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 3.1 | Dashboard Conteudista | `conteudista/dashboard.html` | Seção 4.1 | [x] |
| 3.2 | Importação de PDF (upload) | `conteudista/importar-pdf.html` | Seção 4.2.1 | [x] |
| 3.3 | Revisão de Questões Extraídas | `conteudista/revisao-questoes.html` | Seção 4.2.2 | [x] |
| 3.4 | Banco de Questões | `conteudista/banco-questoes.html` | Seção 4.3.1 | [x] |
| 3.5 | Cadastro/Edição de Questão | `conteudista/questao-form.html` | Seção 4.3.2 | [x] |

**Interações fake:**
- Upload exibe loading e redireciona para revisão com questões pré-preenchidas
- Campos BNCC são dropdowns com dados fake (competências e habilidades)
- Banco de questões com filtros visuais e paginação
- Edição de questão com validação de campos obrigatórios

---

### Fase 4 — Módulo Conteudista: Simulados e Gestão
> Criação e publicação de simulados + gestão de alunos e curadoria.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 4.1 | Lista de Simulados | `conteudista/simulados.html` | Seção 4.4.1 | [x] |
| 4.2 | Criação/Edição de Simulado | `conteudista/simulado-form.html` | Seção 4.4.2 | [x] |
| 4.3 | Resultados do Simulado | `conteudista/simulado-resultados.html` | Seção 4.4.3 | [x] |
| 4.4 | Meus Alunos (Sala) | `conteudista/meus-alunos.html` | Seção 4.5 | [x] |
| 4.5 | Fila de Curadoria | `conteudista/curadoria.html` | Seção 4.6 | [x] |

**Interações fake:**
- Drag & drop visual para reordenar questões no simulado
- Modal de seleção de questões do banco com filtros
- Botão publicar com confirmação (modal)
- Curadoria com aprovar/rejeitar + modal de motivo

---

### Fase 5 — Módulo Aluno: Dashboard e Explorar
> Experiência principal do aluno.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 5.1 | Dashboard Aluno | `aluno/dashboard.html` | Seção 5.1 | [x] |
| 5.2 | Explorar Simulados | `aluno/explorar-simulados.html` | Seção 5.2 | [x] |
| 5.3 | Perfil do Aluno | `aluno/perfil.html` | Seção 5.6 | [x] |
| 5.4 | Ranking | `aluno/ranking.html` | Seção 7.3 | [x] |

**Interações fake:**
- Dashboard com dados mockados, gráficos de desempenho
- Cards de simulados com filtros
- Tabs (Públicos / Compartilhados comigo)
- Ranking com top 3 destacado e posição do aluno

---

### Fase 6 — Módulo Aluno: Realizar Simulado
> Fluxo mais importante do aluno — a experiência da prova.
> Já integra os recursos de IA da Fase 8 (Simplificar, Palavras-chave, Dica, Explicação no resultado).

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 6.1 | Tela de Início do Simulado | `aluno/simulado-inicio.html` | Seção 5.3.1 | [x] |
| 6.2 | Tela de Questão (realizando) | `aluno/simulado-questao.html` | Seção 5.3.2 | [x] |
| 6.3 | Tela de Resultado | `aluno/simulado-resultado.html` | Seção 5.3.3 | [x] |

**Interações fake:**
- Toggle de cronômetro
- Navegação entre questões (anterior/próxima + grid de navegação)
- Seleção de alternativa com destaque visual
- Marcar para revisão (flag)
- Modal de confirmação ao finalizar
- Resultado com gabarito, estatísticas, comparativo e XP ganho

---

### Fase 7 — Módulo Aluno: Criação e Compartilhamento
> Aluno como criador de conteúdo.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 7.1 | Meus Simulados | `aluno/meus-simulados.html` | Seção 5.4.1 | [x] |
| 7.2 | Criar Simulado | `aluno/criar-simulado.html` | Seção 5.4.2 | [x] |
| 7.3 | Importar PDF (Aluno) | `aluno/importar-pdf.html` | Seção 5.4.3 | [x] |
| 7.4 | Modal de Compartilhamento | (componente em meus-simulados) | Seção 5.5.1 | [x] |

**Interações fake:**
- Tabs (Criados / Importados / Realizados)
- Seleção de questões com filtros BNCC
- Importação com loading fake
- Modal de compartilhamento (link, email, solicitar publicação)
- Status visível (privado, compartilhado, pendente, rejeitado)

---

### Fase 8 — Módulo Aluno: IA, Linguagem Simples e DUA
> O diferencial da HelenAI. Aplica IA + DUA + Linguagem Simples na experiência do aluno.

| # | Tela/Componente | Arquivo | Referência MVP_TELAS.md | Status |
|---|-----------------|---------|-------------------------|--------|
| 8.1 | Botão "Simplificar" na questão do simulado | `aluno/simulado-questao.html` (componente) | Seção 6.5.1 | [ ] |
| 8.2 | Versão Linguagem Simples lado a lado | `aluno/simulado-questao.html` (componente) | Seção 6.5.1 | [ ] |
| 8.3 | Palavras-chave com tooltip | `aluno/simulado-questao.html` (componente) | Seção 6.5.3 | [ ] |
| 8.4 | Dica da IA (sem revelar resposta) | `aluno/simulado-questao.html` (componente) | Seção 6.5.3 | [ ] |
| 8.5 | Explicação da IA no resultado (questões erradas) | `aluno/simulado-resultado.html` (componente) | Seção 6.5.3 | [ ] |
| 8.6 | Trilha personalizada no dashboard | `aluno/dashboard.html` (seção) | Seção 6.5.3 | [ ] |
| 8.7 | Resumo semanal da IA | `aluno/dashboard.html` (seção) | Seção 6.5.3 | [ ] |
| 8.8 | Configurações de IA e Linguagem Simples | `aluno/perfil.html` (seção) | Seção 6.5.3 | [ ] |
| 8.9 | Onboarding inclusivo (tipo de deficiência, preferências) | `aluno/onboarding.html` | Seção 6.5.4 | [x] |
| 8.10 | Feedback humanizado (mensagens DUA) | Global — todos os textos do módulo aluno | Seção 6.5.4 | [x] |

**Interações fake:**
- Botão "Simplificar" mostra versão simplificada fake do enunciado
- Palavras-chave destacadas com tooltip ao hover
- Dica da IA mostra texto fake contextual
- Explicação no resultado mostra texto fake por questão errada
- Trilha recomendada com cards de simulados/questões sugeridas
- Resumo semanal como card no dashboard
- Onboarding com steps: tipo de deficiência → preferências → pronto

---

### Fase 9 — Módulo Admin
> Gerenciamento da plataforma + **cards de Inclusão no dashboard** (diferencial HelenAI pro Centelha).

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 9.1 | Dashboard Admin — 5 métricas + seção **Impacto e Inclusão** (PcD por tipo + uso de acessibilidade) + cadastros/mês + questões/área + top 10 simulados + top 5 acerto/erro | `admin/dashboard.html` | Seção 3.1 + extras | [x] |
| 9.2 | Lista de Conteudistas — tabela com áreas coloridas + filtros + ações | `admin/conteudistas.html` | Seção 3.2.1 | [x] |
| 9.3 | Cadastro/Edição de Conteudista — formulário com seletor de áreas em cards | `admin/conteudista-form.html` | Seção 3.2.2 | [x] |
| 9.4 | Lista de Alunos — tabela com **badges de deficiência** + filtro por tipo de deficiência | `admin/alunos.html` | Seção 3.2.3 + extras | [x] |
| 9.5 | Edição de Aluno — form + painel lateral somente leitura com acessibilidade declarada | `admin/aluno-form.html` | Seção 3.2.4 + extras | [x] |

---

### Fase 10 — IA e DUA no Módulo Conteudista e Admin (Futuro)
> Aplicar recursos de IA também na experiência do professor e admin. Fazer DEPOIS de tudo.

| # | Feature | Descrição | Status |
|---|---------|-----------|--------|
| 10.1 | IA classifica questões BNCC automaticamente | Na importação, IA sugere área, competência, habilidade | [ ] |
| 10.2 | IA sugere nível de dificuldade | Análise do enunciado para estimar dificuldade | [ ] |
| 10.3 | IA detecta questões duplicadas | Ao importar, alerta se questão similar já existe no banco | [ ] |
| 10.4 | Dashboard IA para o conteudista | Insights: "Seus alunos estão com dificuldade em EM13MAT301" | [ ] |
| 10.5 | Relatórios IA para o admin | Métricas de inclusão, uso de acessibilidade, engajamento | [ ] |

---

### Fase 11 — Desafios e Ranking Periodizado
> Sistema de Desafios (períodos de estudo) + evolução da tela de ranking do aluno com múltiplos períodos visíveis ao mesmo tempo.

| # | Tela/Feature | Arquivo | Referência MVP_TELAS.md | Status |
|---|-----|-------|-----|-----|
| 11.1 | Ranking Geral — 4 cards de período (semana/quinzena/mês/ano) + pódio + tabela completa | `aluno/ranking.html` | Seção 7.3 | [x] |
| 11.2 | Ranking Desafios — lista única ordenada por meu status + filtros + cards grandes | `aluno/ranking-desafios.html` | Seção 7.3 + 11 | [x] |
| 11.3 | Ranking Por Simulado — lista de simulados + modal de ranking específico | `aluno/ranking-simulados.html` | Seção 7.3 | [x] |
| 11.4 | Nav de tabs em `<a href>` linkando as 3 páginas acima (compartilhado) | (nas 3 telas) | — | [x] |
| 11.5 | Detalhe do Desafio (header + progresso + lista de simulados + pódio + ranking) | `aluno/desafio-detalhe.html` | Seção 11.4 | [x] |
| 11.6 | Criar Desafio (aluno) | `aluno/criar-desafio.html` | Seção 11.5 | [x] |
| 11.7 | Lista de Desafios (conteudista) | `conteudista/desafios.html` | Seção 11.6 | [x] |
| 11.8 | Form de Desafio (conteudista) — com seleção de turma | `conteudista/desafio-form.html` | Seção 11.6 | [x] |
| 11.9 | Cards de desafios ativos no dashboard do aluno | (seção em dashboard.html) | Seção 11.7 | [x] |
| 11.10 | Nova entrada "⚔ Desafios" no menu do conteudista (10 telas) | (sidebar) | Seção 10 | [x] |

**Interações fake:**
- Ranking Geral: cards de período renderizados via fake-data com top 5 de cada
- Ranking Desafios: 6 desafios (4 do fake-data + 2 inline: 1 feito pela Maria + 1 encerrado oficial), ordenação fixa por meu status, filtros reativos
- Ranking Por Simulado: simulados públicos, modal com ranking fake gerado a partir do ranking geral
- Criar desafio: seletor de ícone (10 opções), cor (7 opções), visibilidade, preview sticky
- Modal de seleção de simulados reusando padrão do `criar-simulado.html`

---

### Fase 12 — Comando de voz (acessibilidade)

> **Status:** ⏳ planejado, não iniciado.
> Adicionar um 7º recurso na barra de acessibilidade: navegação e interação por voz — atende principalmente alunos com deficiência motora e com baixa visão.

| # | Item | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 12.1 | 7º toggle `🎤 Voz` na barra de acessibilidade (ícone + estado ativo pulsante) | `assets/css/acessibilidade.css` + `acessibilidade.js` | Seção 6.1 + 6.5.5 | [ ] |
| 12.2 | Integração com Web Speech API (reconhecimento offline quando suportado pelo navegador) | `assets/js/comando-voz.js` (novo) | Seção 6.5.5 | [ ] |
| 12.3 | Comandos de navegação (próxima, anterior, ir pra, sair) | `comando-voz.js` + handler global | Seção 6.5.5 | [ ] |
| 12.4 | Comandos de resposta na tela de questão (marcar A/B/C/D/E, limpar) | integração em `simulado-questao.html` | Seção 6.5.5 | [ ] |
| 12.5 | Comandos da IA Helen (simplificar, dica, ouvir, palavras-chave) | integração com IA toolbar | Seção 6.5.5 | [ ] |
| 12.6 | Comandos de acessibilidade (alto contraste, aumentar fonte, libras) | integração com acessibilidade.js | Seção 6.5.5 | [ ] |
| 12.7 | Feedback por voz opcional (Helen confirma ação em áudio) | integração com ledor/TTS | Seção 6.5.5 | [ ] |
| 12.8 | Rodapé com transcrição parcial + fallback "não entendi" | `comando-voz.js` | Seção 6.5.5 | [ ] |
| 12.9 | Pergunta no onboarding "você prefere comando de voz?" + ativa toggle auto | `aluno/onboarding.html` | Seção 6.5.5 + 6.5.4 | [ ] |
| 12.10 | Documentação de comandos (help in-app "quais comandos a Helen entende?") | `aluno/perfil.html` seção IA | Seção 6.5.5 | [ ] |

**Prioridade:** Média — diferencial forte de acessibilidade, tecnicamente complexo (reconhecimento de voz, tolerância a ruído, sotaques). Entrar depois do MVP funcional com backend.

**Dependências:** Web Speech API (nativa do Chrome/Edge). Para navegadores sem suporte, exibir mensagem "Seu navegador não suporta reconhecimento de voz — tente o Chrome".

---

### Fase 13 — Módulo Pais/Responsáveis

> **Status:** ⏳ planejado, não iniciado.
> Novo 4º perfil de acesso. Pais/responsáveis acompanham o progresso do filho (aluno PcD) **e podem criar simulados exclusivos pra ele** — atuam como co-educadores. Reforça o diferencial de inclusão e aumenta o engajamento familiar.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 13.1 | Login adaptado (4º perfil) + redirect por perfil | `compartilhado/login.html` | Seção 2.1 + 12.1 | [ ] |
| 13.2 | Cadastro por convite do aluno (código de 6 dígitos) | `compartilhado/cadastro-pais.html` | Seção 12.1 | [ ] |
| 13.3 | Seção "Responsáveis vinculados" no perfil do aluno (gerar código, revogar acesso) | `aluno/perfil.html` (expandir) | Seção 12.1 + 12.9 | [ ] |
| 13.4 | Dashboard Pais/Responsáveis (seletor de filho + resumo + radar + desafios + últimos simulados) | `responsavel/dashboard.html` | Seção 12.2 | [ ] |
| 13.5 | Progresso detalhado por área BNCC (com alertas automáticos) | `responsavel/progresso.html` | Seção 12.3 | [ ] |
| 13.6 | Relatórios mensais (exportável em PDF) | `responsavel/relatorios.html` | Seção 12.4 | [ ] |
| 13.7 | **Criar simulado pro filho** (config + grid de questões + composição sticky + seletor de filho + mensagem opcional) | `responsavel/criar-simulado.html` | Seção 12.5 | [ ] |
| 13.8 | **Importar PDF (responsável)** — extração IA + revisão + banco pessoal | `responsavel/importar-pdf.html` + `responsavel/revisao-questoes.html` | Seção 12.6 | [ ] |
| 13.9 | **Lista "Meus simulados" do responsável** (criados e importados, com status de aceitação do filho) | `responsavel/meus-simulados.html` | Seção 12.5 | [ ] |
| 13.10 | Aba "💙 Recomendado pelos meus responsáveis" em Meus Simulados do aluno | `aluno/meus-simulados.html` (expandir tabs) | Seção 12.9 | [ ] |
| 13.11 | Perfil do responsável + preferências de notificação | `responsavel/perfil.html` | Seção 12.7 | [ ] |
| 13.12 | Transparência pro aluno: "Seus responsáveis acompanham" no dashboard + notificação quando pai cria simulado | `aluno/dashboard.html` | Seção 12.8 | [ ] |
| 13.13 | Admin: nova lista de Pais/Responsáveis + filtros + 2 métricas no dashboard (% alunos com responsável + simulados de pais no mês) | `admin/responsaveis.html` + `admin/dashboard.html` | Seção 12.9 | [ ] |
| 13.14 | Sidebar/menu do 4º perfil (Dashboard / Acompanhamento / Criar simulado / Importar PDF / Meus simulados / Relatórios / Perfil) | `assets/js/navegacao.js` | Seção 10 | [ ] |

**Prioridade:** Alta (pós-MVP) — conecta famílias à jornada do aluno, diferencial social forte pro Centelha e potencial de parcerias com APAEs/ONGs.

**Regras críticas:**
- Pai **não** pode: responder simulados pelo filho, alterar config do filho (especialmente acessibilidade), ver gabarito das questões respondidas, ver questões marcadas como privadas pelo filho
- Pai **pode**: acompanhar desempenho, criar simulados exclusivos pro filho, importar PDFs, gerar relatórios
- Simulados criados pelo pai vão direto pra uma aba específica do filho ("Recomendado pelos meus responsáveis") — **não são obrigatórios**, aluno decide se faz
- Aluno pode ocultar simulado do pai da lista (preserva autonomia) — pai vê na própria tela que foi ocultado
- Questões importadas pelo pai ficam no banco pessoal dele — nunca vão pro banco público
- Vínculo só por convite do aluno (nunca o pai cadastra "às escuras" um filho)
- Máximo 2 responsáveis por aluno

**Dependências:** backend completo (Fase 2 do plano de execução em `APRESENTACAO_CENTELHA.md` — "MVP técnico"). Sem backend real, o fluxo de código de vínculo e a criação de simulados "entre contas" não funcionam (só protótipo fake).

---

## Resumo por Fase

| Fase | Descrição | Itens | Prioridade | Status |
|------|-----------|-------|------------|--------|
| **0** | Base e Componentes | 6 | Obrigatória | ✅ Completa |
| **1** | Autenticação | 3 | Obrigatória | ✅ Completa |
| **2** | Admin | — | — | ♻️ Substituída pela Fase 9 |
| **3** | Conteudista: Importação e Questões | 5 | Alta | ✅ Completa |
| **4** | Conteudista: Simulados e Gestão | 5 | Alta | ✅ Completa |
| **5** | Aluno: Dashboard e Explorar | 4 | Alta | ✅ Completa |
| **6** | Aluno: Realizar Simulado | 3 | Alta | ✅ Completa |
| **7** | Aluno: Criação e Compartilhamento | 4 | Média | ✅ Completa |
| **8** | Aluno: IA, Linguagem Simples e DUA | 10 | **Alta** | ✅ Completa |
| **9** | Admin (movido da Fase 2) | 5 | Baixa | ✅ Completa |
| **10** | IA no Conteudista/Admin (futuro) | 5 | Baixa | ⏳ Futuro |
| **11** | Desafios e Ranking Periodizado | 10 | **Alta** | ✅ Completa |
| **12** | Comando de voz (acessibilidade) | 10 | Média | ⏳ Planejada |
| **13** | Módulo Pais/Responsáveis (com criação de simulados) | 14 | **Alta** (pós-MVP) | ⏳ Planejada |

**Total: 89 itens** — 65 do MVP completos (Fases 0, 1, 3, 4, 5, 6, 7, 8, 9, 11); 24 planejados pós-MVP (Fases 10, 12, 13).

---

## Ordem Recomendada de Execução

```
✅ Fase 0 (base) → ✅ Fase 1 (login) → ✅ Fase 3 (importação/questões) → ✅ Fase 4 (simulados/gestão)
→ ✅ Fase 5 (dashboard/explorar/perfil/ranking) → ✅ Fase 6 (realizar simulado + IA/DUA da Fase 8)
→ ✅ Fase 7 (aluno criando) → ✅ Fase 8 (onboarding fecha IA/DUA) → ✅ Fase 11 (desafios e ranking)
→ ✅ Fase 9 (admin com cards de inclusão)
→ ⏳ Fase 13 (Pais/Responsáveis — precisa de backend pro fluxo de código de vínculo)
→ ⏳ Fase 12 (Comando de voz — depois da IA integrada pra cobrir comandos da Helen)
→ ⏳ Fase 10 (IA no Conteudista/Admin — menor prioridade, cobre perfis internos)
```

**🎉 MVP completo** — todas as fases obrigatórias estão finalizadas. Três fases pós-MVP planejadas: 10 (IA Conteudista/Admin), 12 (Comando de voz) e 13 (Pais/Responsáveis).

**IMPORTANTE:** As funcionalidades da Fase 8 (IA, Linguagem Simples, DUA) devem ser integradas nas telas das Fases 5 e 6 ao construí-las. Não são telas separadas — são componentes e interações dentro das telas do aluno.

**Nota:** IA e DUA no módulo do Conteudista e Admin (Fase 10) ficam para depois de todo o fluxo do aluno estar pronto.

---

## Convenções

- **Navegação:** Links `<a href>` entre as páginas HTML
- **Dados fake:** Centralizados em `fake-data.js`, reutilizados em todas as telas
- **Gráficos:** Chart.js (CDN) para gráficos interativos ou imagens estáticas como fallback
- **Ícones:** Lucide Icons ou Font Awesome (CDN)
- **Sem framework CSS:** Tudo customizado para manter a identidade HelenAI
- **Responsivo:** Mobile-first, breakpoints em 768px e 1024px
