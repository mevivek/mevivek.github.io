import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getPersonalInfo, downloadResume } from '../utils/portfolio';

const Hero = () => {
  const [isGeneratingResume, setIsGeneratingResume] = useState(false);
  const { name, title, about, image, social } = getPersonalInfo();

  const handleDownloadResume = async () => {
    try {
      setIsGeneratingResume(true);
      await downloadResume();
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsGeneratingResume(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-6 py-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full text-primary-light dark:text-primary-dark font-medium text-sm mb-6">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="text-primary-light dark:text-primary-dark">
                {name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-6">
              {title}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {about}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
              >
                View Projects
              </a>
              <button
                onClick={handleDownloadResume}
                disabled={isGeneratingResume}
                className={`px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 flex items-center ${isGeneratingResume ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isGeneratingResume ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Download Resume
                  </>
                )}
              </button>
            </div>
            
            <div className="flex items-center space-x-4 justify-center lg:justify-start">
              <span className="text-gray-600 dark:text-gray-400">Follow me:</span>
              <a 
                href={social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-light/20 dark:bg-primary-dark/20 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/20 dark:bg-teal-500/10 rounded-full z-0"></div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-teal-500/20 dark:from-primary-dark/20 dark:to-teal-500/10 rounded-full blur-2xl z-0"></div>
              
              {/* Profile image */}
              <div 
                className="w-full h-full relative z-10 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 60%, transparent 85%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 85%)'
                }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 