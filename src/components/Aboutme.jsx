import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Aboutme = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
              <h1 className="hero-title">
                Hi, I'm Pranay Patil
              </h1>
              <p className="hero-subtitle">
                I'm a 3rd-year Electronics Engineering student with a deep passion for
                cloud computing and frontend development. I love building interactive
                and user-friendly experiences while constantly exploring new
                technologies. A fast learner and an enthusiastic problem solver, I'm
                eager to shape a career in the tech industry and make an impact through
                innovative solutions.
              </p>
              
              <div className="social-links">
                <a 
                  href="https://x.com/pranay7505" 
                  className="social-link animate-float"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pranay-patil-a95737252/" 
                  className="social-link animate-float"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ animationDelay: '0.2s' }}
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/pranay7508/" 
                  className="social-link animate-float"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ animationDelay: '0.4s' }}
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://github.com/pranay7505" 
                  className="social-link animate-float"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ animationDelay: '0.6s' }}
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme; 