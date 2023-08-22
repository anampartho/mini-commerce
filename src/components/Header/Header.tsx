import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";
import UserIcons from "@/components/UserIcons/UserIcons";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between px-10 py-5 items-center">
      <Logo />
      <Navbar />
      <UserIcons />
    </header>
  );
};

export default Header;
