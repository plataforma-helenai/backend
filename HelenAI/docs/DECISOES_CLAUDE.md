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

## Progresso do Protótipo (atualizado 2026-04-09)

### Completas
- **Fase 0:** Base (CSS global, componentes, acessibilidade, dados fake, navegação)
- **Fase 1:** Login (3 usuários fake), Cadastro, Recuperação de senha
- **Fase 3:** Conteudista — Dashboard, Importações (listagem + modal upload + loading), Revisão de questões, Banco de questões (Select2, filtros), Formulário (Quill.js)
- **Fase 4:** Conteudista — Simulados (lista + detalhes modal + form com composição), Resultados (Chart.js), Meus Alunos (turmas múltiplas), Curadoria (questão por questão)
- **Fase 5:** Aluno — Dashboard (continue de onde parou + trilha IA + resumo semanal IA + habilidades fracas/fortes + radar BNCC + simulados recentes com acertos/erros/em-andamento + simulados disponíveis), Explorar Simulados, Perfil (configs IA + acessibilidade), Ranking (top 3 + posição do aluno)
- **Fase 6:** Realizar Simulado — Início (com instruções DUA + toggle cronômetro + recursos ativos), Tela de Questão (modo focado sem sidebar regular, top bar com cronômetro, IA toolbar com Simplificar/Palavras-chave/Dica/Ouvir, painel de navegação lateral com mapa de questões), Resultado (header de comemoração, badge desbloqueado animado, comparativo com média, gabarito comentado com explicação IA por questão errada — Fase 8.5)
- **Fase 7:** Aluno — Meus Simulados (3 tabs: Criados/Importados/Realizados, mini-métricas, cards com status colorido por border-left, modal de compartilhamento com 3 opções + modal de exclusão), Criar Simulado (config topo, grid questões + composição sticky lateral, modal de seleção com tabs Público/Minhas Importações + filtros BNCC + checkboxes, drag & drop pra reordenar), Importar PDF (info box de privacidade explicando que vai pro banco pessoal, upload inline com dropzone, loading com etapas, histórico de importações anteriores), Revisão de questões do aluno (versão específica com info box da IA + card verde com versão em Linguagem Simples gerada automaticamente + modal "Salvar no meu banco" que cria simulado privado)
- **Fase 8:** Onboarding inclusivo — 4 steps com progress bar (boas-vindas → tipo de deficiência múltipla → preferências + familiaridade com tecnologia → resumo das configs aplicadas). Configura automaticamente os toggles da barra de acessibilidade com base nas respostas e salva em `localStorage`. Acessado após cadastro (form normal ou Google). Todas as outras funcionalidades da Fase 8 (IA, Linguagem Simples, DUA, feedback humanizado) já estão integradas nas telas das Fases 5, 6 e 7.
- **Fase 11:** Desafios e Ranking Periodizado — **Ranking dividido em 3 páginas separadas com URLs distintas** (não é SPA com tabs JS): `aluno/ranking.html` (Geral com 4 cards de período + pódio + tabela), `aluno/ranking-desafios.html` (lista única ordenada por meu status + filtros), `aluno/ranking-simulados.html` (lista de simulados + modal de ranking). As "tabs" são `<a href>` reais — URL compartilhável, back/forward do navegador funciona. Novo sistema de **Desafios** (períodos de estudo que agrupam N simulados com ranking próprio): `desafio-detalhe.html` (header hero colorido + card de progresso + lista de simulados com status + pódio + ranking), `criar-desafio.html` (aluno, com seletor de ícone/cor/visibilidade + modal de seleção), `conteudista/desafios.html` (lista com métricas topo + filtros + cards coloridos), `conteudista/desafio-form.html` (form completo com seletor de turma vinculada). Cards de desafios ativos no dashboard do aluno. Entrada "⚔ Desafios" no menu do conteudista.

