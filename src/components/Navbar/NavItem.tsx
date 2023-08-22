import React, { ReactNode } from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavItem = ({ href, children, className }: NavItem) => {
  return (
    <Link
      href={href}
      className={`px-1 mx-6 block text-xl font-bold text-green-950 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
