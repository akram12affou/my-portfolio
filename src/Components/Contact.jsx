import React, { useState } from "react";
import "../styles/Contact.scss";
import Links from "./Links";
import emailjs from "emailjs-com";
function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
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
      <>
        <div className="contact">
          <h2>CONTACT</h2>
          <span>Have a question or want to work together?</span>
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
        </div>
      </>
      <Links />
    </>
  );
}

export default Contact;
