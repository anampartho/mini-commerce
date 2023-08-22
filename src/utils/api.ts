import type { Product } from "./types";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = (await res.json()) as Product[];
  return products;
}
