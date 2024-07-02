"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  return (
    <section
      id="about"
      className="mt-[73px] w-full h-[900px] lg:h-[700px] flex bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="max-w-screen-2xl h-full mx-auto flex flex-col lg:flex-row lg:px-6 lg:items-center">
        <div className="w-[90%] mx-auto h-full flex flex-col items-center justify-center gap-y-6">
          <h2 className="text-2xl min-[400px]:text-3xl text-white bg-slate-800/90 text-shadow p-4 rounded-xl font-semibold">{`Ternos em Promoção`}</h2>
          <p className="text-white text-center text-lg rounded-xl  text-shadow sm:text-xl lg:text-2xl  lg:leading-[60px]">
            {`Descubra a perfeição no seu estilo com nossos ternos premium, feitos para quem valoriza sofisticação e qualidade em cada detalhe`}
          </p>
          <p className=" text-2xl bg-yellow-400/90 p-2 rounded-lg">30% OFF</p>
          <Link
            className="py-3 px-6 rounded-full bg-green-700 text-shadow font-semibold text-white"
            href={`/product`}
          >
            Veja Mais
          </Link>
        </div>
        <div className="w-full h-full max-h-[450px] flex justify-center lg:items-start lg:justify-center lg:pl-16 lg:max-h-full">
          <img
            src="hero.png"
            className="w-full h-full object-cover max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
