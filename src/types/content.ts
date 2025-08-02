export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  slug: string;
}

export interface Expertise {
  title: string;
  description: string;
  services: string[];
  slug: string;
}

export interface PortfolioCompany {
  name: string;
  logo?: string;
  website: string;
  description: string;
  images?: string[];
  slug: string;
}

export interface BlogPost {
  title: string;
  author: string;
  case_study_for?: string;
  publishedDate: string;
  excerpt?: string;
  featured?: boolean;
  tags?: string[];
  body: string;
  slug: string;
}