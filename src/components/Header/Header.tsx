import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";
import UserIcons from "@/components/UserIcons/UserIcons";

const Header = () => {
  return (
    <header className="px-10 py-5 ">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center">
        <Logo />
        <Navbar className="hidden lg:flex" />
        <UserIcons className="hidden md:flex" />
      </div>
    </header>
  );
};

export default Header;
