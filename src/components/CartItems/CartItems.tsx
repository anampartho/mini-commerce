"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { useMiniSelector } from "@/redux/store";
import Button from "../Button/Button";
import Link from "next/link";
const CartItems = () => {
  const [subTotal, setSubTotal] = useState(0);
  const productsInCart = useMiniSelector(
    (state) => state.cartReducer.value.products
  );

  useEffect(() => {
    if (!productsInCart.length) return;
    let total = 0;

    productsInCart.forEach((product) => {
      if (product.totalQuantity && product.price)
        total += product?.totalQuantity * Number(product?.price);
    });

    setSubTotal(Math.round((total + Number.EPSILON) * 100) / 100);
  }, [productsInCart]);

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
        <p className="w-2/12 text-green-950 hidden lg:block">Quantity</p>
        <p className="w-2/12 text-right text-green-950 hidden lg:block">
          Total
        </p>
        <p className="w-1/12 text-green-950 hidden lg:block">&nbsp;</p>
      </header>
      {productsInCart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <header className="border-t flex items-center py-4 font-bold mb-67">
        <p className="w-7/12 text-green-950 hidden lg:block">&nbsp;</p>
        <p className="w-3/12 lg:w-2/12 text-green-950">Sub Total:</p>
        <p className="w-3/12 lg:w-2/12 text-right text-green-950">
          ${subTotal}
        </p>
        <p className="w-1/12 text-green-950 hidden lg:block">&nbsp;</p>
      </header>
      <Button>Go To Checkout</Button>
    </>
  );
};

export default CartItems;
