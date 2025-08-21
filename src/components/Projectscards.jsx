import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projectList = [
    {
      id: 1,
      image: "project1.png",
      title: "Cloud-Based Website Deployment",
      description: "A fully functional website deployed on GitHub Pages with custom domain integration. Built with React (Vite) and styled with Bootstrap for a modern, responsive experience.",
      technologies: ["React", "Vite", "Bootstrap", "GitHub Pages", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      image: "project2.png",
      title: "Azure Deployment with Terraform",
      description: "Automated Azure infrastructure setup using Terraform and CI/CD pipelines. Implements Infrastructure as Code (IaC) for efficient cloud resource management.",
      technologies: ["Terraform", "Azure", "Azure DevOps", "CI/CD", "IaC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      image: "project3.jpg",
      title: "Azure Chatbot with AI Services",
      description: "Intelligent chatbot built using Azure AI services with natural language processing capabilities and seamless user interaction.",
      technologies: ["Azure AI", "Bot Framework", "Node.js", "NLP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      image: "project4.png",
      title: "React + Vite Portfolio Site",
      description: "Modern portfolio website built with React and Vite, featuring responsive design, dark/light mode, and smooth animations.",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="row g-4">
          {projectList.map((project, index) => (
            <div 
              key={project.id} 
              className={`col-lg-6 col-md-6 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-card">
                <div className="position-relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  {project.featured && (
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary">Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="project-link secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
