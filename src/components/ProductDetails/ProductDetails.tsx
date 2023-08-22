"use client";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/utils/api";

// Swiper related styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/Button/Button";
import Quantity from "@/components/Quantity/Quantity";
import { add } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toast } from "react-toastify";

const ProductDetails = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);

  const { data: product } = useQuery({
    queryKey: [`hydrate-product-${id}`],
    queryFn: () => getProduct(id),
  });

  function addToCartHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(add({ ...product, totalQuantity: quantity }));
    toast.success("Product was successfully added to your cart!");
  }

  return (
    <>
      <PageHeader title={product?.title}>
        <p className="font-bold mt-2 text-green-900">${product?.price}</p>
      </PageHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
            <Quantity value={quantity} setQuantity={setQuantity} />
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
