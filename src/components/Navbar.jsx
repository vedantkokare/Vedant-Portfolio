import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/content';
import './Navbar.css';

export function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { personal, navLinks } = portfolioData;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="Vedant Ganesh Kokare home">
          VK<span className="brand-period" aria-hidden="true">.</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary navigation">
          <ul className="nav-links">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent btn-sm nav-resume-desktop"
          >
            Download résumé
          </a>

          <button
            type="button"
            className="nav-menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-overlay"
            aria-label="Open navigation menu"
          >
            <span className="menu-toggle-label">Menu</span>
            <span className="menu-bars" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={`mobile-overlay ${menuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="container mobile-overlay-header">
          <a href="#top" className="nav-brand" onClick={closeMenu}>
            VK<span className="brand-period" aria-hidden="true">.</span>
          </a>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            Close
          </button>
        </div>

        <nav className="container mobile-overlay-nav" aria-label="Mobile sections">
          <ul className="mobile-overlay-links">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-overlay-link ${isActive ? 'is-active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-overlay-footer">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mobile-overlay-cta"
              onClick={closeMenu}
            >
              Download résumé
            </a>
            <div className="mobile-overlay-meta">
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
              <span>{personal.location}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
