import React from "react";

export default function contact() {
  return (
    <div className="contact-container">
        <h2 className="form-title">Contact Us</h2>
      <form className="form">
        <div className="form_front">
          <div className="contact-name">
            <input type="text" className="input" placeholder="First Name" />
            <input type="text" className="input" placeholder="Last Name" />
          </div>
          <div className="main-ph">
            <input type="tel" className="input" placeholder="Phone Number" />
            <input type="mail" className="input" placeholder="Enter Your Mail ID" />
          </div>
          <div className="text-msg">
            <textarea
            className="input textmsg"
            placeholder="Your Message"

            />
          </div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
