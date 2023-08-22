import React, { ReactNode } from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: NavItem) => {
  return (
    <Link href={href} className="px-1 mx-6 block text-xl font-bold">
      {children}
    </Link>
  );
};

export default NavItem;
