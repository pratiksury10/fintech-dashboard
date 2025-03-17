import React from "react";
import SableFeatureSection from "./components/SableFeatureSection";
import Sliding from "./components/SlidingCard";
import AnimatedSliding from "./components/AnimatedCard";
import Cashback from "./components/Cashback";
import Comparison from "./components/Comparison";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import "../src/index.css";
import "../src/App.css";

const SableLanding = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <div className="Main-app">
        <nav className="navbar">
          <h1 className="logo-text">Sable.</h1>
          <div className="nav-links">
            <a href="#">CREDIT</a>
            <a href="#">DEBIT</a>
            <a href="#">APP</a>
            <a href="#">LEARN +</a>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </nav>

        {/* Main Content */}
        <div className="main-cont">
          <h2 className="heading">
            <span className="word-the">The</span>
            <span className="word-fastest">fastest</span>
            <span className="word-most">most</span> <br />
            <span className="word-premium">premium</span>
            <span className="word-path">path</span>
            <span className="word-to">to</span> <br />
            <span className="word-financial">financial</span>
            <span className="word-freedom">freedom</span>
          </h2>
            <button className="explore-btn">EXPLORE</button>
        </div>

        {/* Floating Card Image */}
        <img src="/Sablecard1.png" alt="Sable Card" className="card-single-card" />

        {/* Footer */}
        <footer className="footer">
          <span className="svg-img">
            <img src="/svg.png" alt="Svg Image" className="svg-new" />
          </span>
          <div className="footer-text">
               Banking services provided by Coastal Community Bank, Member FDIC.
              <br /> Mastercard® is licensed by Mastercard International Inc.
          </div>
        </footer>
      </div>

      {/* Sections */}
      
      {/* SableFeatureSection.tsx */}
      <SableFeatureSection />
      
      {/* SlidingCard.tsx */}
      <Sliding />

      {/* AnimatedCard.tsx */}
      <AnimatedSliding />

      {/* Cashback.tsx */}
      <Cashback />

      {/* Comparison.tsx */}
      <Comparison />

      {/* Reviews.tsx */}
      <Reviews />

      {/* Contact.tsx */}
      <Contact />
    </div>
  );
};

export default SableLanding;
