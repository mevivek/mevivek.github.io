import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
