import React from 'react'
import '../styles/Main.scss'
import Links from "./Links"
import { Link } from 'react-router-dom'
function Main() {
  return (
    <>
    <div className='main'>  
  
        <h2>Welcome, I'm Akram</h2>
        <h3>I'm a web developer currently based in beni mellal , Moroco</h3>
        <h3>Hit me up and let's create something special</h3>       
        <Link to='/projects'><button>View Projects</button></Link>
        
    </div>
    <Links/>
    </>
  )
}

export default Main