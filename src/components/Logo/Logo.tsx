import { ClassName } from "@/utils/interfaces";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: ClassName) => {
  return (
    <Link href="/" className={`text-xl ${className}`}>
      Mini
    </Link>
  );
};

export default Logo;
