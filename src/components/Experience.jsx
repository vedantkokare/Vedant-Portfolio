import React from 'react';
import { portfolioData } from '../data/content';
import './Experience.css';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-band experience-section">
      <div className="container">
        <h2 className="section-label">{experience.label}</h2>

        <div className="experience-rows">
          {experience.items.map((item, idx) => (
            <article key={idx} className="experience-row">
              <div className="experience-date-col">
                <p className="experience-period">{item.period}</p>
                <p className="experience-location">{item.location}</p>
              </div>

              <div className="experience-role-col">
                <header className="experience-role-header">
                  <h3 className="experience-role-title">{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </header>

                <ul className="experience-bullets prose-measure">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <ul className="experience-tags" aria-label="Technologies used">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag-item">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
