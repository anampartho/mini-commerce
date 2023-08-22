import React from "react";
import NavItem from "./NavItem";

const menuItems = [
  {
    href: "/",
    name: "Home",
    id: "home",
  },
  {
    href: "/category/1",
    name: "Category 1",
    id: "cat-1",
  },
  {
    href: "/category/2",
    name: "Category 2",
    id: "cat-2",
  },
  {
    href: "/category/3",
    name: "Category 3",
    id: "cat-3",
  },
];

const Navbar = () => {
  return (
    <nav className="">
      <div>
        <ul className="flex">
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <NavItem href={item.href}>{item.name}</NavItem>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
