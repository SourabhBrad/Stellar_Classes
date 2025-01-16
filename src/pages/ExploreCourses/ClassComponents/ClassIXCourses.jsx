import React from "react";

const ClassIXCourses = () => {
  const courses = [
    {
      title: "Physics - Class IX (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 9 Students",
      price: "INR499",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Chemistry - Class IX (CBSE)",
      description:
        "Comprehensive chemistry course aligned with CBSE syllabus for Class 9 Students",
      price: "INR499",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mathematics - Class IX (CBSE)",
      description:
        "In-depth mathematics course following CBSE guidelines for Class 9 Students",
      price: "INR499",
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

export default ClassIXCourses;