- **Fase 9:** Admin — Dashboard com 5 métricas principais + **seção "Impacto e Inclusão"** em destaque (diferencial pro Centelha) mostrando donut de alunos PcD por tipo de deficiência + barras horizontais animadas do uso de recursos de acessibilidade (% de alunos que ativaram cada toggle do DUA). Cadastros por mês (linha dupla alunos/conteudistas), questões por área BNCC (pizza), top 10 simulados mais realizados (barras horizontais), top 5 maior acerto/erro (listas). Lista de conteudistas com áreas de atuação em tags coloridas, filtros e ações (editar/bloquear). Form de conteudista com seletor de áreas em cards clicáveis grandes. Lista de alunos com **badges de tipo de deficiência coloridas** + filtro por deficiência (permite admin identificar facilmente quantos PcD estão ativos por tipo). Edição de aluno com painel lateral **somente leitura** mostrando acessibilidade declarada no onboarding (só o aluno pode alterar no próprio perfil).

### 🎉 MVP 100% completo

Todas as fases obrigatórias do MVP estão finalizadas. Fase 10 (IA no Conteudista/Admin) fica como pós-MVP futuro.

### Próximas opcionais
- **Fase 10:** IA no Conteudista/Admin (futuro pós-MVP)

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

### Meus Simulados (Fase 7 — aluno como criador)
- A tela `meus-simulados.html` tem **3 tabs** com contadores: `Criados por mim`, `Importados`, `Realizados`
- **Mini-métricas no topo** (3 cards) espelham os contadores das tabs pra glance rápido — com cores distintas: azul (criados), roxo `#805AD5` (importados), verde (realizados)
- Cada card de simulado usa **cor por status no `border-left`**: cinza `#718096` (privado), azul (compartilhado), verde (público), laranja `#D69E2E` (pendente), vermelho (rejeitado), ciano (realizado)
- Simulados **rejeitados** mostram o motivo em bloco inline (`sim-card-rejeicao`) com borda vermelha — NÃO em modal — porque o aluno precisa ver o motivo toda vez que olha a lista
- Cards **realizados** têm layout diferente: mostram `Sua nota` em uma coluna central (%) com cor dinâmica (verde ≥70, amarelo ≥50, vermelho <50) e ações `Ver resultado` + `Refazer`
- Ações comuns aos criados/importados: Editar, Compartilhar, Excluir (com modal de confirmação)
- Status `compartilhado` mostra ` · N pessoas` ao lado do badge

### Modal de Compartilhamento (Fase 7.4)
- Modal largo (max-width 620px) com **3 seções empilhadas**, cada uma em um card com título + ícone circular colorido
  1. **Compartilhar por link** — input readonly com link fake `https://helen.ai/s/{id}-{hash}` + botão "Copiar" (toast de confirmação)
  2. **Compartilhar por email/username** — input + "+ Adicionar" (aceita Enter), lista de chips removíveis. Ao adicionar o primeiro destinatário, status muda automaticamente de `privado` → `compartilhado`. Ao remover o último, volta pra privado.
  3. **Solicitar publicação pública** — card com fundo amarelo (`#FFFBF0`, borda `#FEEBC8`). Botão "Enviar para curadoria" muda o status pra `pendente` e a seção é substituída por "Aguardando curadoria" (não permite reenvio)
- Header do modal sempre mostra o **status atual** como badge + texto explicativo dentro de uma `status-atual` box cinza
- Se o simulado já estiver `pendente` ao abrir o modal, a seção de publicação abre direto no estado "Aguardando curadoria"
- Toast fixo no bottom-center para feedback de ações (copiar, adicionar, excluir, enviar pra curadoria)

