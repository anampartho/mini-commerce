import type { Product } from "./types";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = (await res.json()) as Product[];
  return products;
}

export async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = (await res.json()) as Product;
  return products;
}
