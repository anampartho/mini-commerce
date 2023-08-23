"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import Link from "next/link";
import { useDispatch } from "react-redux";
import QuantityInput from "@/components/Quantity/QuantityInput";
import { Product } from "@/utils/types";
import { removeProductFromCart } from "@/redux/features/cart-slice";
import { useAddToCart } from "@/utils/useAddToCart";
import { useReduceProductFromCart } from "@/utils/useReduceProductFromCart";

const CartItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = useAddToCart();
  const reduceFromCartHandler = useReduceProductFromCart();

  const [quantity, setQuantity] = useState(product.totalQuantity || 1);
  return (
    <>
      {product && (
        <div className="flex flex-col lg:flex-row items-flex-start lg:items-center py-4">
          <div className="w-full md:w-7/12">
            <div className="flex flex-col md:flex-row gap-10 md:items-center">
              <div className="p-4 rounded bg-white shadow-sm">
                <div className="w-full pb-[100%] md:pb-0 md:w-[100px] md:h-[100px] basis-[100%] md:basis-[100px] relative">
                  <Image
                    src={product?.image || ""}
                    alt={product?.title || ""}
                    fill={true}
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-green-800">
                  <Link href={`/product/${product?.id}`}>{product?.title}</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:w-5/12 items-center mt-4 lg:mt-0">
            <div className="w-2/5 text-green-800">
              {product?.totalQuantity && (
                <QuantityInput
                  value={quantity}
                  setQuantity={setQuantity}
                  beforeSetQuantity={(e) => addToCartHandler(e, product, 1)}
                  beforeReduceQuantity={(e) =>
                    reduceFromCartHandler(e, product?.id)
                  }
                />
              )}
            </div>
            <p className="w-2/5 text-right text-green-800">
              $
              {Math.round(
                (quantity * Number(product.price) + Number.EPSILON) * 100
              ) / 100}
            </p>
            <p className="w-1/5 text-right text-green-800">
              <button
                onClick={() => {
                  dispatch(removeProductFromCart(product?.id));
                }}
                name="remove-from-cart"
              >
                <LuTrash2 />
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
