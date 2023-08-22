import { ClassName } from "@/utils/interfaces";
import Link from "next/link";
import React from "react";

import localFont from "next/font/local";

const ostrich = localFont({
  src: [
    {
      path: "../../../public/fonts/OstrichSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/OstrichSans-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../../public/fonts/OstrichSans-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const Logo = ({ className }: ClassName) => {
  return (
    <Link href="/" className={`text-5xl font-bold ${className}`}>
      Mini.
    </Link>
  );
};

export default Logo;
