// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import {useNavigate} from "react-router-dom";
// import Register from '../../src/pages/Register';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     console.log("SignUp button clicked");
//     navigate("/register"); // Redirect to the registration page

//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#45a049' }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           STELLAR CLASSES
//         </Typography>
//         <Button color="inherit">Home</Button>
//         <Button color="inherit">Courses</Button>
//         <Button color="inherit">About Us</Button>
//         <IconButton color="inherit">
//           <SearchIcon />
//         </IconButton>
//         <Button variant="outlined" style={{ marginRight: '10px' }} color="inherit">Login</Button>
//         <Button variant="outlined" color="inherit" onClick={handleSignUpClick}>
//         SignUp
//       </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;





// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate("/register"); // Redirect to the registration page
//   };

//   const handleTeacherModeClick = () => {
//     navigate("/teacher-mode"); // Redirect to Teacher Mode page
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#45a049' }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           STELLAR CLASSES
//         </Typography>
//         <Button color="inherit">Home</Button>
//         <Button color="inherit">Courses</Button>
//         <Button color="inherit">About Us</Button>
//         <IconButton color="inherit">
//           <SearchIcon />
//         </IconButton>
//         <Button variant="outlined" style={{ marginRight: '10px' }} color="inherit">
//           Login
//         </Button>
//         <Button variant="outlined" color="inherit" onClick={handleSignUpClick}>
//           SignUp
//         </Button>
//         <Button variant="outlined" color="inherit" onClick={handleTeacherModeClick}>
//           Teacher Mode
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Button from '../../src/components/Button';
// //import CoursesDropdown from "../../src/components/CourseDropdown";
// import { useNavigate } from "react-router-dom";
// import CoursesDropdown from "../../src/pages/Courses/CoursesDropdown";
// import pic from "./stellar-classes-logo.png"

// const Navbar = ({
//   courses,
//   onCourseSelect,
//   onLoginClick,
//   onSignUpClick,
//   onTeacherModeClick,
//   onMyAccountClick,
// }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//  const navigate = useNavigate();


//   const handleSignUpClick = () => {
//     navigate('/register');
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const handleTeacherModeClick = () => {
//     navigate("/teacher-mode"); // Redirect to Teacher Mode page
//   };

//   const handleMyAccountClick = () => {
//     navigate("/my-account"); // Redirect to Teacher Mode page
//   };

//   return (
//     <header className="flex items-center justify-between p-4 bg-white relative">
//       <div className="flex items-center space-x-2">
//         <img src={pic} alt="Stellar Classes Logo" className="w-11 h-11" />
//         <span className="text-[#1e3a8a] text-xl font-bold">Stellar Classes</span>
//       </div>
//       <nav className="hidden md:flex items-center space-x-6">
//         <a href="#" className="text-[#60a5fa] hover:text-[#1e3a8a]">
//           Home
//         </a>
//         {/* <div className="relative">
//           <a
//             href="#"
//             className="text-[#1e3a8a] hover:text-[#60a5fa] flex items-center"
//             onClick={(e) => {
//               e.preventDefault();
//               setIsDropdownOpen(!isDropdownOpen);
//             }}
//           >
//             Courses <ChevronDown className="ml-1 h-4 w-4" />
//           </a>
//           {isDropdownOpen && (
//             <CoursesDropdown courses={courses} onSelectCourse={onCourseSelect} />
//           )}
//         </div> */}


// <div className="relative nav-item">
//           <a href="#" className="text-[#1e3a8a] hover:text-[#60a5fa] flex items-center">
//             Courses <ChevronDown className="ml-1 h-4 w-4" />
//           </a>
//           <CoursesDropdown />
//         </div>
//         <Button onClick={handleLoginClick}>Login</Button>
//         <Button onClick={handleSignUpClick}>SIGN UP</Button>
//         <Button variant="outlined" color="inherit" onClick={handleTeacherModeClick}>
//           Teacher Mode
//         </Button>
//         <Button variant="outlined" color="inherit" onClick={handleMyAccountClick}>
//           My Account
//         </Button>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;









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







// import React from "react";
// import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     console.log("SignUp button clicked");
//     navigate("/register"); // Redirect to the registration page
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#45a049" }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           STELLAR CLASSES
//         </Typography>
//         <Button color="inherit" onClick={() => navigate("/")}>
//           Home
//         </Button>
//         <Button color="inherit" onClick={() => navigate("/courses")}>
//           Courses
//         </Button>
//         <Button color="inherit" onClick={() => navigate("/about")}>
//           About Us
//         </Button>
//         <IconButton color="inherit">
//           <SearchIcon />
//         </IconButton>
//         <Button
//           variant="outlined"
//           style={{ marginRight: "10px" }}
//           color="inherit"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </Button>
//         <Button variant="outlined" color="inherit" onClick={handleSignUpClick}>
//           SignUp
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




