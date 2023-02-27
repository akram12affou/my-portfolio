import React from 'react'
import '../styles/Contact.scss'
function Contact() {
  return (
    <div className='contact'>
        <h2>Send me an email</h2>
        Name  <input type="text" />
        E-mail  <input type="email" />
        Message  <textarea></textarea>
    </div>
  )
}

export default Contact