"use client";
import React from "react";
import Image from "next/image";
import { LuStar } from "react-icons/lu";
import Link from "next/link";
import { add } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import { Product } from "@/utils/types";
import { useAddToCartHandler } from "@/utils/addToCartHandler";

const ProductCard = ({ product }: { product: Product }) => {
  const addToCartHandler = useAddToCartHandler();

  return (
    <Link href={`product/${product?.id}`} className="h-full group">
      <div className="rounded bg-white shadow-sm h-full">
        <div className="p-10">
          <div className="relative w-full pb-[100%]">
            <Image
              src={product?.image || ""}
              fill={true}
              alt={product?.title || ""}
            />
            <div className="absolute w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                onClick={(e) => {
                  addToCartHandler(e, product, 1);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <ul className="flex gap-1 justify-center mb-1">
            {[1, 2, 3, 4, 5].map((rate) => {
              return (
                <li key={rate}>
                  {Number(product?.rating?.rate) > rate ? (
                    <LuStar className="text-green-600" />
                  ) : (
                    <LuStar className="opacity-20" />
                  )}
                </li>
              );
            })}
          </ul>
          <h2 className="text-center font-bold text-xl text-green-800">
            {product?.title}
          </h2>
          <p className="text-center mt-1 font-bold text-green-950">
            ${product?.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
