import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="font-mono" style={{ color: 'var(--text-primary)' }}>
              &lt;Pranay/&gt;
            </h5>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Electronics Engineering student passionate about cloud computing and frontend development.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a 
                href="https://x.com/pranay7505" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pranay-patil-a95737252/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/pranay7508/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://github.com/pranay7505" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-3 mb-4">
            <h6 style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Navigation</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('home')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  Home
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('about')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  About
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('skills')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  Skills
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('projects')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  Projects
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('experience')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  Experience
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('certifications')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  Certifications
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link p-0 text-start"
                  onClick={() => scrollToSection('contact')}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4">
            <h6 style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Technologies</h6>
            <ul className="list-unstyled mt-3">
              <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>React & Vite</li>
              <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Cloud Computing</li>
              <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Azure & AWS</li>
              <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Frontend Development</li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-5 mb-4">
            <h6 style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Get In Touch</h6>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Ready to collaborate on your next project? Let's create something amazing together!
            </p>
            <button 
              className="btn btn-sm mt-2"
              onClick={() => scrollToSection('contact')}
              style={{ 
                background: 'var(--gradient-primary)', 
                color: 'white', 
                border: 'none',
                borderRadius: '8px',
                padding: '0.5rem 1rem'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <hr style={{ borderColor: 'var(--border-color)', margin: '2rem 0 1rem' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              © 2025 Pranay Patil. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Made with <FaHeart style={{ color: '#e74c3c' }} /> using React & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;