# HelenAI — Apresentação Centelha

> **Aprendizado sem barreiras. A tecnologia a favor da inclusão.**

Documento estruturado para apresentação do projeto **HelenAI** ao programa Centelha de empreendedorismo e inovação.

## 🎯 Materiais de apresentação disponíveis

| Material | Caminho | Uso |
|---|---|---|
| **Apresentação navegável** (14 slides HTML) | `HelenAI/prototipos/apresentacao.html` | Pitch ao vivo no projetor — abre no navegador, navegação por setas, F = tela cheia, M = menu |
| **PDF da apresentação** (14 páginas) | `HelenAI/pdfs/apresentacao-completa.pdf` | Anexar em emails, formulários, distribuir como PDF |
| **PDF completo do protótipo** (36 páginas) | `HelenAI/pdfs/helenai-completo.pdf` | Todas as telas em ordem de fluxo, com bookmarks por módulo. Botão "📄 Baixar PDF completo" na tela de login |
| **Documento estruturado** (este arquivo) | `HelenAI/docs/apresentacao/APRESENTACAO_CENTELHA.md` | Conteúdo completo escrito (4500+ palavras) |
| **Tour pelas telas** | `HelenAI/docs/apresentacao/TOUR_TELAS.md` | Guia narrado pelos 6 fluxos principais (20 min) |
| **Prompt para NotebookLM** | `HelenAI/docs/apresentacao/PROMPT_LLM.md` | Gerar pitch automaticamente via IA com os 36 PDFs |
| **36 PDFs de telas** | `HelenAI/pdfs/*.pdf` | Catálogo visual completo do protótipo |

**Para o pitch ao vivo, recomendamos:** abra `apresentacao.html`, pressione `F` pra tela cheia, e use as setas pra navegar pelos 14 slides.

---

---

## 1. Resumo executivo

**HelenAI** é uma EdTech inclusiva que prepara **Pessoas com Deficiência (PcDs)** para o ENEM, concursos e seleções públicas. A plataforma aplica três pilares centrais — **Desenho Universal para Aprendizagem (DUA)**, **Linguagem Simples** (Lei 15.263/2025) e **Inteligência Artificial** — para oferecer uma experiência de estudo acessível, adaptada automaticamente ao perfil de cada aluno.

**Em uma frase:** é a primeira plataforma de preparação para ENEM e concursos desenhada desde o início para PcDs, onde cada tela e cada interação foi pensada para remover barreiras de acesso ao conhecimento.

---

## 2. O problema

No Brasil, **pessoas com deficiência** enfrentam barreiras desproporcionais no acesso ao estudo para exames competitivos:

- **Materiais didáticos** não são adaptados — textos são longos, com termos técnicos, linguagem complexa
- **Plataformas existentes** tratam acessibilidade como "recurso extra" plugado depois, não como princípio de design
- **Falta de personalização** — um aluno com dislexia recebe o mesmo conteúdo de um aluno sem deficiência
- **Falta de feedback humanizado** — plataformas usam linguagem punitiva ("Você errou") que desmotiva estudantes que já enfrentam muitas barreiras
- **Desconhecimento da Lei 15.263/2025** (Política Nacional de Linguagem Simples), que determina que comunicações públicas devem ser compreensíveis para todos

A consequência é clara: PcDs têm taxas menores de ingresso em universidades e concursos públicos, não por falta de capacidade, mas por falta de **acesso adequado ao estudo**.

---

## 3. A solução — HelenAI

Uma plataforma de estudos onde **acessibilidade é o produto**, não um opcional:

- **Onboarding inclusivo que configura tudo automaticamente** — no primeiro acesso, o aluno informa seu tipo de deficiência e a plataforma ativa os recursos certos sozinha
- **IA "Helen" como assistente pedagógica** — reescreve questões em Linguagem Simples, destaca palavras-chave, dá dicas contextuais, explica questões erradas com tom acolhedor
- **Barra de acessibilidade nativa em todas as telas** — 6 toggles sempre visíveis (alto contraste, fonte para dislexia, tamanho de fonte, color blind, ledor/TTS, intérprete LIBRAS)
- **Gamificação saudável** — XP, badges, níveis, rankings periodizados, e um sistema de **desafios temáticos** que professores e alunos podem criar juntos
- **Dashboard administrativo com métricas de inclusão** — distribuição de PcDs por tipo + % de uso de cada recurso de acessibilidade, mostrando impacto real

---

## 4. Os 8 diferenciais

### 4.1. Acessibilidade nativa, não plugada

