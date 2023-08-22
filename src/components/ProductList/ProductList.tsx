"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/api";
import { initiate } from "@/redux/features/products-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useMiniSelector } from "@/redux/store";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useMiniSelector((state) => state.productsReducer.products);
  const selectedFilters = useMiniSelector((state) => state.filterSlice.filters);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const { data } = useQuery({
    queryKey: ["hydrate-products"],
    queryFn: () => getProducts(),
  });

  useEffect(() => {
    if (!data?.length) return;
    dispatch(initiate(data));
    setFilteredProducts(data);
  }, [data, dispatch]);

  useEffect(() => {
    if (selectedFilters.length) {
      setFilteredProducts(
        products.filter((product) =>
          selectedFilters.includes(product.category || "")
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedFilters, products]);

  return (
    <>
      <div className="grid gap-2 grid-cols-3 grid-rows-auto">
        {filteredProducts?.map((product) => {
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
      </div>
    </>
  );
};

export default ProductList;
