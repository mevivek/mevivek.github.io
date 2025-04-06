export interface Social {
  github: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  image: string;
  social: Social;
}

export interface Skills {
  programmingLanguages: string[];
  frameworks: string[];
  cloudTechnologies: string[];
  versionControl: string[];
  softSkills: string[];
}

export interface ExperienceLinks {
  student?: string;
  tutor?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  links?: ExperienceLinks;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  period?: string;
  links: ProjectLinks;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export interface ExtracurricularActivity {
  title: string;
  organization?: string;
  period?: string;
  year?: string;
}

export interface Portfolio {
  personal: PersonalInfo;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  languages: string[];
  extracurricular: ExtracurricularActivity[];
} 