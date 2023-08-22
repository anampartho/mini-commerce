import { IconButton } from "@/utils/interfaces";
import React from "react";

const IconButton = ({ children, className, onClick }: IconButton) => {
  return (
    <button
      className={`p-2 bg-green-800 text-white flex items-center justify-center rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
