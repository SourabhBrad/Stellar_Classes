import React, { useState } from 'react';
import './ProfileSection.css'; // Import the styles (or you can use inline styles)

const ProfileSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock search functionality - Filter courses based on the search term
    const filteredCourses = courses.filter(course => 
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="profile-section">
      <div className="profile-card">
        <div className="profile-avatar">
          <img
            src="https://secure.gravatar.com/avatar/f3edb71aea6689ba0b07f326e21f1c62?s=150&d=mm&r=g"
            alt="Avatar"
          />
        </div>
        <div className="profile-heading">Sourabh Waghamode</div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <strong>0</strong>
          <span>Courses</span>
        </div>
        <div className="stat">
          <strong>0</strong>
          <span>Completed</span>
        </div>
        <div className="stat">
          <strong>0</strong>
          <span>Certificates</span>
        </div>
      </div>

      <div className="course-list">
        <h3>Your Courses</h3>
        <form onSubmit={handleSearch} className="course-search">
          <label htmlFor="search">Search Your Courses</label>
          <input
            type="text"
            id="search"
            placeholder="Course Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {courses.length === 0 ? (
          <div className="no-courses">
            <p>No Courses Found</p>
          </div>
        ) : (
          <ul className="course-items">
            {courses.map((course, index) => (
              <li key={index}>{course.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
