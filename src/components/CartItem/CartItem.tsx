"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import Link from "next/link";
import QuantityInput from "../Quantity/QuantityInput";
import { Product } from "@/utils/types";
import { useDispatch } from "react-redux";
import { remove } from "@/redux/features/cart-slice";

const CartItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.totalQuantity || 1);
  return (
    <>
      {product && (
        <div className="flex items-center py-4">
          <div className="w-7/12">
            <div className="flex gap-10 items-center">
              <div className="p-4 rounded bg-white shadow-sm">
                <div className="w-[100px] h-[100px] basis-[100px] relative">
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
          <div className="w-2/12 text-green-800">
            {product?.totalQuantity && (
              <QuantityInput value={quantity} setQuantity={setQuantity} />
            )}
          </div>
          <p className="w-2/12 text-right text-green-800">
            ${quantity * Number(product.price)}
          </p>
          <p className="w-1/12 text-right text-green-800">
            <button
              onClick={() => {
                dispatch(remove(product?.id));
              }}
            >
              <LuTrash2 />
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default CartItem;
