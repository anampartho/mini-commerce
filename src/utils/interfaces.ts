import { ReactNode } from "react";

export interface ClassName {
  className?: string;
}

export interface Filter {
  options: { name: string; id: string }[];
  children: ReactNode;
}
