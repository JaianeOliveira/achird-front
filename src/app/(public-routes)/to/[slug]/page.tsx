import Image from "next/image";
import AchirdLogo from "public/logo.svg";

async function getData(slug: string) {
  const data = await fetch(`https://api.github.com/users/${slug}`).then((res) =>
    res.json()
  );

  return data;
}

async function mockData() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe" });
    }, 3000);
  });

  return promise;
}

async function mockDataError() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ status: 404 });
    }, 3000);
  });

  return promise;
}

export default async function Profile({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  const data = await mockData();
  console.log(data);

  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content scroll-smooth">
        <header className="navbar px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between gap-8">
          <div className="flex gap-2">
            <Image src={AchirdLogo} alt="Logo" height={44} />
            <h1 className="text-xl  font-bold">Achird</h1>
          </div>
          <nav className="hidden lg:flex flex-1 justify-center items-center">
            <ul className="flex items-end gap-4  text-sm font-semibold">
              <li>
                <a href="#about">Sobre mim</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Onde me encontrar</a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <label
              htmlFor="my-drawer"
              className="lg:hidden btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div>
              <button className="btn btn-primary">Entrar em contato</button>
            </div>
          </div>
        </header>

        <main className="px-16 lg:px-32 py-16 w-full flex flex-col gap-16">
          <section
            id="about"
            className="min-h-[40vh] w-full flex flex-col-reverse gap-8 lg:flex-row items-center justify-center lg:justify-around"
          >
            <div className="flex flex-col lg:w-2/5">
              <h2 className="text-5xl mb-1 font-extrabold text-center lg:text-start">
                Jaiane Oliveira
              </h2>
              <p className="text-xl font-semibold text-center lg:text-start">
                Fullstack developer
              </p>
              <div className="divider lg:divider-start mt-6 divider-secondary">
                <a className="link  underline-offset-2">Linkedin</a>
                <a className="link  underline-offset-2">Github</a>
                <a className="link  underline-offset-2">Twitter</a>
              </div>
            </div>
            <div>
              <Image
                className="avatar rounded-full shadow-2xl w-32 md:w-44 lg:w-64 aspect-square "
                src={"https://github.com/jaianeoliveira.png"}
                alt="Profile"
                height={300}
                width={300}
              />
            </div>
          </section>
          <section className="" id="projects">
            <h2 className="text-3xl mb-4 font-bold text-center lg:text-start">
              Projetos
            </h2>
            <div className="flex carousel carousel-center gap-4 overflow-x-scroll scrollbar  max-w-screen rounded-box">
              {new Array(5).fill(0).map((_, index) => (
                <div
                  className="carousel-item "
                  key={`projects-carousel-${index}`}
                  id={`projects-carousel-${index}`}
                >
                  <div className="card bg-base-200 w-80 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title">Solas</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="mt-3 card-actions justify-end">
                        <button className="btn btn-secondary">
                          Ver no github
                        </button>

                        <button className="btn btn-primary">Detalhes</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {new Array(5).fill(0).map((_, index) => (
                <a
                  key={`projects-pagination-${index}`}
                  href={`#projects-carousel-${index}`}
                  className="btn btn-xs"
                >
                  1
                </a>
              ))}
            </div>
          </section>
          <section className="" id="contact">
            <h2 className="text-3xl mb-4 font-bold text-center lg:text-start">
              Onde me encontrar
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex p-8 items-center justify-between rounded-xl shadow-xl bg-base-200">
                <div>
                  <h4 className="card-title">Github</h4>
                  <p className="tooltip tooltip-right w-min" data-tip="Copiar">
                    <a>https://github.com/jaianeoliveira</a>
                  </p>
                </div>
                <div className="">
                  <a target="_blank" className="btn btn-primary">
                    Visitar
                  </a>
                </div>
              </div>
              <div className="flex p-8 items-center justify-between rounded-xl shadow-xl bg-base-200">
                <div>
                  <h4 className="card-title">Github</h4>
                  <p className="tooltip tooltip-right w-min" data-tip="Copiar">
                    <a>https://github.com/jaianeoliveira</a>
                  </p>
                </div>
                <div className="">
                  <a target="_blank" className="btn btn-primary">
                    Visitar
                  </a>
                </div>
              </div>
              <div className="flex p-8 items-center justify-between rounded-xl shadow-xl bg-base-200">
                <div>
                  <h4 className="card-title">Github</h4>
                  <p className="tooltip tooltip-right w-min" data-tip="Copiar">
                    <a>https://github.com/jaianeoliveira</a>
                  </p>
                </div>
                <div className="">
                  <a target="_blank" className="btn btn-primary">
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer footer-center py-4">
          <aside className="flex gap-2">
            <strong>Achird</strong>
            <p>
              Created by{" "}
              <a
                className="link underline-offset-2"
                href="https://github.com/jaianeoliveira"
                target="_blank"
              >
                Jaiane Oliveira
              </a>
            </p>
          </aside>
        </footer>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li className="menu-title">Ir para</li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Onde me encontrar</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
