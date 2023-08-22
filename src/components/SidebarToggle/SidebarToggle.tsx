import React from "react";
import { LuAlignRight } from "react-icons/lu";
const SidebarToggle = () => {
  return (
    <button className="md:hidden">
      <LuAlignRight className="text-green-80" />
    </button>
  );
};

export default SidebarToggle;
