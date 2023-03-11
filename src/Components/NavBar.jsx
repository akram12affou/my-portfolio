import React, { useState } from "react";
import "../styles/Navbar.scss";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="my logo" />
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-menu">
        <button className="hum" >
        </button>
      </div>
      
      <div
        className="links-hum"
        style={{ transform: isOpen && "translateX(0)" }}
      >
       <button className='x-button' onClick={() => setIsOpen(false)}>
       <CloseIcon/>
        </button>
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
      
    </div>
  );
}

export default NavBar;
