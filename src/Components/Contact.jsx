import React, { useState } from "react";
import "../styles/Contact.scss";
import Links from  "./Links"
function Contact() {
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [name , setName] = useState('')
  const ply = () => {
    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "akramaffou@gmail.com",
      Password : "73F2DB1DD41B76CA2928020111A66D086A6D",
      port: 2525,
      From : "laticharaf@gmail.com",
      To : 'affouakram@gmail.com',
     
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }
  return (
    <>
       <>
      <div className="contact">
        <div> <h2>SEND ME AN EMAIL</h2></div>
<button onClick={ply}></button>
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
      <Links/>
    </>
  );
}

export default Contact;
