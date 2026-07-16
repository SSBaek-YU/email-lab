export interface Project {
  id: string;
  title: string;
  titleKo: string;
  fundingAgency: string;
  fundingAgencyKo?: string;
  period: string;
  role?: 'PI' | 'Co-PI' | 'Participant';
  summary?: string;
  summaryKo?: string;
  relatedResearchAreas?: string[];
  image?: string;
  status: 'ongoing' | 'completed';
  verified: boolean;
}

export const projects: Project[] = [
  {
    id: 'trace-hazardous-substance-ai',
    title: 'Development of a trace hazardous-substance prediction model combining explainable AI and numerical models',
    titleKo: '설명가능한 인공지능과 수치모델을 결합한 미량 유해 물질 예측모델 개발',
    fundingAgency: 'National Research Foundation of Korea (NRF)',
    fundingAgencyKo: '한국연구재단',
    period: '2022–2027',
    status: 'ongoing',
    verified: true,
  },
  {
    id: 'spent-nuclear-fuel-center',
    title: 'Spent Nuclear Fuel Management Core Technology Development Center',
    titleKo: '사용후핵연료관리 핵심기술개발 사업단',
    fundingAgency: 'Korea Radioactive Waste Agency (KORAD)',
    fundingAgencyKo: '원자력환경공단',
    period: '2024–2027',
    status: 'ongoing',
    verified: true,
  },
  {
    id: 'daecheong-lake-algal-bloom',
    title: '3D monitoring and AI-based modeling for algal-bloom reduction in Daecheong Lake',
    titleKo: '대청호 녹조 저감을 위한 입체 모니터링 및 AI 기반 모델링 연구',
    fundingAgency: 'National Institute of Environmental Research (NIER)',
    fundingAgencyKo: '국립환경과학원',
    period: '2026–2029',
    status: 'ongoing',
    verified: true,
  },
  {
    id: 'pna-digital-twin-transformer',
    title: 'Transformer-architecture optimization and scenario analysis for a partial nitritation/anammox (PN/A) digital-twin system',
    titleKo: '부분 아질산화/아나목스(PN/A) 디지털트윈 시스템 적용을 위한 Transformer 아키텍처 최적화 및 시나리오 분석',
    fundingAgency: 'Ministry of Education (MOE)',
    fundingAgencyKo: '교육부',
    period: '2026',
    status: 'ongoing',
    verified: true,
  },
  {
    id: 'upo-wetland-microalgae-carbon',
    title: 'Identifying carbon uptake and storage functions of microalgae in freshwater sedimentary environments (focused on Upo Wetland)',
    titleKo: '미세조류에 의한 담수 퇴적환경의 탄소 흡수 및 저장 기능 규명 (우포늪 중심)',
    fundingAgency: 'Nakdonggang National Institute of Biological Resources (NNIBR)',
    fundingAgencyKo: '낙동강생물자원관',
    period: '2026',
    status: 'ongoing',
    verified: true,
  },
  {
    id: 'water-network-data-assimilation',
    title: 'Development of a data-assimilation and contaminant-control system for water distribution networks based on AI and numerical models',
    titleKo: '인공지능 및 수치모델 기반 상수관망 자료 동화 및 오염물 제어 시스템 개발',
    fundingAgency: 'Electronics and Telecommunications Research Institute (ETRI)',
    fundingAgencyKo: '한국전자통신연구원',
    period: '2023–2025',
    status: 'completed',
    verified: true,
  },
];
