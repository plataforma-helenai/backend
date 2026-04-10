# HelenAI — MVP de Telas

Documento de referência para todas as telas, fluxos, interações e validações do MVP.

---

## Sumário

1. [Perfis de Acesso](#1-perfis-de-acesso)
2. [Telas Compartilhadas](#2-telas-compartilhadas)
3. [Módulo Admin](#3-módulo-admin)
4. [Módulo Conteudista](#4-módulo-conteudista)
5. [Módulo Aluno](#5-módulo-aluno)
6. [Acessibilidade (Global)](#6-acessibilidade-global)
7. [Gamificação](#7-gamificação)
8. [Estruturas de Dados (Referência)](#8-estruturas-de-dados-referência)
9. [Regras de Negócio](#9-regras-de-negócio)
10. [Fluxos Principais](#10-fluxos-principais)

---

## 1. Perfis de Acesso

| Perfil        | Login                  | Descrição                                                                 |
|---------------|------------------------|---------------------------------------------------------------------------|
| **Admin**     | Email + Senha          | Gerencia toda a plataforma: usuários, métricas gerais, configurações      |
| **Conteudista** | Email + Senha        | Professor/curador. Importa PDFs, gerencia questões, simulados e seus alunos |
| **Aluno**     | Email + Senha ou Gmail | Faz simulados, cria simulados próprios, importa PDFs, compartilha         |

---

## 2. Telas Compartilhadas

### 2.1 Tela de Login

- **Campos:** Email, Senha
- **Botões:**
  - `Entrar` (email + senha)
  - `Entrar com Google` → redireciona direto para dashboard do **Aluno**
  - `Criar conta` (somente para Aluno)
  - `Esqueci minha senha`
- **Usuários fake do protótipo:**
  - `admin@helen.ai` / senha: `admin` → redireciona para `admin/dashboard.html`
  - `conteudista@helen.ai` / senha: `conteudista` → redireciona para `conteudista/dashboard.html`
  - `aluno@helen.ai` / senha: `aluno` → redireciona para `aluno/dashboard.html`
  - Botão `Entrar com Google` → redireciona para `aluno/dashboard.html` (sem pedir credenciais)
- **Comportamento:**
  - Ao logar, o sistema identifica o perfil pelo email e redireciona para o dashboard correspondente
  - O botão Google é atalho direto para o aluno (simula OAuth)
- **Validações fake:**
  - Email obrigatório e formato válido
  - Senha obrigatória (mínimo 6 caracteres)
  - Credenciais que não batem: mensagem "Email ou senha inválidos"

### 2.2 Tela de Cadastro (Aluno)

- **Etapa 1 — Dados básicos:**
  - Campos: Nome completo, Email, Senha, Confirmar Senha
  - Botão: `Próximo` | `Cadastrar com Google`
- **Etapa 2 — Anamnese de acessibilidade (opcional, pode pular):**
  - Pergunta: "Para personalizar sua experiência, nos conte sobre você"
  - **Tipo de deficiência** (múltipla escolha, pode marcar mais de uma ou "Nenhuma"):
    - Visual (baixa visão, cegueira)
    - Auditiva (surdez, baixa audição)
    - Intelectual (dificuldade de aprendizagem, deficiência intelectual)
    - Motora (mobilidade reduzida)
    - Dislexia
    - Daltonismo
    - TEA (Transtorno do Espectro Autista)
    - Outra (campo aberto)
    - Prefiro não informar
  - **Preferências de leitura:**
    - "Prefiro textos simplificados" (ativa Linguagem Simples por padrão)
    - "Prefiro ouvir o conteúdo" (ativa Ledor por padrão)
    - "Preciso de LIBRAS" (ativa LIBRAS por padrão)
  - **Familiaridade com tecnologia:**
    - "Uso computador/celular com frequência"
    - "Tenho pouca experiência com tecnologia"
    - "Preciso de ajuda para navegar"
  - Botão: `Finalizar` | `Pular por agora`
- **Comportamento ao finalizar:**
  - Com base nas respostas, a plataforma configura automaticamente:
    - Daltonismo → ativa Color Blind
    - Dislexia → ativa fonte OpenDyslexic
    - Visual → ativa alto contraste + ledor + tamanho de fonte grande
    - Auditiva → ativa LIBRAS
    - Intelectual → ativa Linguagem Simples + ledor
    - TEA → interface calma (animações reduzidas, cores suaves)
    - "Pouca experiência" → ativa tutorial guiado no primeiro acesso
  - O aluno pode alterar tudo depois nas configurações
- **Validações fake:**
  - Etapa 1: todos os campos obrigatórios, senhas coincidem, email único
  - Etapa 2: opcional, pode pular

### 2.3 Recuperação de Senha

- **Tela 1:** Campo de email + botão `Enviar link de recuperação`
- **Tela 2:** Mensagem de sucesso: "Link enviado para seu email"

### 2.4 Barra de Acessibilidade (presente em TODAS as telas)

- Detalhada na [Seção 6](#6-acessibilidade-global)

---

## 3. Módulo Admin

### 3.1 Dashboard Admin

- **Métricas exibidas (cards):**
  - Total de alunos cadastrados
  - Total de conteudistas cadastrados
  - Total de questões no banco
  - Total de simulados publicados
  - Simulados realizados (total)
- **Gráficos:**
  - Novos cadastros por mês (linha)
  - Questões por área BNCC (pizza/barras)
  - Simulados mais realizados (ranking top 10)
  - Questões com maior taxa de acerto / maior taxa de erro (top 5 cada)

### 3.2 Gerenciamento de Usuários

#### 3.2.1 Lista de Conteudistas

- **Tabela:** Nome, Email, Área de atuação, Status (ativo/bloqueado), Data de cadastro
- **Ações por linha:** `Editar` | `Bloquear/Desbloquear`
- **Botão:** `+ Novo Conteudista`
- **Filtros:** Nome, Email, Área, Status
- **Paginação**

#### 3.2.2 Cadastro/Edição de Conteudista

- **Campos:**
  - Nome completo
  - Email
  - Senha (somente no cadastro)
  - Área(s) de atuação/competência (ex: Matemática, Linguagens, Ciências da Natureza, Ciências Humanas)
  - Formação acadêmica
  - Instituição
- **Botões:** `Salvar` | `Cancelar`

#### 3.2.3 Lista de Alunos

- **Tabela:** Nome, Email, Status (ativo/bloqueado), Data de cadastro, Simulados realizados
- **Ações por linha:** `Editar` | `Bloquear/Desbloquear`
- **Filtros:** Nome, Email, Status
- **Paginação**

#### 3.2.4 Edição de Aluno

- **Campos:** Nome, Email, Status
- **Botões:** `Salvar` | `Cancelar`

---

## 4. Módulo Conteudista

### 4.1 Dashboard Conteudista

- **Métricas (cards):**
  - Questões importadas (total)
  - Simulados criados (total)
  - Simulados publicados
  - Alunos vinculados (sua "sala")
  - Itens pendentes de curadoria
- **Gráficos:**
  - Questões por área BNCC (do conteudista)
  - Simulados mais realizados (dos seus)
  - Desempenho dos seus alunos por habilidade BNCC

### 4.2 Importação de PDF

#### 4.2.1 Tela de Upload

- **Campos:**
  - Nome da importação (ex: "ENEM 2026 - Caderno Azul")
  - Código da importação (ex: "ENEM-2026-AZ") — será usado como referência nas questões
  - Arquivo PDF (drag & drop ou seletor)
- **Botão:** `Importar`
- **Comportamento:**
  - Ao importar, exibe loading/progresso fake
  - Redireciona para a tela de revisão das questões extraídas

#### 4.2.2 Revisão de Questões Extraídas

- **Exibição:** Lista de questões extraídas do PDF, cada uma em um card expandível
- **Cada card de questão exibe:**
  - Número da questão (ordem no PDF)
  - Enunciado (editável)
  - Alternativas A-E (editáveis)
  - Resposta correta (seletor)
  - Código da questão: `[CÓD_IMPORTAÇÃO]-Q[número]` (ex: ENEM-2026-AZ-Q01)
  - **Campos BNCC (editáveis):**
    - Área do conhecimento (dropdown: Matemática, Linguagens, Ciências da Natureza, Ciências Humanas)
    - Competência geral (dropdown)
    - Competência específica (dropdown — filtra com base na área)
    - Habilidade (dropdown — filtra com base na competência, ex: EF09MA05)
  - Nível de dificuldade (dropdown: Fácil, Médio, Difícil)
  - **Ações:** `Salvar alterações` | `Excluir questão`
- **Ações globais:**
  - `Salvar todas`
  - `Criar simulado com estas questões` — abre modal de criação de simulado (ver 4.4)
- **Observação:** Os campos BNCC vêm pré-preenchidos (simulando IA), mas o conteudista pode editar tudo
- **Versões geradas pela IA (futuro — processar na importação):**
  - `enunciado_original` — texto extraído do PDF
  - `enunciado_linguagem_simples` — reescrito em Linguagem Simples (Lei 15.263/2025)
  - `palavras_chave[]` — termos técnicos com explicação simplificada
  - `enunciado_ledor` — versão otimizada para leitura em voz alta
  - O conteudista pode revisar e editar todas as versões antes de publicar
  - Cada questão nasce com múltiplas "camadas" desde a importação (não sob demanda)

### 4.3 Banco de Questões

#### 4.3.1 Lista de Questões

- **Tabela/Cards:** Código, Trecho do enunciado, Área BNCC, Habilidade, Nível, Origem (importação), Status
- **Filtros:**
  - Área do conhecimento
  - Competência geral
  - Competência específica
  - Habilidade (código BNCC)
  - Nível de dificuldade
  - Origem/Importação
  - Busca textual no enunciado
- **Ações por questão:** `Ver/Editar` | `Usar em simulado`
- **Botão:** `+ Nova Questão` (cadastro manual)
- **Paginação**

#### 4.3.2 Cadastro/Edição Manual de Questão

- **Campos:** (mesmos da revisão de importação - seção 4.2.2)
  - Enunciado
  - Alternativas A-E
  - Resposta correta
  - Código (auto-gerado ou manual)
  - Área, Competência geral, Competência específica, Habilidade
  - Nível de dificuldade
- **Botões:** `Salvar` | `Cancelar`
- **Regra:** Questão já usada em simulado publicado + realizado por aluno = não pode ser editada (exibir aviso)

### 4.4 Simulados

#### 4.4.1 Lista de Simulados

- **Tabela:** Nome, Código, Qtd questões, Tempo limite, Status (rascunho/publicado/encerrado), Data criação
- **Filtros:** Nome, Status, Área BNCC
- **Ações por simulado:** `Ver/Editar` | `Publicar` | `Despublicar` | `Ver resultados`
- **Botão:** `+ Novo Simulado`
- **Paginação**

#### 4.4.2 Criação/Edição de Simulado

- **Campos:**
  - Nome do simulado
  - Código
  - Descrição (opcional)
  - Tempo limite (minutos) — campo opcional, se vazio = sem limite
  - Origem (importação automática ou manual)
- **Seção de questões:**
  - Lista das questões do simulado (com drag & drop para reordenar)
  - Cada questão exibe: número, trecho do enunciado, área, habilidade, nível
  - **Ações por questão:** `Remover do simulado` | `Editar questão` (abre modal)
  - **Botão:** `+ Adicionar questões do banco` — abre modal com filtros BNCC para selecionar questões
- **Botões:** `Salvar rascunho` | `Publicar` | `Cancelar`
- **Regras:**
  - Simulado em status `rascunho`: tudo editável (ordem, questões, alternativas)
  - Simulado `publicado` sem nenhum aluno tendo iniciado: ainda pode editar
  - Simulado `publicado` com algum aluno tendo iniciado/finalizado: **travado** — não pode editar questões nem alternativas, apenas despublicar

#### 4.4.3 Resultados do Simulado

- **Métricas gerais:**
  - Total de alunos que realizaram
  - Média de acertos (%)
  - Tempo médio de realização
- **Por questão:**
  - Taxa de acerto (%)
  - Alternativa mais escolhida
- **Lista de alunos:** Nome, Nota, Acertos, Tempo, Data — com link para ver detalhes
- **Gráficos:**
  - Distribuição de notas (histograma)
  - Desempenho por área/habilidade BNCC

### 4.5 Gerenciamento de Alunos (Sala/Turma do Conteudista)

- **Descrição:** O conteudista vê e gerencia somente os alunos da sua turma
- **Código da turma:** Código único visível (ex: TURMA-CM-2026) — o conteudista compartilha com alunos para eles entrarem na turma
- **Cards:** Nome, Email, Avatar, Simulados realizados, Último acesso, Mini barras de desempenho por área
- **Ações:** `Ver desempenho` | `Desvincular`
- **Botões:**
  - `+ Convidar Aluno` — pré-cria aluno informando nome + email. O aluno recebe email com convite para se cadastrar e já entra na turma
  - `Vincular Existente` — busca aluno já cadastrado na plataforma por nome/email
- **Entrada do aluno na turma:** O aluno pode entrar na turma usando o código da turma (na área do aluno)

### 4.6 Fila de Curadoria

- **Descrição:** Questões/simulados enviados por alunos para aprovação pública
- **Filtros:** Tipo (questão/simulado), Aluno, Área BNCC, Data
- **Tabela/Cards:** Tipo, Aluno remetente, Título/Trecho, Área, Data de envio
- **Ações por item:**
  - `Ver detalhes` — expande a questão/simulado completo para revisão
  - `Aprovar` — torna público para todos
  - `Rejeitar` — abre campo para informar motivo da rejeição
  - `Aprovar questão individual` (quando for simulado, pode aprovar questão por questão)
- **Regra de atribuição:** Itens são direcionados para conteudistas com competência na área da questão

---

## 5. Módulo Aluno

### 5.1 Dashboard Aluno

- **Saudação:** "Olá, [Nome]!"
- **Cards de resumo:**
  - Último acesso
  - Simulados realizados (total)
  - Média geral de acertos
  - Sequência de dias estudando (streak — gamificação)
  - Nível / XP atual
- **Seção "O que você precisa melhorar":**
  - Top 3 habilidades BNCC com menor desempenho (com código e nome)
  - Sugestão: "Temos X questões sobre [habilidade]. Praticar agora?"
- **Seção "Seus pontos fortes":**
  - Top 3 habilidades BNCC com maior desempenho
- **Gráfico:** Desempenho por área BNCC (radar/spider chart)
- **Seção "Simulados recentes":**
  - Lista dos últimos 5 simulados realizados com nota e data
- **Seção "Simulados disponíveis":**
  - Simulados públicos que o aluno ainda não fez (cards com nome, qtd questões, tempo)

### 5.2 Explorar Simulados

- **Lista de simulados públicos disponíveis**
- **Cards:** Nome, Descrição, Qtd questões, Tempo limite (ou "Sem limite"), Área principal, Criador (conteudista ou aluno)
- **Filtros:** Área BNCC, Habilidade, Nível de dificuldade, Com/sem tempo
- **Ações:** `Iniciar simulado` | `Ver detalhes`
- **Aba "Compartilhados comigo":** Simulados que outros alunos compartilharam diretamente
- **Paginação**

### 5.3 Realizar Simulado

#### 5.3.1 Tela de Início do Simulado

- **Info exibida:** Nome, Qtd questões, Tempo limite (se houver), Área(s)
- **Toggle:** `Usar cronômetro` (se o simulado tem tempo definido, o aluno pode escolher usar ou não)
- **Botão:** `Começar`

#### 5.3.2 Tela de Questão (durante o simulado)

- **Header:**
  - Nome do simulado
  - Progresso: "Questão 3 de 30"
  - Cronômetro (se ativo) — contagem regressiva ou progressiva
  - Barra de progresso visual
- **Corpo:**
  - Enunciado da questão
  - Alternativas A-E (radio buttons, destacar selecionada)
  - Código da questão (discreto, canto inferior)
- **Navegação:**
  - `Anterior` | `Próxima`
  - Painel lateral/inferior de navegação rápida (números das questões — cor indica: respondida, não respondida, marcada para revisão)
  - `Marcar para revisão` (flag)
- **Botão:** `Finalizar simulado` (com confirmação: "Você tem X questões sem resposta. Deseja finalizar?")

#### 5.3.3 Tela de Resultado do Simulado

- **Resumo:**
  - Nota: X/Y acertos (porcentagem)
  - Tempo total
  - Posição no ranking (se simulado público): "Você ficou em #5 de 120 participantes"
  - XP ganho
- **Gabarito:**
  - Lista de questões com: sua resposta vs resposta correta (verde = acertou, vermelho = errou)
  - Expandir questão para ver enunciado + todas alternativas
- **Desempenho por BNCC:**
  - Tabela: Área, Competência, Habilidade, Acertos/Total, %
  - Gráfico radar por área
- **Comparativo (simulados públicos):**
  - Sua nota vs Média geral
  - Distribuição de notas (histograma com sua posição marcada)
- **Ações:** `Refazer simulado` | `Ver questões que errei` | `Voltar ao dashboard`

### 5.4 Meus Simulados (Aluno)

#### 5.4.1 Lista

- **Abas:**
  - `Criados por mim` — simulados que o aluno criou manualmente
  - `Importados` — simulados criados a partir de PDF importado
  - `Realizados` — histórico de simulados feitos
- **Tabela/Cards:** Nome, Qtd questões, Status (privado/compartilhado/público/pendente aprovação), Data
- **Ações:** `Editar` | `Compartilhar` | `Solicitar publicação` | `Excluir`
- **Botão:** `+ Novo Simulado` | `+ Importar PDF`

#### 5.4.2 Criar Simulado (Aluno)

- **Campos:**
  - Nome do simulado
  - Tempo limite (opcional)
- **Seleção de questões:**
  - Filtros BNCC: Área, Competência geral, Competência específica, Habilidade
  - Filtro: Nível de dificuldade
  - Selecionar questões do banco público + suas questões importadas
  - Drag & drop para reordenar
- **Botões:** `Salvar` | `Cancelar`

#### 5.4.3 Importar PDF (Aluno)

- **Campos:**
  - Nome da importação
  - Arquivo PDF
- **Comportamento:**
  - Extrai questões (loading fake)
  - Exibe questões para revisão (mesmo layout da seção 4.2.2, mas simplificado)
  - Campos BNCC pré-preenchidos (simulando IA)
  - Aluno pode editar
- **Ao salvar:**
  - Questões ficam no banco pessoal do aluno
  - Simulado é criado automaticamente (status: privado)
- **Regra:** Questões importadas por aluno NÃO entram no banco público automaticamente

### 5.5 Compartilhamento

#### 5.5.1 Modal de Compartilhamento

- **Opções:**
  - `Compartilhar por link` — gera link copiável. Qualquer pessoa com o link acessa (se não tiver conta, é direcionada ao cadastro)
  - `Compartilhar por email/username` — campo para digitar email ou username. Somente essas pessoas acessam
    - Botão `+ Adicionar` para incluir múltiplos destinatários
    - Lista de pessoas com acesso (com botão `Remover`)
  - `Solicitar publicação pública` — envia para fila de curadoria do conteudista
- **Status visível:** Privado | Compartilhado com X pessoas | Público | Pendente de aprovação | Rejeitado (com motivo)

### 5.6 Perfil do Aluno

- **Campos editáveis:** Nome, Email, Foto (avatar), Senha
- **Seção "Minhas Conquistas":** Badges e XP (ver seção 7)
- **Seção "Desempenho Geral":**
  - Total de simulados realizados
  - Total de questões respondidas
  - Taxa de acerto geral
  - Gráfico de evolução ao longo do tempo (linha)
- **Botão:** `Salvar alterações`

---

## 6. Acessibilidade (Global)

### 6.1 Barra de Acessibilidade

Presente em **todas as telas**, fixa no topo ou lateral. Contém toggles/botões para:

| Recurso                | Controle                                      | Descrição                                         |
|------------------------|-----------------------------------------------|---------------------------------------------------|
| **Alto Contraste**     | Toggle on/off                                 | Alterna para paleta de alto contraste              |
| **Fonte para Dislexia**| Toggle on/off                                 | Troca fonte para OpenDyslexic ou similar           |
| **Tamanho da Fonte**   | Botões A- / A / A+                            | Diminui / padrão / aumenta tamanho da fonte        |
| **Paleta Color Blind** | Toggle on/off                                 | Ativa paleta acessível para daltonismo             |
| **Ledor (TTS)**        | Botão play/pause + controle de velocidade + tom | Lê o conteúdo da tela em voz alta                 |
| **LIBRAS**             | Toggle on/off                                 | Ativa intérprete virtual de LIBRAS (avatar/janela) |

### 6.2 Comportamento

- Os toggles devem salvar a preferência do usuário (persistir entre sessões)
- Na tela de login, a barra de acessibilidade já está disponível (antes de logar)
- O ledor deve ter indicação visual do trecho sendo lido (highlight)
- O intérprete de LIBRAS aparece como janela flutuante redimensionável

---

## 6.5 IA, Linguagem Simples e DUA (Módulo Aluno)

> Funcionalidades que diferenciam a HelenAI de qualquer outra plataforma. Aplicadas principalmente na experiência do aluno.

### 6.5.1 Linguagem Simples (Lei 15.263/2025)

- **Botão "Simplificar" em cada questão** — presente na tela de questão durante o simulado
  - Ao clicar, a IA reescreve o enunciado em Linguagem Simples
  - Exibe lado a lado: original vs simplificado
  - O aluno pode alternar entre as versões
  - Palavras-chave destacadas com tooltip explicativo
- **Indicador visual:** Ícone de Linguagem Simples ativo quando a versão simplificada está sendo exibida
- **Persistência:** Se o aluno ativar "Sempre usar Linguagem Simples" nas configurações, todas as questões já abrem simplificadas

### 6.5.2 Desenho Universal para Aprendizagem (DUA)

O DUA define 3 princípios que devem estar presentes em TODAS as telas do aluno:

**Princípio 1 — Múltiplas formas de Representação (o "quê" da aprendizagem):**
- Enunciado em texto + opção de áudio (ledor)
- Opção de ver a questão em LIBRAS
- Imagens com texto alternativo
- Destaque de palavras-chave e termos técnicos com tooltip
- Versão em Linguagem Simples

**Princípio 2 — Múltiplas formas de Ação e Expressão (o "como" da aprendizagem):**
- Navegação por teclado completa
- Opção de responder por voz (futuro)
- Timer configurável (com ou sem, velocidade ajustável)
- Pausar e retomar simulado a qualquer momento

**Princípio 3 — Múltiplas formas de Engajamento (o "porquê" da aprendizagem):**
- Gamificação (XP, badges, streak, ranking)
- Feedback imediato e encorajador após cada simulado
- Trilhas personalizadas baseadas nos pontos fracos
- Metas individuais configuráveis
- Mensagens motivacionais contextuais

### 6.5.3 Inteligência Artificial — Funcionalidades no Módulo Aluno

**Na tela de questão (durante simulado):**
- Botão `💡 Simplificar` — reescreve enunciado em Linguagem Simples
- Botão `🔑 Palavras-chave` — destaca termos importantes com explicação
- Botão `📖 Dica` — IA dá uma dica sem revelar a resposta (opcional, pode desativar)

**No resultado do simulado:**
- **Explicação da IA por questão** — ao expandir uma questão errada, a IA explica por que a alternativa correta é a certa, usando Linguagem Simples
- **Sugestão de estudo** — "Você errou 3 questões de EM13MAT101. Recomendamos praticar mais sobre interpretação de dados."

**No dashboard do aluno:**
- **Trilha personalizada** — IA monta uma trilha de estudo com base no desempenho por habilidade BNCC
  - Seção "Trilha Recomendada" com simulados/questões sugeridas
  - Atualiza automaticamente conforme o aluno evolui
- **Resumo semanal da IA** — card com texto: "Esta semana você melhorou 12% em Matemática! Continue focando em Ciências Humanas."

**No perfil/configurações do aluno:**
- Toggle: `Sempre usar Linguagem Simples`
- Toggle: `Mostrar dicas da IA`
- Toggle: `Receber sugestões de estudo`
- Seletor: `Nível de simplificação` (Leve | Moderado | Máximo)

### 6.5.4 Design Centrado no Usuário (PcD)

- **Onboarding inclusivo** — ao se cadastrar, o aluno pode informar (opcional):
  - Tipo de deficiência (visual, auditiva, intelectual, motora, outra)
  - Preferências de acessibilidade
  - Nível de familiaridade com tecnologia
  - A plataforma ajusta automaticamente os recursos com base nessas informações
- **Feedback humanizado** — mensagens de erro, sucesso e orientação escritas em tom acolhedor e não punitivo
  - Em vez de "Você errou" → "Vamos revisar esta questão juntos?"
  - Em vez de "Nota baixa" → "Você está progredindo! Foque nessas habilidades para melhorar."
- **Interface calma** — espaçamento generoso, cores suaves, animações sutis, sem sobrecarga visual
- **Tempo sem pressão** — o cronômetro é sempre opcional, nunca obrigatório

---

## 7. Gamificação

### 7.1 Sistema de XP e Níveis

| Ação                                      | XP ganho |
|-------------------------------------------|----------|
| Completar um simulado                     | 50 XP    |
| Acertar 100% de um simulado               | 100 XP   |
| Acertar questão de nível Difícil          | 10 XP    |
| Acertar questão de nível Médio            | 5 XP     |
| Acertar questão de nível Fácil            | 2 XP     |
| Manter streak de 7 dias                   | 50 XP    |
| Criar simulado compartilhado              | 20 XP    |
| Simulado do aluno aprovado como público   | 100 XP   |

- **Níveis:** Cada 500 XP = 1 nível. Exibir barra de progresso para o próximo nível
- **Exibição:** XP e nível visíveis no header (ao lado do nome do aluno)

### 7.2 Badges (Conquistas)

| Badge                  | Critério                                           |
|------------------------|-----------------------------------------------------|
| Primeiro Passo         | Completou o primeiro simulado                        |
| Nota Máxima            | 100% de acerto em um simulado                        |
| Maratonista            | Completou 10 simulados                               |
| Especialista [Área]    | 80%+ de acerto em 20+ questões de uma área BNCC      |
| Streak 7               | 7 dias consecutivos estudando                         |
| Streak 30              | 30 dias consecutivos estudando                        |
| Colaborador            | Teve um simulado aprovado como público                |
| Social                 | Compartilhou 5 simulados                              |

- Badges exibidos no perfil do aluno e no ranking

### 7.3 Ranking — 3 telas distintas

O sistema de ranking é dividido em **3 páginas separadas** com URLs próprias (não é SPA com tabs JS). Todas compartilham o mesmo header (card gradient com posição do aluno) e uma barra de navegação em links que destaca a página ativa.

**Tela 1 — Ranking Geral (`aluno/ranking.html`)**
- Header + nav de links + 4 cards de período (sem filtros) + pódio top 3 + tabela completa com paginação
- **4 cards de período simultâneos:**
  - `🔥 Esta Semana` — últimos 7 dias (cor laranja)
  - `📅 Quinzena` — últimos 14 dias (cor roxo)
  - `🗓 Este Mês` — mês corrente (cor ciano)
  - `🏆 Este Ano` — ano corrente (cor amarelo)
  - Cada card mostra top 5 + linha do aluno logado destacada
- **Todos os tempos:** pódio top 3 animado + tabela completa com posição, nome, nível, XP, simulados, taxa de acerto

**Tela 2 — Ranking Desafios (`aluno/ranking-desafios.html`)**
- Header + nav de links + filtros + lista única ordenada (sem paginação, sem colapsos)
- **Filtros no topo:** busca textual + meu status (em andamento / feito / disponível / encerrado) + área + criador (professor / aluno / HelenAI oficial)
- **Ordenação fixa:** "Em andamento por mim" → "Disponíveis" → "Feitos por mim" → "Encerrados"
- **Cards grandes horizontais** com ícone colorido à esquerda, meio com info (título, criador, descrição, chips de metadados, avatares dos top 4 participantes + "+N outros") e bloco contextual:
  - Se em andamento: barra de progresso + pontuação atual + posição no ranking
  - Se feito: card azul com pontuação final, % média, posição final e período
- Coluna direita com ações contextuais (Continuar / Ver resultado / Participar / Ver ranking final)
- **Badge "meu status"** colorido no canto superior direito do card

**Tela 3 — Por Simulado (`aluno/ranking-simulados.html`)**
- Header + nav de links + filtros + lista de simulados públicos + modal de ranking
- **Filtros:** busca + área + ordenação (mais participantes / sua nota / mais recentes)
- Cada card: ícone + nome + meta (questões, tempo, participantes, criador) + sua nota (se fez) + sua posição + botão "🏆 Ver ranking"
- Botão "Ver ranking" abre **modal** com ranking completo daquele simulado específico (tabela: posição, aluno, nota, tempo)

---

## 11. Desafios (Períodos de Estudo)

> Desafios são pacotes temáticos de estudo que agrupam vários simulados, com ranking próprio. É uma forma de gamificar períodos de preparação específicos (ex: "Revisão de Matemática — Janeiro") e criar competições saudáveis entre alunos.

### 11.1 Conceito

- Um **Desafio** agrupa **N simulados** em torno de um tema ou período
- Cada desafio tem **seu próprio ranking**, calculado pela **soma da % de acerto** do aluno em cada simulado do desafio (máximo = N × 100 pontos)
- Desafios podem ter **prazo opcional** (data início / fim) ou ser **contínuos** (sem prazo)
- Status possíveis: `em_andamento` | `encerrado` | `nao_iniciado`

### 11.2 Quem pode criar

- **Conteudista:** cria pra turma específica (vinculado a uma turma — só alunos da turma participam) ou público (todos os alunos). É a principal ferramenta pedagógica do professor pra criar períodos de revisão
- **Aluno:** cria privado, compartilhado (por link/email) ou solicita publicação pública (vai pra curadoria do conteudista, mesma lógica dos simulados do aluno)
- **Admin:** cria desafios oficiais da plataforma (ex: "Simulado Nacional HelenAI 2026")

### 11.3 Lista de Desafios (aba dentro de Ranking)

- **Desafios em andamento** (cards destacados) — desafios que o aluno está participando agora, com:
  - Nome, ícone, cor de destaque
  - Progresso: "3 de 8 simulados feitos"
  - Pontuação atual / pontuação máxima possível
  - Posição atual no ranking do desafio ("#12 de 45 participantes")
  - Dias restantes (ou "Contínuo" se não tem prazo)
  - Botão `Continuar desafio`
- **Desafios disponíveis** — públicos que o aluno ainda não entrou (cards com botão `Participar`)
- **Botão `+ Criar desafio`** no canto superior — abre `aluno/criar-desafio.html`

### 11.4 Detalhe do Desafio

- **Header:**
  - Nome, descrição, ícone, cor/gradient de destaque
  - Criador (conteudista, aluno, admin) + turma vinculada (se houver)
  - Datas (início — fim) ou "Contínuo"
  - Status: em andamento / encerrado
- **Card "Seu progresso"** (se o aluno está participando):
  - Simulados feitos / total
  - Pontuação atual (ex: 240 / 800)
  - Posição no ranking do desafio
  - Barra de progresso visual
- **Lista de simulados do desafio:**
  - Cada linha: nome, área, tempo, status pra este aluno (🔒 Não iniciado / 🔄 Em andamento / ✓ Feito com nota)
  - Botão "Fazer agora" pros não iniciados
- **Ranking do desafio:**
  - Pódio top 3 com animação
  - Tabela completa: Posição, Aluno, Simulados feitos (X/N), Pontuação, % média de acerto
  - Posição do aluno sempre visível (destacada)
- **Ações:**
  - `Compartilhar desafio` (link ou email)
  - `Sair do desafio` (confirmação)

### 11.5 Criar Desafio (aluno)

- **Campos:**
  - Nome do desafio
  - Descrição (opcional)
  - Ícone/emoji + cor de destaque
  - Data início (opcional, default = hoje)
  - Data fim (opcional — se vazio, é contínuo)
  - Visibilidade: Privado / Compartilhado / Solicitar publicação pública
- **Seleção de simulados:**
  - Modal com tabs `Banco Público` + `Minhas Importações`
  - Filtros BNCC (área, habilidade, dificuldade)
  - Checkboxes pra seleção múltipla
  - Mínimo 2 simulados, sem máximo definido
- **Preview:** mostra pontuação máxima calculada (N × 100), duração, áreas cobertas
- **Botões:** `Salvar rascunho` | `Criar desafio` | `Cancelar`

### 11.6 Desafios (conteudista)

- **Lista (`conteudista/desafios.html`):**
  - Tabela ou cards dos desafios criados pelo conteudista
  - Colunas: Nome, Turma vinculada, Qtd simulados, Qtd alunos participando, Status, Data fim
  - Filtros: Status, Turma, Área
  - Ações: Ver detalhes, Editar, Encerrar, Duplicar
- **Formulário (`conteudista/desafio-form.html`):**
  - Mesmos campos do aluno + extra: dropdown `Vincular à turma` (com as turmas do conteudista) ou "Público para todos"
  - Conteudista pode publicar direto sem passar por curadoria

### 11.7 Integração com Dashboard

- **Dashboard do aluno:** card "Desafios ativos" mostra 1-2 desafios em andamento do aluno entre o "Continue de onde parou" e as métricas gerais

### 11.8 Ranking Global vs Ranking do Desafio

- **Ranking global** (aba Geral do `ranking.html`): XP total do aluno na plataforma inteira, independente de desafios
- **Ranking do desafio** (dentro de cada desafio): pontuação calculada só pelos simulados daquele desafio
- O aluno pode estar em posição muito diferente em cada contexto (ex: #45 global, mas #2 no desafio de Matemática)

---

## 8. Estruturas de Dados (Referência)

### 8.1 Questão

```
{
  id
  codigo                     // Ex: "ENEM-2026-AZ-Q01" ou "MANUAL-001"
  enunciado                  // Texto da questão
  alternativa_a              // Texto
  alternativa_b
  alternativa_c
  alternativa_d
  alternativa_e
  resposta_correta           // "A" | "B" | "C" | "D" | "E"
  area_conhecimento          // Matemática, Linguagens, Ciências da Natureza, Ciências Humanas
  competencia_geral          // Código + nome
  competencia_especifica     // Código + nome
  habilidade_bncc            // Código (ex: EF09MA05) + descrição
  nivel_dificuldade          // Fácil | Médio | Difícil
  importacao_id              // Referência à importação de origem (null se manual)
  criado_por                 // ID do conteudista ou aluno
  tipo_criador               // "conteudista" | "aluno"
  status                     // "rascunho" | "ativo" | "publico" | "pendente_aprovacao" | "rejeitado"
  motivo_rejeicao            // Texto (se rejeitado)
  editavel                   // true/false (false se usada em simulado realizado)
  created_at
  updated_at
}
```

### 8.2 Importação

```
{
  id
  nome                       // Ex: "ENEM 2026 - Caderno Azul"
  codigo                     // Ex: "ENEM-2026-AZ"
  arquivo_pdf                // Referência ao arquivo
  criado_por                 // ID do conteudista ou aluno
  tipo_criador               // "conteudista" | "aluno"
  total_questoes_extraidas
  created_at
}
```

### 8.3 Simulado

```
{
  id
  nome
  codigo
  descricao
  tempo_limite_minutos       // null = sem limite
  questoes[]                 // Lista ordenada de IDs de questões
  criado_por                 // ID do conteudista ou aluno
  tipo_criador               // "conteudista" | "aluno"
  origem                     // "importacao" | "manual"
  importacao_id              // Se origem = importação
  status                     // "rascunho" | "publicado" | "privado" | "compartilhado" | "pendente_aprovacao" | "rejeitado"
  motivo_rejeicao
  editavel                   // false se algum aluno já realizou
  created_at
  updated_at
}
```

### 8.4 Compartilhamento

```
{
  id
  simulado_id
  tipo                       // "link" | "direto"
  link_hash                  // Para compartilhamento por link
  destinatarios[]            // Lista de emails/usernames (para compartilhamento direto)
  created_at
}
```

### 8.5 Resultado do Simulado

```
{
  id
  simulado_id
  aluno_id
  respostas[]                // [{questao_id, resposta_selecionada, correta: bool}]
  total_acertos
  total_questoes
  percentual_acerto
  tempo_total_segundos
  desempenho_por_area[]      // [{area, acertos, total, percentual}]
  desempenho_por_habilidade[] // [{habilidade, acertos, total, percentual}]
  xp_ganho
  created_at
}
```

### 8.6 Usuário

```
{
  id
  nome
  email
  senha_hash
  perfil                     // "admin" | "conteudista" | "aluno"
  foto_avatar
  // Campos específicos do conteudista:
  areas_atuacao[]            // Ex: ["Matemática", "Ciências da Natureza"]
  formacao_academica
  instituicao
  // Campos específicos do aluno:
  xp_total
  nivel
  streak_dias
  badges[]
  // Campos de acessibilidade (preferências salvas):
  pref_alto_contraste        // bool
  pref_fonte_dislexia        // bool
  pref_tamanho_fonte         // "normal" | "grande" | "maior"
  pref_color_blind           // bool
  pref_ledor_velocidade      // float
  pref_libras                // bool
  //
  status                     // "ativo" | "bloqueado"
  created_at
  updated_at
}
```

### 8.7 Conteudista-Aluno (Sala)

```
{
  id
  conteudista_id
  aluno_id
  created_at
}
```

### 8.8 Desafio

```
{
  id
  nome                       // Ex: "Revisão de Matemática — Janeiro"
  descricao
  icone                      // Emoji ou código do ícone
  cor                        // Cor de destaque (hex)
  criado_por                 // ID de quem criou
  tipo_criador               // "admin" | "conteudista" | "aluno"
  turma_id                   // Opcional — só se criado por conteudista vinculado a turma
  simulados[]                // Lista ordenada de IDs de simulados
  data_inicio                // Null se contínuo
  data_fim                   // Null se contínuo
  visibilidade               // "privado" | "compartilhado" | "publico" | "pendente_aprovacao" | "rejeitado"
  status                     // "em_andamento" | "encerrado" | "rascunho"
  criterio_pontuacao         // Default: "soma_percentual_acerto"
  pontuacao_maxima           // Calculado: len(simulados) * 100
  total_participantes
  created_at
  updated_at
}
```

### 8.9 Participação em Desafio

```
{
  id
  desafio_id
  aluno_id
  simulados_feitos[]         // Lista de {simulado_id, nota, data}
  pontuacao_atual            // Soma das % de acerto dos simulados feitos
  posicao_ranking            // Posição atual no ranking do desafio
  entrou_em
  ultima_atividade
}
```

---

## 9. Regras de Negócio

### 9.1 Importação e Questões

1. Ao importar PDF, todas as questões são extraídas e classificadas automaticamente (simulação de IA)
2. Um simulado é criado automaticamente com as questões da importação (status: rascunho)
3. O conteudista pode editar tudo enquanto o simulado estiver em rascunho
4. Após publicação, se nenhum aluno iniciou o simulado, ainda pode editar
5. Após um aluno iniciar/finalizar o simulado, questões e alternativas ficam **travadas**
6. Questão travada pode ser **reutilizada** em outros simulados, mas não pode ser alterada
7. Código da questão: `[CÓDIGO_IMPORTAÇÃO]-Q[NÚMERO]` para importadas, ou código manual

### 9.2 Simulados do Aluno

1. Aluno pode importar PDF e criar simulados para uso pessoal
2. Simulados do aluno nascem com status `privado`
3. Aluno pode compartilhar diretamente (por link ou email/username)
4. Para tornar público, precisa solicitar aprovação → vai para fila de curadoria
5. Curadoria pode aprovar o simulado completo ou questão por questão
6. Se rejeitado, aluno recebe o motivo e pode corrigir e reenviar

### 9.3 Compartilhamento

1. **Por link:** Qualquer pessoa com o link acessa. Se não tiver conta, é direcionada ao cadastro. Após cadastro, tem acesso ao simulado
2. **Por email/username:** Somente os destinatários acessam. Se o email não está cadastrado, a pessoa recebe convite para se cadastrar
3. Simulados compartilhados aparecem na aba "Compartilhados comigo" do destinatário

### 9.4 Curadoria

1. Itens são direcionados para conteudistas com competência na área das questões
2. Conteudista pode aprovar/rejeitar questão individual ou simulado completo
3. Rejeição obriga preenchimento de motivo
4. Aluno é notificado do resultado da curadoria

### 9.5 Gamificação

1. XP é concedido ao finalizar simulado (não ao abandonar)
2. Streak conta dias consecutivos com pelo menos 1 simulado finalizado
3. Badges são concedidos automaticamente quando o critério é atingido
4. Ranking é atualizado em tempo real

### 9.6 Desafios

1. Desafios precisam de **no mínimo 2 simulados**
2. **Pontuação no desafio = soma da % de acerto de cada simulado feito pelo aluno** (máximo N × 100)
3. Apenas a **melhor tentativa** de cada simulado conta pra pontuação do desafio
4. Desafio com `data_fim` definida é **encerrado automaticamente** na data — depois disso o ranking é congelado
5. Desafios **contínuos** (sem data fim) ficam eternamente em andamento até o criador encerrar
6. **Aluno criando desafio público:** mesma lógica dos simulados — nasce privado, precisa solicitar publicação → curadoria
7. **Conteudista criando desafio:** pode publicar direto (pra turma ou público), sem passar por curadoria
8. **Conteudista vincula desafio a turma:** só alunos da turma podem participar
9. Aluno pode participar de **múltiplos desafios simultaneamente**
10. Sair do desafio **remove a participação e as pontuações**, mas não afeta os simulados feitos (que continuam no histórico geral)

---

## 10. Fluxos Principais

### Fluxo 1: Conteudista importa PDF e publica simulado

```
Login → Dashboard Conteudista → Importar PDF
  → Preenche nome, código, seleciona arquivo
  → [Loading: extraindo questões...]
  → Revisão de Questões Extraídas
    → Edita enunciados, alternativas, campos BNCC, nível
    → Clica "Criar simulado com estas questões"
      → Modal: define nome, código, tempo limite
      → Simulado criado (status: rascunho)
  → Lista de Simulados → Seleciona o simulado
    → Reordena questões, adiciona/remove questões
    → Clica "Publicar"
    → Confirmação: "Publicar simulado? Após alunos realizarem, não poderá ser editado."
    → Simulado publicado ✓
```

### Fluxo 2: Aluno realiza simulado público

```
Login → Dashboard Aluno → Explorar Simulados
  → Filtra por área/habilidade
  → Seleciona simulado → Tela de início
    → Escolhe usar cronômetro ou não
    → Clica "Começar"
  → Tela de Questão (loop):
    → Lê enunciado → Seleciona alternativa → Próxima
    → Pode marcar para revisão, navegar livremente
  → Clica "Finalizar"
    → Confirmação (se há questões sem resposta)
  → Tela de Resultado:
    → Vê nota, gabarito, desempenho por BNCC
    → Vê posição no ranking, XP ganho
    → Badge desbloqueado? → Notificação de conquista
```

### Fluxo 3: Aluno importa PDF e solicita publicação

```
Login → Dashboard Aluno → Meus Simulados → Importar PDF
  → Preenche nome, seleciona arquivo
  → [Loading...]
  → Revisão de questões (simplificada)
  → Salva → Simulado criado (status: privado)
  → Lista "Meus Simulados" → Seleciona simulado
    → Compartilhar (link ou email) — uso imediato
    → Ou: "Solicitar publicação pública"
      → Confirmação: "Enviar para curadoria?"
      → Status muda para "Pendente de aprovação"
  → Conteudista recebe na fila de curadoria
    → Revisa → Aprova (total ou por questão) ou Rejeita (com motivo)
  → Aluno é notificado do resultado
```

### Fluxo 4: Admin gerencia conteudista

```
Login → Dashboard Admin → Gerenciamento de Usuários → Conteudistas
  → Clica "+ Novo Conteudista"
  → Preenche: nome, email, senha, áreas de atuação, formação, instituição
  → Salva → Conteudista criado ✓
  → Lista: pode editar dados ou bloquear/desbloquear
```

---

## Navegação (Menus)

### Menu Admin
- Dashboard
- Usuários → Conteudistas | Alunos
- (futuro: Configurações)

### Menu Conteudista
- Dashboard
- Importar PDF
- Banco de Questões
- Simulados
- Desafios
- Meus Alunos (Sala)
- Curadoria

### Menu Aluno
- Dashboard
- Explorar Simulados
- Meus Simulados
- Ranking (inclui aba de Desafios)
- Perfil
