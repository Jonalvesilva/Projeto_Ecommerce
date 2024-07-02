"use client";
import { useContext } from "react";
import { ShopContext } from "@/context/shopContext";
import { useParams } from "next/navigation";
import ProductHd from "@/components/ProductHd";

export default function Page() {
  const context: any = useContext(ShopContext);
  const { id } = useParams();
  const product = context.all_products.find((e: any) => e.id == Number(id));

  return (
    <section className="pt-[100px] pb-10 bg-slate-300">
      <div>
        <div>
          <ProductHd product={product} />
        </div>
      </div>
    </section>
  );
}
