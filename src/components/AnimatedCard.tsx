import React from "react";


const AnimatedSliding = () => {
  return (
    <div className="animated-feature">
      <img 
        src="/AnimatedCard.png"  
        alt="Animated Card"         
        className="animated-image"
      />
        <p className="animated-text">
        Get a bank account & <br/>
        <div className="adjust">debit card in 
        <span className="green-text"> five minutes</span>
        </div>
        </p>
    </div>
  );
};

export default AnimatedSliding;
