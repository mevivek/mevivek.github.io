import React from 'react';
import { motion } from 'framer-motion';
import { getEducation, getExtracurricular } from '../utils/portfolio';
import { Education as EducationType, ExtracurricularActivity } from '../types/portfolio';

const Education = () => {
  const education = getEducation();
  const extracurricular = getExtracurricular();

  return (
    <section id="education" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 text-sm text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & Activities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My educational background and extracurricular involvement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Academic Education</h3>
            <div className="space-y-8">
              {education.map((edu: EducationType, index: number) => (
                <motion.div
                  key={`${edu.degree}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Decorative Element */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary-light/10 dark:bg-primary-dark/10"></div>
                  
                  <div className="relative">
                    <div className="inline-block px-3 py-1 text-xs bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full mb-2">
                      {edu.period}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Extracurricular Activities</h3>
            <div className="space-y-6">
              {extracurricular.map((activity: ExtracurricularActivity, index: number) => (
                <motion.div
                  key={`${activity.title}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-primary-light/80 to-teal-500/80 dark:from-primary-dark/80 dark:to-teal-500/80 p-4 text-white">
                    <h4 className="font-bold text-lg">{activity.title}</h4>
                    {activity.organization && <p>{activity.organization}</p>}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>
                        {activity.period || (activity.year ? `Year: ${activity.year}` : '')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 