### Criar Simulado (Fase 7.2)
- Layout inspirado no `conteudista/simulado-form.html` mas **simplificado** — aluno não escolhe origem (só manual) e não tem publicar (só salvar, nasce privado)
- Config topo em grid 3 colunas: Nome / Tempo opcional / Área principal
- Body em grid 2 colunas: questões à esquerda, **composição sticky** à direita (`top: 92px`, `max-height: calc(100vh - 110px)`)
- Composição mostra: total, tempo estimado (2min/questão), chips por dificuldade, barras por área (com nome abreviado pra caber), chips por habilidade BNCC
- Modal de seleção de questões com **2 tabs de fonte**: `🌐 Banco Público` e `📄 Minhas Importações` (aluno só vê questões do banco público + as importadas por ele, nunca questões privadas de outros)
- Filtros do modal: busca textual + área + habilidade BNCC + dificuldade. Questões já adicionadas são escondidas da listagem.
- Seleção múltipla com checkboxes, contador "N questões selecionadas" no footer do modal
- **Drag & drop nativo** HTML5 pra reordenar (`draggable="true"`, swap de índices no array). Sem dependência externa.
- Validação fake: precisa ter nome e pelo menos 1 questão pra salvar

### Importar PDF (Aluno — Fase 7.3)
- Diferente do conteudista, **não é modal** — é uma tela dedicada (`importar-pdf.html`), porque o aluno vai menos vezes e o contexto de privacidade precisa ser explicado
- **Info box azul no topo** (`info-aluno`) com ícone 🔒 explicando que: questões vão pro banco pessoal, aluno pode editar/compartilhar/solicitar publicação
- Sem campo de "código da importação" — simplificado pro aluno (só nome + arquivo)
- Upload inline com dropzone igual ao do conteudista, mas com limite visual de "até 20 MB"
- Loading com 6 etapas (inclui passo "Gerando versão em Linguagem Simples..." que não existia no conteudista — reforça o diferencial pro aluno)
- Histórico de importações anteriores abaixo do upload com status badges (privado/compartilhado)
- Ao concluir o loading, redireciona pra `conteudista/revisao-questoes.html` por enquanto (reusa a tela de revisão até criar uma específica do aluno — decisão provisória, ver nota abaixo)

### Revisão de questões do aluno
- Tela própria em `aluno/revisao-questoes.html` — diferente da versão do conteudista em 3 pontos:
  1. **Info box azul** no topo com mensagem da Helen: "A IA extraiu as questões, gerou versões em Linguagem Simples, classificou pela BNCC e estimou o nível de dificuldade"
  2. **Card verde de Linguagem Simples** expandido em cada questão — mostra a versão em Linguagem Simples gerada pela Helen (editável via `contenteditable`), com tag `📝 Linguagem Simples pronta` e `Gerado pela Helen`
  3. **Botão principal é "Salvar no meu banco e criar simulado"** (não "Criar simulado com estas questões"). Abre modal explicando que vai nascer privado e pode ser compartilhado depois pelo Meus Simulados
- Após salvar, redireciona pra `meus-simulados.html` (não pra lista do conteudista)
- `aluno/importar-pdf.html` agora aponta pra essa tela no final do loading (antes ia pra `conteudista/revisao-questoes.html`)

### Admin e Dashboard de Inclusão (Fase 9)

**Sidebar do admin (3 itens):**
- `📊 Dashboard`
- `👨‍🏫 Conteudistas`
- `👥 Alunos`

**Dashboard Admin (`admin/dashboard.html`):**
- **5 métricas principais em cards** no topo: Alunos (1.247) / Conteudistas (23) / Questões (4.580) / Simulados publicados (87) / Simulados realizados (12.340). Cada card tem cor de `border-top` própria + ícone decorativo grande semi-transparente no canto + indicador de variação mensal ("↑ +456 este mês"). Valores **animam contando** do 0 até o final ao carregar a tela (via `animarValor`)
- **Seção "💙 Impacto e Inclusão"** — destaque visual: fundo gradient `linear-gradient(135deg, #EBF8FF 0%, #E6FFFA 100%)` + borda azul-claro + círculo decorativo. Header com ícone grande azul-profundo + título + subtítulo "Métricas que mostram como a HelenAI está cumprindo sua missão de aprendizado sem barreiras". Grid 2 colunas:
  - **Alunos PcD por tipo** — donut chart (Chart.js) com 8 categorias (Visual, Auditiva, Intelectual, Motora, Dislexia, Daltonismo, TEA, Sem deficiência declarada). Legenda à direita. Tooltip mostra nº + porcentagem
  - **Uso de recursos de acessibilidade** — lista com barras horizontais animadas mostrando % + nº absoluto de alunos que ativaram cada recurso (Linguagem Simples 47%, Ledor 34%, Alto Contraste 28%, OpenDyslexic 22%, Fonte+ 19%, LIBRAS 11%, Color Blind 8%). Cada barra usa a cor do recurso. Animação "fill" de 0% até o target ao carregar
