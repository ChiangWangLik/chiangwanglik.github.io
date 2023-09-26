import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Edward <i className="fa-solid fa-seedling"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-links" onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-links" onClick={closeMobileMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-me" className="nav-links-mobile" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>ABOUT ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
