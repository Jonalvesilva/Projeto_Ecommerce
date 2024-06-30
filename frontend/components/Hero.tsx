"use client";

import { useEffect } from "react";

export default function Hero() {
  return (
    <section
      id="about"
      className="mt-[73px] w-full h-[900px] lg:h-[700px] flex bg-blue-500/80"
    >
      <div className="max-w-screen-2xl h-full mx-auto flex flex-col lg:flex-row lg:px-6 lg:items-center">
        <div className="w-full h-full">
          <h2 className="text-3xl text-green-500 font-semibold">{`Ternos em Promoção`}</h2>
          <h3 className="text-2xl text-gray-200 font-semibold">{``}</h3>
          <p className="text-white text-justify text-lg sm:text-xl lg:leading-[60px]">
            {`Descubra a perfeição no seu estilo com nossos ternos premium, feitos para quem valoriza sofisticação e qualidade em cada detalhe`}
          </p>
        </div>
        <div className="bg-red-500 w-full h-full max-h-[450px] flex justify-center lg:items-start lg:justify-center lg:pl-16 lg:max-h-full">
          <img
            src="hero.png"
            className="w-full h-full object-cover max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
