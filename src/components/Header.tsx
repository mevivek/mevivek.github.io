import React, { useState } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#about" className="text-lg font-bold text-gray-900 dark:text-white">
            VK
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark px-3 py-2 text-sm font-medium relative group"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light dark:bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </motion.a>
              ))}
            </nav>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <SunIcon className="h-5 w-5 text-gray-300" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleNavClick}
                  className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
