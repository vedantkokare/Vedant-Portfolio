import React from 'react';
import { portfolioData } from '../data/content';
import './Footer.css';

export function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">{footer.copyright}</p>
        <a href="#top" className="footer-top-link">
          Back to top
        </a>
      </div>
    </footer>
  );
}
