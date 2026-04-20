# HelenAI — Estimativa de Desenvolvimento

Estimativa de esforço, prazo e custo para levar a HelenAI do **protótipo visual navegável** (estado atual) até **produto operando em piloto**, alinhada ao roadmap de execução do `APRESENTACAO_CENTELHA.md` e ao `ROADMAP_PROTOTIPO.md`.

> **Status atual:** 65 itens do MVP visual concluídos (36 telas, 10 de 11 fases). Backend, IA real, autenticação e persistência ainda não existem — são 100% do esforço estimado abaixo.

---

## 1. Premissas

- **Pronto (não entra na estimativa):** protótipo HTML/CSS/JS com dados fake, 36 telas navegáveis, documentação de UX, fluxos e regras de negócio (MVP_TELAS.md), identidade visual e acessibilidade front-end.
- **A estimar:** backend Django, API REST, IA real (extração + simplificação + classificação), integração do front com a API, autenticação, persistência, acessibilidade avançada (TTS/LIBRAS reais), deploy e validação com PcDs.
- **Base de cálculo:** horas de trabalho por papel, convertidas em BRL usando faixas médias de mercado 2026 para PJ/bolsa em projeto acadêmico-incubado.
- **Taxas de referência (R$/hora):**
  - Full Stack Sênior (Django + React/JS): **R$ 120–160**
  - ML Engineer / Cientista de dados: **R$ 150–200**
  - Dev Júnior (bolsa Centelha): **R$ 50–80**
  - UX/QA acessibilidade: **R$ 80–120**
  - Gestão de projeto: **R$ 100–140**
- **Time assumido:** 2 devs full-time (1 sênior + 1 júnior) + 1 ML part-time + QA/UX pontual, conforme equipe descrita na apresentação.

---

## 2. Fases alinhadas ao roadmap Centelha

| Fase | Descrição | Janela | Entrega |
|---|---|---|---|
| **F1** | Validação com PcDs + ajustes UX | Mês 1 – Mês 3 | Relatório de usabilidade + backlog ajustado |
| **F2** | MVP técnico (backend + IA + integração) | Mês 3 – Mês 6 | Produto funcional em homologação |
| **F3** | Piloto (3–5 escolas parceiras) | Mês 6 – Mês 9 | Deploy público + onboarding de escolas + banco inicial |
| **F4** | Escala + pós-MVP (Fases 10/12/13 do roadmap) | Mês 9 – Mês 12 | IA no conteudista, comando de voz, módulo Pais |

---

## 3. Estimativa por módulo (MVP técnico — Fases F1 + F2 + F3)

### 3.1 Backend e API

| Módulo | Escopo | Horas |
|---|---|---|
| Fundação Django + DRF | Projeto, settings, PostgreSQL, Docker, CI | 40 |
| Autenticação e perfis | Login, Google OAuth, 3 perfis, permissões, recuperação de senha | 60 |
| Questões + importações | CRUD, versões (original/simples/ledor), BNCC, código único, regra de trava | 80 |
| Simulados + compartilhamento | CRUD, drag & drop persistido, link/email/username, status | 70 |
| Realização de simulado | Sessão, respostas, cronômetro opcional, resultado, gabarito | 60 |
| Curadoria | Fila por área, aprovar/rejeitar questão a questão, notificação | 40 |
| Gamificação | XP, níveis, streak, badges, 3 rankings (geral/desafios/simulados), 4 períodos | 90 |
| Desafios | CRUD, participação, pontuação agregada, turma vinculada | 70 |
| Sala/turma do conteudista | Convite, vinculação, código de turma | 30 |
| Dashboard admin com inclusão | Agregações, donut PcD, barras de uso de acessibilidade | 40 |
| **Subtotal backend** | | **580** |

### 3.2 IA (Helen)

