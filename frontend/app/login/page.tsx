import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-slate-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 flex items-center justify-center flex-col pt-32 pb-16">
        <div className="max-w-[555px] h-[450px] bg-white m-auto px-4 min-[425px]:px-14 py-12 rounded-md">
          <h3 className="text-3xl font-semibold">Login</h3>
          <div className="flex flex-col gap-4 mt-7">
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
            Login
          </button>
          <p>
            Não tem conta? Faça o cadastro{" "}
            <Link href={`/signup`} className="text-blue-500 underline">
              aqui
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
