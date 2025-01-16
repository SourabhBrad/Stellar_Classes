import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "react-feather"; 
import "./Footer.css";
import pic3 from "./stellar-classes-logo-white.png"

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={pic3} alt="Stellar Classes Logo" className="w-20 h-20 mr-2" />
            {/* <span className="text-xl font-bold">Stellar Classes</span> */}
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-[#60a5fa]">Home</a>
              <a href="#" className="hover:text-[#60a5fa]">About</a>
              <a href="#" className="hover:text-[#60a5fa]">Courses</a>
              <a href="#" className="hover:text-[#60a5fa]">Contact</a>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#60a5fa]"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#60a5fa]"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#60a5fa]"><Youtube size={24} /></a>
              <a href="#" className="hover:text-[#60a5fa]"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#60a5fa] pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 All rights Reserved | Stellar Classes</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-[#60a5fa]">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-[#60a5fa]">Terms of Use</a>
            <a href="#" className="text-sm hover:text-[#60a5fa]">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
