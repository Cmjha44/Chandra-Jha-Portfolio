export interface ProfileData {
  name: string;
  headline: string;
  subheadline: string;
  summary: string;
  location: string;
  email: string;
  linkedin: string;
  gammaPortfolio: string;
  github: string;
  avatarUrl: string;
  coreExpertise: {
    title: string;
    description: string;
    icon: string;
    points: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  department?: string;
  category?: 'Business Transformation using AI' | 'Domain Expertise & Operations' | 'AI & Systems Architecture';
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  honors?: string;
  programOverview?: string;
  highlights?: string[];
  courses?: {
    code: string;
    title: string;
    credits: number;
  }[];
  coursework?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'All' | 'Applied AI & RAG' | 'Data & Automation' | 'Web & EdTech' | 'Financial Systems';
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  architectureAndWorkflow?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  impactMetrics: string[];
  highlights: string[];
  featured?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
}

export interface HonorItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  note?: string;
}

export interface SkillCategory {
  categoryName: string;
  summary: string;
  skills: {
    name: string;
    proficiency?: string;
    highlighted?: boolean;
  }[];
}

export interface PortfolioDataset {
  profile: ProfileData;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  honors: HonorItem[];
  skills: SkillCategory[];
  stats: {
    label: string;
    value: string;
    caption: string;
  }[];
}
