import React, { useState } from "react";
import "../styles/Projects.scss";
import Links from "./Links";
import GitHubIcon from "@mui/icons-material/GitHub";
import note_app1 from "../images/chat-apk-1.png";
import note_app2 from "../images/chat-apk-2.png";
import note_app3 from "../images/chat-apk-3.png";
import note_app4 from "../images/chat-apk-4.png";
import crypto_app1 from "../images/crypto-currency-1.png";
import crypto_app2 from "../images/crypto-currency-2.png";
import crypto_app3 from "../images/crypto-currency-3.png";
import crypto_app4 from "../images/crypto-currency-4.png";
import crypto_app5 from "../images/crypto-currency-5.png";
import chat_app1 from "../images/FAST-1.png";
import chat_app2 from "../images/FAST-2.png";
import chat_app3 from "../images/FAST-3.png";
import movie_app1 from "../images/movie-app-1.png";
import movie_app2 from "../images/movie-app-2.png";
import WATCH_app1 from "../images/WA7CH-1.png";
import WATCH_app2 from "../images/WA7CH-2.png";
import WATCH_app3 from "../images/WA7CH-3.png";
import WATCH_app4 from "../images/WA7CH-4.png";
import Carousel from "react-bootstrap/Carousel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "bootstrap/dist/css/bootstrap.min.css";
function Projects() {
  return (
    <>
      <div className="projects">
        <h2>Portfolio</h2>
        <span>
          // these are my favorite projects I've worked on for the past year.
          Have a look around and make sure to hit me up!
        </span>
        <div className="projects-container">
        <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>WA7CH</h3>
                <div className="tools">
                  <p>HTML & CSS</p>
                  <p>REACTSTRAP</p>
                  <p>MATERIAL UI</p>
                  <p>RESPONSIVE</p>
                  <p>JAVASCRIPT</p>
                  <p>REACT JS</p>
                  <p>REDUX</p>
                  <p>SASS</p>
                  <p>API</p>
                  <p>FIREBASE</p>
                </div>
              </div>
              <div>
                <h3 className="about-project">ABOUT</h3>
                <p className="description ">
                WA7CH is a modern and innovative e-commerce app built using
                React, Redux, SASS, Firebase, and Material UI. It is a
                full-featured online shopping platform that offers customers a
                seamless and convenient way to browse and purchase products.
                </p>
                <div className="source-live">
                  <a href="https://github.com/akram12affou/crypto-currency">
                    <GitHubIcon />
                  </a>
                  <a href="https://keen-griffin-c64ae1.netlify.app/">
                    <RemoveRedEyeIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img src={WATCH_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={WATCH_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={WATCH_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={WATCH_app4} alt="" />
                  </Carousel.Item>
                  
                </Carousel>
              </div>
            </div>
          </div>
        <br />
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>Coin Mentor</h3>
                <div className="tools">
                  <p>HTML & CSS</p>
                  <p>REACTSTRAP</p>
                  <p>RESPONSIVE</p>
                  <p>MATERIAL UI</p>
                  <p>JAVASCRIPT</p>
                  <p>REACT JS</p>
                  <p>REDUX</p>
                  <p>API</p>

                  <p>CHART JS</p>
                  <p>FIREBASE</p>
                </div>
              </div>
              <div>
                <h3 className="about-project">ABOUT</h3>
                Coin Mentor is built with React.js brings you up-to-date
                information on every coin through an API, complete with detailed
                charts using Chart.js. You can also track your favorite coins
                through authentication to make informed investment decisions.
                <div className="source-live">
                  <a href="https://github.com/akram12affou/crypto-currency">
                    <GitHubIcon />
                  </a>
                  <a href="">
                    <RemoveRedEyeIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img src={crypto_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={crypto_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={crypto_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={crypto_app4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={crypto_app5} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <br />
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>FASTEXT</h3>
                <div className="tools">
                  <p>HTML & CSS</p>
                  <p>RESPONSIVE</p>
                  <p>MATERIAL UI</p>
                  <p>MATERIAL UI</p>
                  <p>JAVASCRIPT</p>
                  <p>REACT JS</p>
                  <p>FIREBASE</p>
                </div>
              </div>
              <div>
                <h3 className="about-project">ABOUT</h3>
                FASTEXT is a chat app project built using the powerful
                combination of React JS and Firebase . With built-in
                authentication and session-based room names. This user-friendly
                app allows you to connect with your friends and loved ones in
                real-time.
                <div className="source-live">
                  <a href="https://github.com/akram12affou/chat">
                    <GitHubIcon />
                  </a>
                  <a href="">
                    <RemoveRedEyeIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img src={chat_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app1} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <br />
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>MOVIEDB</h3>
                <div className="tools">
                  <p>HTML & CSS</p>
                  <p>RESPONSIVE</p>
                  <p>MATERIAL UI</p>
                  <p>JAVASCRIPT</p>
                  <p>REACT JS</p>
                  <p>API</p>
                  <p>REDUX</p>
                </div>
              </div>
              <div>
                <h3 className="about-project">ABOUT</h3>
                MOVIEDB is a movie-lover's tool, built using technologies like
                React JS, Redux, and an external API. With Redux integration,
                you can easily store and access your watched list, movie details
                , reviews , and similar movies from anywhere in the app. And
                with API integration, you'll always have access to the latest
                information on the movies you love.
                <div className="source-live">
                  <a href="https://github.com/akram12affou/movie-app">
                    <GitHubIcon />
                  </a>
                  <a href="">
                    <RemoveRedEyeIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img src={movie_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={movie_app2} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <br />
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>Notes app</h3>
                <div className="tools">
                  <p>HTML & CSS</p>
                  <p>REACTSTRAP</p>
                  <p>RESPONSIVE</p>
                  <p>TYPESCRIPT</p>
                  <p>REACT JS</p>
                  <p>FIREBASE</p>
                </div>
              </div>
              <div>
                <h3 className="about-project">ABOUT</h3>
                This app provides users with a secure and efficient way to store
                tasks for every account. With its user-friendly interface, users
                can easily create, mark as complete, and delete tasks. The app
                also features a dark mode option for better visibility in
                low-light environments and a big letter mode for users who have
                difficulty reading small text. Also use css and reactstrap.
                <div className="source-live">
                  <a href="https://github.com/akram12affou/note-app">
                    <GitHubIcon />
                  </a>
                  <a href="">
                    <RemoveRedEyeIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="first-side">
              <div className="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img src={note_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={note_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={note_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={note_app4} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <br />
          
        </div>
      </div>
      <Links />
    </>
  );
}

export default Projects;
