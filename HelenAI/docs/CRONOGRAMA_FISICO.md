# HelenAI — Cronograma Físico de Atividades (12 meses)

Plano de execução do projeto **HelenAI** — EdTech inclusiva para preparação de PcDs ao ENEM, concursos e seleções públicas — considerando o período de 12 meses (**Mês 1 a Mês 12**).

> **Referência de datas:** Mês 1 = Maio/2026 (início após aprovação Centelha). Mês 12 = Abril/2027.
> **Responsável:** coluna deixada em aberto para preenchimento pela equipe no momento da submissão.

---

## Resumo das 10 Etapas

| # | Etapa | Janela | Foco |
|---|---|---|---|
| 1 | Validação com PcDs e pesquisa de usuário | Mês 1 – Mês 3 | Ajustar o protótipo a partir do uso real |
| 2 | Fundação técnica: backend e infraestrutura | Mês 1 – Mês 2 | Base Django, autenticação, deploy inicial |
| 3 | Módulo de Conteúdo: questões, importação e banco | Mês 2 – Mês 4 | Importar PDF, classificar BNCC, banco público |
| 4 | Módulo Pedagógico: simulados, realização e resultados | Mês 3 – Mês 5 | Realizar simulado + gabarito + curadoria |
| 5 | Inteligência Artificial "Helen" | Mês 3 – Mês 6 | Linguagem Simples, dicas, explicações, trilha |
| 6 | Gamificação, Desafios e Rankings | Mês 4 – Mês 6 | XP, badges, rankings, desafios por turma |
| 7 | Acessibilidade DUA e conformidade WCAG 2.2 AA | Mês 5 – Mês 7 | TTS, LIBRAS, homologação acessível |
| 8 | Dashboard Admin e Métricas de Impacto | Mês 6 – Mês 7 | Impacto e Inclusão com dados reais |
| 9 | Piloto com escolas parceiras | Mês 7 – Mês 10 | 3–5 parcerias em operação + iteração |
| 10 | Negócio, LGPD, divulgação e escala | Mês 8 – Mês 12 | Abertura pública + parcerias institucionais |

---

## Etapa 1 — Validação com PcDs e pesquisa de usuário
**Período:** Mês 1 a Mês 3
**Indicadores da etapa:**
- Nº de PcDs participantes das sessões
- Nº de sessões de usabilidade realizadas
- Nº de ajustes de UX priorizados no backlog

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 1.1 | Parcerias para recrutamento de PcDs | Mapear e formalizar contato com APAEs, ONGs e cursinhos populares para recrutamento de voluntários | Mês 1 | Mês 2 | Firmar parceria com ao menos 3 instituições |
| 1.2 | Sessões de usabilidade do protótipo | Conduzir sessões gravadas (presencial e remoto) com PcDs de 4 tipos de deficiência diferentes, seguindo protocolo Think Aloud | Mês 2 | Mês 3 | Realizar 15 sessões com PcDs de pelo menos 4 tipos diferentes |
| 1.3 | Entrevistas com especialistas em DUA | Entrevistar professores e terapeutas com experiência em Desenho Universal para Aprendizagem e Linguagem Simples | Mês 1 | Mês 3 | Entrevistar 8 especialistas (educação + acessibilidade) |
| 1.4 | Consolidação do backlog de UX | Sistematizar achados em relatório + priorizar ajustes no protótipo antes de integrar com backend | Mês 3 | Mês 3 | Publicar relatório + backlog com 30+ itens priorizados |
| 1.5 | Revisão das regras de Linguagem Simples | Revalidar regras de simplificação (Lei 15.263/2025) com os dados coletados | Mês 3 | Mês 3 | Documento de diretrizes v2 publicado |

---

## Etapa 2 — Fundação técnica: backend e infraestrutura
**Período:** Mês 1 a Mês 2
**Indicadores da etapa:**
- Ambiente de homologação disponível
- Cobertura de testes unitários dos módulos de base
- Nº de endpoints autenticados publicados

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 2.1 | Setup Django + PostgreSQL + Docker + CI/CD | Criar projeto Django 5, configurar Postgres gerenciado, Dockerfile, pipeline GitHub Actions com testes e deploy automático | Mês 1 | Mês 1 | Pipeline verde rodando em ambiente de staging |
| 2.2 | Modelagem de dados e migrations iniciais | Implementar os 9 modelos do MVP_TELAS (Questão, Simulado, Usuário, Desafio, etc.) com migrations reversíveis | Mês 1 | Mês 2 | 9 modelos criados + 100% de cobertura de migrations |
| 2.3 | Autenticação e perfis de acesso | Implementar login email/senha + Google OAuth + 3 perfis (Aluno/Conteudista/Admin) com permissões DRF | Mês 2 | Mês 2 | 3 perfis funcionais + 95% de cobertura de testes no módulo auth |
| 2.4 | Observabilidade e segurança base | Configurar Sentry, logs estruturados, rate limiting, backup diário do banco | Mês 2 | Mês 2 | Monitoramento ativo + rotina de backup verificada |
| 2.5 | Ambiente de homologação público | Publicar backend em nuvem (Railway/Render) com domínio de homologação e TLS | Mês 2 | Mês 2 | URL de homologação acessível ao time com TLS A+ |

