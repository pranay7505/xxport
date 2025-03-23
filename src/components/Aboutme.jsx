import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Aboutme = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-black text-white">
      <h1 className="Namecon mainfont">Hi, I'm Pranay Patil</h1>
      <div className="d-flex gap-4 mt-2">
        <a href="#" className="text-white"><FaTwitter size={24} /></a>
        <a href="#" className="text-white"><FaLinkedin size={24} /></a>
        <a href="#" className="text-white"><FaInstagram size={24} /></a>
        <a href="#" className="text-white"><FaYoutube size={24} /></a>
        <a href="#" className="text-white"><FaGithub size={24} /></a>
      </div>
    </section>
  );
};

export default Aboutme;