A plataforma inteira foi desenhada com PcDs em mente. Cada tela tem barra de acessibilidade fixa com 6 toggles, persistência de preferências, suporte nativo a leitor de tela.

> 📄 Ver: `compartilhado-login.pdf` — note a barra de acessibilidade fixa no canto inferior direito já na tela de login, antes mesmo do usuário estar logado.

### 4.2. Onboarding inclusivo que adapta a plataforma automaticamente

Após cadastro, o aluno passa por 4 passos: boas-vindas → tipo de deficiência → preferências → resumo. A plataforma **ativa automaticamente** os recursos certos com base nas respostas:

| Declaração | Recursos ativados automaticamente |
|---|---|
| Daltonismo | Paleta Color Blind |
| Dislexia | Fonte OpenDyslexic |
| Visual | Alto contraste + ledor + fonte grande |
| Auditiva | LIBRAS |
| Intelectual | Linguagem Simples + ledor |
| TEA | Interface calma (animações reduzidas) |
| Motora | Navegação otimizada por teclado |

> 📄 Ver: `aluno-onboarding.pdf` — fluxo completo em 4 passos com tom humanizado.

### 4.3. IA "Helen" como assistente pedagógica

Na hora da prova, o aluno tem uma toolbar com 4 botões poderosos:

- **`💡 Simplificar`** — reescreve o enunciado em Linguagem Simples (Lei 15.263/2025), mostra lado a lado com o original
- **`🔑 Palavras-chave`** — destaca termos técnicos com tooltip explicativo
- **`📖 Dica`** — IA dá uma dica contextual **sem revelar a resposta**
- **`🔊 Ouvir questão`** — TTS com destaque do trecho sendo lido

> 📄 Ver: `aluno-simulado-questao.pdf` — modo focado com toolbar da Helen no topo do enunciado.

### 4.4. Feedback humanizado DUA

Nenhum texto na plataforma usa linguagem punitiva. Aplicamos os princípios do DUA (Desenho Universal para Aprendizagem) em cada mensagem:

- "Você errou" → **"Vamos revisar juntas? 💪"**
- "Nota baixa" → **"Você está progredindo! Foque nessas habilidades para melhorar."**
- "Tempo esgotado" → **"Sem pressa — você pode continuar quando quiser."**

Na tela de resultado, cada questão errada tem um card azul-ciano com **"Helen explica"** em primeira pessoa, tom acolhedor.

> 📄 Ver: `aluno-simulado-resultado.pdf` — gabarito com explicações humanizadas da Helen.

### 4.5. Sistema de Desafios (períodos de estudo gamificados)

Professores **e alunos** podem criar desafios temáticos que agrupam vários simulados com ranking próprio. Exemplos reais no protótipo:

- **"Revisão Intensiva — Matemática"** — criado por professor, vinculado à turma ENEM 2026 Intensivo, 5 simulados, 87 alunos participando, termina em 30/04
- **"Período de Estudos — Linguagens"** — desafio contínuo (sem prazo), 4 simulados, 54 alunos
- **"Desafio Inclusivo da Maria"** — criado por uma aluna, compartilhado com 8 amigas

Cada desafio tem:
- Ranking próprio (pontuação = soma da % de acerto nos simulados)
- Progresso individual do aluno
- Pódio top 3 + tabela completa
- Filtros e ordenação pelo "meu status"

> 📄 Ver: `aluno-ranking-desafios.pdf`, `aluno-desafio-detalhe.pdf`, `conteudista-desafios.pdf`

### 4.6. Dashboard Admin com métricas de Inclusão

**Principal diferencial visual** para avaliadores do Centelha: o dashboard do administrador tem uma seção dedicada chamada **"💙 Impacto e Inclusão"** logo após as métricas principais, mostrando:

- **Donut chart** de alunos PcD por tipo de deficiência (Visual 127, Auditiva 98, Intelectual 84, Dislexia 156, etc)
- **Barras animadas** com % de alunos usando cada recurso de acessibilidade:
  - Linguagem Simples: **47%** (586 alunos)
  - Ledor: **34%** (424 alunos)
  - Alto Contraste: **28%** (349 alunos)
  - Fonte OpenDyslexic: **22%** (274 alunos)
  - LIBRAS: **11%** (137 alunos)
  - Color Blind: **8%** (100 alunos)

Isso transforma a missão social da HelenAI em números concretos — **não estamos só falando de inclusão, estamos medindo**.

> 📄 Ver: `admin-dashboard.pdf` — seção "Impacto e Inclusão" em destaque.

### 4.7. Curadoria colaborativa por área de competência