---

## Etapa 3 — Módulo de Conteúdo: questões, importação e banco
**Período:** Mês 2 a Mês 4
**Indicadores da etapa:**
- Nº de questões extraídas automaticamente por PDF
- Taxa de acerto da extração validada por conteudista
- Nº de questões no banco público

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 3.1 | API de questões com múltiplas versões | Implementar CRUD que armazena original + Linguagem Simples + palavras-chave + versão ledor em uma única entidade | Mês 2 | Mês 3 | Endpoint publicado com 100% dos campos do schema MVP |
| 3.2 | Pipeline de importação de PDF | Integrar biblioteca de parsing (pdfplumber + OCR de fallback) para upload, extração e envio para revisão | Mês 3 | Mês 4 | Extrair com acerto ≥ 80% em 10 PDFs-teste de diferentes layouts |
| 3.3 | Classificação BNCC automática | Aplicar IA para sugerir área, competência, habilidade e nível de dificuldade na importação | Mês 3 | Mês 4 | Classificação correta em ≥ 75% das questões (validação humana) |
| 3.4 | Banco público + banco pessoal do aluno | Implementar regras de visibilidade (público/privado/compartilhado) e separação dos bancos | Mês 3 | Mês 4 | Regras de negócio 10.1 a 10.3 do MVP_TELAS 100% cobertas em testes |
| 3.5 | Integração do front do Conteudista | Substituir `fake-data.js` das telas do conteudista por chamadas reais à API | Mês 4 | Mês 4 | 10 telas do conteudista integradas e operantes em staging |

---

## Etapa 4 — Módulo Pedagógico: simulados, realização e resultados
**Período:** Mês 3 a Mês 5
**Indicadores da etapa:**
- Nº de simulados publicados
- Tempo médio de conclusão do fluxo de realização
- Nº de itens passados pela curadoria

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 4.1 | CRUD de simulados e compartilhamento | Implementar criação, reordenação (drag & drop persistido), publicação, despublicação e compartilhamento por link/email/username | Mês 3 | Mês 4 | Fluxos 1 e 3 do MVP_TELAS rodando end-to-end |
| 4.2 | Realização do simulado | Implementar sessão, auto-save de respostas, cronômetro opcional, marcar para revisão, navegação livre | Mês 4 | Mês 5 | 100% das interações da tela 5.3.2 suportadas pelo backend |
| 4.3 | Tela de resultado com BNCC | Calcular acertos, % por área/habilidade, comparativo e XP ganho na conclusão | Mês 4 | Mês 5 | Relatório gerado em < 2s para simulados com até 30 questões |
| 4.4 | Fila de curadoria por área de competência | Direcionar itens pendentes aos conteudistas da área correspondente e permitir aprovar/rejeitar questão a questão | Mês 5 | Mês 5 | Fluxo 3 do MVP_TELAS operando com notificação ao aluno |
| 4.5 | Integração do front do Aluno | Conectar dashboard, explorar, realizar e resultado às APIs reais | Mês 5 | Mês 5 | 10 telas do aluno integradas em staging |

---

## Etapa 5 — Inteligência Artificial "Helen"
**Período:** Mês 3 a Mês 6
**Indicadores da etapa:**
- Taxa de aprovação humana das versões simplificadas
- Custo por questão processada pela IA
- Latência média das chamadas

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 5.1 | Geração de Linguagem Simples (Lei 15.263/2025) | Prompt engineering + guardrails para reescrever enunciados conforme diretrizes da Lei 15.263/2025 | Mês 3 | Mês 4 | Aprovação humana ≥ 85% em amostra de 200 questões |
| 5.2 | Extração de palavras-chave com explicações | Identificar termos técnicos e gerar definições curtas em Linguagem Simples para tooltip | Mês 4 | Mês 5 | Cobertura de palavras-chave em 90% das questões processadas |
| 5.3 | Dica contextual sem revelar resposta | Testar guardrails com bateria de casos adversariais para evitar vazamento da resposta | Mês 5 | Mês 5 | 0% de vazamento em 300 casos-teste automatizados |
| 5.4 | Explicação humanizada de questões erradas | Prompt com tom DUA (acolhedor, não punitivo) para cada questão errada no resultado | Mês 5 | Mês 6 | Aprovação de tom por 10 especialistas em DUA ≥ 90% |
| 5.5 | Trilha personalizada + resumo semanal | Analisar desempenho por habilidade BNCC e gerar recomendações semanais contextualizadas | Mês 5 | Mês 6 | Card "Resumo semanal" e "Trilha recomendada" em produção |

