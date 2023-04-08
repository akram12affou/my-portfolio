import React from "react";
import { img } from "react-lazy-load-image-component";
import "../styles/Projects.scss";
import Links from "./Links";
import GitHubIcon from "@mui/icons-material/GitHub";
import crypto_app1 from "../images/APEX-1.png";
import crypto_app2 from "../images/APEX-2.png";
import crypto_app3 from "../images/APEX-3.png";
import crypto_app4 from "../images/APEX-4.png";

import chat_app1 from "../images/FAST-1.png";
import chat_app2 from "../images/FAST-2.png";
import chat_app3 from "../images/FAST-3.png";
import cinemagic_1 from "../images/cinemagic-1.png";
import cinemagic_2 from "../images/cinemagic-2.png";
import cinemagic_3 from "../images/cinemagic-3.png";
import cinemagic_4 from "../images/cinemagic-4.png";
import cinemagic_5 from "../images/cinemagic-5.png";
import WATCH_app1 from "../images/WA7CH-1.png";
import WATCH_app2 from "../images/WA7CH-2.png";
import WATCH_app3 from "../images/WA7CH-3.png";
import WATCH_app4 from "../images/WA7CH-4.png";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "bootstrap/dist/css/bootstrap.min.css";
function Projects() {
  return (
    <div style={{ background: "rgb(42 42 42)" }}>
      <motion.div
        className="projects"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2>Portfolio</h2>
        <span>
          <center>
            // these are my favorite projects I've worked on for the past year.
            Have a look around and make sure to hit me up!
          </center>
        </span>
        <div className="projects-container">
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>WA7CH</h3>
                <div className="source-live">
                       <a
                      target="_blank"
                      href="https://github.com/akram12affou/WA7CH"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://keen-griffin-c64ae1.netlify.app/"
                    >
                      <RemoveRedEyeIcon />
                    </a>
                  </div>
           
              </div>
              <div>
                <p className="description ">
                  WA7CH is a modern and innovative e-commerce app built using
                  <span className="tech"> React</span>,{" "}
                  <span className="tech"> Redux</span>,{" "}
                  <span className="tech"> SASS</span>,{" "}
                  <span className="tech"> Firebase</span>, and{" "}
                  <span className="tech"> Material UI</span>. It is a
                  full-featured online shopping platform that offers customers a
                  seamless and convenient way to browse and purchase products .
                  
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img className="img" src={WATCH_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={WATCH_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={WATCH_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={WATCH_app4} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="hr-bar"></div>
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>APEX</h3>
                <div className="source-live">
                    <a
                      target="_blank"
                      href="https://github.com/akram12affou/coingecko-app.git"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://deft-gumption-340eb5.netlify.app/"
                    >
                      <RemoveRedEyeIcon />
                    </a>
                  </div>
              </div>
              <div>
                <p className="description ">
                  APEX is built with <span className="tech"> React.tsx, Redux, Sass, Material Ui</span>{" "}
                  brings you up-to-date information on every coin through an{" "}
                  <span className="tech">API</span>, complete with detailed
                  charts using <span className="tech">Chart.js</span>. You can
                  also track your favorite coins through authentication to make
                  informed investment decisions with{" "}
                  <span className="tech">Firebase</span>.
                 
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img className="img" src={crypto_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={crypto_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={crypto_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={crypto_app4} alt="" />
                  </Carousel.Item>
            
                </Carousel>
              </div>
            </div>
          </div>
          <div className="hr-bar"></div>
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>FASTEXT</h3>
                <div className="source-live">
                    <a
                      target="_blank"
                      href="https://github.com/akram12affou/chat"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://spiffy-blini-9a96d2.netlify.app"
                    >
                      <RemoveRedEyeIcon />
                    </a>
                  </div>
              </div>
              <div>
                <p className="description ">
                  {" "}
                  FASTEXT is a chat app project built using the powerful
                  combination of <span className="tech">React JS</span> and{" "}
                  <span className="tech">Firebase</span>. With built-in
                  authentication and session-based room names. This
                  user-friendly app allows you to connect with your friends and
                  loved ones in real-time .
                  
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img className="img" src={chat_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={chat_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={chat_app1} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="hr-bar"></div>
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>CINEMAGIC </h3>
                <div className="source-live">
                    <a
                      target="_blank"
                      href="https://github.com/akram12affou/movie-app-tmdb"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://heartfelt-axolotl-ae909f.netlify.app/"
                    >
                      <RemoveRedEyeIcon />
                    </a>
                  </div>
              </div>
              <div>
                <p className="description ">
                  {" "}
                  Cinemagic is a sleek and efficient movie app that has been
                  expertly crafted using <span className="tech">React</span> , <span className="tech">Redux</span>, <span className="tech">Sass</span> , and <span className="tech">Material UI</span>.
                  With a powerful <span className="tech">API</span> at its core, Cinemagic is capable of
                  bringing you the latest information on top-rated, popular, and
                  upcoming movies, all at the touch of a button. Whether you
                  want to explore movie details and actor information or simply
                  keep track of your own watch list .
                 
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img className="img" src={cinemagic_1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={cinemagic_2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={cinemagic_3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={cinemagic_4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img" src={cinemagic_5} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Links />
    </div>
  );
}

export default Projects;
