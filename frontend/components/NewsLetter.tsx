export default function NewsLetter() {
  return (
    <section
      style={{ backgroundImage: "url('/news.png')" }}
      className="bg-cover bg-no-repeat"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 py-12 xl:py-28">
        <div className="mx-auto xl:w-[80%] flex items-center justify-center flex-col gap-y-8 ">
          <h3 className="text-3xl font-semibold text-white text-shadow text-center">
            Tenha ofertas exclusivas no seu email
          </h3>
          <h4 className="uppercase text-lg font-bold text-white text-shadow text-center">
            Inscreva-se em nossa NewsLetter e fique atualizado
          </h4>
          <div
            className="flex items-center justify-between rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-gray-100 w-full 
          max-w-[588px]"
          >
            <input
              type="email"
              placeholder="Seu email"
              className="w-full bg-transparent ml-7 border-none outline-none"
            />
            <button className="p-2 text-xl bg-gray-700 rounded-full text-white">
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