---

## Etapa 6 — Gamificação, Desafios e Rankings
**Período:** Mês 4 a Mês 6
**Indicadores da etapa:**
- Nº de desafios criados (aluno + conteudista)
- Nº médio de participantes por desafio
- Retenção semanal de alunos com streak ativo

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 6.1 | XP, níveis, badges e streak | Implementar regras da seção 7.1 do MVP_TELAS + triggers automáticos na conclusão de simulado | Mês 4 | Mês 5 | 8 badges operacionais + cálculo de streak com cutoff por fuso |
| 6.2 | 3 rankings (Geral / Desafios / Por Simulado) | Implementar agregações por 4 períodos (semana, quinzena, mês, ano) + cache | Mês 5 | Mês 5 | Ranking atualiza em ≤ 5 min após novo resultado |
| 6.3 | CRUD de desafios e participação | Criar fluxo do aluno, conteudista e admin + cálculo de pontuação agregada pela soma de % de acerto | Mês 5 | Mês 6 | Regras 10.6 do MVP_TELAS 100% cobertas em testes |
| 6.4 | Sala/turma do conteudista | Código de turma único, convite por email, vinculação via código na área do aluno | Mês 5 | Mês 6 | Turmas funcionais em ≥ 2 cursinhos parceiros |
| 6.5 | Notificações e feedback humanizado | Sistema de notificações in-app com linguagem DUA (sem tom punitivo) | Mês 6 | Mês 6 | Catálogo com 20+ mensagens DUA aprovadas |

---

## Etapa 7 — Acessibilidade DUA e conformidade WCAG 2.2 AA
**Período:** Mês 5 a Mês 7
**Indicadores da etapa:**
- Conformidade WCAG 2.2 nível AA (auditoria externa)
- Nº de PcDs que testaram com leitor de tela
- Nº de recursos de acessibilidade ativados por default após onboarding

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 7.1 | Ledor (TTS) com highlight do trecho | Integrar Web Speech API + fallback server-side (ElevenLabs/Google TTS) + destaque visual do trecho | Mês 5 | Mês 6 | Ledor funcional em 100% das telas do aluno |
| 7.2 | Intérprete LIBRAS | Integrar VLibras ou Hand Talk com janela flutuante redimensionável | Mês 6 | Mês 7 | LIBRAS disponível em todas as telas do aluno |
| 7.3 | Homologação WCAG 2.2 nível AA | Bateria de testes automatizados (axe-core) + auditoria manual + testes com NVDA e VoiceOver | Mês 6 | Mês 7 | Zero erros críticos em auditoria externa independente |
| 7.4 | Persistência real de preferências | Salvar toggles de acessibilidade no perfil e sincronizar cross-device | Mês 6 | Mês 6 | Preferências mantidas entre sessões e dispositivos |
| 7.5 | Validação final com PcDs dos 7 grupos | Sessões de validação com PcDs de cada grupo declarado no onboarding (visual, auditiva, intelectual, motora, dislexia, daltonismo, TEA) | Mês 7 | Mês 7 | ≥ 2 PcDs de cada um dos 7 grupos testando a plataforma final |

---

## Etapa 8 — Dashboard Admin e Métricas de Impacto
**Período:** Mês 6 a Mês 7
**Indicadores da etapa:**
- Tempo de carregamento do dashboard
- Nº de métricas de inclusão expostas
- Precisão das agregações (validação contra queries diretas)

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 8.1 | Seção "Impacto e Inclusão" | Implementar donut de PcDs por tipo + barras de uso de cada recurso de acessibilidade, com dados reais | Mês 6 | Mês 7 | Seção publicada com as 6+ métricas descritas no item 4.6 da apresentação |
| 8.2 | Gráficos dinâmicos gerais | Cadastros/mês, questões/área, top 10 simulados, top 5 acerto/erro via Chart.js + backend | Mês 6 | Mês 7 | 4 gráficos operando com dados reais em < 3s |
| 8.3 | Gestão de usuários (Conteudistas e Alunos) | CRUD com filtros, bloqueio/desbloqueio, badges de deficiência visíveis | Mês 6 | Mês 7 | 100% das funções previstas em 3.2 do MVP_TELAS |
| 8.4 | Relatórios exportáveis em PDF | Gerar relatório mensal exportável por perfil e por turma | Mês 7 | Mês 7 | Exportação em PDF disponível no admin e no conteudista |
| 8.5 | Painel de acompanhamento do piloto | Criar dashboard filtrado apenas com escolas participantes do piloto (F3) | Mês 7 | Mês 7 | Dashboard exclusivo do piloto ativo antes do kickoff (Mês 7) |

