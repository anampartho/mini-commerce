import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";
import UserIcons from "@/components/UserIcons/UserIcons";
// import { add, remove } from "@/redux/features/cart-slice";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/redux/store";

const Header = () => {
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="px-10 py-5 ">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center">
        <Logo />
        <Navbar />
        <UserIcons />
      </div>
    </header>
  );
};

export default Header;
