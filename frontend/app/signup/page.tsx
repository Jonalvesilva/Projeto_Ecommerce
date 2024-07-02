import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-slate-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 flex items-center justify-center flex-col pt-32 pb-16">
        <div className="max-w-[555px] h-[600px] bg-white m-auto px-4 min-[425px]:px-14 py-10 rounded-md">
          <h3 className="text-3xl font-semibold">Cadastre-se</h3>
          <div className="flex flex-col gap-4 mt-7">
            <input
              type="text"
              placeholder="Nome"
              className="h-14 w-full pl-5 bg-slate-600/5 outline-none rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-14 w-full pl-5 bg-slate-600/5 outline-none rounded-xl"
            />
            <input
              type="password"
              placeholder="Senha"
              className="h-14 w-full pl-5 bg-slate-600/5 outline-none rounded-xl"
            />
          </div>
          <button className="w-full py-3 bg-gray-700 text-white text-shadow rounded-full my-7">
            Cadastrar
          </button>
          <p>
            Já tem uma conta? Faça o login{" "}
            <Link href={`/login`} className="text-blue-500 underline">
              aqui
            </Link>
          </p>
          <div className="flex items-center justify-center mt-6 gap-3">
            <input type="checkbox" name="" id="" />
            <p className="text-sm">
              Ao marcar, eu aceito os termos de uso e as politicas de
              privacidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
