"use client";
import { AppDispatch, useMiniSelector } from "@/redux/store";
import React from "react";
import { LuAlignRight } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { initiate } from "@/redux/features/sidebar-slice";

const SidebarToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sidebarOpen = useMiniSelector((state) => state.sidebarSlice.open);
  return (
    <button
      className="md:hidden"
      onClick={() => {
        dispatch(initiate(!sidebarOpen));
      }}
      name="toggle-sidebar"
    >
      <LuAlignRight className="text-green-80" />
    </button>
  );
};

export default SidebarToggle;
