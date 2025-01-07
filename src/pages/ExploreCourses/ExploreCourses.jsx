import React from "react";
import "./ExploreCourses.css";

const ExploreCourses = () => {
  const courses = [
    {
      title: "Physics - Class IX (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 9 Students",
      price: "INR499",
    },
    {
      title: "Chemistry - Class IX (CBSE)",
      description:
        "Comprehensive chemistry course aligned with CBSE syllabus for Class 9 Students",
      price: "INR499",
    },
    {
      title: "Mathematics - Class IX (CBSE)",
      description:
        "In-depth mathematics course following CBSE guidelines for Class 9 Students",
      price: "INR499",
    },
  ];

  const classes = ["Class IX", "Class X", "Class XI", "Class XII"];

  return (
    <section className="explore-courses">
      <h2 className="explore-title">Popular Online Courses</h2>
      <p className="explore-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu libero
        urna. Maecenas malesuada id urna id mattis.
      </p>
      <div className="class-buttons">
        {classes.map((cls, index) => (
          <button
            key={cls}
            className={`class-btn ${index === 0 ? "active" : ""}`}
          >
            {cls}
          </button>
        ))}
      </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image">
              <img
                src="/placeholder.svg"
                alt={`${course.title} image`}
                className="course-img"
              />
              <span className="course-price">{course.price}</span>
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCourses;
