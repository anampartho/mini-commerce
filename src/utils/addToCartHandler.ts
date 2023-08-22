import { toast } from "react-toastify";
import { Product } from "./types";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/cart-slice";

export function useAddToCartHandler() {
  const dispatch = useDispatch();

  return function addToCartHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product,
    quantity: number = 1
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(add({ ...product, totalQuantity: 1 }));
    toast.success("Product was successfully added to your cart!");
  };
}
