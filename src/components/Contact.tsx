import React from "react";

const Contact = () => {
  return (

    <div className="contact-image">
    <img src="/Contact_img.png" alt="Contact" />

    <div className="contact-section">
      <div className="contact-container">
        {/* Left Section - Navigation Links */}
        <div className="contact-left">
          <h3>Sable Credit</h3>
          <p>Sable ONE Credit</p>
          <p>Credit Score <span className="highlight">Coming Soon</span></p>

          <h3>Sable Debit</h3>
          <h3>App</h3>
          <h3>Learn</h3>
          <p>FAQs</p>
          <p>About Sable</p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="contact-middle">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:help@sablecard.com">help@sablecard.com</a></p>
          <p>Location: New York, NY</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <img src="/insta.png" alt="Instagram" />
            <img src="/twitter.png" alt="Twitter" />
            <img src="/facebook.png" alt="Facebook" />
            <img src="/youtube.png" alt="YouTube" />
            <img src="/spotify.png" alt="Spotify" />
          </div>
        </div>

        {/* Right Section - Sable Logo */}
        <div className="contact-right">
          <h1 className="sable-logo">Sable.</h1>
          <p className="sable-money">© Sable Money Inc, all rights reserved.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <img src="/paragraph.png" alt="Paragraph"/>
      </div>
    </div>
    </div>
  );
};

export default Contact;
