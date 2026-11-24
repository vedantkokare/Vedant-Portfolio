import { useState, useEffect } from 'react';

/**
 * Tracks the currently active section ID based on scroll position.
 * @param {string[]} sectionIds - Section IDs in vertical page order
 * @param {number} offset - Sticky header offset in pixels
 */
export function useActiveSection(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If near the very top (Hero), clear section highlight or keep none active
      if (scrollY < 160) {
        setActiveSection('');
        return;
      }

      // If scrolled to the bottom of the page, highlight the last section (Contact)
      if (scrollY + windowHeight >= docHeight - 24 && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const probePosition = scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && probePosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
