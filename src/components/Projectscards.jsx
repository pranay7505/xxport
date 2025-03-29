import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectList = [
    { id: 1, image: "s11.png", title: "Project 1", description: <h1>CLoud based </h1> },
    { id: 2, image: "s12.png", title: "Project 2", description: "This is project 2. It features ABC and is built using React." },
    { id: 3, image: "s13.png", title: "Project 3", description: "This is project 3. It is focused on web development and UI design." },
    { id: 4, image: "s14.png", title: "Project 4", description: "This is project 4. It has advanced backend integration." },
    { id: 5, image: "s14.png", title: "Project 5", description: "This is project 5. A mobile-friendly and responsive app." },
    { id: 6, image: "s14.png", title: "Project 6", description: "This is project 6. It includes AI-powered features." },
    { id: 7, image: "s14.png", title: "Project 7", description: "This is project 7. Focuses on data visualization." },
    { id: 8, image: "s11.png", title: "Project 8", description: "This is project 8. A cutting-edge project using new tech." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: window.innerWidth >= 992 ? 4 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  return (
    <div className="container p-4">
      <Slider {...settings}>
        {projectList.map((project) => (
          <div key={project.id} className="p-2">
            <div 
              className="card project-card h-100 shadow-sm"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img 
                src={project.image} 
                className="card-img-top w-100"
                style={{ height: "200px", objectFit: "cover" }} 
                alt={project.title} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1"></p>
                <a href="#" className="btn btn-primary mt-auto">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Display Hovered Project Details */}
      <div className="hover-details">
        {hoveredProject ? (
          <div className="details-box">
            <h3>{hoveredProject.title}</h3>
            <p>{hoveredProject.description}</p>
          </div>
        ) : (
          <div className="details-placeholder">
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
