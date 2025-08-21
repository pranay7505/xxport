import React, { useEffect, useState } from "react";

function SkillIcon() {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    // Frontend Technologies
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      name: "HTML5" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      name: "CSS3" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      name: "JavaScript" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      name: "React" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", 
      name: "Bootstrap" 
    },
    
    // Programming Languages
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      name: "Python" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      name: "SQL" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg", 
      name: "YAML" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", 
      name: "Shell Scripting" 
    },
    
    // Developer Tools
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      name: "Git" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
      name: "GitHub" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 
      name: "VS Code" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
      name: "Docker" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", 
      name: "Terraform" 
    },
    
    // Cloud & DevOps
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
      name: "Microsoft Azure" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
      name: "AWS" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", 
      name: "Kubernetes" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 
      name: "Linux" 
    },
    
    // Database & Backend
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
      name: "MongoDB" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      name: "Node.js" 
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", 
      name: "Figma" 
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills & Expertise</h2>
        <p className="text-center mb-5" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          A comprehensive overview of my technical skills spanning frontend development, cloud computing, DevOps, and modern development tools.
        </p>
        
        <div className="skills-grid-single">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-item ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon-container">
                <img 
                  src={skill.src} 
                  alt={skill.name}
                  className="skill-icon"
                  loading="lazy"
                />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillIcon;
