"use client";
import { useState, Dispatch, SetStateAction } from "react";
import QuantityInput from "@/components/Quantity/QuantityInput";
const Quantity = ({
  value = 1,
  setQuantity,
}: {
  value?: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      <h2 className="font-black text-xl text-green-800">Quantity</h2>
      <QuantityInput value={value} setQuantity={setQuantity} />
    </div>
  );
};

export default Quantity;
