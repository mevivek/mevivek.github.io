import React from 'react';
import { motion } from 'framer-motion';
import { getExperience } from '../utils/portfolio';

const Experience = () => {
  const experiences = getExperience();

  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 text-sm text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mb-3">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-light/30 via-primary-light/50 to-teal-500/30 dark:from-primary-dark/30 dark:via-primary-dark/50 dark:to-teal-500/30"></div>
          
          <div className="space-y-12 md:space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 md:pl-24"
              >
                {/* Timeline header with dot and date in same row */}
                <div className="flex items-center mb-2">
                  {/* Timeline dot aligned with date */}
                  <div className="absolute left-[-8px] md:left-6 top-3 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Date badge */}
                  <div className="ml-0 md:ml-0 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full px-3 py-1 text-xs text-primary-light dark:text-primary-dark font-medium inline-block">
                    {experience.period}
                  </div>
                </div>
                
                {/* Content card */}
                <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.company}
                    </h3>
                    <p className="text-lg font-medium text-primary-light dark:text-primary-dark">
                      {experience.title}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 border-b border-gray-200/50 dark:border-gray-700/50 pb-4">
                    {experience.description}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {experience.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="mr-2 text-primary-light dark:text-primary-dark flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {experience.links && (
                      <div className="md:text-right mt-4 md:mt-0 whitespace-nowrap">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Project Links:
                        </h4>
                        <div className="flex space-x-4 md:justify-end">
                          {experience.links.student && (
                            <a 
                              href={experience.links.student}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-light hover:text-primary-light/80 dark:text-primary-dark dark:hover:text-primary-dark/80 inline-flex items-center"
                            >
                              <span className="mr-1">Student App</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                              </svg>
                            </a>
                          )}
                          {experience.links.tutor && (
                            <a 
                              href={experience.links.tutor}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-light hover:text-primary-light/80 dark:text-primary-dark dark:hover:text-primary-dark/80 inline-flex items-center"
                            >
                              <span className="mr-1">Tutor App</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 