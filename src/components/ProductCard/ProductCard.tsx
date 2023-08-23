"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuStar } from "react-icons/lu";
import Button from "@/components/Button/Button";
import { Product } from "@/utils/types";
import { useAddToCart } from "@/utils/useAddToCart";

const ProductCard = ({
  product,
  priorityImage = false,
}: {
  product: Product;
  priorityImage: boolean;
}) => {
  const addToCartHandler = useAddToCart();

  return (
    <Link href={`product/${product?.id}`} className="h-full group">
      <div className="rounded bg-white shadow-sm h-full">
        <div className="p-10">
          <div className="relative w-full pb-[100%]">
            <Image
              src={product?.image || ""}
              fill={true}
              alt={product?.title || ""}
              priority={priorityImage}
              objectFit="contain"
            />
            <div className="absolute w-full h-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity">
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
