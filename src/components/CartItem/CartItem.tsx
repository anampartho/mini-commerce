import React from "react";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import Link from "next/link";

const CartItem = () => {
  return (
    <div className="flex items-center py-4">
      <div className="w-7/12">
        <div className="flex gap-10 items-center">
          <div className="p-4 rounded bg-white shadow-sm">
            <div className="w-[100px] h-[100px] basis-[100px] relative">
              <Image
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
                fill={true}
              />
            </div>
          </div>
          <div>
            <p className="font-bold text-green-800">
              <Link href="/">Product Name</Link>
            </p>
          </div>
        </div>
      </div>
      <p className="w-2/12 text-green-800">10</p>
      <p className="w-2/12 text-right text-green-800">$100</p>
      <p className="w-1/12 text-right text-green-800">
        <button>
          <LuTrash2 />
        </button>
      </p>
    </div>
  );
};

export default CartItem;
