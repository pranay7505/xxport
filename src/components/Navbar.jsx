function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg1-light">
        <div className="container-fluid">
          {/* Flex container to align brand close to Home */}
          <div className="d-flex w-100 justify-content-between align-items-center">
            {/* Brand part with adjusted margin */}
            <a className="navbar-brand me-3" href="#"></a> {/* 'me-3' adds margin-right */}
  
            {/* Navbar items - centered */}
            <div className="collapse navbar-collapse w-100 d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item me-4">
                  <a className="nav-link custom-text-color"  href="#">Home</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link  custom-text-color" href="#">Projects</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link  custom-text-color" href="#">About</a>
                </li>
                <li className="nav-item me-4">
                <a className="nav-link  custom-text-color" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  };






export default Navbar;