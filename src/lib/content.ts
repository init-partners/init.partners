import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { TeamMember, Expertise, PortfolioCompany, BlogPost } from '@/types/content';

const contentDirectory = path.join(process.cwd(), '.pages');

function getContentFiles(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.md'));
}

function getContentData<T>(directory: string, slug: string): T & { slug: string } {
  const fullPath = path.join(contentDirectory, directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  
  return {
    ...data as T,
    slug,
  };
}

export function getAllTeamMembers(): TeamMember[] {
  const files = getContentFiles('team');
  return files.map(file => {
    const slug = file.replace(/\.md$/, '');
    return getContentData<Omit<TeamMember, 'slug'>>('team', slug);
  });
}

export function getAllExpertise(): Expertise[] {
  const files = getContentFiles('expertise');
  return files.map(file => {
    const slug = file.replace(/\.md$/, '');
    return getContentData<Omit<Expertise, 'slug'>>('expertise', slug);
  });
}

export function getAllPortfolioCompanies(): PortfolioCompany[] {
  const files = getContentFiles('portfolio');
  return files.map(file => {
    const slug = file.replace(/\.md$/, '');
    return getContentData<Omit<PortfolioCompany, 'slug'>>('portfolio', slug);
  });
}

export function getAllBlogPosts(): BlogPost[] {
  const files = getContentFiles('blog');
  return files.map(file => {
    const slug = file.replace(/\.md$/, '');
    return getContentData<Omit<BlogPost, 'slug'>>('blog', slug);
  });
}