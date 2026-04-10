/* ============================================
   HelenAI — Dados Fake
   Dados mockados para o protótipo
   ============================================ */

const HELEN_DATA = {

  // === Usuários fake para login ===
  usuarios: [
    { email: 'admin@helen.ai', senha: 'admin', perfil: 'admin', nome: 'Ana Silva', redirect: '../admin/dashboard.html' },
    { email: 'conteudista@helen.ai', senha: 'conteudista', perfil: 'conteudista', nome: 'Prof. Carlos Mendes', redirect: '../conteudista/dashboard.html' },
    { email: 'aluno@helen.ai', senha: 'aluno', perfil: 'aluno', nome: 'Maria Oliveira', redirect: '../aluno/dashboard.html' }
  ],

  // === Métricas Admin ===
  adminMetricas: {
    totalAlunos: 1247,
    totalConteudistas: 23,
    totalQuestoes: 4580,
    simuladosPublicados: 87,
    simuladosRealizados: 12340
  },

  // === Métricas Conteudista ===
  conteudistaMetricas: {
    questoesImportadas: 342,
    simuladosCriados: 12,
    simuladosPublicados: 8,
    alunosVinculados: 45,
    pendentesCuradoria: 3
  },

  // === Métricas Aluno ===
  alunoMetricas: {
    simuladosRealizados: 23,
    mediaAcertos: 74,
    questoesRespondidas: 690,
    streakDias: 12,
    xpTotal: 2350,
    nivel: 5,
    xpProximoNivel: 3000
  },

  // === Áreas BNCC ===
  areasBNCC: [
    'Matemática e suas Tecnologias',
    'Linguagens, Códigos e suas Tecnologias',
    'Ciências da Natureza e suas Tecnologias',
    'Ciências Humanas e suas Tecnologias'
  ],

  // === Competências Gerais (simplificadas) ===
  competenciasGerais: [
    { codigo: 'CG01', nome: 'Conhecimento' },
    { codigo: 'CG02', nome: 'Pensamento científico, crítico e criativo' },
    { codigo: 'CG03', nome: 'Repertório cultural' },
    { codigo: 'CG04', nome: 'Comunicação' },
    { codigo: 'CG05', nome: 'Cultura digital' },
    { codigo: 'CG06', nome: 'Trabalho e projeto de vida' },
    { codigo: 'CG07', nome: 'Argumentação' },
    { codigo: 'CG08', nome: 'Autoconhecimento e autocuidado' },
    { codigo: 'CG09', nome: 'Empatia e cooperação' },
    { codigo: 'CG10', nome: 'Responsabilidade e cidadania' }
  ],

  // === Habilidades exemplo ===
  habilidades: [
    { codigo: 'EM13MAT101', area: 'Matemática', descricao: 'Interpretar situações econômicas, sociais e das Ciências da Natureza' },
    { codigo: 'EM13MAT301', area: 'Matemática', descricao: 'Resolver e elaborar problemas do cotidiano' },
    { codigo: 'EM13MAT501', area: 'Matemática', descricao: 'Investigar relações entre números e grandezas' },
    { codigo: 'EM13LGG101', area: 'Linguagens', descricao: 'Compreender e analisar processos de produção e circulação de discursos' },
    { codigo: 'EM13LGG301', area: 'Linguagens', descricao: 'Participar de processos de produção individual e colaborativa' },
    { codigo: 'EM13CNT101', area: 'Ciências da Natureza', descricao: 'Analisar e representar as transformações e conservações' },
    { codigo: 'EM13CNT301', area: 'Ciências da Natureza', descricao: 'Construir questões e problemas de conhecimento' },
    { codigo: 'EM13CHS101', area: 'Ciências Humanas', descricao: 'Identificar e analisar as relações entre sujeitos, grupos e classes sociais' },
    { codigo: 'EM13CHS301', area: 'Ciências Humanas', descricao: 'Problematizar hábitos e práticas individuais e coletivos' }
  ],

  // === Questões exemplo ===
  questoes: [
    {
      id: 1,
      codigo: 'ENEM-2025-AZ-Q01',
      enunciado: 'Uma pesquisa realizada pelo IBGE revelou que a taxa de analfabetismo entre pessoas com deficiência é significativamente maior do que entre pessoas sem deficiência. Considerando os dados apresentados no gráfico, qual é a diferença percentual entre as duas taxas?',
      alternativas: {
        A: '8,2 pontos percentuais',
        B: '12,5 pontos percentuais',
        C: '15,3 pontos percentuais',
        D: '18,7 pontos percentuais',
        E: '21,1 pontos percentuais'
      },
      respostaCorreta: 'C',
      area: 'Matemática e suas Tecnologias',
      competenciaGeral: 'CG02',
      habilidade: 'EM13MAT101',
      nivel: 'Médio',
      origem: 'ENEM-2025-AZ',
      status: 'ativo'
    },
    {
      id: 2,
      codigo: 'ENEM-2025-AZ-Q02',
      enunciado: 'A Lei nº 15.263/2025 institui a Política Nacional de Linguagem Simples. De acordo com o texto da lei, qual é o principal objetivo dessa política?',
      alternativas: {
        A: 'Simplificar a legislação brasileira',
        B: 'Facilitar a compreensão de informações públicas por todos os cidadãos',
        C: 'Reduzir o número de palavras em documentos oficiais',
        D: 'Substituir termos técnicos por gírias populares',
        E: 'Traduzir documentos para outros idiomas'
      },
      respostaCorreta: 'B',
      area: 'Linguagens, Códigos e suas Tecnologias',
      competenciaGeral: 'CG04',
      habilidade: 'EM13LGG101',
      nivel: 'Fácil',
      origem: 'ENEM-2025-AZ',
      status: 'ativo'
    },
    {
      id: 3,
      codigo: 'ENEM-2025-AZ-Q03',
      enunciado: 'O Desenho Universal para a Aprendizagem (DUA) propõe três princípios fundamentais para garantir a inclusão educacional. Analise as afirmações e identifique a alternativa que apresenta corretamente esses princípios.',
      alternativas: {
        A: 'Representação, Ação e Expressão, Engajamento',
        B: 'Memorização, Repetição, Avaliação',
        C: 'Leitura, Escrita, Cálculo',
        D: 'Planejamento, Execução, Revisão',
        E: 'Observação, Experimentação, Conclusão'
      },
      respostaCorreta: 'A',
      area: 'Ciências Humanas e suas Tecnologias',
      competenciaGeral: 'CG01',
      habilidade: 'EM13CHS101',
      nivel: 'Difícil',
      origem: 'ENEM-2025-AZ',
      status: 'ativo'
    }
  ],

  // === Simulados exemplo ===
  simulados: [
    { id: 1, nome: 'ENEM 2025 — Caderno Azul', codigo: 'ENEM-2025-AZ', qtdQuestoes: 45, tempo: 45, status: 'publicado', criador: 'Prof. Carlos Mendes', tipoCriador: 'conteudista', data: '2026-03-15' },
    { id: 2, nome: 'Simulado Matemática Básica', codigo: 'SIM-MAT-001', qtdQuestoes: 20, tempo: 30, status: 'publicado', criador: 'Prof. Carlos Mendes', tipoCriador: 'conteudista', data: '2026-03-20' },
    { id: 3, nome: 'Linguagens — Interpretação de Texto', codigo: 'SIM-LNG-001', qtdQuestoes: 15, tempo: null, status: 'publicado', criador: 'Prof. Ana Costa', tipoCriador: 'conteudista', data: '2026-03-22' },
    { id: 4, nome: 'Revisão Ciências Humanas', codigo: 'SIM-HUM-001', qtdQuestoes: 25, tempo: 40, status: 'rascunho', criador: 'Prof. Carlos Mendes', tipoCriador: 'conteudista', data: '2026-04-01' },
    { id: 5, nome: 'Meu simulado de Matemática', codigo: 'ALN-MAT-001', qtdQuestoes: 10, tempo: null, status: 'privado', criador: 'Maria Oliveira', tipoCriador: 'aluno', data: '2026-04-03' }
  ],

  // === Conteudistas ===
  conteudistas: [
    { id: 1, nome: 'Prof. Carlos Mendes', email: 'carlos@helen.ai', areas: ['Matemática', 'Ciências da Natureza'], formacao: 'Doutor em Educação Matemática', instituicao: 'UFRPE', status: 'ativo', dataCadastro: '2026-01-10' },
    { id: 2, nome: 'Prof. Ana Costa', email: 'ana@helen.ai', areas: ['Linguagens'], formacao: 'Mestre em Letras', instituicao: 'UFPE', status: 'ativo', dataCadastro: '2026-01-15' },
    { id: 3, nome: 'Prof. João Lima', email: 'joao@helen.ai', areas: ['Ciências Humanas'], formacao: 'Especialista em História', instituicao: 'UPE', status: 'bloqueado', dataCadastro: '2026-02-01' }
  ],

  // === Alunos ===
  alunos: [
    { id: 1, nome: 'Maria Oliveira', email: 'maria@email.com', status: 'ativo', simuladosRealizados: 23, ultimoAcesso: '2026-04-05', dataCadastro: '2026-02-01' },
    { id: 2, nome: 'Pedro Santos', email: 'pedro@email.com', status: 'ativo', simuladosRealizados: 15, ultimoAcesso: '2026-04-04', dataCadastro: '2026-02-10' },
    { id: 3, nome: 'Juliana Ferreira', email: 'juliana@email.com', status: 'ativo', simuladosRealizados: 8, ultimoAcesso: '2026-04-03', dataCadastro: '2026-02-15' },
    { id: 4, nome: 'Lucas Almeida', email: 'lucas@email.com', status: 'bloqueado', simuladosRealizados: 3, ultimoAcesso: '2026-03-20', dataCadastro: '2026-03-01' },
    { id: 5, nome: 'Ana Beatriz', email: 'anab@email.com', status: 'ativo', simuladosRealizados: 31, ultimoAcesso: '2026-04-06', dataCadastro: '2026-01-20' }
  ],

  // === Itens de curadoria pendentes ===
  curadoria: [
    { id: 1, tipo: 'simulado', aluno: 'Maria Oliveira', titulo: 'Simulado de Revisão — Matemática', area: 'Matemática', dataEnvio: '2026-04-04', qtdQuestoes: 10 },
    { id: 2, tipo: 'questao', aluno: 'Pedro Santos', titulo: 'Questão sobre Lei de Cotas', area: 'Ciências Humanas', dataEnvio: '2026-04-05' },
    { id: 3, tipo: 'simulado', aluno: 'Ana Beatriz', titulo: 'ENEM 2024 — Caderno Rosa', area: 'Geral', dataEnvio: '2026-04-05', qtdQuestoes: 45 }
  ],

  // === Ranking geral (todos os tempos) ===
  ranking: [
    { posicao: 1, nome: 'Ana Beatriz', nivel: 8, xp: 4200, simulados: 31, avatar: 'AB', taxaAcerto: 89 },
    { posicao: 2, nome: 'Roberto Silva', nivel: 7, xp: 3800, simulados: 28, avatar: 'RS', taxaAcerto: 82 },
    { posicao: 3, nome: 'Camila Torres', nivel: 7, xp: 3650, simulados: 26, avatar: 'CT', taxaAcerto: 80 },
    { posicao: 4, nome: 'Diego Nunes', nivel: 6, xp: 3100, simulados: 22, avatar: 'DN', taxaAcerto: 78 },
    { posicao: 5, nome: 'Maria Oliveira', nivel: 5, xp: 2350, simulados: 23, avatar: 'MO', taxaAcerto: 74 },
    { posicao: 6, nome: 'Fernando Costa', nivel: 5, xp: 2200, simulados: 19, avatar: 'FC', taxaAcerto: 73 },
    { posicao: 7, nome: 'Letícia Souza', nivel: 4, xp: 1800, simulados: 16, avatar: 'LS', taxaAcerto: 71 },
    { posicao: 8, nome: 'Pedro Santos', nivel: 4, xp: 1650, simulados: 15, avatar: 'PS', taxaAcerto: 69 },
    { posicao: 9, nome: 'Gabriela Lima', nivel: 3, xp: 1200, simulados: 11, avatar: 'GL', taxaAcerto: 67 },
    { posicao: 10, nome: 'Thiago Rocha', nivel: 3, xp: 1100, simulados: 9, avatar: 'TR', taxaAcerto: 65 }
  ],

  // === Rankings por período (top 5 de cada) ===
  rankingPeriodos: {
    semana: [
      { posicao: 1, nome: 'Diego Nunes',     avatar: 'DN', xp: 480, simulados: 4 },
      { posicao: 2, nome: 'Ana Beatriz',     avatar: 'AB', xp: 420, simulados: 3 },
      { posicao: 3, nome: 'Maria Oliveira',  avatar: 'MO', xp: 360, simulados: 3 },
      { posicao: 4, nome: 'Letícia Souza',   avatar: 'LS', xp: 300, simulados: 2 },
      { posicao: 5, nome: 'Roberto Silva',   avatar: 'RS', xp: 280, simulados: 2 }
    ],
    quinzena: [
      { posicao: 1, nome: 'Ana Beatriz',     avatar: 'AB', xp: 880, simulados: 7 },
      { posicao: 2, nome: 'Diego Nunes',     avatar: 'DN', xp: 820, simulados: 6 },
      { posicao: 3, nome: 'Camila Torres',   avatar: 'CT', xp: 720, simulados: 5 },
      { posicao: 4, nome: 'Maria Oliveira',  avatar: 'MO', xp: 680, simulados: 5 },
      { posicao: 5, nome: 'Fernando Costa',  avatar: 'FC', xp: 520, simulados: 4 }
    ],
    mes: [
      { posicao: 1, nome: 'Ana Beatriz',     avatar: 'AB', xp: 1750, simulados: 14 },
      { posicao: 2, nome: 'Roberto Silva',   avatar: 'RS', xp: 1480, simulados: 12 },
      { posicao: 3, nome: 'Diego Nunes',     avatar: 'DN', xp: 1320, simulados: 10 },
      { posicao: 4, nome: 'Camila Torres',   avatar: 'CT', xp: 1200, simulados: 9 },
      { posicao: 5, nome: 'Maria Oliveira',  avatar: 'MO', xp: 1150, simulados: 10 }
    ],
    ano: [
      { posicao: 1, nome: 'Ana Beatriz',     avatar: 'AB', xp: 4200, simulados: 31 },
      { posicao: 2, nome: 'Roberto Silva',   avatar: 'RS', xp: 3800, simulados: 28 },
      { posicao: 3, nome: 'Camila Torres',   avatar: 'CT', xp: 3650, simulados: 26 },
      { posicao: 4, nome: 'Diego Nunes',     avatar: 'DN', xp: 3100, simulados: 22 },
      { posicao: 5, nome: 'Maria Oliveira',  avatar: 'MO', xp: 2350, simulados: 23 }
    ]
  },

  // === Desafios (Períodos de estudo) ===
  desafios: [
    {
      id: 1,
      nome: 'Revisão Intensiva — Matemática',
      descricao: 'Período focado em Matemática pra quem vai prestar ENEM. Aborda funções, geometria, estatística e interpretação de dados.',
      icone: '🔢',
      cor: '#3182CE',
      criador: 'Prof. Carlos Mendes',
      tipoCriador: 'conteudista',
      turmaId: 1,
      turmaNome: 'ENEM 2026 — Intensivo',
      simulados: [
        { id: 101, nome: 'Funções — Nível Básico', qtdQuestoes: 10, tempo: 20, area: 'Matemática' },
        { id: 102, nome: 'Geometria Plana', qtdQuestoes: 12, tempo: 25, area: 'Matemática' },
        { id: 103, nome: 'Estatística e Probabilidade', qtdQuestoes: 15, tempo: 30, area: 'Matemática' },
        { id: 104, nome: 'Interpretação de Gráficos', qtdQuestoes: 10, tempo: 20, area: 'Matemática' },
        { id: 105, nome: 'Revisão Geral — Matemática', qtdQuestoes: 20, tempo: 40, area: 'Matemática' }
      ],
      dataInicio: '2026-04-01',
      dataFim: '2026-04-30',
      visibilidade: 'publico',
      status: 'em_andamento',
      pontuacaoMaxima: 500,
      totalParticipantes: 87
    },
    {
      id: 2,
      nome: 'Período de Estudos — Linguagens',
      descricao: 'Maratona de interpretação de texto e literatura pra ENEM e vestibulares.',
      icone: '📖',
      cor: '#805AD5',
      criador: 'Prof. Ana Costa',
      tipoCriador: 'conteudista',
      turmaId: null,
      turmaNome: null,
      simulados: [
        { id: 201, nome: 'Interpretação de Texto — Básico', qtdQuestoes: 15, tempo: null, area: 'Linguagens' },
        { id: 202, nome: 'Literatura — Romantismo', qtdQuestoes: 10, tempo: 20, area: 'Linguagens' },
        { id: 203, nome: 'Gramática — Concordância', qtdQuestoes: 12, tempo: 25, area: 'Linguagens' },
        { id: 204, nome: 'Redação — Estrutura', qtdQuestoes: 8, tempo: 15, area: 'Linguagens' }
      ],
      dataInicio: '2026-03-15',
      dataFim: null,
      visibilidade: 'publico',
      status: 'em_andamento',
      pontuacaoMaxima: 400,
      totalParticipantes: 54
    },
    {
      id: 3,
      nome: 'Ciências Humanas — Revisão Histórica',
      descricao: 'Cobertura completa de História do Brasil, Geografia e Filosofia pro ENEM.',
      icone: '🌎',
      cor: '#DD6B20',
      criador: 'Prof. João Lima',
      tipoCriador: 'conteudista',
      turmaId: null,
      turmaNome: null,
      simulados: [
        { id: 301, nome: 'Brasil Colônia', qtdQuestoes: 10, tempo: 20, area: 'Ciências Humanas' },
        { id: 302, nome: 'Brasil República', qtdQuestoes: 12, tempo: 25, area: 'Ciências Humanas' },
        { id: 303, nome: 'Geografia Física', qtdQuestoes: 15, tempo: 30, area: 'Ciências Humanas' },
        { id: 304, nome: 'Filosofia Clássica', qtdQuestoes: 8, tempo: 15, area: 'Ciências Humanas' },
        { id: 305, nome: 'Atualidades 2025', qtdQuestoes: 10, tempo: 20, area: 'Ciências Humanas' },
        { id: 306, nome: 'Sociologia — Conceitos', qtdQuestoes: 10, tempo: 20, area: 'Ciências Humanas' }
      ],
      dataInicio: '2026-04-01',
      dataFim: '2026-05-31',
      visibilidade: 'publico',
      status: 'em_andamento',
      pontuacaoMaxima: 600,
      totalParticipantes: 42
    },
    {
      id: 4,
      nome: 'Desafio Inclusivo da Maria',
      descricao: 'Seleção das melhores questões que a Maria criou e importou pra revisar em grupo.',
      icone: '💙',
      cor: '#38A169',
      criador: 'Maria Oliveira',
      tipoCriador: 'aluno',
      turmaId: null,
      turmaNome: null,
      simulados: [
        { id: 401, nome: 'Revisão de Matemática — Funções', qtdQuestoes: 10, tempo: null, area: 'Matemática' },
        { id: 402, nome: 'Treino de Interpretação de Texto', qtdQuestoes: 15, tempo: 30, area: 'Linguagens' },
        { id: 403, nome: 'Simulado Exercícios de Lógica', qtdQuestoes: 12, tempo: 25, area: 'Matemática' }
      ],
      dataInicio: '2026-04-05',
      dataFim: null,
      visibilidade: 'compartilhado',
      status: 'em_andamento',
      pontuacaoMaxima: 300,
      totalParticipantes: 8
    }
  ],

  // === Participação do aluno logado nos desafios ===
  minhasParticipacoes: [
    {
      desafioId: 1,
      simuladosFeitos: [
        { simuladoId: 101, nota: 80, data: '2026-04-06' },
        { simuladoId: 102, nota: 75, data: '2026-04-07' },
        { simuladoId: 103, nota: 68, data: '2026-04-08' }
      ],
      pontuacaoAtual: 223, // 80 + 75 + 68
      posicaoRanking: 12
    },
    {
      desafioId: 2,
      simuladosFeitos: [
        { simuladoId: 201, nota: 72, data: '2026-04-02' },
        { simuladoId: 202, nota: 65, data: '2026-04-05' }
      ],
      pontuacaoAtual: 137,
      posicaoRanking: 9
    }
  ],

  // === Ranking específico de desafios (exemplo pro desafio 1) ===
  rankingDesafio1: [
    { posicao: 1, nome: 'Ana Beatriz',    avatar: 'AB', feitos: 5, total: 5, pontuacao: 452, media: 90 },
    { posicao: 2, nome: 'Diego Nunes',    avatar: 'DN', feitos: 5, total: 5, pontuacao: 438, media: 88 },
    { posicao: 3, nome: 'Roberto Silva',  avatar: 'RS', feitos: 5, total: 5, pontuacao: 415, media: 83 },
    { posicao: 4, nome: 'Camila Torres',  avatar: 'CT', feitos: 4, total: 5, pontuacao: 328, media: 82 },
    { posicao: 5, nome: 'Letícia Souza',  avatar: 'LS', feitos: 4, total: 5, pontuacao: 312, media: 78 },
    { posicao: 6, nome: 'Fernando Costa', avatar: 'FC', feitos: 4, total: 5, pontuacao: 296, media: 74 },
    { posicao: 7, nome: 'Gabriela Lima',  avatar: 'GL', feitos: 3, total: 5, pontuacao: 228, media: 76 },
    { posicao: 8, nome: 'Thiago Rocha',   avatar: 'TR', feitos: 3, total: 5, pontuacao: 222, media: 74 },
    { posicao: 9, nome: 'Pedro Santos',   avatar: 'PS', feitos: 3, total: 5, pontuacao: 225, media: 75 },
    { posicao: 10, nome: 'Julia Ramos',   avatar: 'JR', feitos: 3, total: 5, pontuacao: 219, media: 73 },
    { posicao: 11, nome: 'Bruno Alves',   avatar: 'BA', feitos: 3, total: 5, pontuacao: 224, media: 74 },
    { posicao: 12, nome: 'Maria Oliveira',avatar: 'MO', feitos: 3, total: 5, pontuacao: 223, media: 74 }
  ],

  // === Badges ===
  badges: [
    { id: 'primeiro-passo', nome: 'Primeiro Passo', descricao: 'Completou o primeiro simulado', icone: '🎯', conquistado: true },
    { id: 'nota-maxima', nome: 'Nota Máxima', descricao: '100% de acerto em um simulado', icone: '⭐', conquistado: false },
    { id: 'maratonista', nome: 'Maratonista', descricao: 'Completou 10 simulados', icone: '🏃', conquistado: true },
    { id: 'especialista-mat', nome: 'Especialista Matemática', descricao: '80%+ em 20+ questões de Matemática', icone: '📐', conquistado: false },
    { id: 'streak-7', nome: 'Streak 7', descricao: '7 dias consecutivos', icone: '🔥', conquistado: true },
    { id: 'streak-30', nome: 'Streak 30', descricao: '30 dias consecutivos', icone: '💪', conquistado: false },
    { id: 'colaborador', nome: 'Colaborador', descricao: 'Simulado aprovado como público', icone: '🤝', conquistado: false },
    { id: 'social', nome: 'Social', descricao: 'Compartilhou 5 simulados', icone: '📤', conquistado: true }
  ],

  // === Importações ===
  importacoes: [
    { id: 1, nome: 'ENEM 2025 — Caderno Azul', codigo: 'ENEM-2025-AZ', totalQuestoes: 45, data: '2026-03-15', criador: 'Prof. Carlos Mendes' },
    { id: 2, nome: 'Concurso TRF5 2025', codigo: 'TRF5-2025', totalQuestoes: 30, data: '2026-03-28', criador: 'Prof. Carlos Mendes' }
  ],

  // === Métricas detalhadas do admin ===
  adminCadastrosPorMes: {
    labels: ['Out/25', 'Nov/25', 'Dez/25', 'Jan/26', 'Fev/26', 'Mar/26', 'Abr/26'],
    alunos:       [42, 78, 94, 156, 187, 234, 456],
    conteudistas: [ 2,  3,  1,   4,   5,   4,   4]
  },

  adminQuestoesPorArea: {
    labels: ['Matemática', 'Linguagens', 'Ciências da Natureza', 'Ciências Humanas'],
    valores: [1482, 1124, 987, 987],
    cores: ['#2B6CB0', '#3CC8D0', '#38A169', '#D69E2E']
  },

  adminSimuladosMaisRealizados: {
    labels: [
      'ENEM 2025 — Caderno Azul',
      'Matemática Básica',
      'Linguagens — Interpretação',
      'Revisão Ciências Humanas',
      'Química Orgânica',
      'Física — Mecânica',
      'Biologia — Genética',
      'História do Brasil',
      'Redação ENEM',
      'Geografia Regional'
    ],
    valores: [1248, 987, 854, 723, 642, 584, 521, 476, 412, 389]
  },

  adminQuestoesMaiorAcerto: [
    { codigo: 'ENEM-2024-AM-Q08', trecho: 'Interpretação básica do gráfico de barras sobre...', taxa: 94, area: 'Matemática' },
    { codigo: 'ENEM-2024-AM-Q12', trecho: 'Identifique o sinônimo do termo destacado no texto...', taxa: 92, area: 'Linguagens' },
    { codigo: 'ENEM-2024-VD-Q03', trecho: 'A Lei 15.263/2025 determina que documentos públicos...', taxa: 91, area: 'Linguagens' },
    { codigo: 'ENEM-2025-AZ-Q05', trecho: 'Cálculo simples de porcentagem envolvendo...', taxa: 89, area: 'Matemática' },
    { codigo: 'SIM-HUM-Q11', trecho: 'A Declaração Universal dos Direitos Humanos foi...', taxa: 87, area: 'Ciências Humanas' }
  ],

  adminQuestoesMaiorErro: [
    { codigo: 'ENEM-2025-AZ-Q42', trecho: 'Dada a função f(x) composta por três trechos...', taxa: 18, area: 'Matemática' },
    { codigo: 'ENEM-2024-VD-Q38', trecho: 'Analise a charge e identifique a ironia em...', taxa: 22, area: 'Linguagens' },
    { codigo: 'SIM-NAT-Q19', trecho: 'Balanceie a equação química da combustão completa do...', taxa: 26, area: 'Ciências da Natureza' },
    { codigo: 'ENEM-2024-AM-Q45', trecho: 'Geometria espacial: calcule o volume do tronco de cone...', taxa: 29, area: 'Matemática' },
    { codigo: 'ENEM-2025-AZ-Q33', trecho: 'O Tratado de Tordesilhas e suas consequências geopolíticas...', taxa: 31, area: 'Ciências Humanas' }
  ],

  // === Métricas de INCLUSÃO (diferencial HelenAI pro Centelha) ===
  adminAlunosPcdPorTipo: {
    labels: [
      'Visual',
      'Auditiva',
      'Intelectual',
      'Motora',
      'Dislexia',
      'Daltonismo',
      'TEA',
      'Sem deficiência declarada'
    ],
    valores: [127, 98, 84, 62, 156, 73, 41, 606],
    cores: [
      '#2B6CB0', // visual — azul
      '#805AD5', // auditiva — roxo
      '#38A169', // intelectual — verde
      '#DD6B20', // motora — laranja
      '#D69E2E', // dislexia — amarelo
      '#E53E3E', // daltonismo — vermelho
      '#3CC8D0', // TEA — ciano
      '#CBD5E0'  // sem declaração — cinza
    ]
  },

  adminUsoAcessibilidade: [
    { recurso: 'Linguagem Simples',  percentual: 47, icone: '📝', cor: '#38A169', usuarios: 586 },
    { recurso: 'Ledor (texto → voz)',percentual: 34, icone: '🔊', cor: '#2B6CB0', usuarios: 424 },
    { recurso: 'Alto Contraste',     percentual: 28, icone: '◐',  cor: '#1A3A6B', usuarios: 349 },
    { recurso: 'Fonte OpenDyslexic', percentual: 22, icone: '🔤', cor: '#D69E2E', usuarios: 274 },
    { recurso: 'Tamanho de fonte +', percentual: 19, icone: 'A+', cor: '#805AD5', usuarios: 237 },
    { recurso: 'LIBRAS',             percentual: 11, icone: '🤟', cor: '#3CC8D0', usuarios: 137 },
    { recurso: 'Paleta Color Blind', percentual: 8,  icone: '👁', cor: '#E53E3E', usuarios: 100 }
  ],

  // Lista ampliada de alunos pra admin (com informações de acessibilidade)
  adminAlunosLista: [
    { id: 1, nome: 'Maria Oliveira',   email: 'maria@email.com',   status: 'ativo', simulados: 23, ultimoAcesso: '2026-04-09', dataCadastro: '2026-02-01', deficiencias: ['dislexia'], recursos: ['linguagem-simples', 'ledor'] },
    { id: 2, nome: 'Pedro Santos',     email: 'pedro@email.com',   status: 'ativo', simulados: 15, ultimoAcesso: '2026-04-08', dataCadastro: '2026-02-10', deficiencias: [], recursos: [] },
    { id: 3, nome: 'Juliana Ferreira', email: 'juliana@email.com', status: 'ativo', simulados:  8, ultimoAcesso: '2026-04-07', dataCadastro: '2026-02-15', deficiencias: ['visual'], recursos: ['contraste', 'ledor', 'fonte-grande'] },
    { id: 4, nome: 'Lucas Almeida',    email: 'lucas@email.com',   status: 'bloqueado', simulados:  3, ultimoAcesso: '2026-03-20', dataCadastro: '2026-03-01', deficiencias: [], recursos: [] },
    { id: 5, nome: 'Ana Beatriz',      email: 'anab@email.com',    status: 'ativo', simulados: 31, ultimoAcesso: '2026-04-09', dataCadastro: '2026-01-20', deficiencias: ['auditiva'], recursos: ['libras'] },
    { id: 6, nome: 'Roberto Silva',    email: 'roberto@email.com', status: 'ativo', simulados: 28, ultimoAcesso: '2026-04-09', dataCadastro: '2026-01-25', deficiencias: [], recursos: [] },
    { id: 7, nome: 'Camila Torres',    email: 'camila@email.com',  status: 'ativo', simulados: 26, ultimoAcesso: '2026-04-08', dataCadastro: '2026-02-05', deficiencias: ['tea'], recursos: ['calma'] },
    { id: 8, nome: 'Diego Nunes',      email: 'diego@email.com',   status: 'ativo', simulados: 22, ultimoAcesso: '2026-04-09', dataCadastro: '2026-02-12', deficiencias: ['daltonismo'], recursos: ['color-blind'] },
    { id: 9, nome: 'Fernando Costa',   email: 'fernando@email.com',status: 'ativo', simulados: 19, ultimoAcesso: '2026-04-07', dataCadastro: '2026-02-18', deficiencias: [], recursos: [] },
    { id: 10, nome: 'Letícia Souza',   email: 'leticia@email.com', status: 'ativo', simulados: 16, ultimoAcesso: '2026-04-06', dataCadastro: '2026-02-25', deficiencias: ['intelectual'], recursos: ['linguagem-simples', 'ledor'] }
  ],

  adminConteudistasLista: [
    { id: 1, nome: 'Prof. Carlos Mendes', email: 'carlos@helen.ai', areas: ['Matemática', 'Ciências da Natureza'], formacao: 'Doutor em Educação Matemática', instituicao: 'UFRPE', status: 'ativo', dataCadastro: '2026-01-10', questoes: 342, simulados: 12, alunos: 45 },
    { id: 2, nome: 'Prof. Ana Costa', email: 'ana@helen.ai', areas: ['Linguagens'], formacao: 'Mestre em Letras', instituicao: 'UFPE', status: 'ativo', dataCadastro: '2026-01-15', questoes: 287, simulados: 8, alunos: 32 },
    { id: 3, nome: 'Prof. João Lima', email: 'joao@helen.ai', areas: ['Ciências Humanas'], formacao: 'Especialista em História', instituicao: 'UPE', status: 'bloqueado', dataCadastro: '2026-02-01', questoes: 124, simulados: 4, alunos: 18 },
    { id: 4, nome: 'Prof. Patrícia Melo', email: 'patricia@helen.ai', areas: ['Ciências da Natureza'], formacao: 'Doutora em Química', instituicao: 'UFPE', status: 'ativo', dataCadastro: '2026-02-18', questoes: 198, simulados: 6, alunos: 24 }
  ]
};
