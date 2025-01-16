import React from "react";
import "./courses.css";

const CoursesSection = () => {
  const courses = [
    {
      class: "Class 12 (Paid Courses)",
      description: "Study Material with Videos",
      subjects: {
        CBSE: ["Accounts", "Economics", "Business Studies", "Physics", "Chemistry", "Biology", "Mathematics"],
        ISCICSE: ["Accounts", "Economics", "Commerce", "Business Studies", "Physics", "Chemistry", "Biology", "Mathematics"],
      },
    },
    {
      class: "Class 11 (Paid Courses)",
      description: "Study Material with Videos",
      subjects: {
        CBSE: ["Accounts", "Economics", "Business Studies", "Physics", "Chemistry", "Biology", "Mathematics"],
        ISCICSE: ["Accounts", "Economics", "Commerce", "Business Studies", "Physics", "Chemistry", "Biology", "Mathematics"],
      },
    },
    {
      class: "Class 10 (Free Courses)",
      description: "Study Material Only",
      subjects: {
        CBSE: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
        ISCICSE: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Economics", "Commerce", "Applications"],
      },
    },
    {
      class: "Class 9 (Free Courses)",
      description: "Study Material Only",
      subjects: {
        CBSE: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
        ISCICSE: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Economics", "Commerce", "Applications"],
      },
    },
  ];

  return (
    <div className="courses-section">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <h3>{course.class}</h3>
          <p>{course.description}</p>
          <div className="course-subjects">
            <h4>CBSE Subjects</h4>
            <ul>
              {course.subjects.CBSE.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
            <h4>ISC/ICSE Subjects</h4>
            <ul>
              {course.subjects.ISCICSE.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesSection;
