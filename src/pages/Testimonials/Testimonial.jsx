// Testimonial.jsx
import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <h3 className="testimonial-subtitle">Hear From Our Students</h3>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Asad sir helped me a lot throughout the year. I've been an average student, and numbers was a little tough for me, and COVID-19 made it worse. The guidance and support I got from Asad sir has been extremely helpful. He is extremely patient, gentle, and motivating all at the same time. Joining Stellar Classes will indeed be one of the best decisions you make."
          </p>
          <div className="testimonial-profile">
            <img src="/placeholder.svg" alt="Annanya Srivastava" className="profile-pic" />
            <div>
              <h4 className="profile-name">Annanya Srivastava</h4>
              <p className="profile-role">Student</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-pagination">
        <div className="pagination-dot active"></div>
        <div className="pagination-dot"></div>
        <div className="pagination-dot"></div>
      </div>
    </section>
  );
};

export default Testimonial;
