import Hydrate from "@/react-query/hydrate.client";
import getQueryClient from "@/react-query/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import { getProduct } from "@/utils/api";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([`hydrate-product-${id}`], () => {
    getProduct(id);
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydratedState}>
        <ProductDetails id={id} />
      </Hydrate>
    </>
  );
}
