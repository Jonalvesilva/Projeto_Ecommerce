"use client";
import { useContext } from "react";
import { ShopContext } from "@/context/shopContext";
import Item from "@/components/Item";

export default function Page() {
  const context: any = useContext(ShopContext);

  return (
    <section id="popular" className="mt-12">
      <div className="mx-auto px-auto lg:px-20 py-12 xl:py-20">
        <h3 className="text-4xl text-center">Todos os Produtos</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {context.all_products.map((item: any) => (
            <Item
              id={item.id}
              name={item.name}
              image={item.image.src}
              old_price={item.old_price}
              new_price={item.new_price}
              key={item.id}
            ></Item>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-gray-500 p-3 rounded-full text-white text-shadow">
            Carregar Mais
          </button>
        </div>
      </div>
    </section>
  );
}
