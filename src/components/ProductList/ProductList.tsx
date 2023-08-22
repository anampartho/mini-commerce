"use client";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/api";
import { initiate } from "@/redux/features/products-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useMiniSelector } from "@/redux/store";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useMiniSelector((state) => state.productsReducer.products);

  const { data } = useQuery({
    queryKey: ["hydrate-products"],
    queryFn: () => getProducts(),
  });

  useEffect(() => {
    if (!data?.length) return;
    dispatch(initiate(data));
  }, [data, dispatch]);

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
