export interface ResearchArea {
  id: string;
  title: string;
  titleKo: string;
  description: string;
  descriptionKo: string;
  methods: string[];
  applications: string[];
  keywords: string[];
  image?: string;
  image2?: string;
  displayOrder: number;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'environmental-ai',
    title: 'Environmental Artificial Intelligence',
    titleKo: '환경 인공지능',
    description: 'Applying explainable artificial intelligence and deep learning techniques to environmental engineering problems. Developing interpretable models that combine domain knowledge with machine learning for trustworthy environmental predictions.',
    descriptionKo: '설명 가능한 인공지능과 딥러닝 기법을 환경공학 문제에 적용합니다. 도메인 지식과 기계학습을 결합한 해석 가능한 모델을 개발합니다.',
    methods: ['Explainable AI', 'Multimodal AI', 'Transfer Learning', 'Reinforcement Learning', 'Random Forest'],
    applications: ['Water Quality Prediction', 'Plankton Identification', 'Microplastic Analysis', 'Environmental Prediction'],
    keywords: ['XAI', 'Multimodal AI', 'Deep Learning', 'Machine Learning', 'Environmental Engineering'],
    image: '/images/research/multimodal-ai-microplastic.jpg',
    displayOrder: 1,
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin and Surrogate Modeling',
    titleKo: '디지털 트윈 및 대리 모델링',
    description: 'Creating digital replicas of environmental systems that integrate real-time monitoring data with simulation models for continuous assessment and scenario analysis. Developing surrogate models for rapid environmental prediction and chemical accident simulation.',
    descriptionKo: '실시간 모니터링 데이터와 시뮬레이션 모델을 통합하여 환경 시스템의 디지털 복제본을 구축합니다. 빠른 환경 예측과 화학사고 시뮬레이션을 위한 대리 모델을 개발합니다.',
    methods: ['Surrogate Models', 'GNN-LSTM', 'Real-time Simulation', 'IoT Integration', 'Cloud Computing'],
    applications: ['Chemical Accident Simulation', 'Water Treatment Plants', 'River Systems', 'Urban Infrastructure'],
    keywords: ['Digital Twin', 'Surrogate Model', 'Real-time', 'GNN-LSTM', 'Simulation'],
    image: '/images/research/gnn-ar-chemical-simulation.jpg',
    displayOrder: 2,
  },
  {
    id: 'visualization',
    title: 'AR/VR Digital Twin for Environmental Simulation',
    titleKo: 'AR/VR 디지털 트윈 환경 시뮬레이션',
    description: 'Developing augmented reality and virtual reality applications for environmental simulation and management. Integrating hydraulic models with 3D visualization for immersive flood simulation, water distribution system monitoring, and chemical spill scenario analysis.',
    descriptionKo: '증강현실(AR)과 가상현실(VR) 기술을 환경 시뮬레이션 및 관리에 적용합니다. 수리 모델과 3D 시각화를 통합하여 몰입형 홍수 시뮬레이션, 상수관망 모니터링, 화학사고 시나리오 분석을 수행합니다.',
    methods: ['Augmented Reality', 'Virtual Reality', 'EPANET', 'SWMM', '3D Visualization', 'Unity'],
    applications: ['Urban Flood Simulation', 'Water Distribution Monitoring', 'Chemical Spill Visualization', 'Risk Education'],
    keywords: ['AR', 'VR', 'Digital Twin', 'Immersive Simulation', 'EPANET', 'HMD'],
    image: '/images/research/vr-flood-simulation.jpg',
    image2: '/images/research/ar-epanet-water-distribution.jpg',
    displayOrder: 3,
  },
  {
    id: 'neuromorphic',
    title: 'Eco-friendly Semiconductor and Neuromorphic Environmental Modeling',
    titleKo: '친환경 반도체 및 뉴로모픽 환경 모델링',
    description: 'Exploring neuromorphic computing paradigms using memristor-based architectures for energy-efficient environmental monitoring and modeling applications.',
    descriptionKo: '멤리스터 기반 아키텍처를 활용한 에너지 효율적 환경 모니터링 및 모델링 뉴로모픽 컴퓨팅을 탐구합니다.',
    methods: ['Memristor Devices', 'Synaptic Neural Networks', 'Neuromorphic Computing', 'Edge AI'],
    applications: ['Low-power Water Quality Prediction', 'Edge Environmental Monitoring', 'Real-time Processing'],
    keywords: ['Neuromorphic', 'Memristor', 'Eco-friendly Semiconductor', 'SyNN', 'Energy-efficient AI'],
    image: '/images/research/neuromorphic-semiconductor.jpg',
    displayOrder: 4,
  },
];
