import React from "react";

const ClassXICourses = () => {
  const courses = [
    {
      title: "Accounts – Class XI (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 11 Students",
      price: "INR950",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Economics – Class XI (CBSE)",
      description:
        "Comprehensive Economics course aligned with CBSE syllabus for Class 11 Students",
      price: "INR850",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Business Studies – Class XI (CBSE)",
      description:
        "In-depth Business Studies course following CBSE guidelines for Class 11 Students",
      price: "INR900",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <div className="course-image">
            <img src={course.image} alt={course.title} className="course-img" />
            <span className="course-price">{course.price}</span>
          </div>
          <div className="course-content">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClassXICourses;
