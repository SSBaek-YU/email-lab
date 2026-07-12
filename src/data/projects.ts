export interface Project {
  id: string;
  title: string;
  titleKo: string;
  fundingAgency: string;
  fundingAgencyKo?: string;
  period: string;
  role: 'PI' | 'Co-PI' | 'Participant';
  summary: string;
  summaryKo?: string;
  relatedResearchAreas?: string[];
  image?: string;
  status: 'ongoing' | 'completed';
  verified: boolean;
}

// TODO: VERIFY - Projects need to be confirmed from updated source
// The Google Sites did not have a separate projects page accessible
export const projects: Project[] = [
  {
    id: 'water-quality-ai-prediction',
    title: 'Development of AI-based Water Quality Prediction System',
    titleKo: 'AI 기반 수질 예측 시스템 개발',
    fundingAgency: 'National Research Foundation of Korea (NRF)',
    fundingAgencyKo: '한국연구재단',
    period: '2022–present',
    role: 'PI',
    summary: 'Developing explainable AI models for predicting water quality and harmful algal blooms in Korean water bodies.',
    relatedResearchAreas: ['water-quality-hab', 'environmental-ai'],
    status: 'ongoing',
    verified: false,
  },
  {
    id: 'digital-twin-water',
    title: 'Real-time Water Quality Simulation Toolbox',
    titleKo: '실시간 수질 시뮬레이션 툴박스 개발',
    fundingAgency: 'Ministry of Environment',
    fundingAgencyKo: '환경부',
    period: '2023–present',
    role: 'PI',
    summary: 'Building a real-time water quality simulation toolbox using machine learning and API integration for digital twin applications.',
    relatedResearchAreas: ['digital-twin', 'environmental-ai'],
    status: 'ongoing',
    verified: false,
  },
];
