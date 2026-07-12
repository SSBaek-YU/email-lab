export const siteConfig = {
  labName: 'Environmental Monitoring/Modelling and AI Lab',
  labNameKo: '환경 지능형 모니터링·모델링 연구실',
  abbreviation: 'EMAIL Lab',
  slogan: 'Environmental Monitoring/Modeling is All You Need.',
  sloganFormal: 'Advancing Environmental Monitoring and Modeling through Artificial Intelligence.',
  university: 'Yeungnam University',
  universityKo: '영남대학교',
  department: 'Department of Environmental Engineering',
  departmentKo: '환경공학과',

  professorName: 'Sang-Soo Baek',
  professorNameKo: '백상수',
  professorTitle: 'Assistant Professor',
  email: 'ssbaek@yu.ac.kr',
  phone: '+82-53-810-2542',

  // TODO: VERIFY CURRENT OFFICE
  address: 'Room 508, Building E28, 280 Daehak-Ro, Gyeongsan-si, Gyeongsangbuk-do 38541, Republic of Korea',
  addressKo: '경상북도 경산시 대학로 280 영남대학교 소재관 E28 508호',
  buildingName: 'Sojaegwan (소재관)',
  room: '508',
  building: 'E28',

  scholarUrl: 'https://scholar.google.co.kr/citations?user=JarDiqkAAAAJ&hl=ko',
  scholarUserId: 'JarDiqkAAAAJ',
  orcidUrl: '', // TODO: Add ORCID if available
  githubUrl: '', // TODO: Add GitHub if available

  universityUrl: 'https://www.yu.ac.kr',
  departmentUrl: 'https://env.yu.ac.kr',

  defaultLanguage: 'en' as const,
  lastVerified: '2025-07-12',

  mapQuery: 'Yeungnam+University+Building+E28',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yeungnam+University+Gyeongsan',

  collaborators: [
    'Korea Radioactive Waste Agency (KORAD)',
    'Korea Atomic Energy Research Institute (KAERI)',
    'Korea Institute of Ocean Science & Technology (KIOST)',
    'Korea Water Resources Corporation (K-water)',
    'Nakdonggang National Institute of Biological Resources',
    'National Institute of Environmental Research (NIER)',
    'Electronics and Telecommunications Research Institute (ETRI)',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
