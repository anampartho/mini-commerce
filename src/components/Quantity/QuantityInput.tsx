import React from "react";
import IconButton from "../IconButton/IconButton";
import { LuPlus, LuMinus } from "react-icons/lu";

const QuantityInput = ({ value }: { value: string | number }) => {
  return (
    <div className="grid grid-cols-4 gap-2 w-[150px] mt-2">
      <IconButton className="col-span-1">
        <LuMinus />
      </IconButton>
      <input
        type="number"
        className="col-span-2 text-center p-0 appearance-none remove-arrow"
        value={value}
      />

      <IconButton className="col-span-1">
        <LuPlus />
      </IconButton>
    </div>
  );
};

export default QuantityInput;
