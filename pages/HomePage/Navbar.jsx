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





import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/register"); // Redirect to the registration page
  };

  const handleTeacherModeClick = () => {
    navigate("/teacher-mode"); // Redirect to Teacher Mode page
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#45a049' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          STELLAR CLASSES
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Courses</Button>
        <Button color="inherit">About Us</Button>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" style={{ marginRight: '10px' }} color="inherit">
          Login
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleSignUpClick}>
          SignUp
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleTeacherModeClick}>
          Teacher Mode
        </Button>
      </Toolbar>
    </AppBar>
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




// import React from "react";
// import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     console.log("SignUp button clicked"); // Log to confirm handler execution
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
