import React from "react";
import Image from "next/image";
import { LuStar } from "react-icons/lu";
import { ProductCard } from "@/utils/interfaces";
import Link from "next/link";

const ProductCard = ({ image, rating, title, price, id }: ProductCard) => {
  return (
    <div className="border rounded">
      <div className="p-10">
        <div className="relative w-full pb-[100%]">
          <Image src={image.src} fill={true} alt={image.alt} />
        </div>
      </div>
      <div className="px-5 pb-5">
        <ul className="flex gap-1 justify-center mb-1">
          {[1, 2, 3, 4, 5].map((rate) => {
            return (
              <li key={rate}>
                {Number(rating) > rate ? (
                  <LuStar className="text-orange-300" />
                ) : (
                  <LuStar className="opacity-20" />
                )}
              </li>
            );
          })}
        </ul>
        <h2 className="text-center font-bold text-xl">
          <Link href={`product/${id}`}>{title}</Link>
        </h2>
        <p className="text-center mt-1 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