| Feature | Escopo | Horas |
|---|---|---|
| Pipeline de extração de PDF | pdfplumber/unstructured + parsing de alternativas + OCR de imagens | 60 |
| Geração de versão Linguagem Simples | Prompt engineering, avaliação qualitativa, cache | 60 |
| Classificação BNCC automática | Prompt + base de habilidades + validação humana no fluxo | 50 |
| Palavras-chave + tooltips | Extração + glossário | 30 |
| Dica contextual (sem revelar resposta) | Prompt guardrails + testes de vazamento | 30 |
| Explicação humanizada no resultado | Prompt DUA + tom acolhedor | 30 |
| Trilha personalizada + resumo semanal | Lógica sobre desempenho por habilidade | 50 |
| Infra de IA | Provider switching (Anthropic/OpenAI), observabilidade de custo, fallback | 40 |
| **Subtotal IA** | | **350** |

### 3.3 Integração frontend ↔ backend

| Módulo | Escopo | Horas |
|---|---|---|
| Camada de API no front | Substituir `fake-data.js` por fetch/axios, interceptors, auth headers | 60 |
| Estados reais (loading/erro/vazio) | Em todas as 36 telas | 80 |
| Onboarding inclusivo real | Persistir preferências, aplicar recursos automaticamente | 30 |
| Editor de questões (Quill) + BNCC dinâmico | Integrar dropdowns filtrados com API | 40 |
| Gráficos reais (Chart.js) | Dashboards aluno/conteudista/admin com dados do backend | 50 |
| Simulado em tempo real | Cronômetro, navegação, auto-save de respostas | 40 |
| **Subtotal integração** | | **300** |

### 3.4 Acessibilidade avançada e DUA real

| Feature | Escopo | Horas |
|---|---|---|
| Ledor (TTS) com highlight | Web Speech API + destaque do trecho lido + controle de velocidade | 40 |
| LIBRAS | Integração com VLibras/Hand Talk | 30 |
| Testes com leitores de tela | NVDA, VoiceOver, validação WCAG 2.2 AA | 40 |
| Persistência de preferências | Back + sync cross-device | 20 |
| **Subtotal acessibilidade** | | **130** |

### 3.5 Infraestrutura e qualidade

| Item | Escopo | Horas |
|---|---|---|
| Deploy inicial | Railway/Render/VPS, PostgreSQL gerenciado, storage S3 para PDFs | 40 |
| CI/CD | GitHub Actions: lint, testes, deploy automático | 30 |
| Observabilidade | Sentry, logs estruturados, métricas de IA (custo/latência) | 30 |
| Testes automatizados | Unit (críticos) + integração (fluxos 1, 2, 3) + axe-core | 100 |
| Segurança | LGPD (dados PcD sensíveis), rate limiting, backups | 40 |
| **Subtotal infra/QA** | | **240** |

### 3.6 Validação com PcDs (Fase F1)

| Item | Escopo | Horas |
|---|---|---|
| Recrutamento via APAEs/ONGs | Contato, termos de consentimento | 30 |
| Sessões de teste | 10–15 sessões gravadas com análise | 60 |
| Backlog de ajustes | Documentação + priorização | 20 |
| **Subtotal validação** | | **110** |

### 3.7 Gestão, documentação, piloto

| Item | Horas |
|---|---|
| PM + cerimônias ágeis | 80 |
| Documentação técnica (API, ADRs) | 30 |
| Onboarding de escolas no piloto (F3) | 60 |
| **Subtotal gestão** | **170** |

---

## 4. Resumo MVP técnico + piloto

| Bloco | Horas |
|---|---|
| Backend | 580 |
| IA | 350 |
| Integração | 300 |
| Acessibilidade | 130 |
| Infra / QA | 240 |
| Validação com PcDs | 110 |
| Gestão / piloto | 170 |
| **Total MVP + piloto** | **1.880 h** |

### 4.1 Custo estimado (9 meses, F1 + F2 + F3)

| Cenário | Taxa média | Custo |
|---|---|---|
| **Enxuto (bolsa Centelha)** — 1 júnior R$ 60/h + 1 sênior meio-período R$ 130/h + ML pontual + PM | ~R$ 85/h | **~R$ 160.000** |
| **Mercado médio** | ~R$ 120/h | **~R$ 225.000** |
| **Mercado pleno/sênior** | ~R$ 160/h | **~R$ 300.000** |

### 4.2 Custos adicionais (infra + IA, 12 meses)

