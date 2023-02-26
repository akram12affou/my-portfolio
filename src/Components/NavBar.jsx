import React from 'react'
import '../styles/Navbar.scss'
import logo from '../images/logo.png'
function NavBar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="my logo" />
        <button className='humburger'>---</button>        
    </div>
  )
}

export default NavBar