import React from "react";
import "../styles/Contact.scss";
import Links from  "./Links"
function Contact() {
  return (
    <>
      <div className="contact">
        <div> <h2>SEND ME AN EMAIL</h2></div>
       
        <div className="grid-flex">
          <form action="mailto:affouakram@example.com" method="post" enctype="text/plain" className="grid">
            <div className="inputs">
              <div>Name <br /><input type="text" name="name" /></div>
            <div>E-mail <br /><input type="email" name="mail" /></div> 
            </div>
            <div className="textarea">
              <p>Message </p>
              <input type="text" name="comment"></input>
            </div>
          </form>
        </div>
        <div>
          <button> <input type="submit" value="Send email"></input>
          </button>
          </div>
        
      </div>
      <Links/>
    </>
  );
}

export default Contact;
