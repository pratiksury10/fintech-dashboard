import React from "react";
// import "../styles/SableFeatureSection.css"; 

const SableFeatureSection = () => {
  return (
    <div className="sable-feature-section">
      <p className="account-count">400,000 ACCOUNTS & COUNTING</p>
      <h2 className="no-fees">
        No hidden fees. No credit checks.<br/> No more barriers to building credit.
      </h2>

      <div className="feature-container">
        {/* Left Side Features */}
        <div className="feature-left">
          <div className="feature-item">
            
          <div className="leftsides">
          <img src="/Frame.png" alt="Icon" className="feature-icon" />
        <p>
          <strong>  
            Get a secured credit <br />
            card and bank account <br />
            in 5 minutes.
          </strong>
          <br />
          No credit history, credit check, or <br />
          minimum deposit required.
        </p>
      </div>

          {/* <div className="feature-item"> */}
            <img src="/div_img.png" alt="Icon" className="featurediv" />
            <p><strong>The only premium card for building credit.</strong> <br/>
              2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits, and more!</p>
          {/* </div> */}
        </div>
        </div>

        {/* Center Mobile Image */}
        <div className="feature-center">
          <img src="/Sablecard2.png" alt="Sable Card" className="mobile-mockup" />
        </div>

        {/* Right Side Features */}
        <div className="feature-right">
          <div className="feature-item">
          <div className="rightsides">
            <img src="/div.png" alt="Icon" className="feature-icon" />
            <p><strong>Build your U.S. credit</strong> <br/>
              We believe in forming positive habits. Build your U.S. credit with Sable.</p>
          
          <div className="feature-it">
            <img src="/Frame_img.png" alt="Icon" className="feature-icon" />
            <p><strong>Bank like a global citizen with Sable.</strong> <br/>
              Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.</p>
          </div>
          </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="partner-logos">
        <div>
          <span>Yahoo! Finance</span>
          <span>Bloomberg</span>
          <span>Business Insider</span>
          <span>Forbes</span>
          <span>Yahoo! Finance</span> {/* Repeat for smooth animation */}
          <span>Bloomberg</span>
          <span>Business Insider</span>
          <span>Forbes</span>
        </div>
      </div>
    </div>
  );
};

export default SableFeatureSection;
