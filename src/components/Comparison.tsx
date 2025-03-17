import React from "react";

const Comparison = () => {
  return (
    <div className="comparison-container">
      {/* Heading */}
      <h1 className="comparison-heading">
        Compare Sable &nbsp;•&nbsp; Compare Sable
      </h1>

      {/* Card Comparison Section */}
      <div className="card-section">
        {/* Secured Credit & Debit Card */}
        <div className="card-item">
          <img src="/Sablecc-card.png" alt="Sable Secured Credit & Debit Card" className="sablecc"/>
          <h3>Sable Secured <br /> Credit & Debit Card</h3>
        </div>

        {/* Debit Card */}
        <div className="card-item">
          <img src="/Sabledc-card.png" alt="Sable Debit Card" className="sabledc"/>
          <h3>Sable Debit <br /> Card</h3>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="comparison-table">
        <table>
          <tbody>
            <tr>
              <td>No monthly fees or minimum balance</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Deposits FDIC insured up to $250,000</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Rewards, cash back & card perks</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Send checks & transfer money for free</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Build credit history from Day 1</td>
              <td>✔</td>
              <td>🔒</td>
            </tr>
            <tr>
              <td>No credit check required for sign up</td>
              <td>✔</td>
              <td>🔒</td>
            </tr>
            <tr>
              <td>Cost per year</td>
              <td><strong>$0</strong> /year</td>
              <td><strong>$0</strong> /year</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA Buttons */}
      <div className="cta-buttons">
        <button className="btn primary">GET CREDIT & DEBIT</button>
        <button className="btn secondary">GET DEBIT</button>
      </div>
    </div>
  );
};

export default Comparison;
