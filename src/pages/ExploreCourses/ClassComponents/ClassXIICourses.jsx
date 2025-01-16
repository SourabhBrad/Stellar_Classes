import React from "react";

const ClassXIICourses = () => {
  const courses = [
    {
      title: "Physics – Class XII (CBSE)",
      description:
        "This course has been prepared as per syllabus prescribed by CBSE for Class 12 Students",
      price: "INR1100",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Chemistry – Class XII (CBSE)",
      description:
        "Comprehensive Chemistry course aligned with CBSE syllabus for Class 12 Students",
      price: "INR1100",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mathematics – Class XII (CBSE)",
      description:
        "In-depth Mathematics course following CBSE guidelines for Class 12 Students",
      price: "INR1050",
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

export default ClassXIICourses;
