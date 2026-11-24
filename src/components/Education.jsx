import React from 'react';
import { portfolioData } from '../data/content';
import './Education.css';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-band education-section">
      <div className="container">
        <h2 className="section-label">{education.label}</h2>

        <div className="education-list">
          {education.items.map((item, idx) => (
            <article
              key={idx}
              className={`education-row ${item.isHighlighted ? 'is-highlighted' : ''}`}
            >
              <div className="education-meta-col">
                <span className="education-meta">{item.meta}</span>
              </div>

              <div className="education-main-col">
                <h3 className="education-title">{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
