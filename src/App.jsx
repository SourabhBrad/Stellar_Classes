// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import HomePage from '../pages/HomePage';
// import PublicRoute from '../components/PublicRoute';
// import ProtectedRoute from '../components/ProtectedRoute';
// // import '../styles/HomePage.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <PublicRoute>
//                 <HomePage />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <PublicRoute>
//                 <Register />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <PublicRoute>
//                 <Login />
//               </PublicRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import HomePage from '../pages/HomePage';
// import PublicRoute from '../components/PublicRoute';
// import ProtectedRoute from '../components/ProtectedRoute';
// import Navbar from '../pages/HomePage/Navbar'; // Import Navbar

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Add Navbar so it is persistent across all routes */}
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <PublicRoute>
//                 <HomePage />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <PublicRoute>
//                 <Register />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <PublicRoute>
//                 <Login />
//               </PublicRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import PublicRoute from "./components/PublicRoute";
import Navbar from "../pages/HomePage/Navbar"; // Correct import path for Navbar
import TeacherMode from "./pages/TeachersMode/TeacherMode";
import MyAccount from "./pages/MyAccount/MyAccount";

function App() {
  return (
    
      <div className="App">
        {/* Ensure Navbar is inside Router */}
        <Navbar/>

        <Routes>
          <Route
            path="/"
            element={
             
                <HomePage />
              
            }
          />
          <Route
            path="/register"
            element={
             
                <Register />
              
            }
          />
          <Route
            path="/login"
            element={
              
                <Login />
              
            }
          />
          
          <Route path="/teacher-mode" element={<TeacherMode />} />
          <Route path="/my-account" element={<MyAccount />} />;
        </Routes>
      </div>
    
  );
}

export default App;
