// import React from "react";
// import "./StellarDescription.css";

// const StellarDescription = () => {
//   const stats = [
//     { number: "7+", description: "Online Courses" },
//     { number: "8+", description: "Lessons in Courses" },
//     { number: "12+", description: "Topics in Lessons" },
//     { number: "100+", description: "Student's Enroll" },
//   ];

//   return (
//     <div className="stellar-description">
//       <section className="stellar-hero">
//         <div className="stellar-content">
//           <h1 className="stellar-title">
//             The Trusted Name for In-Home TutoringGGGGGGGGGGGGGGGGGGGGGGG
//           </h1>
//           <p className="stellar-text">
//             Join us at Stellar Classes and embark on an educational journey.
//             Let's unlock your true potential together and pave the way for a
//             brighter future.
//           </p>
//           <div className="stellar-buttons">
//             <button className="explore-btn">EXPLORE COURSES</button>
//             <button className="know-more-btn">KNOW MORE</button>
//           </div>
//         </div>
//         <div className="stellar-image">
//           <img
//             src="/placeholder.svg"
//             alt="Students studying"
//             className="rounded-img"
//           />
//         </div>
//       </section>

//       <section className="stellar-stats">
//         <div className="stats-grid">
//           {stats.map((stat, index) => (
//             <div key={index} className="stat-card">
//               <div className="stat-number">{stat.number}</div>
//               <div className="stat-description">{stat.description}</div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StellarDescription;



// import React from "react";
// // import "./StellarDescription.css";
// import Button from "../../components/Button";

// const StellarDescription = () => {
//   return (
//     <section className="stellar-description-section">
//       <div className="stellar-content">
//         <div className="stellar-text">
//           <h1 className="stellar-heading">
//             The Trusted Name for In-Home Tutoring
//           </h1>
//           <p className="stellar-paragraph">
//             Join us at Stellar Classes and embark on an educational journey.
//             Let's unlock your true potential together and pave the way for a
//             brighter future.
//           </p>
//           <div className="stellar-buttons">
//             <Button>EXPLORE COURSES</Button>
//             <Button variant="outline">KNOW MORE</Button>
//           </div>
//         </div>
//         <div className="stellar-image">
//           <img
//             src="/placeholder.svg"
//             alt="Students studying"
//             className="stellar-img"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StellarDescription;





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
