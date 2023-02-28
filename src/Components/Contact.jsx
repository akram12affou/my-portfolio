import React from "react";
import "../styles/Contact.scss";
function Contact() {
  return (
    <>
      <div className="contact">
        <div> <h2>SEND ME AN EMAIL</h2></div>
       
        <div className="grid-flex">
          <div className="grid">
            <div className="inputs">
              <div>Name <br /><input type="text" /></div>
            <div>E-mail <br /><input type="email" /></div> 
            </div>
            <div className="textarea">
              <p>Message </p>
              <textarea></textarea>
            </div>
          </div>
        </div>
        <div><button>Send email</button></div>
        
      </div>
    </>
  );
}

export default Contact;
