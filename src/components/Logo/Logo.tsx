import Link from "next/link";
import { ClassName } from "@/utils/interfaces";

const Logo = ({ className }: ClassName) => {
  return (
    <Link
      href="/"
      className={`text-5xl font-black text-green-800 ${className}`}
    >
      Mini.
    </Link>
  );
};

export default Logo;
