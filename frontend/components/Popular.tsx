import POPULAR from "@/constants/popular";
import Item from "./Item";

export default function Popular() {
  return (
    <section id="popular" className="my-12">
      <div className="mx-auto px-auto lg:px-20 py-12 xl:py-20">
        <h3 className="text-4xl text-center">Produtos Populares</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {POPULAR.map((item: any) => (
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
      </div>
    </section>
  );
}
