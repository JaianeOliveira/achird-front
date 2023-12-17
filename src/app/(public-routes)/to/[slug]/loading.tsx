import Image from "next/image";
import AchirdLogo from "public/logo.png";

export default function Loading() {
  return (
    <div>
      <header className="navbar px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between gap-8">
        <div className="flex gap-2">
          <Image src={AchirdLogo} alt="Logo" height={44} />
          <h1 className="text-xl  font-bold">Achird</h1>
        </div>
        <nav className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="flex items-end gap-4  text-sm font-semibold">
            <div className="w-16 h-4 skeleton"></div>
            <div className="w-24 h-4 skeleton"></div>
            <div className="w-20 h-4 skeleton"></div>
          </ul>
        </nav>
        <div className="w-36 h-12 rounded-lg skeleton"></div>
      </header>

      <main className="px-16 lg:px-32 py-16 w-full flex flex-col gap-16">
        <section className="min-h-[40vh] w-full flex flex-col-reverse gap-8 lg:flex-row items-center justify-center lg:justify-around">
          <div className="flex flex-col lg:w-2/5 gap-4 items-center lg:items-start">
            <div className="w-52 h-12 rounded-full skeleton"></div>
            <div className="w-36 h-6 rounded-full skeleton"></div>
            <div className="divider lg:divider-start mt-6 divider-secondary">
              <div className="w-32 h-4 skeleton"></div>
            </div>
          </div>
          <div>
            <div className="avatar rounded-full shadow-2xl w-32 md:w-44 lg:w-64 aspect-square skeleton" />
          </div>
        </section>
        <section className="">
          <h2 className="text-3xl mb-4 font-bold text-center lg:text-start">
            Projetos
          </h2>
          <div className="flex carousel carousel-center gap-4 overflow-x-scroll scrollbar  max-w-screen rounded-box">
            {new Array(3).fill(0).map((_, index) => (
              <div
                className="carousel-item skeleton card bg-base-200 p-4 w-80 h-44 shadow-xl"
                key={`projects-carousel-${index}`}
                id={`projects-carousel-${index}`}
              ></div>
            ))}
          </div>
        </section>
        <section className="">
          <h2 className="text-3xl mb-4 font-bold text-center lg:text-start">
            Onde me encontrar
          </h2>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="skeleton flex p-8 h-20 items-center justify-between rounded-xl shadow-xl bg-base-200"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="skeleton flex p-8 h-20 items-center justify-between rounded-xl shadow-xl bg-base-200"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
