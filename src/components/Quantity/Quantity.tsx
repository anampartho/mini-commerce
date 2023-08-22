import QuantityInput from "@/components/Quantity/QuantityInput";
const Quantity = () => {
  return (
    <div>
      <h2 className="font-black text-xl text-green-800">Quantity</h2>
      <QuantityInput value={1} />
    </div>
  );
};

export default Quantity;
