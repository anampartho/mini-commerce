export type Product = {
  id: number | string;
  title: string;
  price: string | number;
  category: string;
  description: string;
  image: string;
  totalQuantity: number;
  rating: {
    rate: number;
    count: number;
  };
};
