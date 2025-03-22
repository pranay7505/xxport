import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-light text-dark">
      <h2 className="mb-4">My Skills</h2>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <div className="skill-item">
          <FaHtml5 size={50} color="#E44D26" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt size={50} color="#1572B6" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <FaJs size={50} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaBootstrap size={50} color="#7952B3" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <FaReact size={50} color="#61DAFB" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FaNodeJs size={50} color="#3C873A" />
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
