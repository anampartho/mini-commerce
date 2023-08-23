import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { reduceProductQuantity } from "@/redux/features/cart-slice";

export function useReduceProductFromCart() {
  const dispatch = useDispatch();

  return function reduceFromCartHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    id: string | number | undefined
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(reduceProductQuantity(id));
    toast.success("Product was successfully removed to your cart!");
  };
}
