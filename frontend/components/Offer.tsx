"use client";
import Link from "next/link";

export default function Offer() {
  return (
    <section
      id="offer"
      className="w-full h-[900px] lg:h-[700px] flex bg-cover bg-center"
      style={{ backgroundImage: "url('/beach.jpg')" }}
    >
      <div className="max-w-screen-2xl h-full mx-auto flex flex-col lg:flex-row lg:px-6 lg:items-center">
        <div className="w-[90%] mx-auto h-full flex flex-col items-center justify-center gap-y-6">
          <div className="sun">
            <img src="sun.png" />
          </div>
          <h2 className="text-2xl min-[400px]:text-3xl text-white bg-slate-800/90 text-shadow p-4 rounded-xl font-semibold">{`Promoção de Verão`}</h2>
          <p className="text-white text-center text-lg rounded-xl  text-shadow sm:text-xl lg:text-2xl  lg:leading-[60px]">
            {`Verão chegou com descontos que vão aquecer seu guarda-roupa!`}
          </p>
          <p className=" text-2xl bg-yellow-400/90 p-2 rounded-lg">50% OFF</p>
          <Link
            className="py-3 px-6 rounded-full bg-green-700 text-shadow font-semibold text-white"
            href={`/product`}
          >
            Aproveite
          </Link>
        </div>
        <div className="w-full h-full max-h-[450px] flex justify-center lg:items-start lg:justify-center lg:pl-16 lg:max-h-full">
          <img
            src="offer.png"
            className="w-full h-full object-cover max-w-[300px] lg:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
