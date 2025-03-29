import React from "react";
import Projects from "./Projectscards";
import SkillIcon from "./Skillicon";
function Skillset() {
  return (
    <div className="skillset-container d-flex flex-column flex-lg-row vh-100 bg-dark text-white">
      <div className="left-container bg-secondary flex-grow-1 p-4">
        <Projects />
      </div>
      <div className="right-container bg-light text-dark d-flex align-items-center justify-content-center p-4" style={{ minWidth: "300px" }}>
        <SkillIcon />
      </div>
    </div>
  );
}

export default Skillset;