import React, { useEffect, useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCode, FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Experience() {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Cloud & DevOps Intern",
      company: "ElevateLabs",
      location: "Remote",
      duration: "6 Months",
      period: "Jan 2024 - Jun 2024",
      type: "Remote Internship",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      description: "Specialized in cloud computing and DevOps practices with Microsoft Azure, focusing on infrastructure automation, containerization, and CI/CD pipeline development. Gained extensive hands-on experience in modern cloud technologies and deployment strategies.",
      responsibilities: [
        "Designed and deployed cloud infrastructure on Microsoft Azure using Infrastructure as Code (IaC) with Terraform",
        "Implemented automated CI/CD pipelines using Azure DevOps for seamless application deployment",
        "Containerized full-stack web applications using Docker and deployed on Azure Container Registry (ACR)",
        "Wrote Kubernetes manifests in YAML to deploy scalable frontend and backend services",
        "Used kubectl and Helm for controlled rollouts and zero-downtime deployments",
        "Enabled efficient provisioning of Azure resources including Resource Groups, VMs, VNets, NSGs, and Storage Accounts",
        "Improved deployment reliability and reduced manual configuration time by 75% using automation best practices"
      ],
      technologies: [
        "Microsoft Azure",
        "Terraform",
        "Docker",
        "Kubernetes",
        "Azure DevOps",
        "YAML",
        "kubectl",
        "Helm",
        "Azure Container Registry",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Git & GitHub"
      ],
      achievements: [
        "Successfully automated Azure infrastructure deployment reducing setup time by 75%",
        "Implemented end-to-end CI/CD pipeline using GitHub Actions to automate Terraform plan and apply workflows",
        "Deployed scalable containerized applications with zero-downtime using Kubernetes",
        "Gained expertise in secure database access and integration for cloud applications",
        "Contributed to team's DevOps transformation and cloud migration strategies",
        "Received recognition for implementing best practices in cloud security and compliance"
      ],
      featured: true
    }
  ];

  const stats = [
    { number: "6", label: "Months Experience", icon: FaCalendarAlt },
    { number: "75%", label: "Deployment Time Reduced", icon: FaAward },
    { number: "12+", label: "Cloud Technologies", icon: FaBriefcase },
    { number: "100%", label: "Remote Collaboration", icon: FaCode }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="text-center mb-5" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Real-world experience gained through hands-on internship, working with industry professionals and modern technologies.
        </p>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-item ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="experience-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="job-meta">
                      <span className="duration">
                        <FaCalendarAlt className="me-2" />
                        {exp.period}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt className="me-2" />
                        {exp.location}
                      </span>
                      <span className={`job-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="experience-content">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <h5 className="content-title">
                        <FaBriefcase className="me-2" />
                        Key Responsibilities
                      </h5>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <h5 className="content-title">
                        <FaAward className="me-2" />
                        Key Achievements
                      </h5>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="technologies-used">
                    <h5 className="content-title">
                      <FaCode className="me-2" />
                      Technologies & Tools
                    </h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="experience-stats mt-5">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className={`stat-card ${isVisible ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="experience-cta mt-5">
          <div className="cta-card">
            <h3>Cloud & DevOps Expertise</h3>
            <p>
              With specialized experience in Azure cloud infrastructure, containerization, and CI/CD automation, 
              I'm ready to help organizations accelerate their digital transformation and optimize their deployment processes. 
              Let's discuss how my cloud and DevOps skills can drive your next project forward.
            </p>
            <button 
              className="cta-button"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <FaUsers className="me-2" />
              Discuss Cloud Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;