Alunos podem importar seus próprios PDFs (concursos antigos, apostilas, provas anteriores) e:
- Estudar privadamente (padrão)
- Compartilhar com amigos específicos (link/email)
- Solicitar publicação pública → professores da **área específica** revisam questão por questão antes de aprovar

Isso cria um ciclo virtuoso: quanto mais alunos usam, mais conteúdo de qualidade entra no banco público, curado por especialistas.

> 📄 Ver: `aluno-importar-pdf.pdf`, `aluno-revisao-questoes.pdf`, `conteudista-curadoria.pdf`

### 4.8. IA de extração automática com Linguagem Simples desde a importação

Quando um PDF é importado, a IA processa cada questão e gera **múltiplas versões ao mesmo tempo**:

1. Texto original extraído
2. Versão em **Linguagem Simples** (Lei 15.263/2025)
3. Classificação BNCC (área, competência, habilidade)
4. Nível de dificuldade estimado
5. Palavras-chave com explicação

Tudo pronto antes mesmo do aluno abrir a questão. Não é "sob demanda" — é **por design**.

> 📄 Ver: `aluno-revisao-questoes.pdf` — note o card verde com "Versão em Linguagem Simples · Gerado pela Helen" em cada questão.

---

## 5. Demonstração por fluxo

### Fluxo 1: Primeiro acesso de uma aluna com dislexia

1. **Login** (`compartilhado-login.pdf`) → clica em "Criar conta"
2. **Cadastro** (`compartilhado-cadastro.pdf`) → nome, email, senha
3. **Onboarding** (`aluno-onboarding.pdf`) → 4 passos, marca "Dislexia" + "Prefiro textos simplificados"
4. Plataforma ativa automaticamente fonte OpenDyslexic + Linguagem Simples por padrão
5. **Dashboard** (`aluno-dashboard.pdf`) → vê cards de desafios ativos, trilha IA personalizada, resumo semanal
6. **Explorar Simulados** (`aluno-explorar-simulados.pdf`) → escolhe um
7. **Início do simulado** (`aluno-simulado-inicio.pdf`) → toggle "Usar cronômetro" opcional
8. **Tela de questão** (`aluno-simulado-questao.pdf`) → toolbar "Helen" com 4 botões + já está em Linguagem Simples por padrão
9. **Resultado** (`aluno-simulado-resultado.pdf`) → comemoração + gabarito com explicação IA humanizada por questão errada
10. **Ranking** (`aluno-ranking.pdf`) → vê sua posição nos 4 períodos + pode entrar em desafios

### Fluxo 2: Professor importa PDF, monta simulado e cria desafio

1. **Dashboard Conteudista** (`conteudista-dashboard.pdf`) → visão geral das atividades
2. **Importar PDF** (`conteudista-importar-pdf.pdf`) → upload do arquivo, loading animado
3. **Revisão de questões** (`conteudista-revisao-questoes.pdf`) → IA extraiu 45 questões, professor revisa e ajusta BNCC
4. **Simulados** (`conteudista-simulados.pdf`) → clica em "Criar simulado com estas questões"
5. **Form de simulado** (`conteudista-simulado-form.pdf`) → composição à direita em tempo real
6. **Desafios** (`conteudista-desafios.pdf`) → lista de desafios do professor
7. **Criar desafio** (`conteudista-desafio-form.pdf`) → monta um período de estudos, vincula à turma ENEM 2026, define datas, seleciona 5 simulados
8. **Meus alunos** (`conteudista-meus-alunos.pdf`) → acompanha engajamento

### Fluxo 3: Impacto visto pelo administrador

1. **Login como admin** (`compartilhado-login.pdf`) → redireciona pro dashboard admin
2. **Dashboard Admin** (`admin-dashboard.pdf`) → **principal tela pro Centelha**:
   - 5 métricas animadas (1.247 alunos, 23 conteudistas, 4.580 questões, 87 simulados, 12.340 realizados)
   - Seção "💙 Impacto e Inclusão" com donut de PcDs + barras de uso de acessibilidade
   - Cadastros por mês mostrando crescimento
3. **Lista de alunos** (`admin-alunos.pdf`) → badges de deficiência visíveis em cada aluno, filtro por tipo
4. **Edição de aluno** (`admin-aluno-form.pdf`) → painel lateral mostra acessibilidade declarada **somente leitura** (só o aluno pode alterar)

---

## 6. Mercado e impacto

### Potencial de alcance

- **45+ milhões de brasileiros** têm algum tipo de deficiência (IBGE Censo 2022)
- **1,5 milhão** se inscreveram no ENEM 2023 como PcDs ou requisitaram atendimento especializado
- Lei de Cotas para concursos públicos reserva **20%** das vagas para PcDs — demanda real por preparação adequada
- **Lei 15.263/2025** obriga adoção de Linguagem Simples em comunicações públicas — HelenAI já nasce conformada

