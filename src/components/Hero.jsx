import React from 'react';
import { portfolioData } from '../data/content';
import { useClock } from '../hooks/useClock';
import './Hero.css';

export function Hero() {
  const { personal } = portfolioData;
  const { time, location, zone } = useClock();

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <p className="section-label hero-label">{personal.heroLabel}</p>

        <div className="hero-lockup">
          <h1 className="hero-display" aria-label={personal.fullName}>
            <span className="hero-line-mask">
              <span className="hero-line hero-line-solid">{personal.firstName}</span>
            </span>
            <span className="hero-line-mask">
              <span className="hero-line hero-line-outline">{personal.lastName}</span>
            </span>
          </h1>

          <div className="hero-clock-circle" aria-label={`Current local time in ${location} (${zone}): ${time}`}>
            <span className="clock-city">{location}</span>
            <time className="clock-time" dateTime={time}>
              {time}
            </time>
            <span className="clock-zone">{zone}</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-copy prose-measure">
            <p className="hero-lead">{personal.heroLine}</p>
            <p className="hero-sub">{personal.heroSub}</p>
          </div>

          <div className="hero-cta-row">
            <div className="hero-buttons">
              <a href="#projects" className="btn-accent">
                View my work
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Download résumé
              </a>
            </div>

            <nav className="hero-social-links" aria-label="Direct profile links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className="editorial-link">
                Email
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
