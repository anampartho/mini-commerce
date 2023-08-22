"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/api";

const ProductList = () => {
  const { data: products } = useQuery({
    queryKey: ["hydrate-products"],
    queryFn: () => getProducts(),
  });

  return (
    <>
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product?.title}
            rating={product?.rating?.rate}
            price={product?.price}
            image={{
              src: product?.image,
              alt: product?.title,
            }}
            id={product?.id}
          />
        );
      })}
    </>
  );
};

export default ProductList;
