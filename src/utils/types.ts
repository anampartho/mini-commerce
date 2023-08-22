export type Product = {
  id: number | string;
  title: string;
  price: string | number;
  category: string;
  image: string;
  totalQuantity: number;
  rating: {
    rate: number;
    count: number;
  };
};
