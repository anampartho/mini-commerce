"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getProducts } from "@/utils/api";
import { setProducts } from "@/redux/features/products-slice";
import { AppDispatch, useMiniSelector } from "@/redux/store";
import ProductCard from "@/components/ProductCard/ProductCard";
import SortingMenu from "@/components/SortingMenu/SortingMenu";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useMiniSelector((state) => state.productsReducer.products);
  const selectedFilters = useMiniSelector((state) => state.filterSlice.filters);
  const sortBy = useMiniSelector((state) => state.sortBySlice.sortBy);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortedAndFilteredProducts, setSortedAndFilteredProducts] =
    useState(products);

  const { data } = useQuery({
    queryKey: ["hydrate-products"],
    queryFn: () => getProducts(),
  });

  useEffect(() => {
    if (!data?.length) return;
    dispatch(setProducts(data));
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

  useEffect(() => {
    if (!filteredProducts.length) return;

    const sortByVal = sortBy.toLowerCase();
    const filteredProductsCopy = [...filteredProducts];

    if (sortByVal === "none") {
      setSortedAndFilteredProducts(filteredProducts);
    } else if (sortByVal === "alphabet-descending") {
      setSortedAndFilteredProducts(
        filteredProductsCopy.sort((a, b) => {
          if (!a.title || !b.title) return -1;

          if (a?.title < b.title) {
            return 1;
          }

          if (a?.title > b?.title) {
            return -1;
          }

          return 0;
        })
      );
    } else if (sortByVal === "alphabet-ascending") {
      setSortedAndFilteredProducts(
        filteredProductsCopy.sort((a, b) => {
          if (!a.title || !b.title) return -1;

          if (a?.title > b.title) {
            return 1;
          }

          if (a?.title < b?.title) {
            return -1;
          }

          return 0;
        })
      );
    } else if (sortByVal === "price-ascending") {
      setSortedAndFilteredProducts(
        filteredProductsCopy.sort((a, b) => {
          if (!a.price || !b.price) return -1;

          if (a?.price > b.price) {
            return 1;
          }

          if (a?.price < b?.price) {
            return -1;
          }

          return 0;
        })
      );
    } else if (sortByVal === "price-descending") {
      setSortedAndFilteredProducts(
        filteredProductsCopy.sort((a, b) => {
          if (!a.price || !b.price) return -1;

          if (a?.price < b.price) {
            return 1;
          }

          if (a?.price > b?.price) {
            return -1;
          }

          return 0;
        })
      );
    }
    console.log(sortBy);
  }, [sortBy, filteredProducts]);

  return (
    <>
      <SortingMenu />
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto">
        {sortedAndFilteredProducts?.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              priorityImage={index === 0}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
