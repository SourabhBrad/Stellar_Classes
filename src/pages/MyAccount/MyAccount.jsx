// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import "./myAccount.css";

// const MyAccount = () => {
//   return (
//     <Box className="myAccount-container">
//       {/* Header Section */}
//       <div className="myAccount-header">
//         <Typography variant="h4" className="header-title">
//           STELLAR CLASSES
//         </Typography>
//         <Typography variant="h6" className="header-subtitle">
//           My Account
//         </Typography>
//         <Typography variant="body2" className="header-info">
//           View your account info
//         </Typography>
//       </div>

//       <Grid container spacing={2}>
//         {/* Left Sidebar */}
//         <Grid item xs={12} md={3}>
//           <div className="sidebar">
//             <ul className="sidebar-list">
//               <li className="sidebar-item">Dashboard</li>
//               <li className="sidebar-item">Orders</li>
//               <li className="sidebar-item">Downloads</li>
//               <li className="sidebar-item">Addresses</li>
//               <li className="sidebar-item">Account Details</li>
//               <li className="sidebar-item">Logout</li>
//             </ul>
//           </div>
//         </Grid>

//         {/* Right Content Area */}
//         <Grid item xs={12} md={9}>
//           <div className="content-area">
//             <Typography variant="h6" className="content-title">
//               Hello Sourabh Waghamode (not Sourabh Waghamode? Log out)
//             </Typography>
//             <Typography variant="body2" className="content-info">
//               From your account dashboard you can view your{" "}
//               <span className="link">recent orders</span>, manage your{" "}
//               <span className="link">shipping and billing addresses</span>, and edit your{" "}
//               <span className="link">password and account details</span>.
//             </Typography>
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default MyAccount;





import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./myAccount.css";

const MyAccount = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // Replace with dynamic data if needed

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <Box className="myAccount-container">
      {/* Header Section */}
      <div className="myAccount-header">
        <Typography variant="h5" className="header-title">
          STELLAR CLASSES
        </Typography>
        <Typography variant="h2" className="header-subtitle">
          My Account
        </Typography>
        <Typography 
          variant="body2" 
          className="header-info" 
          onClick={toggleDropdown} 
          style={{ cursor: "pointer" }}
        >
          View your account info ▼
        </Typography>
        {showDropdown && (
          <div className="dropdown-menu">
            {enrolledCourses.length > 0 ? (
              <ul className="course-list">
                {enrolledCourses.map((course, index) => (
                  <li key={index} className="course-item">
                    {course}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography className="no-courses-message">
                Not enrolled yet in any course.
              </Typography>
            )}
          </div>
        )}
      </div>

      <Grid container spacing={2}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={3}>
          <div className="sidebar">
            <ul className="sidebar-list">
              <li className="sidebar-item">Dashboard</li>
              <li className="sidebar-item">Orders</li>
              <li className="sidebar-item">Downloads</li>
              <li className="sidebar-item">Addresses</li>
              <li className="sidebar-item">Account Details</li>
              <li className="sidebar-item">Logout</li>
            </ul>
          </div>
        </Grid>

        {/* Right Content Area */}
        <Grid item xs={12} md={9}>
          <div className="content-area">
            <Typography variant="h6" className="content-title">
              Hello Sourabh Waghamode (not Sourabh Waghamode? Log out)
            </Typography>
            <Typography variant="body2" className="content-info">
              From your account dashboard you can view your{" "}
              <span className="link">recent orders</span>, manage your{" "}
              <span className="link">shipping and billing addresses</span>, and edit your{" "}
              <span className="link">password and account details</span>.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccount;
