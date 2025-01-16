
import React from "react";
import "./Explore.css";

const Explore = () => {
  const courses = [
    {
      id: 1,
      title: "Accounts – Class XI (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 11 Students",
      price: "INR950",
      image: "https://picsum.photos/200/300",
      
    },
    {
      id: 2,
      title: "Accounts – Class XII (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 12 Students",
      price: "INR950",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Accounts – Class XI (ISC/ICSE)",
      description:
        "This course has been prepared as per syllabus prescribed by ISC/ICSE for Class 11 Students",
      price: "INR950",
      image: "https://via.placeholder.com/150",
    },
    // Add more courses as needed
  ];

  return (
    <section className="explore-container">
      <div className="header">
        <h1 className="title">Stellar Classes</h1>
        <h2 className="subtitle">Online Courses</h2>
        <p className="description">
          Academic courses for class 11 and 12 are paid while academic courses
          for class 9 and class 10 are free.
        </p>
      </div>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-details">
              <span className="course-price">{course.price}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <button className="enroll-button">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