### Impacto esperado

- **Quantitativo:** meta de atingir 10.000 alunos PcDs no primeiro ano de operação
- **Qualitativo:** elevar taxa de aprovação de PcDs em ENEM/concursos em 20-30% em relação ao baseline atual
- **Social:** contribuir para a construção de uma cultura digital inclusiva como referência nacional

### Alinhamento com ODS

- **ODS 4** — Educação de Qualidade (acesso inclusivo a aprendizagem de qualidade)
- **ODS 10** — Redução das Desigualdades (inclusão social de pessoas com deficiência)
- **ODS 9** — Indústria, Inovação e Infraestrutura (tecnologia assistiva nacional)

---

## 7. Tecnologia

Protótipo construído com **Django + Python** no backend, **HTML/CSS/JS puro** no frontend (sem frameworks pesados — acessibilidade agradece), **Chart.js** para visualizações, **Quill.js** para editor rico de questões, **Select2** para filtros com busca, **OpenDyslexic** como fonte para dislexia.

A **IA da Helen** será integrada via API em fase posterior, usando modelos de linguagem para as funcionalidades de simplificação, extração de palavras-chave, classificação BNCC automática e geração de dicas contextuais.

Decisões de arquitetura:
- **Sem framework CSS pesado** — customização completa permite atender melhor requisitos de acessibilidade
- **Persistência de preferências no localStorage** — recursos ativados continuam entre sessões
- **Dados fake completos** — o protótipo é 100% navegável sem backend, permitindo testes de usabilidade com usuários reais (incluindo PcDs)

---

## 8. Equipe

Equipe multidisciplinar com 4 integrantes complementares:

| Nome | Papel | Expertise |
|---|---|---|
| **Ellen Souza** | Líder de pesquisa | IA e Tecnologias Assistivas |
| **Hidelberg Albuquerque** | ML Engineer | Machine Learning e Processamento de Linguagem Natural |
| **Héldon Albuquerque** | Full Stack | Full Stack e Sistemas Distribuídos |
| **Romário Elias** | Especialista em DI | 5+ anos na APAE — Tecnologias Assistivas para Deficiência Intelectual |

**Ponto forte do time:** combina **pesquisa acadêmica** (Ellen), **competência técnica em IA** (Hidelberg), **capacidade de construir produtos completos** (Héldon) e **expertise prática de campo** em trabalho com PcDs (Romário). Não é uma equipe só técnica — é uma equipe que **conhece as dores do público-alvo na prática**.

---

## 9. Estado atual e próximos passos

### ✅ Pronto

- **65 itens** implementados no protótipo visual (36 telas únicas cobrindo os 3 perfis)
- **10 de 11 fases** do roadmap completas (Fase 10 — IA no Conteudista/Admin — é pós-MVP)
- Todas as decisões de UX, fluxos e regras de negócio documentadas
- Tour guiado + documentação técnica completa

### 🚀 Próximos passos (roadmap de execução)

**Fase 1 — Validação (1-3 meses)**
- Testes de usabilidade com PcDs reais
- Parcerias com APAEs e ONGs de inclusão
- Ajustes finos de UX baseados em feedback

**Fase 2 — MVP técnico (3-6 meses)**
- Backend Django completo
- Integração com API de IA (OpenAI/Anthropic/Google) para funcionalidades da Helen
- Autenticação + persistência real

**Fase 3 — Piloto (6-9 meses)**
- Deploy em produção
- Onboarding de 3-5 escolas/cursinhos parceiros
- Conteúdo inicial (banco de questões curado)

**Fase 4 — Escala (9-12 meses)**
- Abertura pública
- Parceria com governo (adequação à Lei 15.263/2025)
- Expansão para mais tipos de prova (concursos específicos)

### O que pedimos ao Centelha

- **Apoio financeiro** para desenvolvimento técnico (backend + IA) e contratação de 1-2 desenvolvedores júnior
- **Mentoria** em modelo de negócio de EdTech com impacto social
- **Networking** com outras iniciativas de inclusão e tecnologia assistiva

---

## 10. Contato

**Repositório do protótipo:** (privado, acesso mediante solicitação)
**Email:** (preencher)
**Inscrição Centelha:** (preencher)

---

*Documento gerado com base no protótipo visual da HelenAI — 36 telas implementadas cobrindo os módulos Compartilhado, Aluno, Conteudista e Administrador. PDFs de todas as telas disponíveis em `HelenAI/pdfs/`.*
