function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse w-100 d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <a className="nav-link custom-text-color" href="#home">Home</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link custom-text-color" href="#projects">Projects</a>
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
}

export default Navbar;
