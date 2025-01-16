

import React from "react";
import "./StellarDescription.css"; // Ensure this file has no infinite loops or errors
import Button from "../../components/Button"; // Ensure Button is working properly and has no circular imports

const StellarDescription = () => {
  return (
    <section className="stellar-description-section">
      <div className="stellar-content">
        <div className="stellar-text">
          <h1 className="stellar-heading">The Trusted Name for In-Home Tutoring</h1>
          <p className="stellar-paragraph">
            Join us at Stellar Classes and embark on an educational journey.
            Let's unlock your true potential together and pave the way for a brighter future.
          </p>
          <div className="stellar-buttons">
            <Button>EXPLORE COURSES</Button>
            <Button variant="outline">KNOW MORE</Button>
          </div>
        </div>
        <div className="stellar-image">
          {/* Replace placeholder.svg with a valid image URL */}
          <img
            src="https://via.placeholder.com/300"
            alt="Students studying"
            className="stellar-img"
          />
        </div>
      </div>
    </section>
  );
};

export default StellarDescription;
