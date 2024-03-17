import { ThemeHandler } from "@/components/ThemeHandler";
import { getPageData } from "@/services/api/userService";
import Image from "next/image";
import Link from "next/link";
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
  const { data } = await getPageData(params.slug);

  return (
    <ThemeHandler theme={data.theme}>
      <div className="drawer drawer-end ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content scroll-smooth">
          <header className="navbar px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between gap-8">
            <Link href={"/"}>
              <div className="flex gap-2">
                <Image src={AchirdLogo} alt="Logo" height={44} />
                <h1 className="text-xl  font-bold">Achird</h1>
              </div>
            </Link>
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
                <Link href={`mailto:${data.email}`} className="btn btn-primary">
                  Entrar em contato
                </Link>
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
                  {data.name}
                </h2>
                <p className="text-xl font-semibold text-center lg:text-start">
                  {data.bio}
                </p>
                <div className="divider lg:divider-start mt-6 divider-secondary">
                  {data.social_accounts.map((account: any) => (
                    <a
                      className="link underline-offset-2"
                      href={account.url}
                      key={account.provider}
                    >
                      {account.provider}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  className="avatar rounded-full shadow-2xl w-32 md:w-44 lg:w-64 aspect-square "
                  src={data.avatar_url}
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
              {!data.repositories.length && (
                <p className="italic opacity-50 text-center lg:text-start">
                  Nenhum projeto sendo exibido
                </p>
              )}
              <div className="flex carousel carousel-center gap-4 overflow-x-scroll scrollbar  max-w-screen rounded-box">
                {data.repositories.map((repo: any, index: number) => (
                  <div
                    className="carousel-item "
                    key={`projects-carousel-${index + 1}`}
                    id={`projects-carousel-${index + 1}`}
                  >
                    <div className="card bg-base-200 w-80 shadow-xl">
                      <div className="card-body">
                        <h3 className="card-title">{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className="mt-3 card-actions justify-end">
                          <Link
                            target="_blank"
                            href={repo.url}
                            className="btn btn-secondary"
                          >
                            Ver no github
                          </Link>

                          {/* <button className="btn btn-primary" >Detalhes</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                {data.repositories.map((_: any, index: number) => (
                  <a
                    key={`projects-pagination-${index + 1}`}
                    href={`#projects-carousel-${index + 1}`}
                    className="btn btn-xs"
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
            </section>
            <section className="" id="contact">
              <h2 className="text-3xl mb-4 font-bold text-center lg:text-start">
                Onde me encontrar
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row  p-8 items-center justify-between rounded-xl shadow-xl bg-base-200">
                  <div className="overflow-hidden w-full">
                    <h4 className="card-title">Github</h4>
                    <p
                      className="tooltip tooltip-right w-min truncate text-ellipsis break-all"
                      data-tip="Copiar"
                    >
                      <a>https://github.com/{data.github_user}</a>
                    </p>
                  </div>
                  <div className="flex w-full justify-end mt-2">
                    <a
                      className="btn btn-primary"
                      href={`https://github.com/${data.github_user}`}
                    >
                      Visitar
                    </a>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  p-8 items-center justify-between rounded-xl shadow-xl bg-base-200">
                  <div className="overflow-hidden w-full">
                    <h4 className="card-title">E-mail</h4>
                    <p
                      className="tooltip tooltip-right w-min truncate text-ellipsis break-all"
                      data-tip="Copiar"
                    >
                      <a>{data.email}</a>
                    </p>
                  </div>
                  <div className="flex w-full justify-end mt-2">
                    <a
                      className="btn btn-primary"
                      href={`mailto:${data.email}`}
                    >
                      Visitar
                    </a>
                  </div>
                </div>
                {data.social_accounts.map((account: any) => (
                  <div
                    key={account.provider}
                    className="flex flex-col md:flex-row  p-8 items-center justify-between rounded-xl shadow-xl bg-base-200"
                  >
                    <div className="overflow-hidden w-full">
                      <h4 className="card-title">{account.provider}</h4>
                      <p
                        className="tooltip tooltip-right w-max truncate text-ellipsis break-all "
                        data-tip="Copiar"
                      >
                        <a className="w-full">{account.url}</a>
                      </p>
                    </div>
                    <div className="flex w-full justify-end mt-2">
                      <a className="btn btn-primary" href={account.url}>
                        Visitar
                      </a>
                    </div>
                  </div>
                ))}
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
    </ThemeHandler>
  );
}
