import { Button } from "@/utils/interfaces";

const Button = ({ children, onClick, className }: Button) => {
  return (
    <button
      className={`px-5 py-3 bg-green-700 rounded text-white ${className}`}
      onClick={onClick}
      name="button"
    >
      {children}
    </button>
  );
};

export default Button;
