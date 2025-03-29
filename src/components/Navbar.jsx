import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">Pranay</a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <a className="nav-link custom-text-color" href="#">Home</a>
            </li>

            {/* DROPDOWN MENU */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link dropdown-toggle custom-text-color"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#calculator">Calculator</a></li>
                <li><a className="dropdown-item" href="#portfolio">Portfolio Website</a></li>
                <li><a className="dropdown-item" href="#other">Other Projects</a></li>
              </ul>
            </li>

            <li className="nav-item me-4">
              <a className="nav-link custom-text-color" href="#about">About</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link custom-text-color" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
