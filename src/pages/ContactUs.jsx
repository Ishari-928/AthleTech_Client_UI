import React from "react";
import "../styles/ContactUs.css";

const BannerImage = () => {
  return (
    <div className="bannerImg-Container">
      <h1 className="contact-header">Contact Us</h1>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="form-container">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="visually-hidden">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="visually-hidden">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name*"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email*"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="visually-hidden">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number*"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="visually-hidden">
          Your message
        </label>
        <textarea
          id="message"
          placeholder="Your message..."
          className="form-input message-input"
        />
      </div>
      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "ti-map-pin",
      text: ["MORA KID Athlete,", "University of Moratuwa, Moratuwa."],
    },
    { icon: "ti-phone", text: ["+94 715921566"] },
    { icon: "ti-mail", text: ["morakidathlete@gmail.com"] },
  ];

  return (
    <div className="contact-info">
      {contactDetails.map((detail, index) => (
        <div key={index} className={index === 0 ? "location" : "contact-item"}>
          <i className={detail.icon} aria-hidden="true" />
          <div className={index === 0 ? "location-text" : undefined}>
            {detail.text.map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
                {lineIndex < detail.text.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="contact-us">
      <BannerImage />
      <div className="main-content">
        <div className="left-content">
          <h2 className="lets-talk">Let's talk with us</h2>
          <p className="description">
            Questions, comments, or suggestions? Simply fill in the form and
            we'll be in touch shortly.
          </p>
          {/* <ContactInfo /> */}
        </div>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
};

export default ContactUs;
