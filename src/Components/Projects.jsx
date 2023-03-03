import React, { useState } from "react";
import "../styles/Projects.scss";
import Links from "./Links";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from "@mui/icons-material/Code";
import chat_app1 from "../images/chat-apk-1.png";
import chat_app2 from "../images/chat-apk-2.png";
import chat_app3 from "../images/chat-apk-3.png";
import chat_app4 from "../images/chat-apk-4.png";
import Carousel from "react-bootstrap/Carousel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "bootstrap/dist/css/bootstrap.min.css";
function Projects() {
  // const items = [
  //   {
  //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  //     altText: 'Slide 1',
  //     caption: 'Slide 1'
  //   },
  //   {
  //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  //     altText: 'Slide 2',
  //     caption: 'Slide 2'
  //   },
  //   {
  //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  //     altText: 'Slide 3',
  //     caption: 'Slide 3'
  //   }
  // ];
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
              This project is a note app built using React JS with a firebase
              backend to store all tasks and save the notes for every account
              with authentification. Also use css and reactstrap.
              <div className="source-live">
              <h2><GitHubIcon/></h2>
              <h2>< RemoveRedEyeIcon/></h2>
            </div>
            </div>
            </div>
            
            <div className="first-side">
              <div className="carousel">
              
                <Carousel>
                  <Carousel.Item>
                    <img src={chat_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app4} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          
          <div className="project">
            <div className="about-the-project">
              <div className="h3">
                <h3>Notes app</h3>
                <div className="">html css responsive firebase react sass</div>
              </div>
              This Project is about the Japanese anime television series One
              Piece which, I'm a huge fan of. This Website is a kind of
              encyclopedia site type. It's separated into two parts. The
              back-end: It's a rest API built using NodeJS and Express and uses
              MongoDB as a Data Base and serves JSON. And the front-end: Built
              using React that queries data from the server and displays it in
              the UI.
            </div>
            <div className="first-side">
              <div className="carousel">
                <div className="show-projects">
                  <button>
                    {" "}
                    <RemoveRedEyeIcon /> <div>DEMO</div>
                  </button>
                  <button>
                    <CodeIcon />
                    CODE
                  </button>
                </div>
                <Carousel>
                  <Carousel.Item>
                    <img src={chat_app1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={chat_app4} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
}

export default Projects;
