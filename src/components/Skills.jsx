import React from 'react';
import { portfolioData } from '../data/content';
import './Skills.css';

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-band skills-section">
      <div className="container">
        <h2 className="section-label">{skills.label}</h2>

        <div className="skills-rows">
          {skills.groups.map((group) => (
            <div key={group.name} className="skills-row">
              <h3 className="skills-group-name">{group.name}</h3>
              <p className="skills-group-list">
                {group.items.map((skill, idx) => (
                  <React.Fragment key={skill}>
                    <span className="skill-word">{skill}</span>
                    {idx < group.items.length - 1 && (
                      <span className="skill-sep" aria-hidden="true">
                        {' · '}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
