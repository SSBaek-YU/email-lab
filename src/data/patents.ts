export interface Patent {
  id: string;
  title: string;
  titleKo?: string;
  registrationNumber: string;
  year: number;
  type: 'patent' | 'software' | 'program';
  description?: string;
  relatedResearchAreas?: string[];
  verified: boolean;
}

export const patents: Patent[] = [
  {
    id: 'patent-1',
    title: 'Sensitivity and Auto-calibration Code for the Watershed Models',
    registrationNumber: 'C-2016-034099',
    year: 2016,
    type: 'software',
    relatedResearchAreas: ['hydro-modeling'],
    verified: true,
  },
  {
    id: 'patent-2',
    title: 'Program for Designing Optimal Plan of Low Impact Development (LID)',
    registrationNumber: 'C-2017-002245',
    year: 2017,
    type: 'software',
    relatedResearchAreas: ['hydro-modeling'],
    verified: true,
  },
  {
    id: 'patent-3',
    title: 'SWMM LID Water Quality Simulation',
    registrationNumber: 'C-2018-013861',
    year: 2018,
    type: 'software',
    relatedResearchAreas: ['hydro-modeling', 'water-treatment'],
    verified: true,
  },
  {
    id: 'patent-4',
    title: 'SWMM-HYDRUS Model',
    registrationNumber: 'C-2018-013862',
    year: 2018,
    type: 'software',
    relatedResearchAreas: ['hydro-modeling'],
    verified: true,
  },
  {
    id: 'patent-5',
    title: 'Algae Classification and Cell Counting Based on Deep Learning',
    registrationNumber: '10-2018-0036656',
    year: 2018,
    type: 'patent',
    relatedResearchAreas: ['water-quality-hab', 'environmental-ai'],
    verified: true,
  },
  {
    id: 'patent-6',
    title: 'Freshwater, Brackish Water Integrated Marine Physics and Water Quality Numerical Model',
    registrationNumber: 'C-2020-020427',
    year: 2020,
    type: 'software',
    relatedResearchAreas: ['hydro-modeling', 'water-quality-hab'],
    verified: true,
  },
  {
    id: 'patent-7',
    title: 'Machine Learning (Random Forest) Based Alexandrium Prediction Model',
    registrationNumber: 'C-2020-020429',
    year: 2020,
    type: 'software',
    relatedResearchAreas: ['water-quality-hab', 'environmental-ai'],
    verified: true,
  },
  {
    id: 'patent-8',
    title: 'Deep Learning (LSTM) Based River Water Quality Prediction Model',
    registrationNumber: 'C-2020-020428',
    year: 2020,
    type: 'software',
    relatedResearchAreas: ['water-quality-hab', 'environmental-ai'],
    verified: true,
  },
];
