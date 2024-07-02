"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  id: any;
  name: any;
  image: any;
  old_price: any;
  new_price: any;
};

export default function Item(props: Props) {
  const [showText, setShowText] = useState(true);

  const handleText = (showText: boolean) => {
    setShowText(!showText);
  };

  return (
    <div
      className="w-[90%] max-w-[385px] bg-white rounded-xl overflow-hidden shadow-lg shadow-gray-500 hover:bg-black/20"
      onMouseEnter={() => handleText(showText)}
      onMouseLeave={() => handleText(showText)}
    >
      <div className="relative w-full flex items-center justify-center group overflow-hidden transition-all duration-100">
        <Link
          href={`product/${props.id}`}
          className="h-12 w-12 bg-white rounded-full flex items-center justify-center absolute top-1/2 
          bottom-1/2  !py-2 z-10 scale-0 group-hover:scale-100 transition-all duration-700"
        >
          <FaSearch className="hover:rotate-90 hover:scale-125 transition-all duration-200" />
        </Link>

        <img
          src={props.image}
          alt="produto"
          className="block object-cover  group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4
          className={`my-[6px] text-md text-black ${
            showText ? "line-clamp-1" : "line-clamp-2"
          }`}
        >
          {props.name}
        </h4>
        <div className="flex gap-5">
          <div className="font-semibold line-through text-orange-500">
            R$:{props.old_price},00
          </div>
          <div className="font-semibold">R$: {props.new_price},00</div>
        </div>
      </div>
    </div>
  );
}
