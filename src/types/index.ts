export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'DevTools' | 'Database';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

export interface CodingProfile {
  platform: string;
  logo: string;
  achievements: string[];
  profileLink: string;
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string[];
  link?: string;
}