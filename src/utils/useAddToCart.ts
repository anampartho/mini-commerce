import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/redux/features/cart-slice";
import { Product } from "@/utils/types";

export function useAddToCart() {
  const dispatch = useDispatch();

  return function addToCartHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product | undefined,
    quantity: number = 1
  ) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addProductToCart({ ...product, totalQuantity: quantity }));
    toast.success("Product was successfully added to your cart!");
  };
}
