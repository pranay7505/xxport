import React from "react";

function SkillIcon() {
  const skills = [
    { src: "html.png", alt: "HTML" },
    { src: "css.png", alt: "CSS" },
    { src: "js.gif", alt: "JavaScript" },
    { src: "bootstrap.png", alt: "React" },
    { src: "mongo.png", alt: "MongoDB" },
    { src: "docker.png", alt: "Express.js" },
    { src: "react.png", alt: "Bootstrap" },
    { src: "figma.png", alt: "Material UI" },
    { src: "mongo.png", alt: "Git" },
    { src: "github.png", alt: "GitHub" },
    { src: "aws.png", alt: "Heroku" },
    { src: "azure.png", alt: "Netlify" },
  ];

  return (
    <div className="skillicon d-flex flex-wrap justify-content-center gap-3">
      {skills.map((skill, index) => (
        <div className="icon" key={index}>
          <img src={skill.src} alt={skill.alt} width="50" height="50" />
        </div>
      ))}
    </div>
  );
}

export default SkillIcon;
