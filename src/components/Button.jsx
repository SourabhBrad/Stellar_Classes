// Button.jsx
import React from "react";

const Button = ({ children, className, variant = "default", onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === "outline"
        ? "border border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
        : "bg-[#1e3a8a] text-white hover:bg-[#1e40af]"
    } ${className}`}
  >
    {children}
  </button>
);

export default Button;
