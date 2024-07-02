import Item from "@/components/Item";
import all_products from "@/constants/all_products";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Page() {
  return (
    <section className="mt-[73px]">
      <div>
        <div className="h-[120px] min-[360px]:h-[150px] min-[400px]:h-[200px] sm:h-[300px] md:h-[500px] lg:h-[600px]">
          <img src="./assets/clothingbanner.png" className="w-full h-full" />
        </div>
        <div className="w-full my-8 flex flex-col items-center justify-center gap-y-5 md:flex-row md:justify-between md:px-6">
          <h5>
            <span className="font-semibold">Mostrando 1-12</span> de 36 produtos
          </h5>
          <div className="flex items-center justify-between max-sm:p-4 gap-x-4 px-8 py-3 rounded-full ring-1 ring-state-900/15">
            Ordenar por <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {all_products.map((item: any) => {
            if (item.category == "clothing") {
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image.src}
                  old_price={item.old_price}
                  new_price={item.new_price}
                  key={item.id}
                ></Item>
              );
            }
          })}
        </div>
        <div className="my-16 text-center">
          <button className="bg-gray-500 p-3 rounded-full text-white text-shadow">
            Carregar Mais
          </button>
        </div>
      </div>
    </section>
  );
}
