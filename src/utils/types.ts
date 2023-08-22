export type Product = {
  id?: number | string | undefined;
  title?: string | undefined;
  price?: string | number | undefined;
  category?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  totalQuantity?: number | undefined;
  rating?:
    | {
        rate: number;
        count: number;
      }
    | undefined;
};
