import React from "react";
import Button from "../../components/Button";
import pic from "./images.jpeg";

const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#f0f9ff]">
    <div className="md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight">
        The Trusted Name for In-Home Tutoring
      </h1>
      <p className="text-[#475569] text-lg">
        Join us at Stellar Classes and embark on an educational journey. Let's unlock your true potential together and pave the way for a brighter future.
      </p>
      <div className="space-x-4">
        <Button>EXPLORE COURSES</Button>
        <Button variant="outline">KNOW MORE</Button>
      </div>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0">
      <img
        src={pic}
        alt="Students studying"
        className="rounded-lg w-full"
      />
    </div>
  </section>
);

export default HeroSection;
