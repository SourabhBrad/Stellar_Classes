

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Footer from "./Footer/Footer";
import Testimonial from "./Testimonials/Testimonial";
import LearningJourney from "./Information/LearningJourney";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import Counter from "./StellarDescription/Counter";
import Button from "../components/Button";
import HeroSection from "./HeroSection/HeroSection";


export default function StellarClasses() {
  return (
    <div className="bg-white font-sans">
      <header className="flex items-center justify-between p-4 bg-white relative">
        <div className="flex items-center space-x-2">
          {/* <img src="/placeholder.svg" alt="Stellar Classes Logo" className="w-10 h-10" />
          <span className="text-[#1e3a8a] text-xl font-bold">Stellar Classes</span> */}
        </div>
        <nav className="hidden md:flex items-center space-x-6">
      
        </nav>
      </header>
      <main>
        <HeroSection />
        <Counter />
        <ExploreCourses />
        <Testimonial />
        <LearningJourney />
      </main>
      <Footer />
    </div>
  );
}

