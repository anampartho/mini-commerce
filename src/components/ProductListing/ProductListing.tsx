import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/react-query/hydrate.client";
import getQueryClient from "@/react-query/getQueryClient";
import ProductList from "@/components/ProductList/ProductList";
import { getProducts } from "@/utils/api";

const ProductListing = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-products"], getProducts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ProductList />
    </Hydrate>
  );
};

export default ProductListing;
