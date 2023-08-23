"use client";
import { LuUser, LuShoppingCart, LuSearch } from "react-icons/lu";
import NavItem from "../Navbar/NavItem";
import { ClassName } from "@/utils/interfaces";
import { useMiniSelector } from "@/redux/store";
import { useSidebarToggle } from "@/utils/useSidebarToggle";

const UserIcons = ({ className }: ClassName) => {
  const productsInCart = useMiniSelector(
    (state) => state.cartReducer.value.products.length
  );

  const handleSidebarToggle = useSidebarToggle();

  return (
    <ul className={`flex items-center ${className} text-green-800`}>
      <li>
        <NavItem href="" onClick={handleSidebarToggle}>
          <LuSearch />
        </NavItem>
      </li>
      <li>
        <NavItem href="" onClick={handleSidebarToggle}>
          <LuUser />
        </NavItem>
      </li>
      <li>
        <NavItem
          href="/cart"
          className="relative"
          onClick={handleSidebarToggle}
        >
          <LuShoppingCart />
          {productsInCart ? (
            <span className="font-thin w-6 h-6 rounded-full bg-green-800 text-white text-[50%] flex items-center justify-center absolute top-[-50%] right-[-50%]">
              {productsInCart}
            </span>
          ) : (
            ""
          )}
        </NavItem>
      </li>
    </ul>
  );
};

export default UserIcons;
