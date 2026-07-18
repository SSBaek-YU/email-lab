export interface Person {
  id: string;
  name: string;
  nameKo: string;
  role: 'pi' | 'postdoc' | 'phd' | 'ms-phd' | 'ms' | 'undergraduate' | 'visiting';
  roleLabel: string;
  roleLabelKo: string;
  period: string;
  researchInterests?: string[];
  email?: string;
  photo?: string;
  scholarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  orcidUrl?: string;
  alumni: boolean;
  alumniInfo?: string;
  displayOrder: number;
  verified: boolean;
  additionalInfo?: string | string[];
}

export const people: Person[] = [
  {
    id: 'sang-soo-baek',
    name: 'Sang-Soo Baek',
    nameKo: '백상수',
    role: 'pi',
    roleLabel: 'Assistant Professor / Principal Investigator',
    roleLabelKo: '조교수 / 연구책임자',
    period: '2022–present',
    researchInterests: [
      'Water Quality Modeling',
      'Harmful Algal Bloom Prediction',
      'Environmental AI & Deep Learning',
      'Hydrological Modeling',
      'Remote Sensing & Monitoring',
      'Digital Twin & Visualization (AR/VR)',
      'Eco-friendly Semiconductor (Neuromorphic)',
    ],
    email: 'ssbaek@yu.ac.kr',
    photo: '/images/people/baek-sangsoo.jpg',
    scholarUrl: 'https://scholar.google.co.kr/citations?user=JarDiqkAAAAJ&hl=ko',
    githubUrl: 'https://github.com/SSBaek-YU',
    linkedinUrl: 'https://www.linkedin.com/in/sang-soo-baek-8a0b20219/',
    alumni: false,
    displayOrder: 0,
    verified: true,
    additionalInfo: [
      'Assistant Professor, Yeungnam University (2022–present)',
      'Associate Editor, Water Research (2025–present)',
      'Elsevier & Stanford World\'s Top 2% Scientists (2025)',
    ],
  },
  {
    id: 'minhyuk-jeung',
    name: 'Minhyuk Jeung',
    nameKo: '정민혁',
    role: 'postdoc',
    roleLabel: 'Postdoctoral Researcher',
    roleLabelKo: '박사후연구원',
    period: '2025–present',
    photo: '/images/people/jeung-minhyuk.jpg',
    scholarUrl: 'https://scholar.google.com/citations?user=A86NEigAAAAJ&hl=ko',
    githubUrl: 'https://github.com/MH-water',
    linkedinUrl: 'https://www.linkedin.com/in/minhyuk-jeung-93a125337/',
    alumni: false,
    displayOrder: 10,
    verified: true,
  },
  {
    id: 'daeun-yun',
    name: 'Daeun Yun',
    nameKo: '윤다은',
    role: 'postdoc',
    roleLabel: 'Postdoctoral Researcher',
    roleLabelKo: '박사후연구원',
    period: '2025–present',
    photo: '/images/people/yun-daeun.png',
    alumni: false,
    displayOrder: 11,
    verified: true,
  },
  {
    id: 'gihun-bang',
    name: 'Gihun Bang',
    nameKo: '방기훈',
    role: 'ms-phd',
    roleLabel: 'Integrated M.S.–Ph.D. Student',
    roleLabelKo: '석박사통합과정',
    period: '2022–present',
    photo: '/images/people/bang-gihun.jpg',
    alumni: false,
    displayOrder: 20,
    verified: true,
  },
  {
    id: 'jihyun-park',
    name: 'Jihyun Park',
    nameKo: '박지현',
    role: 'ms-phd',
    roleLabel: 'Integrated M.S.–Ph.D. Student',
    roleLabelKo: '석박사통합과정',
    period: '2022–present',
    photo: '/images/people/park-jiye.jpg',
    alumni: false,
    displayOrder: 21,
    verified: true,
  },
  {
    id: 'nahyeon-gwon',
    name: 'Na Hyeon Gwon',
    nameKo: '권나현',
    role: 'ms-phd',
    roleLabel: 'Integrated M.S.–Ph.D. Student',
    roleLabelKo: '석박사통합과정',
    period: '2022–2025',
    alumni: true,
    alumniInfo: 'Graduated 2025',
    displayOrder: 101,
    verified: true,
  },
  {
    id: 'minjeong-cho',
    name: 'Min Jeong Cho',
    nameKo: '조민정',
    role: 'ms-phd',
    roleLabel: 'Integrated M.S.–Ph.D. Student',
    roleLabelKo: '석박사통합과정',
    period: '2022–present',
    photo: '/images/people/cho-minjeong.jpg',
    alumni: false,
    displayOrder: 23,
    verified: true,
  },
  {
    id: 'fergian-yoga-aditama',
    name: 'Fergian Yoga Aditama',
    nameKo: '',
    role: 'phd',
    roleLabel: 'Ph.D. Student',
    roleLabelKo: '박사과정',
    period: '2025–present',
    photo: '/images/people/aditama-fergian.png',
    alumni: false,
    displayOrder: 30,
    verified: true,
  },
  // TODO: VERIFY - Add alumni and any additional current members from updated info
  {
    id: 'sukyung-kim',
    name: 'Sukyung Kim',
    nameKo: '김수경',
    role: 'undergraduate',
    roleLabel: 'Researcher',
    roleLabelKo: '연구원',
    period: '2024–2024',
    alumni: true,
    alumniInfo: '2024',
    displayOrder: 100,
    verified: true,
  },
];

export function getCurrentMembers(): Person[] {
  return people
    .filter((p) => !p.alumni)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getAlumni(): Person[] {
  return people
    .filter((p) => p.alumni)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getPIInfo(): Person | undefined {
  return people.find((p) => p.role === 'pi');
}

export function getMembersByRole(role: Person['role']): Person[] {
  return people
    .filter((p) => p.role === role && !p.alumni)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
