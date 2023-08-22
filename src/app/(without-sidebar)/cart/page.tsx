import CartItem from "@/components/CartItem/CartItem";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function Cart() {
  return (
    <div>
      <PageHeader title="Product Cart" />
      <div className="mt-6">
        <header className="border-b flex items-center py-4 font-bold mb-67">
          <p className="w-7/12">Product</p>
          <p className="w-2/12">Quantity</p>
          <p className="w-2/12 text-right">Total</p>
          <p className="w-1/12">&nbsp;</p>
        </header>
        <CartItem />
      </div>
    </div>
  );
}
