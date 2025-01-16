import React from "react";

const ClassXCourses = () => {
  const courses = [
    {
      title: "Physics - Class X (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 10 Students",
      price: "INR599",
      image: "https://stellarclasses.in/wp-content/uploads/2023/07/stellarClass-image-1-300x200.jpg",
    },
    {
      title: "Chemistry - Class X (CBSE)",
      description:
        "Comprehensive chemistry course aligned with CBSE syllabus for Class 10 Students",
      price: "INR599",
      image: "https://stellarclasses.in/wp-content/uploads/2023/07/stellarClass-image-1-300x200.jpg",
    },
    {
      title: "Mathematics - Class X (CBSE)",
      description:
        "In-depth mathematics course following CBSE guidelines for Class 10 Students",
      price: "INR599",
      image: "https://stellarclasses.in/wp-content/uploads/2023/07/stellarClass-image-1-300x200.jpg",
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

export default ClassXCourses;
