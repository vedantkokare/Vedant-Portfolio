import React, { useState } from 'react';
import { portfolioData } from '../data/content';
import './Contact.css';

export function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = contact.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-band">
      <div className="container">
        <h2 className="section-label contact-label">{contact.label}</h2>

        <div className="contact-email-block">
          <a href={`mailto:${contact.email}`} className="contact-huge-email">
            {contact.email}
          </a>

          <div className="contact-copy-row">
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`contact-copy-btn ${copied ? 'is-copied' : ''}`}
            >
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Email address copied to clipboard.' : ''}
            </span>
          </div>
        </div>

        <div className="contact-details-grid">
          <div className="contact-detail-item">
            <span className="contact-detail-label">Phone</span>
            <a href={contact.phoneHref} className="contact-detail-value">
              {contact.phone}
            </a>
          </div>

          <div className="contact-detail-item">
            <span className="contact-detail-label">Location</span>
            <span className="contact-detail-value">{contact.location}</span>
          </div>

          <div className="contact-detail-item">
            <span className="contact-detail-label">LinkedIn</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-value"
            >
              linkedin.com/in/vedantkokare
            </a>
          </div>

          <div className="contact-detail-item">
            <span className="contact-detail-label">GitHub</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-value"
            >
              github.com/vedantkokare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
