import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";
import UserIcons from "@/components/UserIcons/UserIcons";
import SidebarToggle from "../SidebarToggle/SidebarToggle";

const Header = ({ className }: { className: string }) => {
  return (
    <header className={`px-10 py-5 ${className}`}>
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center">
        <Logo />
        <Navbar className="hidden lg:flex" />
        <UserIcons className="hidden md:flex" />
        <SidebarToggle />
      </div>
    </header>
  );
};

export default Header;
