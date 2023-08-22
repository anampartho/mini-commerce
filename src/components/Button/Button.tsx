import { Button } from "@/utils/interfaces";
import React from "react";

const Button = ({ children, onClick, className }: Button) => {
  return (
    <button
      className={`px-5 py-3 bg-green-700 rounded text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
