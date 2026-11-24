import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact'];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS, 120);

  return (
    <div id="top" className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
