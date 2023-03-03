import React, { useState } from "react";
import "../styles/Navbar.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const css = `
  .hum::before{
    transform: rotate(-45deg);
}
.hum::after{
  transform: rotate(45deg);
}
  `;
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="my logo" />
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-menu">
        <button className="hum"></button>
      </div>

      <div
        className="links-hum"
        style={{ transform: isOpen && "translateX(0)" }}
      >
        <Link to="/about">
          <a href="">
            <button>About</button>
          </a>
        </Link>
        <Link to="/projects">
          <a href="">
            <button>Projects</button>
          </a>
        </Link>
        <Link to="/contact">
          <a href="">
            <button>Contact</button>
          </a>
        </Link>
      </div>
      {isOpen && <style>{css}</style>}
    </div>
  );
}

export default NavBar;
