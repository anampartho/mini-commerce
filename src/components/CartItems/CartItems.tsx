"use client";
import React from "react";
import CartItem from "../CartItem/CartItem";
import { useMiniSelector } from "@/redux/store";
import Button from "../Button/Button";
import Link from "next/link";
const CartItems = () => {
  const productsInCart = useMiniSelector(
    (state) => state.cartReducer.value.products
  );

  if (!productsInCart.length) {
    return (
      <div>
        <h3 className="font-bold text-lg">
          Seems like there is no item in your cart! 😢
        </h3>
        <Link href="/" className="mt-6 block">
          <Button>Browser Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <header className="border-b flex items-center py-4 font-bold mb-67">
        <p className="w-7/12 text-green-950">Product</p>
        <p className="w-2/12 text-green-950">Quantity</p>
        <p className="w-2/12 text-right text-green-950">Total</p>
        <p className="w-1/12 text-green-950">&nbsp;</p>
      </header>
      {productsInCart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default CartItems;
