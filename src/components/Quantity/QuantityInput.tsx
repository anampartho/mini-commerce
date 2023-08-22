import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import IconButton from "../IconButton/IconButton";
import { LuPlus, LuMinus } from "react-icons/lu";

const QuantityInput = ({
  value,
  setQuantity,
  beforeSetQuantity = (e) => {},
  beforeReduceQuantity = (e) => {},
}: {
  value: string | number;
  setQuantity: Dispatch<SetStateAction<number>>;
  beforeSetQuantity?: MouseEventHandler<HTMLButtonElement>;
  beforeReduceQuantity?: MouseEventHandler<HTMLButtonElement>;
}) => {
  function reduceQuantity(e: React.MouseEvent<HTMLButtonElement>) {
    if (Number(value) <= 1) return;

    beforeReduceQuantity(e);

    setQuantity(Number(value) - 1);
  }
  function increaseQuantity(e: React.MouseEvent<HTMLButtonElement>) {
    beforeSetQuantity(e);
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

      <IconButton className="col-span-1" onClick={(e) => increaseQuantity(e)}>
        <LuPlus />
      </IconButton>
    </div>
  );
};

export default QuantityInput;
