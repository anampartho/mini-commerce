import { ReactNode } from "react";

export interface ClassName {
  className?: string;
}

export interface Filter {
  options: { name: string; id: string }[];
  children: ReactNode;
}

export interface ProductCard {
  image: {
    src: string;
    alt: string;
  };
  rating: number | string;
  title: string;
  price: string | number;
  id: string;
}

export interface PageHeader {
  children?: ReactNode;
  title: string;
}