- Decisão fundamental: **essa seção foi colocada logo após as métricas principais e antes dos gráficos gerais** — ela é o diferencial da HelenAI e precisa ser a primeira coisa que o avaliador do Centelha vê ao abrir o dashboard
- Gráficos normais abaixo: cadastros por mês (linha dupla alunos/conteudistas com `fill: true`), questões por área BNCC (pizza), top 10 simulados mais realizados (barras horizontais), top 5 maior acerto (verde) e maior erro (vermelho) como listas com código da questão + trecho + taxa

**Lista de Conteudistas (`admin/conteudistas.html`):**
- Filtros: busca textual + área + status
- Tabela com: avatar + nome/email, áreas (tags azuis `area-tag`), instituição + formação, mini-stats (questões/simulados/alunos), status badge, data cadastro, ações (Editar / Bloquear-Desbloquear dinâmico)
- Contador de resultados acima da tabela

**Form de Conteudista (`admin/conteudista-form.html`):**
- Alerta info no topo explicando o fluxo (email de boas-vindas automático)
- 3 seções: Dados pessoais / Formação / **Áreas de competência**
- Áreas como **checkbox grande em cards clicáveis** (grid 2 colunas) — muito mais visual que select múltiplo. Card selecionado tem borda azul + fundo azul-claro. Usa `:has(input:checked)` pra estilizar
- Modo edição via `?id=` — esconde senha, pré-preenche campos, marca checkboxes das áreas

**Lista de Alunos (`admin/alunos.html`):**
- **Filtro por tipo de deficiência** (diferencial — permite admin filtrar PcDs específicos pra análise de impacto)
- Tabela com coluna **"Acessibilidade"** mostrando **badges de deficiência coloridas** (`.deficiencia-badge.visual/.auditiva/etc`) — admin vê rapidamente quem tem deficiência e qual tipo
- Contador mostra "N alunos cadastrados · M PcD declarados" pra dar noção de inclusão
- "Sem deficiência" mostra "— Não declarou" em itálico cinza
- Outras colunas: simulados realizados, último acesso, status, ações

**Form de Aluno (`admin/aluno-form.html`):**
- Layout em grid 2 colunas: formulário à esquerda + **painel lateral "Perfil do aluno" à direita**
- Painel lateral mostra: avatar grande + nome + data de cadastro + mini-cards de estatísticas (simulados feitos, % média) + **seção "♿ Acessibilidade declarada" SOMENTE LEITURA** (vem do onboarding). Informação: "Só ele pode alterar no perfil" — respeito à autonomia do aluno PcD
- Tags coloridas mostrando tipo(s) de deficiência + recursos ativados
- Formulário limitado: Nome, Email, Status + botão "Redefinir senha" (envia email). Admin **não pode mexer** nas preferências de acessibilidade do aluno — intencional
- Decisão: admin só gerencia dados básicos/status; acessibilidade é território do aluno + onboarding

### Desafios e Ranking Periodizado (Fase 11)

**Conceito de Desafio:**
- Desafio = pacote temático que agrupa N simulados, com ranking próprio
- **Pontuação = soma da % de acerto de cada simulado feito pelo aluno** (máximo N × 100). Só conta a melhor tentativa de cada simulado
- Prazo é **opcional**: pode ser contínuo (sem data fim) ou ter `data_inicio` e `data_fim` (ranking congelado ao fim)
- Mínimo de 2 simulados por desafio
- Status: `em_andamento` | `encerrado` | `rascunho`

