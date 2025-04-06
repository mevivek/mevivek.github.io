import portfolioData from '../data/portfolio.json';
import { Portfolio } from '../types/portfolio';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

// Function to generate and download resume
export async function downloadResume() {
  // Create a temporary container
  const container = document.createElement('div');
  const { name, title, email, phone, location, social } = getPersonalInfo();
  const skills = getSkills();
  const experiences = getExperience();
  const education = getEducation();
  
  // Apply styles to container
  container.style.width = '800px';
  container.style.padding = '40px';
  container.style.backgroundColor = 'white';
  container.style.color = 'black';
  container.style.fontFamily = 'Arial, sans-serif';
  
  // Create resume HTML content
  container.innerHTML = `
    <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; color: #333;">${name}</h1>
        <p style="margin: 5px 0; font-size: 18px; color: #666;">${title}</p>
        <div style="margin-top: 10px; font-size: 14px; color: #555;">
          <span>${email}</span> | <span>${phone}</span> | <span>${location}</span>
        </div>
        <div style="margin-top: 5px; font-size: 14px; color: #555;">
          <span>${social.github}</span> | <span>${social.linkedin}</span>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px; color: #444;">Skills</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
          <div style="flex: 1;">
            <h3 style="font-size: 16px; margin: 0 0 5px 0; color: #555;">Programming Languages</h3>
            <p style="margin: 0; font-size: 14px;">${skills.programmingLanguages.join(', ')}</p>
          </div>
          <div style="flex: 1;">
            <h3 style="font-size: 16px; margin: 0 0 5px 0; color: #555;">Frameworks & Libraries</h3>
            <p style="margin: 0; font-size: 14px;">${skills.frameworks.join(', ')}</p>
          </div>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
          <div style="flex: 1;">
            <h3 style="font-size: 16px; margin: 0 0 5px 0; color: #555;">Cloud Technologies</h3>
            <p style="margin: 0; font-size: 14px;">${skills.cloudTechnologies.join(', ')}</p>
          </div>
          <div style="flex: 1;">
            <h3 style="font-size: 16px; margin: 0 0 5px 0; color: #555;">Version Control</h3>
            <p style="margin: 0; font-size: 14px;">${skills.versionControl.join(', ')}</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px; color: #444;">Experience</h2>
        ${experiences.map(exp => `
          <div style="margin-top: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <h3 style="font-size: 16px; margin: 0; color: #333;">${exp.title}, ${exp.company}</h3>
              <span style="font-size: 14px; color: #666;">${exp.period}</span>
            </div>
            <p style="margin: 5px 0; font-size: 14px;">${exp.description}</p>
            <ul style="margin: 5px 0; padding-left: 20px; font-size: 14px;">
              ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
            <p style="margin: 5px 0; font-size: 14px;"><strong>Technologies:</strong> ${exp.technologies.join(', ')}</p>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 18px; border-bottom: 1px solid #ddd; padding-bottom: 5px; color: #444;">Education</h2>
        ${education.map(edu => `
          <div style="margin-top: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <h3 style="font-size: 16px; margin: 0; color: #333;">${edu.degree} in ${edu.field}</h3>
              <span style="font-size: 14px; color: #666;">${edu.period}</span>
            </div>
            <p style="margin: 5px 0; font-size: 14px;">${edu.institution}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Append to body temporarily (required for html2canvas)
  document.body.appendChild(container);
  
  try {
    // Convert to canvas
    const canvas = await html2canvas(container, {
      scale: 2, // Higher scale for better quality
      logging: false,
      useCORS: true,
      allowTaint: true
    });
    
    // Convert to PDF
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    
    pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save(`${name.replace(/\s+/g, '_')}_Resume.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    // Clean up
    document.body.removeChild(container);
  }
  
  return true;
} 