
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import PublicRoute from "./components/PublicRoute";
import Navbar from "../pages/HomePage/Navbar"; // Correct import path for Navbar
import TeacherMode from "./pages/TeachersMode/TeacherMode";
import MyAccount from "./pages/MyAccount/MyAccount";
import Explore from "./pages/HeroSection/Explore";
import HeroSection from "./pages/HeroSection/HeroSection";

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

          <Route path="/" element={<HeroSection />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    
  );
}

export default App;