**Quem cria:**
- **Conteudista:** pode vincular a uma turma específica (só alunos da turma participam) ou publicar geral. Publica direto, sem curadoria
- **Aluno:** nasce privado, pode compartilhar ou solicitar publicação pública → curadoria (mesma lógica dos simulados do aluno)
- **Admin:** desafios oficiais da plataforma

**Ranking do aluno — 3 páginas separadas (URLs distintas):**
- **Decisão fundamental:** em vez de SPA com tabs JS, são **3 telas com URLs próprias** (`ranking.html`, `ranking-desafios.html`, `ranking-simulados.html`). Motivos: URL compartilhável, histórico do navegador funciona, back/forward funciona, cada página carrega só o que precisa. As "tabs" são `<a href>` reais — mesmo visual de tabs horizontais com border-bottom no item ativo
- **Header compartilhado:** card gradient com "Sua posição #5 de 1.247" aparece nas 3 telas
- **Nav compartilhada:** barra com 3 links no topo de cada tela (`🌍 Ranking Geral` / `⚔ Desafios` / `📝 Por Simulado`) — item ativo destacado com cor azul-médio + border-bottom de 3px
- **`aluno/ranking.html` (Geral):** 4 cards de período lado a lado (sem filtros) — Semana (laranja) / Quinzena (roxo) / Mês (ciano) / Ano (amarelo). Cada card mostra top 5 + linha do aluno logado destacada. Abaixo: pódio top 3 + tabela completa com paginação
- **`aluno/ranking-desafios.html` (Desafios):** **lista única ordenada** (sem separadores de seção, sem colapsos, sem paginação). Ordem fixa: "Em andamento por mim" → "Disponíveis" → "Feitos por mim" → "Encerrados". Filtros no topo: busca + meu status + área + criador. Cards grandes horizontais com ícone colorido + conteúdo + avatares dos participantes + bloco contextual (progresso/resultado) + ação à direita. Badge "meu status" colorido
- **`aluno/ranking-simulados.html` (Por Simulado):** lista de simulados públicos com busca + filtro área + ordenação. Cada card mostra stats (nota + posição do aluno se fez) + botão "Ver ranking" que abre **modal** com ranking completo daquele simulado específico
- **Decisão:** modal (não tela separada) pra ranking por simulado — já é a 4ª camada de navegação e reduz complexidade

**`aluno/desafio-detalhe.html`:**
- **Hero gradient** com a cor do desafio (configurável), ícone grande, nome, descrição, tags com info (nº simulados, participantes, dias restantes, pontuação máxima) — visual impactante
- **Card "Seu progresso"** em grid 3 colunas: progresso principal com barra animada / pontuação atual / posição no ranking
- **Lista de simulados do desafio:** cada linha com ícone de status (✓ feito / ▶ próximo / 🔒 pendente), info do simulado, e botão de ação contextual ("Ver resultado" / "Fazer agora →" / "Fazer"). O "próximo" é destacado em laranja
- **Pódio top 3** do desafio (similar ao ranking geral mas mostra pontuação em vez de XP) + **tabela completa** do ranking do desafio com colunas: Posição / Aluno / Feitos (X/N) / Pontuação (badge + barra visual) / % Média
- Modal de confirmação pra "Sair do desafio"
- Link "Compartilhar" copia link (toast de confirmação)

**`aluno/criar-desafio.html`:**
- Layout em grid 2 colunas: formulário à esquerda + **preview sticky lateral** que atualiza em tempo real
- 4 seções de form: Identidade (nome/desc/ícone/cor) / Período (opcional) / Simulados / Visibilidade
- **Seletor de ícone** com 10 emojis pré-selecionáveis (⚔🔢📖🌎🧪🎯🏆💡🚀💙)
- **Seletor de cor** com 7 cores pré-definidas (círculos grandes). Cor selecionada tem borda dupla azul-profundo
- **Modal de seleção de simulados** com 2 tabs (Banco Público / Minhas Importações) + filtros de área/habilidade/dificuldade + checkboxes múltiplos. Reutiliza o padrão do `criar-simulado.html`
- **Visibilidade em 3 cards grandes** clicáveis: Privado / Compartilhado / Solicitar publicação pública (cada um com ícone + descrição)
- Preview sticky mostra: card colorido com ícone e nome + stats (simulados, pontuação máxima calculada como N × 100, duração, áreas cobertas)
- Validação: precisa de nome + mínimo 2 simulados pra salvar

