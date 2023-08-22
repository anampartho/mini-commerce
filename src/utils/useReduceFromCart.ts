import { toast } from "react-toastify";
import { Product } from "./types";
import { useDispatch } from "react-redux";
import { reducefromCart } from "@/redux/features/cart-slice";

export function useReduceFromCart() {
  const dispatch = useDispatch();

  return function reduceFromCartHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    id: string | number | undefined
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(reducefromCart(id));
    toast.success("Product was successfully added to your cart!");
  };
}
