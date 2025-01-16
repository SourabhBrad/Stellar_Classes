
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from '../../src/components/Button';
import CoursesSection from "../../src/pages/Courses/CoursesSection";
import { useNavigate } from "react-router-dom";
import pic from "./stellar-classes-logo.png";

const Navbar = ({
  onLoginClick,
  onSignUpClick,
  onTeacherModeClick,
  onMyAccountClick,
}) => {
  const navigate = useNavigate();
  const [showCourses, setShowCourses] = useState(false); // Toggle state for courses

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleTeacherModeClick = () => {
    navigate("/teacher-mode"); // Redirect to Teacher Mode page
  };

  const handleMyAccountClick = () => {
    navigate("/my-account"); // Redirect to My Account page
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white relative">
        <div className="flex items-center space-x-2">
          <img src={pic} alt="Stellar Classes Logo" className="w-11 h-11" />
          <span className="text-[#1e3a8a] text-xl font-bold">Stellar Classes</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-[#60a5fa] hover:text-[#1e3a8a]">
            Home
          </a>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCourses((prev) => !prev)}
          >
            <span className="text-[#1e3a8a] hover:text-[#60a5fa] flex items-center">
              Courses <ChevronDown className="ml-1 h-4 w-4" />
            </span>
          </div>
          <Button onClick={handleLoginClick}>Login</Button>
          <Button onClick={handleSignUpClick}>SIGN UP</Button>
          <Button variant="outlined" color="inherit" onClick={handleTeacherModeClick}>
            Teacher Mode
          </Button>
          <Button variant="outlined" color="inherit" onClick={handleMyAccountClick}>
            My Account
          </Button>
        </nav>
      </header>
      {/* Conditionally show the CoursesSection */}
      {showCourses && <CoursesSection />}
    </>
  );
};

export default Navbar;







