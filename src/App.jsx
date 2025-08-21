import React from 'react';
import ContactMe from './components/Email';
import './App.css';
import Aboutme from './components/Aboutme';
import Navbar from './components/Navbar';
import Skillset from './components/Skillset';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CursorFollower from './components/CursorFollower';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Aboutme />
        <section id="about" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title">About Me</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  As a passionate Electronics Engineering student, I bridge the gap between hardware and software. 
                  My journey in tech has led me to specialize in cloud computing and frontend development, 
                  where I create seamless digital experiences. I'm constantly learning new technologies and 
                  methodologies to stay at the forefront of innovation.
                </p>
                <div className="row mt-5">
                  <div className="col-md-4 mb-4">
                    <h4 style={{ color: 'var(--text-accent)' }}>50+</h4>
                    <p>Projects Completed</p>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h4 style={{ color: 'var(--text-accent)' }}>3+</h4>
                    <p>Years Learning</p>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h4 style={{ color: 'var(--text-accent)' }}>10+</h4>
                    <p>Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Skillset />
        <Experience />
        <Certifications />
        <ContactMe />
      </main>
      <CursorFollower />
      <Footer />
    </div>
  );
}

export default App;
