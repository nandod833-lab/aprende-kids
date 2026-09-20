import { WorkbookPack, Benefit, BonusItem, FaqItem } from '../types';

export const WORKBOOK_PACKS: WorkbookPack[] = [
  {
    id: 'raciocinio-logico',
    title: 'RACIOCÍNIO LÓGICO',
    icon: 'Puzzle',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-200',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    coverTitle: 'RACIOCÍNIO LÓGICO',
    sampleCount: 12,
    skills: ['Sequências lógicas', 'Enigmas visuais', 'Padrões geométricos', 'Solução de problemas'],
    previewImages: [
      'Encontre o padrão das formas geométricas e cores',
      'Desafio do labirinto lógico e cruzadinha temática',
      'Sequência numérica e correspondência de pares'
    ],
    description: 'Enigmas inteligentes, sequências e quebra-cabeças para estimular o pensamento lógico. Desenvolvem a capacidade de analisar informações, identificar padrões e resolver problemas com autonomia.'
  },
  {
    id: 'memoria-atencao',
    title: 'MEMÓRIA E ATENÇÃO',
    icon: 'Brain',
    color: 'from-rose-500 to-red-600',
    borderColor: 'border-rose-200',
    badgeBg: 'bg-rose-100 text-rose-800',
    coverTitle: 'MEMÓRIA E ATENÇÃO',
    sampleCount: 10,
    skills: ['Memória de trabalho', 'Retenção rápida', 'Reprodução de modelos', 'Atenção sustentada'],
    previewImages: [
      'Jogo da memória temático de animais e objetos',
      'Observe por 30 segundos e desenhe os elementos que sumiram',
      'Sequência de cores e blocos de retenção'
    ],
    description: 'Desafios de reprodução, memorização e reconhecimento para estimular a memória de trabalho e a retenção de informações. Desenvolvem a capacidade de armazenar e utilizar informações com mais facilidade.'
  },
  {
    id: 'foco-concentracao',
    title: 'FOCO E CONCENTRAÇÃO',
    icon: 'Target',
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-200',
    badgeBg: 'bg-amber-100 text-amber-800',
    coverTitle: 'FOCO E CONCENTRAÇÃO',
    sampleCount: 10,
    skills: ['Atenção seletiva', 'Busca visual', 'Pareamento de estímulos', 'Filtro de distrações'],
    previewImages: [
      'Caça aos pares escondidos na cena complexa',
      'Localize os 7 erros com nível progressivo de atenção',
      'Trilhas de foco contínuo sem tirar o lápis do papel'
    ],
    description: 'Exercícios de atenção seletiva, busca visual e pareamento para estimular a concentração. Desenvolvem a capacidade de manter a atenção sustentada, filtrar distrações e permanecer focado por mais tempo.'
  },
  {
    id: 'percepcao-visual',
    title: 'PERCEPÇÃO VISUAL',
    icon: 'Eye',
    color: 'from-red-500 to-pink-600',
    borderColor: 'border-red-200',
    badgeBg: 'bg-red-100 text-red-800',
    coverTitle: 'PERCEPÇÃO VISUAL',
    sampleCount: 10,
    skills: ['Discriminação visual', 'Figura e fundo', 'Constância perceptual', 'Fechamento visual'],
    previewImages: [
      'Identificação de sombras e silhuetas idênticas',
      'Discriminação de pequenos detalhes entre figuras semelhantes',
      'Quebra-cabeça visual de sobreposição de formas'
    ],
    description: 'Atividades de associação e discriminação visual para estimular a percepção dos detalhes. Desenvolvem a capacidade de identificar, comparar e interpretar formas, cores, imagens e relações visuais.'
  },
  {
    id: 'funcoes-executivas',
    title: 'FUNÇÕES EXECUTIVAS',
    icon: 'Cog',
    color: 'from-indigo-600 to-blue-700',
    borderColor: 'border-indigo-200',
    badgeBg: 'bg-indigo-100 text-indigo-800',
    coverTitle: 'FUNÇÕES EXECUTIVAS',
    sampleCount: 10,
    skills: ['Planejamento', 'Controle inibitório', 'Flexibilidade cognitiva', 'Tomada de decisão'],
    previewImages: [
      'Planejador visual de rotina e prioridades infantis',
      'Atividades de resposta inversa (Stop & Go motor)',
      'Desafios de adaptação com mudança de regras no meio do jogo'
    ],
    description: 'Atividades de pensamento estratégico para estimular planejamento, organização e tomada de decisões. Desenvolvem a capacidade de controlar impulsos, analisar cenários e adaptar estratégias diante de novas situações.'
  },
  {
    id: 'orientacao-espacial',
    title: 'ORIENTAÇÃO ESPACIAL',
    icon: 'Compass',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-200',
    badgeBg: 'bg-cyan-100 text-cyan-800',
    coverTitle: 'ORIENTAÇÃO ESPACIAL',
    sampleCount: 8,
    skills: ['Lateralidade (direita/esquerda)', 'Noções de distância', 'Trajetos e coordenadas', 'Mapeamento espacial'],
    previewImages: [
      'Tabuleiros de coordenadas simples com linhas e colunas',
      'Guia o robozinho pelas setas de direção espacial',
      'Atividades práticas de lateralidade corporal e papel'
    ],
    description: 'Tabuleiros de localização, lateralidade e organização espacial para estimular a percepção das relações espaciais. Desenvolvem a capacidade de compreender posições, direções e trajetos com mais precisão.'
  },
  {
    id: 'coordenacao-motora',
    title: 'COORDENAÇÃO MOTORA',
    icon: 'PenTool',
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-200',
    badgeBg: 'bg-violet-100 text-violet-800',
    coverTitle: 'COORDENAÇÃO MOTORA',
    sampleCount: 12,
    skills: ['Coordenação motora fina', 'Preensão do lápis', 'Controle da força', 'Integração óculo-manual'],
    previewImages: [
      'Traçados pontilhados ondulados, retilíneos e em espiral',
      'Fichas de recorte e colagem com níveis graduais',
      'Modelos para alinhavo e precisão digital'
    ],
    description: 'Traçados, recortes, alinhavos, encaixes e exercícios de ginástica visuomotora para estimular a coordenação motora fina. Desenvolvem a precisão dos movimentos, a destreza manual e a integração óculo-manual.'
  },
  {
    id: 'matematica-numeracia',
    title: 'MATEMÁTICA E NUMERACIA',
    icon: 'Calculator',
    color: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-200',
    badgeBg: 'bg-pink-100 text-pink-800',
    coverTitle: 'MATEMÁTICA E NUMERACIA',
    sampleCount: 10,
    skills: ['Contagem e correspondência 1 a 1', 'Noção de quantidade', 'Operações lúdicas', 'Raciocínio aritmético'],
    previewImages: [
      'Dominó dos números e quantidades visuais',
      'Dados lúdicos para desafios de adição com ilustrações',
      'Contagem de elementos e representação gráfica intuitiva'
    ],
    description: 'Dados, dominós e outros recursos de contagem e operações aritméticas básicas para estimular a compreensão de conceitos matemáticos. Desenvolvem noções de cálculo, a percepção de quantidades e o raciocínio numérico.'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'desempenho',
    title: 'Melhor Desempenho Acadêmico',
    icon: 'TrendingUp',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    description: 'Fortalece habilidades importantes para superar dificuldades de aprendizagem e garantir o sucesso escolar.'
  },
  {
    id: 'foco',
    title: 'Mais Foco nas Atividades',
    icon: 'Target',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    description: 'Ajuda a manter a atenção e a concentração por mais tempo, reduzindo distrações e dispersões.'
  },
  {
    id: 'autonomia',
    title: 'Mais Autonomia no Dia a Dia',
    icon: 'Zap',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    description: 'Estimula a iniciativa, a organização e a confiança para realizar tarefas com mais agilidade e independência.'
  },
  {
    id: 'interesse',
    title: 'Mais Interesse em Aprender',
    icon: 'Sparkles',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    description: 'Cria experiências envolventes que despertam a curiosidade, a motivação e o engajamento no processo de aprendizado.'
  },
  {
    id: 'confianca',
    title: 'Mais Confiança e Resiliência',
    icon: 'Star',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    description: 'Contribui para a persistência e a resolução de problemas, a lidar com frustrações e a ultrapassar desafios.'
  },
  {
    id: 'telas',
    title: 'Menos Tempo em Tela',
    icon: 'Smartphone',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    description: 'Promove momentos divertidos e estimulantes de forma analógica, desenvolvendo competências reais.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    icon: 'Mail',
    title: 'Receba tudo por e-mail!',
    description: 'Após a confirmação da compra, você recebe acesso imediato ao Aprende Kids diretamente no seu e-mail. Todos os materiais ficam disponíveis em PDF, com acesso simples, rápido e vitalício.'
  },
  {
    step: 2,
    icon: 'Printer',
    title: 'Baixe os arquivos prontos',
    description: 'Os recursos são organizados por áreas da aprendizagem e estão prontos para impressão. Escolha as atividades mais adequadas para a idade e a necessidade de cada criança e imprima no seu ritmo!'
  },
  {
    step: 3,
    icon: 'Smile',
    title: 'Aplique com os pequenos!',
    description: 'Utilize os materiais em casa, na escola, em sessões, atendimentos ou intervenções terapêuticas. Recursos desenvolvidos para tornar o aprendizado mais prazeroso e significativo.'
  }
];

