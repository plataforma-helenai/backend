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

  // === Ranking ===
  ranking: [
    { posicao: 1, nome: 'Ana Beatriz', nivel: 8, xp: 4200, simulados: 31, avatar: 'AB' },
    { posicao: 2, nome: 'Roberto Silva', nivel: 7, xp: 3800, simulados: 28, avatar: 'RS' },
    { posicao: 3, nome: 'Camila Torres', nivel: 7, xp: 3650, simulados: 26, avatar: 'CT' },
    { posicao: 4, nome: 'Diego Nunes', nivel: 6, xp: 3100, simulados: 22, avatar: 'DN' },
    { posicao: 5, nome: 'Maria Oliveira', nivel: 5, xp: 2350, simulados: 23, avatar: 'MO' },
    { posicao: 6, nome: 'Fernando Costa', nivel: 5, xp: 2200, simulados: 19, avatar: 'FC' },
    { posicao: 7, nome: 'Letícia Souza', nivel: 4, xp: 1800, simulados: 16, avatar: 'LS' },
    { posicao: 8, nome: 'Pedro Santos', nivel: 4, xp: 1650, simulados: 15, avatar: 'PS' },
    { posicao: 9, nome: 'Gabriela Lima', nivel: 3, xp: 1200, simulados: 11, avatar: 'GL' },
    { posicao: 10, nome: 'Thiago Rocha', nivel: 3, xp: 1100, simulados: 9, avatar: 'TR' }
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
  ]
};
