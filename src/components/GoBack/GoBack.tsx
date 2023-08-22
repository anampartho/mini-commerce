import React from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const GoBack = () => {
  return (
    <Link href="/" className="flex items-center gap-4 text-green-800">
      <LuArrowLeft />
      Back to Shop
    </Link>
  );
};

export default GoBack;
