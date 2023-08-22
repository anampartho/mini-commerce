import React, { Dispatch, SetStateAction } from "react";
import IconButton from "../IconButton/IconButton";
import { LuPlus, LuMinus } from "react-icons/lu";

const QuantityInput = ({
  value,
  setQuantity,
}: {
  value: string | number;
  setQuantity: Dispatch<SetStateAction<number>>;
}) => {
  function reduceQuantity() {
    if (Number(value) <= 1) return;

    setQuantity(Number(value) - 1);
  }
  function increaseQuantity() {
    console.log("hi");
    setQuantity(Number(value) + 1);
  }
  return (
    <div className="grid grid-cols-4 gap-2 w-[150px] mt-2">
      <IconButton className="col-span-1" onClick={reduceQuantity}>
        <LuMinus />
      </IconButton>
      <input
        type="number"
        className="col-span-2 text-center p-0 appearance-none remove-arrow"
        value={value}
      />

      <IconButton className="col-span-1" onClick={increaseQuantity}>
        <LuPlus />
      </IconButton>
    </div>
  );
};

export default QuantityInput;
