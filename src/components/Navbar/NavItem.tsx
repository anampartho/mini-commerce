import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavItem = ({
  href,
  children,
  className,
  onClick = () => {},
}: NavItem) => {
  return (
    <Link
      href={href}
      className={`px-1 mx-6 block text-xl font-bold text-green-950 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavItem;
