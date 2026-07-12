export interface Award {
  id: string;
  title: string;
  titleKo?: string;
  organization: string;
  organizationKo?: string;
  year: number;
  recipient?: string;
  description?: string;
  verified: boolean;
}

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Best Research Award',
    organization: 'Korea Water Resource Association',
    organizationKo: '한국수자원학회',
    year: 2018,
    verified: true,
  },
  {
    id: 'award-2',
    title: 'First Prize, EDISON Challenge',
    organization: 'Ministry of Science and ICT',
    organizationKo: '과학기술정보통신부',
    year: 2018,
    verified: true,
  },
  {
    id: 'award-3',
    title: "Third Prize, Graduate's Paper Competition",
    organization: 'Ulsan Development Institute',
    organizationKo: '울산발전연구원',
    year: 2015,
    verified: true,
  },
  {
    id: 'award-4',
    title: 'Talent Award of Korea',
    organization: 'Deputy Prime Minister & Ministry of Education',
    organizationKo: '부총리 겸 교육부장관',
    year: 2014,
    verified: true,
  },
];
