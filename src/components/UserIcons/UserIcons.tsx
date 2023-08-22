import { LuUser, LuShoppingCart, LuSearch } from "react-icons/lu";
import NavItem from "../Navbar/NavItem";
import { ClassName } from "@/utils/interfaces";

const UserIcons = ({ className }: ClassName) => {
  return (
    <ul className={`flex items-center ${className} text-green-800`}>
      <li>
        <NavItem href="">
          <LuSearch />
        </NavItem>
      </li>
      <li>
        <NavItem href="">
          <LuUser />
        </NavItem>
      </li>
      <li>
        <NavItem href="/cart">
          <LuShoppingCart />
        </NavItem>
      </li>
    </ul>
  );
};

export default UserIcons;
