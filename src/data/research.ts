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
    description: 'Developing predictive models for water quality parameters and harmful algal bloom (HAB) dynamics using process-based and data-driven approaches. Our lab integrates satellite/drone imagery, in-situ observation data, and meteorological information to predict environmental data in real time, while enhancing reliability and interpretability through Explainable AI (XAI).',
    descriptionKo: '위성/드론 영상, 현장 관측 데이터, 기상 정보를 통합 분석하여 수질과 유해조류를 실시간으로 예측하고, 설명 가능한 딥러닝 모델(XAI)을 통해 결과의 신뢰성과 해석 가능성을 높이고 있습니다.',
    methods: ['Deep Learning', 'LSTM', 'CNN', 'Explainable AI', 'Process-based Models'],
    applications: ['Drinking Water Safety', 'Reservoir Management', 'Early Warning Systems'],
    keywords: ['Cyanobacteria', 'Chlorophyll-a', 'Algal Bloom', 'Water Quality Prediction'],
    image: '/images/research/multimodal-ai-microplastic.jpg',
    displayOrder: 1,
  },
  {
    id: 'hydro-modeling',
    title: 'Hydrological and Hydraulic Modeling',
    titleKo: '수문·수리 모델링',
    description: 'Simulating watershed hydrology, urban stormwater systems, and river hydraulics. Integrating physics-based watershed models (SWMM, HYDRUS, EFDC) with deep learning for improved spatiotemporal estimation of surface and groundwater conditions.',
    descriptionKo: '유역 수문, 도시 우수 시스템, 하천 수리를 시뮬레이션합니다. SWMM, HYDRUS, EFDC 등 물리 기반 모델과 딥러닝을 통합합니다.',
    methods: ['SWMM', 'HYDRUS', 'EFDC', 'Physics-informed Neural Networks', 'Data Assimilation'],
    applications: ['Flood Prediction', 'Urban Drainage', 'Groundwater Assessment', 'LID Design'],
    keywords: ['Watershed Modeling', 'Stormwater', 'LID', 'Green Infrastructure'],
    displayOrder: 2,
  },
  {
    id: 'environmental-ai',
    title: 'Environmental Artificial Intelligence',
    titleKo: '환경 인공지능',
    description: 'Applying explainable AI and deep learning to solve diverse environmental problems including water pollution, harmful algae, and hydrological phenomena. Developing multimodal AI models that integrate microscopy images, biological characteristics, and experimental conditions for tasks such as phytoplankton species identification, behavior tracking, and microplastic-microalgae aggregate sinking velocity estimation.',
    descriptionKo: '수질오염, 유해조류, 수문·수리 현상 등 다양한 환경 문제를 해결하기 위해 설명 가능한 AI와 딥러닝을 적용합니다. 현미경 이미지, 생물학적 특성, 실험 조건을 통합한 멀티모달 AI 모델을 개발합니다.',
    methods: ['Explainable AI', 'Multimodal AI', 'Transfer Learning', 'Reinforcement Learning'],
    applications: ['Plankton Identification', 'Microplastic Analysis', 'Environmental Prediction'],
    keywords: ['XAI', 'Multimodal AI', 'Deep Learning', 'Environmental Engineering'],
    image: '/images/research/multimodal-ai-microplastic.jpg',
    displayOrder: 3,
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin and Surrogate Modeling',
    titleKo: '디지털 트윈 및 대리 모델링',
    description: 'Creating digital replicas of environmental systems that integrate real-time monitoring data with simulation models for continuous assessment and scenario analysis. Developing GNN-LSTM based surrogate models combined with AR visualization for chemical accident simulation frameworks, and building real-time water quality simulation toolboxes using machine learning and API integration.',
    descriptionKo: '실시간 모니터링 데이터와 시뮬레이션 모델을 통합하여 환경 시스템의 디지털 복제본을 구축합니다. GNN-LSTM 기반 대리 모델과 AR 시각화를 결합한 화학사고 시뮬레이션 프레임워크를 개발하고, 머신러닝과 API를 활용한 실시간 수질 시뮬레이션 툴박스를 개발합니다.',
    methods: ['Surrogate Models', 'GNN-LSTM', 'Real-time Simulation', 'IoT Integration', 'AR Visualization'],
    applications: ['Chemical Accident Simulation', 'Water Treatment Plants', 'River Systems', 'Urban Infrastructure'],
    keywords: ['Digital Twin', 'Surrogate Model', 'GNN-LSTM', 'AR', 'Real-time'],
    image: '/images/research/gnn-ar-chemical-simulation.jpg',
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
    description: 'Utilizing satellite imagery, UAV-based sensors, and hyperspectral imaging for environmental monitoring. Integrating satellite/drone imagery, in-situ observations, and meteorological data to develop real-time environmental prediction and monitoring systems.',
    descriptionKo: '위성/드론 영상, 현장 관측 데이터, 기상 정보를 통합하여 실시간 환경 예측 및 모니터링 시스템을 개발합니다.',
    methods: ['Hyperspectral Imaging', 'Satellite Remote Sensing', 'UAV Monitoring', 'CNN'],
    applications: ['Water Quality Monitoring', 'Algal Bloom Detection', 'Suspended Solids Mapping'],
    keywords: ['Remote Sensing', 'Hyperspectral', 'Satellite', 'UAV', 'Monitoring'],
    displayOrder: 6,
  },
  {
    id: 'gnn-spatiotemporal',
    title: 'Graph Neural Networks and Spatiotemporal Prediction',
    titleKo: '그래프 신경망 및 시공간 예측',
    description: 'Leveraging graph neural networks combined with LSTM to model complex spatiotemporal dynamics. GCN-LSTM models process both spatial and temporal information, making them suitable for simulating pollutant dispersion in rivers and predicting ecosystem dynamics including plankton community interactions.',
    descriptionKo: '그래프 신경망과 LSTM을 결합하여 오염물질 확산 모의, 생태계 동태 예측 등 복잡한 시공간 역학을 모델링합니다.',
    methods: ['Graph Neural Networks', 'GCN-LSTM', 'Transfer Entropy', 'Graph Convolution'],
    applications: ['Pollutant Dispersion', 'Plankton Dynamics', 'Chemical Accident Simulation'],
    keywords: ['GNN', 'Spatiotemporal', 'GCN-LSTM', 'Community Dynamics'],
    displayOrder: 7,
  },
  {
    id: 'visualization',
    title: 'Immersive Visualization (AR/VR) for Environmental Simulation',
    titleKo: '몰입형 시각화 (증강현실/가상현실) 환경 시뮬레이션',
    description: 'Developing immersive VR flood simulations using SWMM modeling data converted to 3D visualization, enabling realistic flood experience through HMD and treadmill integration. Building AR-based water distribution monitoring systems using EPANET to visualize pipe structures and water quality information (residual chlorine, flow rate) in real-time on mobile devices with GPS-based location alignment.',
    descriptionKo: 'SWMM 기반 홍수 모델링 데이터를 3D로 변환하여 VR 환경에서 도시 침수 체험을 구현하고, EPANET을 활용하여 AR 기반 상수관망 모니터링 시스템(잔류염소 농도, 유량 등 실시간 시각화)을 개발합니다.',
    methods: ['Augmented Reality', 'Virtual Reality', 'EPANET', 'SWMM', '3D Visualization', 'Unity'],
    applications: ['Urban Flood Simulation', 'Water Distribution Monitoring', 'Chemical Spill Visualization', 'Risk Education'],
    keywords: ['AR', 'VR', 'Digital Twin', 'Immersive Simulation', 'EPANET', 'HMD'],
    image: '/images/research/vr-flood-simulation.jpg',
    displayOrder: 8,
  },
  {
    id: 'neuromorphic',
    title: 'Eco-friendly Semiconductor and Neuromorphic Environmental Modeling',
    titleKo: '친환경 반도체 및 뉴로모픽 환경 모델링',
    description: 'Developing memristor-informed synaptic neural network (SyNN) frameworks for energy-efficient water quality prediction. Experimentally fabricated memristor devices with long-term potentiation and depression characteristics are analyzed, and their pulse-based conductance change properties are reflected in neural network weight updates, aiming to evaluate the potential for low-power neuromorphic hardware-based water quality prediction systems.',
    descriptionKo: '실험적으로 제작·분석한 멤리스터 소자의 장기강화/장기억제 특성을 반영한 memristor-informed SyNN 기반 수질 예측 프레임워크를 개발합니다. 펄스 기반 전도도 변화 특성을 신경망 가중치 업데이트에 반영하여 저전력 뉴로모픽 하드웨어 기반 수질 예측 시스템으로의 확장 가능성을 평가합니다.',
    methods: ['Memristor Devices', 'Synaptic Neural Networks', 'Neuromorphic Computing', 'Edge AI'],
    applications: ['Low-power Water Quality Prediction', 'Edge Environmental Monitoring', 'Real-time Processing'],
    keywords: ['Neuromorphic', 'Memristor', 'Eco-friendly Semiconductor', 'SyNN', 'Energy-efficient AI'],
    image: '/images/research/neuromorphic-semiconductor.jpg',
    displayOrder: 9,
  },
];
