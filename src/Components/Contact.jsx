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
          console.log(result.text);
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
          <form onSubmit={sendEmail} className="form">
            <div className=""><div className="inputs">
              <label>Name</label>
              <input type="text" name="from_name" />
              <label>Email</label>
              <input type="email" name="to_name" />
            </div>
            <div className="message">
              <label>Message</label>
              <textarea name="message" />
              
            </div></div>
            <div>    <input type="submit" value="Send" /></div>
        
          </form>
        </div>
      </>
      <Links />
    </>
  );
}

export default Contact;
