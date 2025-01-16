
import React, { useState } from "react";
import "./ExploreCourses.css";
import ClassIXCourses from "./ClassComponents/ClassIXCourses";
import ClassXCourses from "./ClassComponents/ClassXCourses";
import ClassXICourses from "./ClassComponents/ClassXICourses";
import ClassXIICourses from "./ClassComponents/ClassXIICourses";

const ExploreCourses = () => {
  const [activeClass, setActiveClass] = useState("Class IX");

  const classes = ["Class IX", "Class X", "Class XI", "Class XII"];

  const renderCourses = () => {
    switch (activeClass) {
      case "Class IX":
        return <ClassIXCourses />;
      case "Class X":
        return <ClassXCourses />;
      case "Class XI":
        return <ClassXICourses />;
      case "Class XII":
        return <ClassXIICourses />;
      default:
        return null;
    }
  };

  return (
    <section className="explore-courses">
      <h2 className="explore-title">Popular Online Courses</h2>
      <p className="explore-subtitle">
        Browse through courses for different classes and find the best one for
        you!
      </p>
      <div className="class-buttons">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setActiveClass(cls)}
            className={`class-btn ${activeClass === cls ? "active" : ""}`}
          >
            {cls}
          </button>
        ))}
      </div>
      <div className="course-grid">{renderCourses()}</div>
    </section>
  );
};

export default ExploreCourses;
