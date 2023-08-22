import PageHeader from "@/components/PageHeader/PageHeader";
import CartItems from "@/components/CartItems/CartItems";

export default function Cart() {
  return (
    <div>
      <PageHeader title="Product Cart" />
      <div className="mt-6">
        <header className="border-b flex items-center py-4 font-bold mb-67">
          <p className="w-7/12 text-green-950">Product</p>
          <p className="w-2/12 text-green-950">Quantity</p>
          <p className="w-2/12 text-right text-green-950">Total</p>
          <p className="w-1/12 text-green-950">&nbsp;</p>
        </header>
        <CartItems />
      </div>
    </div>
  );
}
