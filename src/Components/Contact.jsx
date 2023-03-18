import React, { useState } from "react";
import "../styles/Contact.scss";
import Links from "./Links";
import {motion} from 'framer-motion'
import emailjs from "emailjs-com";
function Contact() {
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fkgyjaw",
        "template_m3sp5me",
        e.target,
        "yykWtfy2yhDG_eimt"
      )
      .then(
        (result) => {
          alert('thank you ! 💙');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="contact">
        <motion.div
        initial={{y:22 , opacity:0}}
        animate={{y: 0,opacity:1}}
        >
          <center><h2>CONTACT</h2><span>Have a question or want to work together?</span></center>
          <br />
          <form onSubmit={sendEmail} className="form">
            <div className="form-inputs">
              <div className="inputs">
                <label>Name</label>
                <input type="text" placeholder="Name" name="from_name" />
                <label>Email</label>
                <input placeholder="Enter email" type="email" name="to_name" required/>
              </div>
              <div className="message">
                <label>Message</label>
                <textarea placeholder="Your Message" name="message" />
              </div>
            </div>
            <div className="send-input">
              <input type="submit" value="Send" />
            </div>
          </form>
        </motion.div>
      </div>
      <Links />
    </>
  );
}

export default Contact;
