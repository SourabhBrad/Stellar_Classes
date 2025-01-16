// Testimonial.jsx
// import React from "react";
// import "./Testimonial.css";

// const Testimonial = () => {
//   return (
//     <section className="testimonial-section">
//       <h2 className="testimonial-title">Testimonials</h2>
//       <h3 className="testimonial-subtitle">Hear From Our Students</h3>
//       <div className="testimonial-container">
//         <div className="testimonial-card">
//           <p className="testimonial-quote">
//             "Asad sir helped me a lot throughout the year. I've been an average student, and numbers was a little tough for me, and COVID-19 made it worse. The guidance and support I got from Asad sir has been extremely helpful. He is extremely patient, gentle, and motivating all at the same time. Joining Stellar Classes will indeed be one of the best decisions you make."
//           </p>
//           <div className="testimonial-profile">
//             <img src="/placeholder.svg" alt="Annanya Srivastava" className="profile-pic" />
//             <div>
//               <h4 className="profile-name">Annanya Srivastava</h4>
//               <p className="profile-role">Student</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="testimonial-pagination">
//         <div className="pagination-dot active"></div>
//         <div className="pagination-dot"></div>
//         <div className="pagination-dot"></div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;






import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    quote:
      "Asad sir helped me a lot throughout the year. I've been an average student, and numbers was a little tough for me, and COVID-19 made it worse. The guidance and support I got from Asad sir has been extremely helpful. He is extremely patient, gentle, and motivating all at the same time. Joining Stellar Classes will indeed be one of the best decisions you make.",
    name: "Annanya Srivastava",
    role: "Student",
    image: "../../assets/stellar-classes-logo.png",
  },
  {
    quote:
      "Joining Stellar Classes was the best decision I made for my studies. The personalized guidance and detailed notes helped me secure excellent marks in my exams. The teaching style is engaging and easy to understand.",
    name: "Rahul Verma",
    role: "Student",
    image: "/placeholder.svg",
  },
  {
    quote:
      "The support and motivation from the teachers at Stellar Classes have been incredible. They helped me not only with my academics but also boosted my confidence to tackle challenges. Highly recommended!",
    name: "Priya Sharma",
    role: "Student",
    image: "/placeholder.svg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <h3 className="testimonial-subtitle">Hear From Our Students</h3>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              position: index === currentIndex ? "relative" : "absolute",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-profile">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="profile-pic"
              />
              <div>
                <h4 className="profile-name">{testimonial.name}</h4>
                <p className="profile-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-pagination">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)} // Optional: Allow manual navigation
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
