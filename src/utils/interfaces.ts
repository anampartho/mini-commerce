import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export interface ClassName {
  className?: string;
}

export interface Filter {
  options: { name: string; id: string }[];
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface ProductCard {
  image?: {
    src?: string | undefined;
    alt?: string | undefined;
  };
  rating?: number | string | undefined;
  title?: string | undefined;
  price?: string | number | undefined;
  id?: string | number | undefined;
}

export interface PageHeader {
  children?: ReactNode;
  title?: string;
}

export interface Button {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
}

export interface IconButton extends Button {}
