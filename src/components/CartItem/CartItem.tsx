import React from "react";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";

const CartItem = () => {
  return (
    <div className="flex items-center py-4">
      <div className="w-7/12">
        <div className="flex gap-10 items-center">
          <div className="p-4  border rounded">
            <div className="w-[100px] h-[100px] basis-[100px] relative">
              <Image
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
                fill={true}
              />
            </div>
          </div>
          <div>
            <p className="font-bold">Product Name</p>
          </div>
        </div>
      </div>
      <p className="w-2/12">10</p>
      <p className="w-2/12 text-right">$100</p>
      <p className="w-1/12 text-right">
        <button>
          <LuTrash2 />
        </button>
      </p>
    </div>
  );
};

export default CartItem;
