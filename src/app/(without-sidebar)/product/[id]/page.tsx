"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuPlus } from "react-icons/lu";

// Swiper related styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/Button/Button";

export default function Product() {
  function addToCartHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("add to cart");
  }
  return (
    <>
      <PageHeader title="Product Name">
        <p className="font-bold mt-2 text-green-900">$100</p>
      </PageHeader>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="p-10 shadow-sm rounded bg-white">
                <div className="relative w-full pb-[100%]">
                  <Image
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt="12"
                    fill={true}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="flex justify-between mb-10">
            <div>
              <h2 className="font-black text-xl text-green-800">Quantity</h2>
            </div>
            <Button onClick={addToCartHandler}>Add to Cart</Button>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              aliquam, voluptas est praesentium possimus vel repellendus quae
              nisi. Perferendis quibusdam similique nostrum commodi earum aut
              quam veritatis aspernatur placeat eos. Officia doloremque dolorum
              nulla vitae blanditiis nesciunt ea reprehenderit et totam numquam
              porro, magni ipsam aut possimus, id optio nostrum modi nihil
              aliquid qui. In quisquam tenetur quia aut corrupti. Voluptatibus
              possimus, veniam ullam neque qui magnam inventore animi sapiente
              similique minus vero blanditiis, adipisci quasi suscipit,
              obcaecati porro libero eligendi? Nostrum obcaecati architecto
              dolor consequuntur beatae aut saepe similique. Quaerat, ipsum
              itaque recusandae nesciunt natus debitis aliquam eaque
              necessitatibus, tempore esse unde sed officiis repellat
              voluptatibus accusamus reiciendis id. Sit eum excepturi omnis
              sapiente cupiditate doloribus eveniet reprehenderit molestias!
              Nam, numquam expedita amet esse a ea dolorum iure odit officia.
              Aperiam consequatur animi aspernatur illo quis debitis consectetur
              adipisci odio provident, a fuga perspiciatis nam officiis eius
              amet corporis. Tempora aliquid suscipit dolorem, eligendi sapiente
              eaque deserunt rem blanditiis consequuntur dignissimos error
              ducimus, dolorum dolores voluptatum sed neque iure vitae pariatur
              facilis et natus harum deleniti veniam saepe. Sapiente. Doloremque
              laborum deserunt reiciendis maiores non. Aperiam similique quasi
              tenetur porro tempore rem eos voluptates quis exercitationem
              libero ad, quisquam quibusdam impedit rerum. Autem ad ea nihil
              quaerat nam eveniet? Veniam voluptate temporibus autem delectus
              dolorum natus quaerat aliquam! Ex doloribus dignissimos molestiae?
              Pariatur repellendus quasi quis sunt molestias consequuntur
              molestiae officia, dolorum delectus dolores aliquid debitis
              provident quisquam nam. Accusamus impedit atque dolorem harum
              doloremque dolores quis illum et exercitationem voluptatibus iste
              quasi fugit voluptate ratione asperiores perferendis, dolorum
              voluptatem modi? A animi corrupti alias culpa? Optio, eveniet. Ut?
              Perferendis consequatur dolore optio natus beatae esse expedita ut
              fugiat vitae ipsa vel laboriosam, itaque dolorum! Totam,
              voluptatem aperiam? Laudantium fugit impedit molestias eligendi!
              Ullam facere tempore fugit aperiam vero!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
