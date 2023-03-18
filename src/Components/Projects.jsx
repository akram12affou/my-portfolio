import React from "react";
import { img } from "react-lazy-load-image-component";
import "../styles/Projects.scss";
import Links from "./Links";
import GitHubIcon from "@mui/icons-material/GitHub";
import crypto_app1 from "../images/crypto-currency-1.png";
import crypto_app2 from "../images/crypto-currency-2.png";
import crypto_app3 from "../images/crypto-currency-3.png";
import crypto_app4 from "../images/crypto-currency-4.png";
import crypto_app5 from "../images/crypto-currency-5.png";
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
import {motion} from 'framer-motion'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "bootstrap/dist/css/bootstrap.min.css";
function Projects() {

  return (
    <div style={{background : 'rgb(42 42 42)'}}>
      <motion.div className="projects"
      initial={{y:22 , opacity:0}}
      animate={{y: 0,opacity:1}}
      >
        <h2>Portfolio</h2>
        <span>
          <center>// these are my favorite projects I've worked on for the past year.
          Have a look around and make sure to hit me up!</center>
          
        </span>
        <div className="projects-container">
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>WA7CH</h3>
              </div>
              <div>
                <p className="description ">
                  WA7CH is a modern and innovative e-commerce app built using
                  React, Redux, SASS, Firebase, and Material UI. It is a
                  full-featured online shopping platform that offers customers a
                  seamless and convenient way to browse and purchase products.
                  <div className="source-live">
                <a target="_blank" href="https://github.com/akram12affou/WA7CH">
                  <GitHubIcon />
                </a>
                <a
                  target="_blank"
                  href="https://keen-griffin-c64ae1.netlify.app/"
                >
                  <RemoveRedEyeIcon />
                </a>
              </div>
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img className='img' src={WATCH_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={WATCH_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={WATCH_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={WATCH_app4} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
             
            </div>
          </div>
          <div className="hr-bar"></div>
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>Coin Mentor</h3>
              </div>
              <div>
                <p className="description ">
                  Coin Mentor is built with React.js brings you up-to-date
                  information on every coin through an API, complete with
                  detailed charts using Chart.js. You can also track your
                  favorite coins through authentication to make informed
                  investment decisions.
                  <div className="source-live">
                <a
                  target="_blank"
                  href="https://github.com/akram12affou/crypto-currency"
                >
                  <GitHubIcon />
                </a>
                <a
                  target="_blank"
                  href="https://sparkling-daifuku-87cf61.netlify.app"
                >
                  <RemoveRedEyeIcon />
                </a>
              </div>
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img className='img' src={crypto_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={crypto_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={crypto_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={crypto_app4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={crypto_app5} alt="" />
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
              </div>
              <div>
                <p className="description ">
                  {" "}
                  FASTEXT is a chat app project built using the powerful
                  combination of React JS and Firebase . With built-in
                  authentication and session-based room names. This
                  user-friendly app allows you to connect with your friends and
                  loved ones in real-time.
                  <div className="source-live">
                <a target="_blank" href="https://github.com/akram12affou/chat">
                  <GitHubIcon />
                </a>
                <a
                  target="_blank"
                  href="https://spiffy-blini-9a96d2.netlify.app"
                >
                  <RemoveRedEyeIcon />
                </a>
              </div>
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img className='img' src={chat_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={chat_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={chat_app1} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
             
            </div>
          </div>
          <div className="hr-bar"></div>
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>CINEMAGIC</h3>
              </div>
              <div>
                <p className="description ">
                  {" "}
                  CINEMAGIC is a movie-lover's tool, built using technologies like
                  React JS, Redux, and an external API. With Redux integration,
                  you can easily store and access your watched list, movie
                  details , reviews , and similar movies from anywhere in the
                  app. And with API integration, you'll always have access to
                  the latest information on the movies you love.
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
                </p>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img className='img' src={cinemagic_1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={cinemagic_2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={cinemagic_3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={cinemagic_4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='img' src={cinemagic_5} alt="" />
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

