import React from "react";

const CoursesDropdown = ({ courses, onSelectCourse }) => (
  <div className="absolute bg-white border border-gray-200 shadow-lg rounded-md mt-2">
    <ul className="py-2">
      {courses.map((course, index) => (
        <li
          key={index}
          onClick={() => onSelectCourse(course)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {course}
        </li>
      ))}
    </ul>
  </div>
);

export default CoursesDropdown;
