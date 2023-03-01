import React from "react";
import "../styles/Contact.scss";
import Links from "./Links";
function Contact() {
  return (
    <>
      <div className="contact">
        <div>
          <h2>SEND ME AN EMAIL</h2>
        </div>
        <div className="grid-flex">
          <form
            action="mailto:affouakram@example.com"
            method="post"
            enctype="text/plain"
           
          >
            <div className="inputs">
              <div>
                Name <br />
                <input type="text" name="name" />
              </div>
              <div>
                E-mail <br />
                <input type="email" name="mail" />
              </div>
            </div>
            <div className="textarea">
              <p>Message </p>
              <textarea type="textarea" name="Message"></textarea>
            </div>
            <div className="button">
              <button type="submit" value="Send email">
                Send email
              </button>
            </div>
          </form>
        </div>
        <div></div>
        <div></div>
      </div>
      <Links />
    </>
  );
}

export default Contact;
