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
  displayOrder: number;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'water-quality-hab',
    title: 'Water Quality and Harmful Algal Bloom Modeling',
    titleKo: '수질 및 유해조류 모델링',
    description: 'Developing predictive models for water quality parameters and harmful algal bloom (HAB) dynamics using process-based and data-driven approaches. Research focuses on understanding bloom formation mechanisms and providing early warning systems.',
    descriptionKo: '과정 기반 및 데이터 기반 접근법을 활용하여 수질 매개변수와 유해조류 대발생(HAB) 역학에 대한 예측 모델을 개발합니다.',
    methods: ['Deep Learning', 'LSTM', 'CNN', 'Process-based Models', 'Ensemble Methods'],
    applications: ['Drinking Water Safety', 'Reservoir Management', 'Early Warning Systems'],
    keywords: ['Cyanobacteria', 'Chlorophyll-a', 'Algal Bloom', 'Water Quality Prediction'],
    displayOrder: 1,
  },
  {
    id: 'hydro-modeling',
    title: 'Hydrological and Hydraulic Modeling',
    titleKo: '수문·수리 모델링',
    description: 'Simulating watershed hydrology, urban stormwater systems, and river hydraulics. Integrating physics-based watershed models with deep learning for improved spatiotemporal estimation of surface and groundwater conditions.',
    descriptionKo: '유역 수문, 도시 우수 시스템, 하천 수리를 시뮬레이션합니다. 물리 기반 유역 모델과 딥러닝을 통합합니다.',
    methods: ['SWMM', 'HYDRUS', 'Physics-informed Neural Networks', 'Data Assimilation'],
    applications: ['Flood Prediction', 'Urban Drainage', 'Groundwater Assessment'],
    keywords: ['Watershed Modeling', 'Stormwater', 'LID', 'Green Infrastructure'],
    displayOrder: 2,
  },
  {
    id: 'environmental-ai',
    title: 'Environmental Artificial Intelligence',
    titleKo: '환경 인공지능',
    description: 'Applying explainable artificial intelligence and deep learning techniques to environmental engineering problems. Developing interpretable models that combine domain knowledge with machine learning for trustworthy environmental predictions.',
    descriptionKo: '설명 가능한 인공지능과 딥러닝 기법을 환경공학 문제에 적용합니다. 도메인 지식과 기계학습을 결합한 해석 가능한 모델을 개발합니다.',
    methods: ['Explainable AI', 'Transfer Learning', 'Reinforcement Learning', 'Random Forest'],
    applications: ['Environmental Prediction', 'Decision Support', 'Process Optimization'],
    keywords: ['XAI', 'Deep Learning', 'Machine Learning', 'Environmental Engineering'],
    displayOrder: 3,
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin and Surrogate Modeling',
    titleKo: '디지털 트윈 및 대리 모델링',
    description: 'Creating digital replicas of environmental systems that integrate real-time monitoring data with simulation models for continuous assessment and scenario analysis.',
    descriptionKo: '실시간 모니터링 데이터와 시뮬레이션 모델을 통합하여 환경 시스템의 디지털 복제본을 구축합니다.',
    methods: ['Surrogate Models', 'Real-time Simulation', 'IoT Integration', 'Cloud Computing'],
    applications: ['Water Treatment Plants', 'River Systems', 'Urban Infrastructure'],
    keywords: ['Digital Twin', 'Real-time', 'Surrogate Model', 'Simulation'],
    displayOrder: 4,
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment Modeling',
    titleKo: '수처리 모델링',
    description: 'Modeling water and wastewater treatment processes including membrane filtration, chemical treatment, and micropollutant removal using process-based and AI-driven approaches.',
    descriptionKo: '막 여과, 화학적 처리, 미량오염물질 제거를 포함한 수처리 및 하수처리 공정을 모델링합니다.',
    methods: ['Neural Networks', 'Process Simulation', 'Optimization', 'NF/RO Modeling'],
    applications: ['Drinking Water Treatment', 'Wastewater Treatment', 'Membrane Processes'],
    keywords: ['Micropollutants', 'Membrane Filtration', 'Water Treatment', 'Fouling'],
    displayOrder: 5,
  },
  {
    id: 'remote-sensing',
    title: 'Environmental Monitoring and Remote Sensing',
    titleKo: '환경 모니터링 및 원격탐사',
    description: 'Utilizing satellite imagery, UAV-based sensors, and hyperspectral imaging for environmental monitoring. Developing algorithms for atmospheric correction and water quality estimation from remote sensing data.',
    descriptionKo: '위성 영상, UAV 기반 센서, 초분광 영상을 활용한 환경 모니터링 기술을 개발합니다.',
    methods: ['Hyperspectral Imaging', 'Satellite Remote Sensing', 'UAV Monitoring', 'CNN'],
    applications: ['Water Quality Monitoring', 'Algal Bloom Detection', 'Suspended Solids Mapping'],
    keywords: ['Remote Sensing', 'Hyperspectral', 'Satellite', 'UAV', 'Monitoring'],
    displayOrder: 6,
  },
  {
    id: 'gnn-spatiotemporal',
    title: 'Graph Neural Networks and Spatiotemporal Prediction',
    titleKo: '그래프 신경망 및 시공간 예측',
    description: 'Leveraging graph neural networks and transfer entropy to model complex spatiotemporal dynamics in environmental systems, including plankton community interactions and ecosystem dynamics.',
    descriptionKo: '그래프 신경망과 전달 엔트로피를 활용하여 환경 시스템의 복잡한 시공간 역학을 모델링합니다.',
    methods: ['Graph Neural Networks', 'Transfer Entropy', 'Graph Convolution', 'LSTM'],
    applications: ['Plankton Dynamics', 'Ecosystem Modeling', 'Spatiotemporal Forecasting'],
    keywords: ['GNN', 'Spatiotemporal', 'Graph Convolution', 'Community Dynamics'],
    displayOrder: 7,
  },
  {
    id: 'visualization',
    title: 'Immersive Visualization (AR/VR) for Environmental Simulation',
    titleKo: '몰입형 시각화 (증강현실/가상현실) 환경 시뮬레이션',
    description: 'Developing augmented reality and virtual reality applications for environmental simulation and management. Integrating hydraulic models with 3D visualization for immersive flood simulation, water distribution system monitoring, and chemical spill scenario analysis.',
    descriptionKo: '증강현실(AR)과 가상현실(VR) 기술을 환경 시뮬레이션 및 관리에 적용합니다. 수리 모델과 3D 시각화를 통합하여 몰입형 홍수 시뮬레이션, 상수관망 모니터링, 화학사고 시나리오 분석을 수행합니다.',
    methods: ['Augmented Reality', 'Virtual Reality', 'EPANET', 'SWMM', '3D Visualization'],
    applications: ['Urban Flood Simulation', 'Water Distribution Monitoring', 'Chemical Spill Visualization'],
    keywords: ['AR', 'VR', 'Digital Twin', 'Immersive Simulation', 'EPANET'],
    displayOrder: 8,
  },
  {
    id: 'neuromorphic',
    title: 'Eco-friendly Semiconductor and Neuromorphic Environmental Modeling',
    titleKo: '친환경 반도체 및 뉴로모픽 환경 모델링',
    description: 'Developing memristor-based synaptic neural networks for energy-efficient water quality prediction. Experimentally fabricated memristor devices with long-term potentiation/depression characteristics are integrated into neural network weight updates, enabling low-power neuromorphic hardware-based environmental monitoring systems.',
    descriptionKo: '멤리스터 기반 시냅스 신경망을 활용하여 에너지 효율적인 수질 예측 프레임워크를 개발합니다. 실험적으로 제작한 멤리스터 소자의 장기강화/장기억제 특성을 신경망 가중치 업데이트에 반영하여 저전력 뉴로모픽 하드웨어 기반 수질 예측 시스템으로 확장합니다.',
    methods: ['Memristor Devices', 'Synaptic Neural Networks', 'Neuromorphic Computing', 'Edge AI'],
    applications: ['Low-power Water Quality Prediction', 'Edge Environmental Monitoring', 'Real-time Processing'],
    keywords: ['Neuromorphic', 'Memristor', 'Eco-friendly Semiconductor', 'SyNN', 'Energy-efficient AI'],
    displayOrder: 9,
  },
];