---

## Etapa 9 — Piloto com escolas parceiras
**Período:** Mês 7 a Mês 10
**Indicadores da etapa:**
- Nº de escolas/cursinhos em operação
- Nº de alunos ativos no piloto
- Nº de simulados realizados no piloto
- NPS dos alunos e dos professores

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 9.1 | Fechamento de parcerias | Reuniões com APAEs, cursinhos populares, escolas de EJA e cursos pré-ENEM para adesão ao piloto | Mês 7 | Mês 8 | Assinar termo de parceria com 3 a 5 instituições |
| 9.2 | Onboarding das turmas piloto | Workshop presencial/remoto com professores + cadastro de alunos + configuração de turmas | Mês 8 | Mês 8 | ≥ 150 alunos e 8 conteudistas ativos ao fim do Mês 8 |
| 9.3 | Coleta estruturada de feedback | Formulários semanais + NPS mensal + 2 entrevistas profundas por escola/mês | Mês 8 | Mês 10 | 100% das escolas respondendo ao ciclo mensal |
| 9.4 | Iteração semanal de melhorias | Sprints de 1 semana com deploy de ajustes e correções baseados no feedback | Mês 8 | Mês 10 | ≥ 12 releases no período com changelog público |
| 9.5 | Relatório de impacto do piloto | Publicar relatório com dados de uso, desempenho, conquistas e NPS das escolas piloto | Mês 10 | Mês 10 | Relatório publicado + apresentado ao Centelha e parceiros |

---

## Etapa 10 — Negócio, LGPD, divulgação e escala
**Período:** Mês 8 a Mês 12
**Indicadores da etapa:**
- Conformidade LGPD (laudo jurídico)
- Nº de acessos na landing page
- Nº de leads capturados / cursos contratantes
- Nº de participações em eventos e publicações

| # | Atividade | Como | Início | Término | Meta mensurável |
|---|---|---|---|---|---|
| 10.1 | Adequação LGPD | Consultoria jurídica especializada em dados sensíveis de PcDs + redação de termos + DPA + rotina de anonimização nos dashboards | Mês 8 | Mês 10 | Laudo jurídico aprovado + políticas publicadas |
| 10.2 | Modelo de negócio e precificação | Validar planos (assinatura escolas / gratuito para PcDs individuais / parcerias públicas) com 5 gestores e 3 órgãos públicos | Mês 8 | Mês 10 | Tabela de planos publicada + 3 cartas de intenção de compra |
| 10.3 | Landing page + redes sociais + conteúdo | Site institucional, calendário editorial (Instagram, LinkedIn), vídeos explicativos em LIBRAS e Linguagem Simples | Mês 9 | Mês 12 | Landing pública + 40 publicações + 3 vídeos legendados |
| 10.4 | Participação em eventos e publicações | Submissão a congressos de EdTech, acessibilidade e educação inclusiva; apresentação em no mínimo 3 eventos | Mês 10 | Mês 12 | 5 submissões + 3 participações presenciais/remotas |
| 10.5 | Abertura pública e escala | Deploy de produção final, expansão do banco de questões curadas, onboarding aberto com fila de escolas | Mês 11 | Mês 12 | Plataforma aberta publicamente + 500 alunos cadastrados + 10 escolas em fila |

---

## Indicadores consolidados (resultado esperado ao fim do Mês 12)

- **Usuários ativos:** ≥ 500 alunos + 10 escolas/cursinhos em operação
- **Conteúdo:** ≥ 2.000 questões no banco público (curadas)
- **Inclusão:** PcDs em pelo menos 5 dos 7 grupos declarados no onboarding usando ativamente os recursos
- **Impacto:** ≥ 70% dos alunos usando pelo menos 1 recurso de acessibilidade + ≥ 40% usando Linguagem Simples por default
- **Conformidade:** WCAG 2.2 nível AA homologado + LGPD aprovada em laudo jurídico
- **Reconhecimento:** 3 participações em eventos + 1 publicação acadêmica submetida
- **Sustentabilidade:** 3 cartas de intenção de compra + modelo de negócio validado

---

*Cronograma elaborado em 2026-04-20, alinhado ao `ROADMAP_PROTOTIPO.md` (89 itens), `MVP_TELAS.md` (1.171 linhas de especificação) e plano de execução do `APRESENTACAO_CENTELHA.md`. Referência de datas: Mês 1 = Maio/2026, considerando aprovação do Centelha. Coluna "Responsável" a ser preenchida pela equipe no momento da submissão.*
