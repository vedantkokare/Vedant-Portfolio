import React from 'react';
import { portfolioData } from '../data/content';
import './Projects.css';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-band projects-section">
      <div className="container">
        <h2 className="section-label">{projects.label}</h2>

        <div className="project-rows">
          {projects.featured.map((project) => (
            <article key={project.id} className="project-row">
              <div className="project-info-col">
                <header className="project-header">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3 className="project-title">{project.title}</h3>
                </header>

                <p className="project-description prose-measure">{project.description}</p>

                <ul className="project-tags" aria-label={`Technologies used in ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag-item">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="project-actions">
                  <div className="project-buttons">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline btn-sm"
                    >
                      View on GitHub
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent btn-sm"
                      >
                        Live demo
                      </a>
                    )}
                  </div>

                  {project.liveNote && (
                    <p className="project-live-note">{project.liveNote}</p>
                  )}
                </div>
              </div>

              {project.imageUrl && (
                <figure className="project-visual-col">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="project-screenshot"
                    loading="lazy"
                  />
                </figure>
              )}
            </article>
          ))}
        </div>

        {/* Quiet "Also built" Row */}
        <div className="also-built-row">
          <h3 className="also-built-label">{projects.alsoBuilt.label}</h3>

          <div className="also-built-content">
            <ul className="also-built-list">
              {projects.alsoBuilt.items.map((item) => (
                <li key={item.name} className="also-built-item">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link also-built-link"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="also-built-name">{item.name}</span>
                  )}
                  <span className="also-built-detail"> — {item.detail}</span>
                </li>
              ))}
            </ul>

            <p className="also-built-more">
              More repositories at{' '}
              <a
                href={projects.alsoBuilt.githubLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                {projects.alsoBuilt.githubLinkLabel}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
