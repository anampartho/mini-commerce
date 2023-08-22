import Hydrate from "@/react-query/hydrate.client";
import getQueryClient from "@/react-query/getQueryClient";
import ProductList from "@/components/ProductList/ProductList";
import { dehydrate } from "@tanstack/query-core";
import { getProducts } from "@/utils/api";

const ProductListing = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-products"], getProducts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="grid gap-2 grid-cols-3 grid-rows-auto">
      <Hydrate state={dehydratedState}>
        <ProductList />
      </Hydrate>
    </div>
  );
};

export default ProductListing;
