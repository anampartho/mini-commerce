import PageHeader from "@/components/PageHeader/PageHeader";
import CartItems from "@/components/CartItems/CartItems";

export default function Cart() {
  return (
    <div>
      <PageHeader title="Product Cart" />
      <div className="mt-6">
        <CartItems />
      </div>
    </div>
  );
}
