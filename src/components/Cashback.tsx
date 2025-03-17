import React from "react";

const Cashback = () => {
  return (
    <div className="cashback-container">
      {/* Left Section: Cashback Details */}
      <div className="cashback-info">
        <h2 className="earn">Earn 2% cash back on <br/>favorite brands</h2>
        <p className="new-earn">
          Earn <strong>2%</strong> cash back on favorite brands, <strong>1%</strong> cashback on <br/>all
          purchases, and a <strong>2x cashback match</strong> in your first <br/> year! Get premium benefits and much more.
        </p>

        <h4 className="move">Moving to the U.S.? No SSN required</h4>
        <p className="move-details">
          Start building credit before you even enter the country. Sign up <br/>with your international address, passport & visa instead**.
        </p>

        <h4 className="person">Get help from a real person</h4>
        <p className="person-details">
          When you’ve got questions about your finances, get <br/> multilingual customer support anytime you need from <br/>  direct in-app chat, email, phone, and our site FAQs.
        </p>
      </div>

      {/* Right Section: Brand Logos */}
      <div className="cashback-logos">
        <div className="logo-grid">
          <img src="/wholefoods.png" alt="Whole Foods" className="foodwhole"/>
          <img src="/netflix.png" alt="Netflix" className="food2"/>
          <img src="/spotify.png" alt="Spotify" className="food3"/>
          <img src="/ubereats.png" alt="Uber Eats" className="food4"/>
          <img src="/amazon.png" alt="Amazon" className="food5"/>
          <img src="/uber.png" alt="Uber" className="food6"/>
        </div>
      </div>
    </div>
  );
};

export default Cashback;
