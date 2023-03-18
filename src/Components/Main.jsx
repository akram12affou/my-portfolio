import React , {useState} from "react";
import "../styles/Main.scss";
import Links from "./Links";
import {motion} from 'framer-motion'

import { Link } from "react-router-dom";
function Main() {
  // const [move , setMove] = useState(false)
  return (
    <>
      <motion.div className="main"
         
        
         >
        <motion.h2 initial={{y:16}}
         animate={{y: 0}}>Welcome, I'm Akram</motion.h2>
        <motion.div className="into" initial={{y:22 , opacity:0}}
      animate={{y: 0,opacity:1}}>
          <h3>I'm a web developer currently based in beni mellal , Morocco</h3>
        <h3>Hit me up and let's create something special</h3>
        <Link to="/projects" >
          <button>VIEW PROJECTS</button>
        </Link>
        </motion.div >
        
      </motion.div>
      <Links />
    </>
  );
}

export default Main;
