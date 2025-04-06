import portfolioData from '../data/portfolio.json';
import { Portfolio } from '../types/portfolio';

export function getPortfolioData(): Portfolio {
  return portfolioData as Portfolio;
}

export function getPersonalInfo() {
  return getPortfolioData().personal;
}

export function getSkills() {
  return getPortfolioData().skills;
}

export function getExperience() {
  return getPortfolioData().experience;
}

export function getProjects() {
  return getPortfolioData().projects;
}

export function getEducation() {
  return getPortfolioData().education;
}

export function getExtracurricular() {
  return getPortfolioData().extracurricular;
}

export function getLanguages() {
  return getPortfolioData().languages;
}

// Function to generate and download resume (to be implemented)
export async function downloadResume() {
  // TODO: Implement resume generation using the portfolio data
  throw new Error('Not implemented yet');
} 