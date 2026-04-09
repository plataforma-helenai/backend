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
    │       └── logo-helen.png
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

### Fase 2 — Módulo Admin
> Gerenciamento da plataforma.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 2.1 | Dashboard Admin | `admin/dashboard.html` | Seção 3.1 | [ ] |
| 2.2 | Lista de Conteudistas | `admin/conteudistas.html` | Seção 3.2.1 | [ ] |
| 2.3 | Cadastro/Edição de Conteudista | `admin/conteudista-form.html` | Seção 3.2.2 | [ ] |
| 2.4 | Lista de Alunos | `admin/alunos.html` | Seção 3.2.3 | [ ] |
| 2.5 | Edição de Aluno | `admin/aluno-form.html` | Seção 3.2.4 | [ ] |

**Interações fake:**
- Cards com números estáticos
- Gráficos com Chart.js ou estáticos (imagem)
- Tabelas com dados mockados, filtros visuais, paginação fake
- Botões de ação abrem formulários

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
| 7.1 | Meus Simulados | `aluno/meus-simulados.html` | Seção 5.4.1 | [ ] |
| 7.2 | Criar Simulado | `aluno/criar-simulado.html` | Seção 5.4.2 | [ ] |
| 7.3 | Importar PDF (Aluno) | `aluno/importar-pdf.html` | Seção 5.4.3 | [ ] |
| 7.4 | Modal de Compartilhamento | (componente em meus-simulados) | Seção 5.5.1 | [ ] |

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
| 8.9 | Onboarding inclusivo (tipo de deficiência, preferências) | `aluno/onboarding.html` | Seção 6.5.4 | [ ] |
| 8.10 | Feedback humanizado (mensagens DUA) | Global — todos os textos do módulo aluno | Seção 6.5.4 | [ ] |

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
> Gerenciamento da plataforma. Prioridade menor — fazer depois do fluxo do aluno.

| # | Tela | Arquivo | Referência MVP_TELAS.md | Status |
|---|------|---------|-------------------------|--------|
| 9.1 | Dashboard Admin | `admin/dashboard.html` | Seção 3.1 | [ ] |
| 9.2 | Lista de Conteudistas | `admin/conteudistas.html` | Seção 3.2.1 | [ ] |
| 9.3 | Cadastro/Edição de Conteudista | `admin/conteudista-form.html` | Seção 3.2.2 | [ ] |
| 9.4 | Lista de Alunos | `admin/alunos.html` | Seção 3.2.3 | [ ] |
| 9.5 | Edição de Aluno | `admin/aluno-form.html` | Seção 3.2.4 | [ ] |

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

## Resumo por Fase

| Fase | Descrição | Itens | Prioridade | Status |
|------|-----------|-------|------------|--------|
| **0** | Base e Componentes | 6 | Obrigatória | ✅ Completa |
| **1** | Autenticação | 3 | Obrigatória | ✅ Completa |
| **2** | Admin | 5 | Baixa | ⏳ Pendente (virou Fase 9) |
| **3** | Conteudista: Importação e Questões | 5 | Alta | ✅ Completa |
| **4** | Conteudista: Simulados e Gestão | 5 | Alta | ✅ Completa |
| **5** | Aluno: Dashboard e Explorar | 4 | Alta | ✅ Completa |
| **6** | Aluno: Realizar Simulado | 3 | Alta | ✅ Completa |
| **7** | Aluno: Criação e Compartilhamento | 4 | Média | ⏳ Pendente |
| **8** | Aluno: IA, Linguagem Simples e DUA | 10 | **Alta** | ⏳ Pendente |
| **9** | Admin (movido da Fase 2) | 5 | Baixa | ⏳ Pendente |
| **10** | IA no Conteudista/Admin (futuro) | 5 | Baixa | ⏳ Futuro |

**Total: 55 itens**

---

## Ordem Recomendada de Execução

```
✅ Fase 0 (base) → ✅ Fase 1 (login) → ✅ Fase 3 (importação/questões) → ✅ Fase 4 (simulados/gestão)
→ ✅ Fase 5 (dashboard/explorar/perfil/ranking) → ✅ Fase 6 (realizar simulado + IA/DUA da Fase 8)
→ Fase 7 (aluno criando) → Fase 8 restante → Fase 9 (admin) → Fase 10 (futuro)
```

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