**`conteudista/desafios.html`:**
- 4 métricas no topo (cards): Ativos / Alunos participando / Simulados totais / Encerrados — cada um com cor de destaque diferente
- Filtros: busca textual / status / turma / área
- **Grid de cards grandes** com hero gradient colorido (usa a cor do desafio). Hero mostra ícone grande + status badge ("⚡ Ativo" / "✓ Encerrado" / "✎ Rascunho") + nome + turma vinculada
- Body do card: 3 métricas (simulados / alunos / pontos máx) + info extra (dias restantes, datas) + ações (Editar / Detalhes)
- Cards de desafio encerrado ficam em cinza (override de cor)

**`conteudista/desafio-form.html`:**
- Mesmo layout do `criar-desafio.html` do aluno MAS com 3 diferenças:
  1. **Card "Público-alvo"** em vez de "Visibilidade" — seleciona entre "Público pra todos" OU uma das turmas do conteudista (cards com ícone + nome + código da turma)
  2. **Modo edição** via `?id=` — pré-popula com dados do desafio 1 e muda título pra "Editar Desafio"
  3. **2 botões de ação**: "Salvar rascunho" + "🚀 Criar e publicar" — conteudista publica direto, sem passar por curadoria
- Filtro do modal de seleção usa "Nível" em vez de "Origem" (conteudista só tem banco público)

**Dashboard do aluno — card de desafios ativos:**
- Nova seção "⚔ Seus desafios ativos" entre o "Continue de onde parou" e as métricas resumo
- Grid responsivo com 1-2 cards (repeat auto-fit 340px)
- Cada card é clicável (link pro desafio-detalhe) com hover elevando, mostra: ícone colorido, nome, criador, progresso com barra, pontuação, posição no ranking do desafio
- Cor de destaque no `border-left` acompanha a cor do desafio

**Sidebar do conteudista:**
- Nova entrada "⚔ Desafios" entre "Simulados" e "Meus Alunos" em todas as 12 telas do conteudista
- Mantém o padrão de sidebar existente, só adiciona a linha nova

**Dados fake (fake-data.js):**
- `rankingPeriodos` — objeto com 4 chaves (semana/quinzena/mês/ano), cada uma com top 5
- `desafios` — array com 4 exemplos: 3 do conteudista (um vinculado à turma, dois públicos) + 1 do aluno compartilhado
- `minhasParticipacoes` — array de 2 participações da Maria Oliveira (desafio 1 e 2), com simulados feitos, pontuação atual e posição
- `rankingDesafio1` — ranking específico completo do desafio 1 (12 alunos) pra renderizar o pódio + tabela do desafio-detalhe

