import React,{useState} from "react";
import "../styles/Navbar.scss";
import logo from "../images/logo.png";
function NavBar() {
  const [isOpen , setIsOpen] = useState(false)
  const css = `
  .hum::before{
    transform: rotate(-45deg);
}
.hum::after{
  transform: rotate(45deg);
}


  `
  
  return (
    <div className="navbar">
      <img src={logo} alt="my logo" />
      <div className="cursor-menu"><button className="hum" onClick={() => setIsOpen(!isOpen)}></button></div>
      
      <div className="links-hum" style={{transform: isOpen && 'translateX(0)'}}>
       
       <a href="">
          <button>About me</button>
        </a>
        <a href="">
          <button>Projects</button>
        </a>
        <a href="">
          <button>Conatct me</button>
        </a>
      </div>
     {isOpen &&
      <style>
        {css}
      </style>}
    </div>
  );
}

export default NavBar;
