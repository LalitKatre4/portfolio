export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'languages';

export interface NavItem {
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
}