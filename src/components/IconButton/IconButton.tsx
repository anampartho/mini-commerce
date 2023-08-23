import { IconButton } from "@/utils/interfaces";

const IconButton = ({
  children,
  className,
  onClick = () => {},
}: IconButton) => {
  return (
    <button
      className={`p-2 bg-green-800 text-white flex items-center justify-center rounded ${className}`}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
      name="icon-button"
    >
      {children}
    </button>
  );
};

export default IconButton;
