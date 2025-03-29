import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa" ;
const Aboutme = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-black text-white">
      <h1 className="Namecon mainfont">Hi, I'm Pranay Patil</h1>
      <div className="d-flex gap-4 mt-2">
        <a href="https://www.threads.net/@pranay7508" className="text-white">< FaLinkedin size={24} /></a>
        <a href="https://www.linkedin.com/in/pranay-patil-a95737252/" className="text-white"><FaLinkedin size={24} /></a>
        <a href="https://www.instagram.com/pranay7508/" className="text-white"><FaInstagram size={24} /></a>
        <a href="https://github.com/pranay7505" className="text-white"><FaGithub size={24} /></a>
      </div>
    </section>
  );
};

export default Aboutme; 