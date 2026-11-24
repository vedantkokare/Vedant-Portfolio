import React from 'react';
import { portfolioData } from '../data/content';
import './About.css';

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-band about-section">
      <div className="container about-grid">
        <div className="about-label-col">
          <h2 className="section-label">{about.label}</h2>
        </div>

        <div className="about-body-col prose-measure">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
