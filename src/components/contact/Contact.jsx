import React, { useState } from 'react';
import "./contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import locaton_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import toast from 'react-hot-toast';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); // Start sending

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "1206b778-27d4-45cf-8c97-708de1891621");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully");
        form.reset(); // Clear the form
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your internet.");
    }

    setIsSending(false); // End sending
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available for new projects and actively looking for internship opportunities. Feel free to reach out — I'm always open to discuss exciting ideas or collaborations!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>rishikothari.14.2006@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={locaton_icon} alt="location" />
              <p>3b, Vivekanand Society, Mahalaxmi Five Road, Paldi, Ahmedabad</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 7201071233</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label className='l'>Your Good Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label className='l'>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label className='l'>Write message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit' disabled={isSending}>
            {isSending ? "Sending..." : "Message Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
