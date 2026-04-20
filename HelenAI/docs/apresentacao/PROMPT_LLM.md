# 🤖 Prompt para NotebookLM — Geração de Pitch da HelenAI

Este arquivo contém **um prompt pronto** para você colar no [NotebookLM](https://notebooklm.google.com/) do Google, junto com os 36 PDFs do protótipo da HelenAI, para gerar um pitch/apresentação do produto.

---

## 📋 Passo a passo de uso

### 1. Preparar o NotebookLM

1. Acesse https://notebooklm.google.com/
2. Crie um novo notebook com o nome **"HelenAI — Pitch Centelha"**
3. Clique em **"+ Adicionar fonte"**
4. Faça upload de **todos os 36 PDFs** da pasta `HelenAI/pdfs/` do projeto
5. Aguarde o NotebookLM processar os arquivos (pode levar alguns minutos)

### 2. Colar o prompt abaixo

Após o processamento, cole **literalmente** o prompt da seção "📝 Prompt" abaixo no campo de pergunta do NotebookLM e envie.

### 3. Iterar

O NotebookLM vai gerar um primeiro pitch. Você pode refinar com perguntas adicionais como:
- "Gere uma versão mais curta de 3 minutos"
- "Reescreva focando no impacto social"
- "Crie slides em formato markdown"
- "Liste as 5 telas mais impactantes do protótipo e explique cada uma"
- "Gere um roteiro de vídeo-pitch de 90 segundos"

---

## 📎 Lista de PDFs para enviar

Todos os arquivos estão em `HelenAI/pdfs/`. São **36 PDFs no total**, organizados por módulo:

### Compartilhado (3 PDFs)
- `compartilhado-login.pdf` — Tela de login com 3 perfis de teste
- `compartilhado-cadastro.pdf` — Cadastro de novo aluno
- `compartilhado-recuperar-senha.pdf` — Recuperação de senha

### Módulo Aluno (16 PDFs)
- `aluno-onboarding.pdf` — **Onboarding inclusivo** em 4 passos (diferencial: configura acessibilidade automaticamente com base nas respostas do aluno PcD)
- `aluno-dashboard.pdf` — Dashboard com "Continue de onde parou", desafios ativos, trilha IA, resumo semanal da IA, radar BNCC
- `aluno-explorar-simulados.pdf` — Exploração de simulados com filtros
- `aluno-meus-simulados.pdf` — Simulados criados, importados e realizados pelo aluno
- `aluno-criar-simulado.pdf` — Aluno montando seu próprio simulado
- `aluno-importar-pdf.pdf` — Importação de PDF pelo aluno (privacidade garantida)
- `aluno-revisao-questoes.pdf` — Revisão de questões com **Linguagem Simples gerada por IA**
- `aluno-simulado-inicio.pdf` — Tela de início do simulado com instruções DUA
- `aluno-simulado-questao.pdf` — **Tela de questão com toolbar da IA "Helen"** (Simplificar / Palavras-chave / Dica / Ouvir)
- `aluno-simulado-resultado.pdf` — Resultado com comemoração, explicação IA por questão errada e gabarito DUA
- `aluno-ranking.pdf` — Ranking geral com 4 períodos simultâneos (semana/quinzena/mês/ano)
- `aluno-ranking-desafios.pdf` — **Desafios** (períodos de estudo temáticos com ranking próprio)
- `aluno-desafio-detalhe.pdf` — Detalhe de um desafio com progresso e ranking
- `aluno-criar-desafio.pdf` — Criação de desafio pelo aluno
- `aluno-ranking-simulados.pdf` — Ranking específico por simulado
- `aluno-perfil.pdf` — Perfil com configurações de IA e acessibilidade

### Módulo Conteudista (Professor) (12 PDFs)
- `conteudista-dashboard.pdf` — Dashboard do professor
- `conteudista-importar-pdf.pdf` — Importação de PDFs com extração via IA
- `conteudista-revisao-questoes.pdf` — Revisão das questões extraídas pela IA
- `conteudista-banco-questoes.pdf` — Banco de questões com filtros BNCC
- `conteudista-questao-form.pdf` — Cadastro manual de questão
- `conteudista-simulados.pdf` — Lista de simulados
- `conteudista-simulado-form.pdf` — Criação/edição de simulado
- `conteudista-simulado-resultados.pdf` — Resultados de simulado (métricas de alunos)
- `conteudista-desafios.pdf` — Lista de desafios criados pelo professor
- `conteudista-desafio-form.pdf` — Criação de desafio vinculado à turma
- `conteudista-meus-alunos.pdf` — Gestão de turmas e alunos do professor
- `conteudista-curadoria.pdf` — Fila de curadoria de questões enviadas por alunos

### Módulo Admin (5 PDFs)
- `admin-dashboard.pdf` — **Dashboard com métricas de INCLUSÃO** (alunos PcD por tipo + uso de recursos de acessibilidade) — principal diferencial visual pro Centelha
- `admin-conteudistas.pdf` — Lista de professores
- `admin-conteudista-form.pdf` — Cadastro de professor
- `admin-alunos.pdf` — Lista de alunos com badges de deficiência
- `admin-aluno-form.pdf` — Edição de aluno com painel de acessibilidade declarada

---

## 📝 Prompt

Copie tudo abaixo desta linha e cole no NotebookLM:

---

Você é um copywriter especializado em pitches de startups de impacto social para programas de aceleração e empreendedorismo, como o Centelha.

Eu fiz upload de **36 PDFs** que mostram todas as telas do protótipo visual da **HelenAI**, uma EdTech inclusiva em desenvolvimento. Com base nas imagens/screenshots dessas telas, me ajude a gerar um **pitch estruturado e persuasivo** do produto.

## Contexto do produto

**HelenAI** é uma EdTech inclusiva que prepara **Pessoas com Deficiência (PcDs)** para o ENEM, concursos e seleções públicas. A plataforma aplica três pilares centrais:

1. **Desenho Universal para Aprendizagem (DUA)** — princípios pedagógicos que garantem que o mesmo conteúdo possa ser aprendido de múltiplas formas (representação, ação/expressão, engajamento)
2. **Linguagem Simples** — aplicação da Lei 15.263/2025 (Política Nacional de Linguagem Simples) para reescrever questões em versão mais acessível
3. **Inteligência Artificial** — classificação BNCC automática, geração de dicas contextuais, explicações por questão errada, trilhas personalizadas, resumos semanais

**Slogan:** "Aprendizado sem barreiras — A tecnologia a favor da inclusão"

**Público-alvo principal:** Alunos com deficiência visual, auditiva, intelectual, motora, dislexia, daltonismo, TEA, e quem precisa de materiais mais acessíveis para estudar.

**Projeto inscrito no programa Centelha** (iniciativa de empreendedorismo e inovação para projetos de base tecnológica).

**Equipe (4 pessoas):**
- **Ellen Souza** — IA e Tecnologias Assistivas (líder de pesquisa)
- **Hidelberg Albuquerque** — Machine Learning e PLN
- **Héldon Albuquerque** — Full Stack e Sistemas Distribuídos
- **Romário Elias** — Tecnologias Assistivas para Deficiência Intelectual (5+ anos na APAE)

## Principais diferenciais que você deve destacar no pitch

1. **Acessibilidade nativa, não "plugada"** — a plataforma inteira foi desenhada com PcDs em mente, não é um "acessibilidade no menu". Cada tela tem barra de acessibilidade fixa com 6 toggles (alto contraste, fonte OpenDyslexic, tamanho de fonte, paleta color blind, ledor/TTS, intérprete LIBRAS).

2. **Onboarding inclusivo que configura tudo automaticamente** — logo no cadastro, o aluno responde sobre seu tipo de deficiência. A plataforma ativa automaticamente os recursos certos (ex: daltônico → color blind; dislexia → OpenDyslexic; visual → contraste + ledor + fonte grande; auditiva → LIBRAS; intelectual → Linguagem Simples + ledor).

3. **IA "Helen" como assistente pedagógica** — na hora da prova, o aluno tem uma toolbar com 4 botões: "Simplificar" (reescreve em Linguagem Simples), "Palavras-chave" (destaca termos com tooltip), "Dica" (dá dica sem revelar resposta), "Ouvir questão" (TTS).

4. **Feedback humanizado DUA** — nunca "Você errou", sempre "Vamos revisar juntas?". No gabarito, cada questão errada tem "Helen explica" em tom acolhedor, em 1ª pessoa.

5. **Sistema de Desafios (períodos de estudo gamificados)** — professores E alunos podem criar desafios temáticos que agrupam vários simulados com ranking próprio. Ex: "Revisão Intensiva — Matemática" (8 simulados, 30 dias, 87 participantes competindo).

6. **Dashboard Admin com métricas de Inclusão** — diferencial visível imediatamente para avaliadores: distribuição de alunos PcD por tipo de deficiência + % de alunos usando cada recurso de acessibilidade. Mostra o impacto real da plataforma.

7. **Curadoria colaborativa por área de competência** — alunos podem importar seus próprios PDFs e solicitar publicação pública. Professores da área específica revisam questão por questão antes de tornar público.

8. **Gamificação saudável** — XP, badges, níveis, streaks, rankings (geral + 4 períodos: semana, quinzena, mês, ano), desafios. Tudo pensado com feedback positivo, nunca punitivo.

## Entregável esperado

Gere um pitch estruturado com as seguintes seções:

### 1. Hook (2-3 linhas) — a primeira frase que prende atenção
Abra com um dado ou pergunta que impacte. Ex: "Sabia que X% dos alunos PcD no Brasil..."

### 2. O problema (1 parágrafo)
Descreva a dor real que a HelenAI resolve — acesso desigual ao estudo para ENEM/concursos quando você tem uma deficiência.

### 3. A solução — HelenAI em 3 frases
Explique o que é a plataforma de forma clara e impactante.

### 4. Os diferenciais (bullet points, 4-6 itens)
Use os diferenciais acima. Para cada um, cite o **nome da tela específica** onde o avaliador pode ver aquilo funcionando (ex: "veja `aluno-onboarding.pdf` para o fluxo de anamnese automática").

### 5. Demonstração por fluxo
Descreva 3 fluxos principais narrando as telas em sequência:

**Fluxo 1 — Primeiro acesso de uma aluna com dislexia:**
Do cadastro ao primeiro simulado, mostrando como a plataforma se adapta automaticamente. Cite telas: cadastro → onboarding → dashboard → simulado-inicio → simulado-questao (com toolbar Helen) → simulado-resultado.

**Fluxo 2 — Professor importa um PDF e cria um desafio:**
Mostrando automação + ferramenta pedagógica. Cite telas: importar-pdf → revisao-questoes → simulados → desafio-form.

**Fluxo 3 — Impacto visto pelo Admin:**
Mostrando as métricas de inclusão. Cite `admin-dashboard.pdf` como principal.

### 6. Mercado e impacto
Fale sobre potencial de alcance no Brasil, Lei de Cotas, Lei 15.263/2025, e como a HelenAI cumpre a missão de aprendizado sem barreiras.

### 7. Tecnologia (1 parágrafo curto)
Mencione que é construída com Django + Python + IA + princípios de DUA, sem entrar em tecnicalidade demais.

### 8. Equipe (1 parágrafo)
Apresente os 4 integrantes resumidamente, enfatizando a complementaridade (pesquisa + ML + full stack + expertise em deficiência intelectual).

### 9. Call to action / Próximos passos
Peça apoio do Centelha e explique como será usado.

## Tom e estilo

- **Humano, caloroso, nunca frio ou técnico demais**
- Use "nós", "a gente", "conosco" para criar proximidade
- Exemplos concretos de uso real (não só features genéricas)
- Frases curtas, ritmo rápido
- Emoji ocasional onde fizer sentido (💙 🎯 ⚔ ♿), sem exagero
- Evite jargão técnico de programação
- Mantenha foco em **pessoas** e **impacto**, não em "tecnologia"

## Tamanho

Entre **800 e 1.500 palavras**. Se ficar mais longo, você pode oferecer "versão curta" (300 palavras) depois.

## Extra (opcional)

Ao final do pitch, gere também:
- Uma **frase de slogan alternativa** (máximo 10 palavras)
- Um **tweet de 280 caracteres** divulgando o projeto
- 5 **hashtags** relevantes para redes sociais

Ao gerar, **use explicitamente informações que você consegue ver nos PDFs** — descreva elementos visuais reais das telas (cores, layouts, ícones, componentes), não apenas descrições genéricas. Quando mencionar uma funcionalidade, cite o nome do PDF específico onde ela aparece.

---

**Fim do prompt. Cole tudo acima no NotebookLM.**

---

## 🎨 Dicas para apresentação final

Depois que o NotebookLM gerar o pitch, você pode:

1. **Exportar para Google Docs** — o NotebookLM tem botão de exportar
2. **Criar slides** pedindo: "Com base nesse pitch, gere um roteiro de 8 slides em markdown, um slide por seção, com os 3 bullets mais importantes de cada."
3. **Gerar roteiro de vídeo-pitch** (90 segundos): "Transforme esse pitch em um roteiro de vídeo-pitch de 90 segundos narrado em primeira pessoa, com marcações de tempo e sugestão de imagem/tela do protótipo para cada bloco."
4. **Versão escrita formal** para inscrição: "Reescreva esse pitch em tom formal e corporativo para o formulário de inscrição do Centelha, em terceira pessoa, com até 3.000 caracteres."
5. **FAQ antecipado**: "Liste as 10 perguntas mais prováveis que os avaliadores do Centelha vão fazer sobre esse projeto, com uma resposta curta e honesta para cada."

## 🔗 Recursos adicionais

- Protótipo rodando local: `http://127.0.0.1:8020/compartilhado/login.html` (usuários de teste: `admin@helen.ai/admin`, `conteudista@helen.ai/conteudista`, `aluno@helen.ai/aluno`)
- **Apresentação navegável:** `http://127.0.0.1:8020/apresentacao.html` — 14 slides já prontos com setas do teclado
- **PDF da apresentação:** `HelenAI/pdfs/apresentacao-completa.pdf` (14 páginas, 5MB)
- **PDF completo do protótipo:** `HelenAI/pdfs/helenai-completo.pdf` (36 páginas, 5,1MB) — todas as telas em fluxo, com bookmarks hierárquicos (Compartilhado → Aluno → Conteudista → Admin). Disponível também como botão verde "📄 Baixar PDF completo" na tela de login.
- Documentação completa: `HelenAI/docs/produto/MVP_TELAS.md` (todas as telas e regras de negócio)
- Decisões de design: `HelenAI/docs/produto/DECISOES_CLAUDE.md`
- Roadmap do protótipo: `HelenAI/docs/produto/ROADMAP_PROTOTIPO.md`
- Apresentação estruturada (texto): `HelenAI/docs/apresentacao/APRESENTACAO_CENTELHA.md`
- Tour guiado pelas telas: `HelenAI/docs/apresentacao/TOUR_TELAS.md`
