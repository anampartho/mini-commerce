"use client";
import React from "react";
import CartItem from "../CartItem/CartItem";
import { useMiniSelector } from "@/redux/store";
const CartItems = () => {
  const productsInCart = useMiniSelector(
    (state) => state.cartReducer.value.products
  );

  return (
    <>
      {productsInCart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default CartItems;
