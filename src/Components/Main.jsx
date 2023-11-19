import "../styles/Main.scss";
import {motion} from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import {LuGithub} from 'react-icons/lu'
import { MdOutlineEmail } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";


function Main() {
  return (
    <>
      <motion.div className="main">
        <motion.h2 initial={{y:16}}
         animate={{y: 0}}>Welcome, I'm Akram</motion.h2>
        <motion.div className="into" initial={{y:22 , opacity:0}}
      animate={{y: 0,opacity:1}}>
        
          <h3>I'm a web developer currently based in beni mellal , Morocco</h3>
          <h3>Hit me up and let's create something special ✨</h3>
          <br />
          <div className="links-dev">
            <div>
                 <LuGithub/>
               <span>
               github
                </span>  
            </div>
            <div>
<FaLinkedin />
<span>
linkedin
</span>

            </div>
            <div>
<MdOutlineEmail/>
<span>
  email
</span>

            </div>
            <div>
<FaRegFilePdf />
<span>
  resume
</span>

            </div>
        
          
          
          
          </div>
        
        <Link to="/projects" >
          <button>VIEW PROJECTS</button>
        </Link>

        </motion.div >
      </motion.div>
 
    </>
  );
}

export default Main;