export const TARGET_AUDIENCE = [
  'Mães, pais e cuidadores',
  'Professores e educadores',
  '(Neuro)psicopedagogo(a)',
  'Psicólogo(a)/Terapeuta Infantil',
  'Profissional da infância',
  'Escolas e clínicas'
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    bonusNumber: 1,
    title: 'MAPA DAS HABILIDADES DE APRENDIZAGEM',
    icon: 'ClipboardList',
    description: 'Um inventário com checklist para monitorar as principais habilidades da aprendizagem e identificar quais áreas precisam de maior estímulo.',
    originalPrice: 'DE 45 REAIS',
    currentPrice: 'POR APENAS R$ 0',
    tagColor: 'bg-blue-600',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'bonus-2',
    bonusNumber: 2,
    title: 'PLANO DE DESENVOLVIMENTO INDIVIDUAL',
    icon: 'FileText',
    description: 'Modelo de plano individual personalizado para trabalhar o desenvolvimento e acompanhar a evolução da criança.',
    originalPrice: 'DE 45 REAIS',
    currentPrice: 'POR APENAS R$ 0',
    tagColor: 'bg-purple-600',
    color: 'from-purple-600 to-indigo-700'
  },
  {
    id: 'bonus-3',
    bonusNumber: 3,
    title: 'GUIA PARA DIFICULDADES DE APRENDIZAGEM',
    icon: 'BookOpen',
    description: '50 estratégias simples para estimular habilidades que apresentam maior dificuldade e tornar as atividades mais eficazes.',
    originalPrice: 'DE 45 REAIS',
    currentPrice: 'POR APENAS R$ 0',
    tagColor: 'bg-teal-600',
    color: 'from-teal-600 to-emerald-700'
  },
  {
    id: 'bonus-4',
    bonusNumber: 4,
    title: 'CATÁLOGO DE JOGOS PEDAGÓGICOS',
    icon: 'Gamepad2',
    description: 'Um guia com indicação de mais de 45 jogos clássicos separados por competências para estimular o neurodesenvolvimento.',
    originalPrice: 'DE 45 REAIS',
    currentPrice: 'POR APENAS R$ 0',
    tagColor: 'bg-amber-600',
    color: 'from-amber-500 to-orange-600'
  }
];

