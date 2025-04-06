import React from 'react';
import { motion } from 'framer-motion';
import { getSkills } from '../utils/portfolio';

const Skills = () => {
  const { programmingLanguages, frameworks, cloudTechnologies, versionControl, softSkills } = getSkills();

  // Group categories for better display
  const skillGroups = [
    {
      title: 'Technical Skills',
      categories: [
        {
          name: 'Programming Languages',
          items: programmingLanguages,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        },
        {
          name: 'Frameworks & Libraries',
          items: frameworks,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          name: 'Cloud & DevOps',
          items: [...cloudTechnologies, ...versionControl],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          )
        },
        {
          name: 'Soft Skills',
          items: softSkills,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 text-sm text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mb-3">
            Expertise & Proficiency
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Technologies</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional skills developed through years of experience
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 rounded-xl p-7 border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200/50 dark:border-gray-700/50 pb-4">
                {group.title}
              </h3>
              
              <div className="space-y-8">
                {group.categories.map((category, categoryIndex) => (
                  <div key={category.name} className="space-y-3">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="text-primary-light dark:text-primary-dark">
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {category.name}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                          className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200/50 dark:border-gray-600/50 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary-light/10 hover:dark:bg-primary-dark/10 hover:text-primary-light hover:dark:text-primary-dark"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 