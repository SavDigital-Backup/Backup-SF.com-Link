/**
 * Footer Library for Savoury Digital Factory
 * Contains multiple footer styles and configurations
 */

const footerLibrary = {
  // Collection of footer styles
  footerStyles: [
    {
      id: "simple",
      name: "Simple",
      description: "Basic centered text footer",
      html: `<footer class="footer-simple">
  <div class="footer-content">
    <p class="footer-text">{footerText}</p>
  </div>
</footer>`,
      css: `.footer-simple {
  margin-top: auto;
  padding: var(--spacing-md) 0;
  text-align: center;
}

.footer-simple .footer-text {
  font-size: 0.8rem;
  opacity: 0.7;
}`
    },
    {
      id: "with-links",
      name: "With Links",
      description: "Footer with navigation links",
      html: `<footer class="footer-with-links">
  <div class="footer-content">
    <div class="footer-links">
      <a href="#" class="footer-link">Home</a>
      <a href="#" class="footer-link">About</a>
      <a href="#" class="footer-link">Contact</a>
      <a href="#" class="footer-link">Privacy</a>
    </div>
    <p class="footer-text">{footerText}</p>
  </div>
</footer>`,
      css: `.footer-with-links {
  margin-top: auto;
  padding: var(--spacing-md) 0;
  text-align: center;
}

.footer-with-links .footer-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.footer-with-links .footer-link {
  color: var(--white);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-with-links .footer-link:hover {
  opacity: 1;
}

.footer-with-links .footer-text {
  font-size: 0.8rem;
  opacity: 0.7;
}`
    },
    {
      id: "with-social",
      name: "With Social",
      description: "Footer with social media icons",
      html: `<footer class="footer-with-social">
  <div class="footer-content">
    <div class="social-icons">
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
      </a>
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
    </div>
    <p class="footer-text">{footerText}</p>
  </div>
</footer>`,
      css: `.footer-with-social {
  margin-top: auto;
  padding: var(--spacing-md) 0;
  text-align: center;
}

.footer-with-social .social-icons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.footer-with-social .social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transition: background-color 0.2s;
}

.footer-with-social .social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.footer-with-social .social-icon svg {
  width: 18px;
  height: 18px;
}

.footer-with-social .footer-text {
  font-size: 0.8rem;
  opacity: 0.7;
}`
    },
    {
      id: "two-column",
      name: "Two Column",
      description: "Two column footer with logo and text",
      html: `<footer class="footer-two-column">
  <div class="footer-content">
    <div class="footer-logo">
      <img src="images/savlogo.png" alt="Logo" class="footer-logo-img">
    </div>
    <div class="footer-info">
      <p class="footer-text">{footerText}</p>
      <p class="footer-copyright">© ${new Date().getFullYear()} Savoury Digital Factory. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      css: `.footer-two-column {
  margin-top: auto;
  padding: var(--spacing-lg) 0;
}

.footer-two-column .footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
}

.footer-two-column .footer-logo-img {
  width: 60px;
  height: auto;
}

.footer-two-column .footer-info {
  text-align: left;
}

.footer-two-column .footer-text {
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
}

.footer-two-column .footer-copyright {
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 767px) {
  .footer-two-column .footer-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .footer-two-column .footer-info {
    text-align: center;
  }
}`
    },
    {
      id: "multi-column",
      name: "Multi Column",
      description: "Multi-column footer with sections",
      html: `<footer class="footer-multi-column">
  <div class="footer-content">
    <div class="footer-column">
      <h3 class="footer-heading">About</h3>
      <p class="footer-text">Savoury Digital Factory provides digital solutions for industrial applications.</p>
    </div>
    <div class="footer-column">
      <h3 class="footer-heading">Links</h3>
      <ul class="footer-links">
        <li><a href="#" class="footer-link">Home</a></li>
        <li><a href="#" class="footer-link">Services</a></li>
        <li><a href="#" class="footer-link">About</a></li>
        <li><a href="#" class="footer-link">Contact</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3 class="footer-heading">Contact</h3>
      <p class="footer-contact">Email: info@savouryfactory.com</p>
      <p class="footer-contact">Phone: +1 (123) 456-7890</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copyright">{footerText} | © ${new Date().getFullYear()} All rights reserved.</p>
  </div>
</footer>`,
      css: `.footer-multi-column {
  margin-top: auto;
  padding-top: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.2);
}

.footer-multi-column .footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-multi-column .footer-heading {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.footer-multi-column .footer-text {
  font-size: 0.9rem;
  line-height: 1.5;
}

.footer-multi-column .footer-links {
  list-style: none;
  padding: 0;
}

.footer-multi-column .footer-links li {
  margin-bottom: var(--spacing-sm);
}

.footer-multi-column .footer-link {
  color: var(--white);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-multi-column .footer-link:hover {
  opacity: 1;
}

.footer-multi-column .footer-contact {
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
}

.footer-multi-column .footer-bottom {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md) 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-multi-column .footer-copyright {
  font-size: 0.8rem;
  opacity: 0.7;
}`
    },
    {
      id: "modern",
      name: "Modern",
      description: "Modern footer with gradient background",
      html: `<footer class="footer-modern">
  <div class="footer-content">
    <div class="footer-brand">
      <img src="images/savlogo.png" alt="Logo" class="footer-logo-img">
      <h3 class="footer-brand-name">Savoury Digital</h3>
    </div>
    <div class="footer-links">
      <a href="#" class="footer-link">Home</a>
      <a href="#" class="footer-link">Services</a>
      <a href="#" class="footer-link">About</a>
      <a href="#" class="footer-link">Contact</a>
    </div>
    <div class="footer-social">
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
      </a>
      <a href="#" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-text">{footerText}</p>
  </div>
</footer>`,
      css: `.footer-modern {
  margin-top: auto;
  padding: var(--spacing-lg) 0 var(--spacing-md);
  background: linear-gradient(to right, rgba(0, 20, 64, 0.8), rgba(0, 85, 204, 0.8));
  position: relative;
  overflow: hidden;
}

.footer-modern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 20%);
  z-index: 0;
}

.footer-modern .footer-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-modern .footer-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.footer-modern .footer-logo-img {
  width: 40px;
  height: auto;
}

.footer-modern .footer-brand-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-modern .footer-links {
  display: flex;
  gap: var(--spacing-md);
}

.footer-modern .footer-link {
  color: var(--white);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-modern .footer-link:hover {
  opacity: 1;
}

.footer-modern .footer-social {
  display: flex;
  gap: var(--spacing-sm);
}

.footer-modern .social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transition: background-color 0.2s;
}

.footer-modern .social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.footer-modern .social-icon svg {
  width: 16px;
  height: 16px;
}

.footer-modern .footer-bottom {
  position: relative;
  z-index: 1;
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-modern .footer-text {
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 767px) {
  .footer-modern .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .footer-modern .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}`
    }
  ],
  
  // Get footer style by ID
  getFooterStyle: function(id) {
    return this.footerStyles.find(style => style.id === id) || this.footerStyles[0];
  },
  
  // Get all footer styles
  getAllFooterStyles: function() {
    return this.footerStyles;
  },
  
  // Generate footer HTML with custom text
  generateFooterHTML: function(styleId, footerText) {
    const style = this.getFooterStyle(styleId);
    return style.html.replace('{footerText}', footerText);
  },
  
  // Get footer CSS
  getFooterCSS: function(styleId) {
    const style = this.getFooterStyle(styleId);
    return style.css;
  }
};

// Initialize the footer library
// No initialization needed

