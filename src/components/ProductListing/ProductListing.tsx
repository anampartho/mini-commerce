import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductListing = () => {
  return (
    <div className="grid gap-2 grid-cols-3 grid-rows-auto">
      <ProductCard
        title="Name"
        rating={4.5}
        price="100"
        image={{
          src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          alt: "Product name",
        }}
        id="1"
      />
    </div>
  );
};

export default ProductListing;
