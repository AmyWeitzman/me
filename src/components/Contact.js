import React from 'react';
import emailjs from 'emailjs-com';
import { USER_ID, SERVICE_ID, TEMPLATE_ID } from "../emailJS";  // keep private so import from separate file
import '../App.css';
import './Contact.css';

function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();

    // get contact form info for email template parameters
    const templateParams = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value
    }; 

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <div id="contact-container">
      <form id="contact-form" onSubmit={sendEmail}>
        <label for="from-name" className="form-label">Name</label>
        <br></br>
        <input type="text" id="from-name" name="from_name" className="form-input" size="25"/>
        <br></br>
        <label for="from-email" className="form-label">Email</label>
        <br></br>
        <input type="email" id="from-email" name="from_email" className="form-input" size="25"/>
        <br></br>
        <label for="message" className="form-label">Message</label>
        <br></br>
        <textarea id="message" name="message" className="form-input" rows="10" cols="33" maxlength="500" />
        <br></br>
        <input id="send-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
