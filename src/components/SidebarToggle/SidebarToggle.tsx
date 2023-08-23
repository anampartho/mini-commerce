"use client";
import React from "react";
import { LuAlignRight } from "react-icons/lu";
import { useSidebarToggle } from "@/utils/useSidebarToggle";

const SidebarToggle = () => {
  const handleSidebarToggle = useSidebarToggle();

  return (
    <button
      className="md:hidden"
      onClick={handleSidebarToggle}
      name="toggle-sidebar"
    >
      <LuAlignRight className="text-green-80" />
    </button>
  );
};

export default SidebarToggle;