| Item | Estimativa mensal | Anual |
|---|---|---|
| Hospedagem (app + Postgres + storage) | R$ 200–600 | R$ 2.400–7.200 |
| API de IA (LLM para simplificação, dicas, classificação) | R$ 400–1.500 | R$ 4.800–18.000 |
| Domínio, email transacional, monitoramento | R$ 100–200 | R$ 1.200–2.400 |
| **Infra + IA anual** | | **R$ 8.400 – 27.600** |

---

## 5. Pós-MVP (F4 — Fases 10, 12, 13 do roadmap)

| Fase | Escopo | Horas |
|---|---|---|
| **Fase 10** — IA no conteudista/admin (classificação automática, duplicata, insights) | 5 features | 150 |
| **Fase 12** — Comando de voz (10 itens, Web Speech API, comandos PT-BR) | 10 itens | 120 |
| **Fase 13** — Módulo Pais/Responsáveis (14 telas + backend + convites + simulado familiar) | 14 itens | 280 |
| **Total pós-MVP** | | **550 h** |

**Custo pós-MVP:** R$ 47.000 (enxuto) a R$ 88.000 (mercado médio).

---

## 6. Consolidado 12 meses

| Item | Enxuto | Mercado médio |
|---|---|---|
| MVP + piloto (1.880 h) | R$ 160.000 | R$ 225.000 |
| Pós-MVP (550 h) | R$ 47.000 | R$ 66.000 |
| Infra + IA (anual) | R$ 15.000 | R$ 25.000 |
| **Total 12 meses** | **~R$ 222.000** | **~R$ 316.000** |

---

## 7. Cronograma resumido

```
Mês 1 ─┬─ Validação com PcDs (F1)
       └─ Fundação backend + auth
Mês 2 ──── Questões + importações + IA de extração
Mês 3 ──── Simulados + realização + integração front
Mês 4 ──── Gamificação + desafios + rankings
Mês 5 ──── IA completa (simplificação, dicas, trilha) + dashboard admin
Mês 6 ──── QA, acessibilidade real, homologação → MVP pronto
Mês 7 ─┬─ Deploy piloto, onboarding de 3–5 escolas
       └─ Iniciar Fase 13 (Pais) — precisa de backend estável
Mês 8 ──── Fase 13 concluída + Fase 12 (voz) em paralelo
Mês 9 ──── Piloto consolidado, métricas de inclusão reais
Mês 10-12 ─ Fase 10 (IA conteudista/admin), abertura pública, parcerias
```

---

## 8. Riscos e contingências

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Custo de LLM explodir com adoção | Média | Cache agressivo, modelos menores para tarefas simples, tier interno por aluno |
| Extração de PDF falhar em layouts atípicos | Alta | OCR como fallback + revisão humana no fluxo atual |
| Acessibilidade de LIBRAS (VLibras limitado) | Média | Contingenciar orçamento para Hand Talk API ou pivot para vídeo pré-gravado |
| Parcerias com escolas demorarem | Média | Iniciar contato na F1, não esperar o MVP pronto |
| LGPD / dados de PcDs | Alta (impacto) | Consultoria jurídica pontual, DPA nos termos, anonimização nos dashboards |
| Time sub-dimensionado | Média | **Contingência de 15%** já embutida nas horas |

---

## 9. O que pedimos ao Centelha

Alinhado à seção 9 de `APRESENTACAO_CENTELHA.md`:

- **Financeiro:** R$ 160–225 mil para 9 meses (MVP + piloto), viabilizando 1–2 bolsas de desenvolvimento + API de IA + infra.
- **Mentoria:** modelo de negócio EdTech com impacto social (monetização sem barrar PcDs).
- **Networking:** APAEs, ONGs, secretarias de educação, outras iniciativas de acessibilidade.

---

*Estimativa elaborada em 2026-04-20, baseada no escopo do `MVP_TELAS.md` (1.171 linhas), `ROADMAP_PROTOTIPO.md` (89 itens em 13 fases) e plano de execução do `APRESENTACAO_CENTELHA.md`. Revisar a cada fechamento de fase.*
