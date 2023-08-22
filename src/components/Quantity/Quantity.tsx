"use client";
import { useState } from "react";
import QuantityInput from "@/components/Quantity/QuantityInput";
const Quantity = ({ value = 1 }: { value: number }) => {
  const [quantity, setQuantity] = useState(value);
  return (
    <div>
      <h2 className="font-black text-xl text-green-800">Quantity</h2>
      <QuantityInput value={quantity} setQuantity={setQuantity} />
    </div>
  );
};

export default Quantity;
