"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "@/utils/api";

// Swiper related styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/Button/Button";
import Quantity from "@/components/Quantity/Quantity";
import { usePathname, useSearchParams } from "next/navigation";

const ProductDetails = ({ id }: { id: string }) => {
  const { data: product } = useQuery({
    queryKey: [`hydrate-product-${id}`],
    queryFn: () => getProduct(id),
  });

  function addToCartHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <>
      <PageHeader title={product?.title}>
        <p className="font-bold mt-2 text-green-900">${product?.price}</p>
      </PageHeader>
      <div className="grid grid-cols-2 gap-10">
        <div>
          {product?.image && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="p-10 shadow-sm rounded bg-white">
                  <div className="relative w-full pb-[100%]">
                    <Image src={product?.image} alt="12" fill={true} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
        <div>
          <div className="flex justify-between mb-10">
            <Quantity />
            <Button onClick={addToCartHandler}>Add to Cart</Button>
          </div>
          <div>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
