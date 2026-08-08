export type Counselor = {
  id: string
  name: string
  country: string
  specialization: Array<'relationships' | 'teen' | 'career' | 'work_life' | 'anxiety' | 'depression'>
  languages: string[]
  rating: number
  bio: string
  contactUrl: string
}

export const COUNSELORS: Counselor[] = [
  {
    id: 'c1',
    name: 'Dr. Aisha Khan',
    country: 'United Arab Emirates',
    specialization: ['relationships', 'teen', 'anxiety'],
    languages: ['English', 'Arabic'],
    rating: 4.9,
    bio: 'Specializes in teen relationship dynamics and social anxiety.',
    contactUrl: 'https://example.com/counselors/aisha-khan',
  },
  {
    id: 'c2',
    name: 'Prof. Mateo García',
    country: 'Spain',
    specialization: ['career', 'anxiety'],
    languages: ['Spanish', 'English'],
    rating: 4.8,
    bio: 'Career transitions, early-career burnout, and performance anxiety.',
    contactUrl: 'https://example.com/counselors/mateo-garcia',
  },
  {
    id: 'c3',
    name: 'Dr. Priya Srinivasan',
    country: 'India',
    specialization: ['work_life', 'depression'],
    languages: ['English', 'Hindi', 'Tamil'],
    rating: 4.9,
    bio: 'Work–life balance and mood disorders in busy professionals.',
    contactUrl: 'https://example.com/counselors/priya-srinivasan',
  },
  {
    id: 'c4',
    name: 'Dr. Noah Williams',
    country: 'USA',
    specialization: ['relationships', 'depression'],
    languages: ['English'],
    rating: 4.7,
    bio: 'Attachment patterns, communication, and self-compassion practices.',
    contactUrl: 'https://example.com/counselors/noah-williams',
  },
  {
    id: 'c5',
    name: 'Dr. Hana Suzuki',
    country: 'Japan',
    specialization: ['career', 'work_life'],
    languages: ['Japanese', 'English'],
    rating: 4.8,
    bio: 'Supports young adults navigating studies, first roles, and boundaries.',
    contactUrl: 'https://example.com/counselors/hana-suzuki',
  },
  {
    id: 'c6',
    name: "Dr. Thabo Mokoena",
    country: 'South Africa',
    specialization: ['teen', 'relationships'],
    languages: ['English', 'Zulu'],
    rating: 4.7,
    bio: 'Focus on adolescent well‑being and healthy relationship skills.',
    contactUrl: 'https://example.com/counselors/thabo-mokoena',
  },
  {
    id: 'c7',
    name: 'Dr. Lea Müller',
    country: 'Germany',
    specialization: ['work_life', 'anxiety'],
    languages: ['German', 'English'],
    rating: 4.8,
    bio: 'Workplace stress, boundary setting, and practical habits to recover.',
    contactUrl: 'https://example.com/counselors/lea-mueller',
  },
  {
    id: 'c8',
    name: 'Dr. Lucas Moreau',
    country: 'France',
    specialization: ['relationships', 'career'],
    languages: ['French', 'English'],
    rating: 4.7,
    bio: 'Relationship communication and early career decision‑making.',
    contactUrl: 'https://example.com/counselors/lucas-moreau',
  },
]