export const INCLUDED_CHECKLIST = [
  'Pack Raciocínio Lógico',
  'Pack Percepção Visual',
  'Pack Memória e Atenção',
  'Pack Orientação Espacial',
  'Pack Matemática e Numeracia',
  'Pack Funções Executivas',
  'Pack Coordenação Motora',
  'Pack Foco e Concentração',
  'Mapa das Habilidades de Aprendizagem',
  'Plano de Desenvolvimento Individual',
  'Guia Superando Dificuldades de Aprendizagem',
  'Catálogo de Jogos Pedagógicos'
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Depois da compra, como acesso o conteúdo?',
    answer: 'Assim que o pagamento for confirmado, você receberá em seu e-mail um link exclusivo com todos os arquivos organizados por pastas. É muito fácil, basta clicar e baixar direto no celular, tablet ou computador!'
  },
  {
    id: 'faq-2',
    question: 'Terei alguma garantia?',
    answer: 'Claro que sim! Nós assumimos todo o risco, porque confiamos na qualidade do nosso material. Se, por qualquer motivo, você não ficar satisfeito(a), pode solicitar o reembolso total dentro de 7 dias após a compra direto pelo e-mail de suporte.'
  },
  {
    id: 'faq-3',
    question: 'Posso vender esse material?',
    answer: 'Não! Esses arquivos são de uso exclusivo para familiares, profissionais em práticas clínicas, consultórios e educadores em instituições de ensino. É vedada a comercialização, reprodução pirata ou repasse para terceiros.'
  },
  {
    id: 'faq-4',
    question: 'Por quanto tempo terei acesso ao produto?',
    answer: 'Depois da compra, o produto é seu por tempo indeterminado (acesso vitalício). Você só precisa acessar a plataforma e baixar os arquivos sempre que precisar, além de receber eventuais atualizações de arquivos.'
  },
  {
    id: 'faq-5',
    question: 'Vou receber alguma coisa impressa?',
    answer: 'Não, nossos recursos são em formato PDF 100% digitais. A grande vantagem é que você pode baixar e imprimir em seu próprio ritmo, imprimindo apenas as folhas que a criança precisa no momento. Não precisa de papel especial, pode imprimir em qualquer impressora caseira!'
  }
];