### Onboarding inclusivo (Fase 8.9)
- Tela `aluno/onboarding.html` — **sem sidebar**, card centralizado `max-width: 720px` com header decorativo gradient + círculo ciano (mesmo estilo do login)
- **Progress bar de 4 steps** no topo (helen.ai logo + 4 barrinhas + label "Passo X de 4")
- **Step 1 — Boas-vindas:** ícone 👋 com pulse animation + 4 benefícios com ícones circulares. Tom acolhedor: "Olá! Que bom ter você aqui. Vamos configurar a HelenAI juntas?"
- **Step 2 — Tipo de deficiência:** grid 2 colunas com 8 cards clicáveis (Visual, Auditiva, Intelectual, Motora, Dislexia, Daltonismo, TEA, Nenhuma). Múltipla escolha. "Nenhuma" é **exclusiva** — ao selecionar, limpa as outras; selecionar qualquer outra limpa "Nenhuma". Card selecionado ganha borda azul + check circular no canto
- **Step 3 — Preferências:** switches customizados (toggle azul) pra: textos simplificados, ouvir conteúdo, LIBRAS. Abaixo, 3 opções exclusivas de familiaridade com tecnologia (Alta/Média/Baixa) em grid
- **Step 4 — Resumo:** check verde animado + card verde com lista dinâmica das configs aplicadas automaticamente. Lógica de mapeamento:
  - Daltonismo → Color Blind
  - Dislexia → fonte OpenDyslexic
  - Visual → alto contraste + ledor + fonte grande
  - Auditiva → LIBRAS
  - Intelectual → Linguagem Simples + ledor
  - TEA → interface calma
  - Motora → navegação por teclado
  - Tecnologia baixa → tutorial guiado
- **Navegação:** botão "Voltar" à esquerda (escondido no step 1) + botão primário à direita que muda label por step ("Vamos começar →" / "Próximo →" / "Entrar na HelenAI 🚀"). Botão "Pular por agora" sempre visível (exceto no step 4)
- **Atalho:** Enter avança o step (quando o foco não está em botão)
- **Integração com cadastro:** `cadastro.html` agora redireciona pra `onboarding.html` após sucesso (tanto form normal quanto Google), não mais pro login
- **Persistência:** salva as preferências em `localStorage.helenai_acessibilidade` (que a `acessibilidade.js` já lê) + flag `helenai_onboarding_feito` pra não reexibir

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
├── admin/
│   ├── dashboard.html              # 5 métricas + seção Impacto e Inclusão (PcD + uso acessibilidade) + cadastros/mês + questões/área + top simulados + top acerto/erro
│   ├── conteudistas.html           # Tabela com áreas em tags + filtros + ações
│   ├── conteudista-form.html       # Form com áreas em cards clicáveis + modo edição
│   ├── alunos.html                 # Tabela com badges de deficiência + filtro por tipo de deficiência
│   └── aluno-form.html             # Form básico + painel lateral somente leitura com acessibilidade declarada
├── conteudista/
│   ├── ... (telas existentes)
│   ├── desafios.html               # Lista de desafios do conteudista + 4 métricas topo + filtros + cards coloridos
│   └── desafio-form.html           # Form desafio com seletor de turma + modo edição via ?id=
├── aluno/
│   ├── onboarding.html             # 4 steps (boas-vindas → deficiência → preferências → resumo) + configs automáticas
│   ├── dashboard.html              # Continue parou + cards desafios ativos + trilha IA + resumo semanal IA + radar BNCC + recentes
│   ├── explorar-simulados.html     # Filtros (chips de status + selects) + cards + card "em andamento" exemplo + tabs
│   ├── perfil.html                 # Dados + badges + desempenho + configs IA + acessibilidade
│   ├── ranking.html                # Geral: 4 cards período (semana/quinzena/mês/ano) + pódio + tabela completa
│   ├── ranking-desafios.html       # Lista única ordenada por meu status + filtros (busca/status/área/criador) + cards grandes horizontais
│   ├── ranking-simulados.html      # Lista simulados públicos + filtros + modal ranking por simulado
│   ├── desafio-detalhe.html        # Hero gradient + progresso + lista simulados + pódio + ranking do desafio + modal sair
│   ├── criar-desafio.html          # Form aluno + seletor ícone/cor + preview sticky + 3 opções visibilidade
│   ├── meus-simulados.html         # Tabs Criados/Importados/Realizados + mini-métricas + modal compartilhar + modal excluir
│   ├── criar-simulado.html         # Config topo + grid questões/composição sticky + modal seleção + drag&drop
│   ├── importar-pdf.html           # Info box privacidade + upload inline + loading 6 etapas + histórico importações
│   ├── revisao-questoes.html       # Info box Helen + card verde Linguagem Simples por questão + modal salvar privado
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
