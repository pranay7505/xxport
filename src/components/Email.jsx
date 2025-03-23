import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ki86lvf",
      "template_urgc4fo",
      formData,
      "0XDnUy0Rl3yb3710V"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      alert("Failed to send message. Try again later.");
      console.error(error);
    });
  };

  return (
    <section className="contact-section">
      <form onSubmit={handleSubmit} className="formgt">
        <h2 className="text-center">Contact Me</h2>
        <div className="mb-3">
          <input 
            type="text" name="name" placeholder="Your Name" 
            className="form-control" value={formData.name} 
            onChange={handleChange} required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" name="email" placeholder="Your Email" 
            className="form-control" value={formData.email} 
            onChange={handleChange} required 
          />
        </div>
        <div className="mb-3">
          <textarea 
            name="message" rows="4" placeholder="Your Message" 
            className="form-control" value={formData.message} 
            onChange={handleChange} required 
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
