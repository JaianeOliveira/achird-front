"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Chip } from "primereact/chip";
import EditSlugSection from "@/components/settings/sections/EditSlugSection";
import HandleModals from "@/components/settings/modal/HandleModals";
import Switch from "@/components/UI/Switch";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
export default function Settings() {
  const userData = {
    name: "Jaiane Oliveira",
    avatar_url: "https://github.com/jaianeoliveira.png",
    bio: "Fullstack Developer. I write about web development and my projects.",
    email: "x7S5S@example.com",
    github_user: "jaianeoliveira",
    social_accounts: [
      {
        provider: "github",
        url: "https://github.com/jaianeoliveira",
      },
    ],
    projects: [
      {
        title: "solas",
        url: "https://github.com/jaianeoliveira/solas",
      },
      {
        title: "izar",
        url: "https://github.com/jaianeoliveira/solas",
      },
    ],
  };
  const [pageVisible, setPageVisible] = useState(false);

  function handlePageVisible() {
    setPageVisible((prev) => !prev);
  }

  return (
    <main className="flex flex-col items-start justify-start px-[8vw] py-8">
      <h2 className="font-bold text-lg mb-3">Configure sua página</h2>
      <EditSlugSection currentSlug={userData.github_user} />
      <section className="w-full my-8">
        <div className="dark:bg-slate-900/70 bg-slate-200/70 rounded-lg shadow-md p-4 flex flex-col items-center md:items-start border border-slate-200 dark:border-slate-800 w-full">
          <div className="flex flex-col items-center md:flex-row gap-3">
          <Image
            height={122}
            width={122}
            src={userData.avatar_url || "https://via.placeholder.com/122"}
            className="rounded-full bg-cover shadow-lg"
            alt="avatar"
          />
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-bold text-xl text-center md:text-start">
                {userData.name}
              </h2>
              <p className="text-sm text-slate-900/60 dark:text-slate-100/60 text-center md:text-start">
                {userData.bio}
              </p>

              <Divider />
              <div className="text-sm dark:text-slate-100/50 text-slate-950/70 flex flex-wrap gap-2 justify-center">
                <p className="inline-flex items-center gap-1">
                  <i className="pi pi-github" /> {userData.github_user}
                </p>
                <p className="inline-flex items-center gap-1">
                  <i className="pi pi-envelope" /> {userData.email}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-1">Redes sociais</h4>

            <ul className="word-break break-word dark:text-slate-100/50 text-slate-950/70 flex flex-col text-center items-center md:items-start md:flex-row gap-2">
              {userData.social_accounts.map((account) => (
                <li
                  key={account.provider}
                  className="inline-flex items-center gap-1.5 text-base font-semibold "
                >
                  <i className={`pi pi-${account.provider}`} />{" "}
                  <Link
                    href={account.url}
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    {account.provider}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <h2 className="font-bold text-md">Projetos sendo exibidos</h2>
          <Button
            tooltip="Editar"
            tooltipOptions={{
              position: "mouse",
              className:
                "bg-slate-300 dark:bg-slate-900 px-2 rounded-md text-sm shadow-md",
            }}
            className="hover:scale-110 transition-all"
            icon="pi pi-pencil"
          ></Button>
        </div>

        <div className="flex gap-2">
          {userData.projects.map((project) => (
            <Chip
              className="text-xs font-medium dark:bg-slate-700/40 bg-slate-700/10 px-2 py-1 rounded-full w-max"
              key={project.title}
              label={project.title}
            ></Chip>
          ))}
        </div>
      </section>
      <section className="flex flex-col mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <h2 className="font-bold text-md">Experiências profissionais</h2>
          <Button
            disabled
            tooltip="Editar"
            tooltipOptions={{
              position: "mouse",
              className:
                "bg-slate-300 dark:bg-slate-900 px-2 rounded-md text-sm shadow-md",
            }}
            className="hover:scale-110 transition-all"
            icon="pi pi-pencil"
          ></Button>
        </div>
        <p className="text-sm italic opacity-75">Em breve...</p>
      </section>
      <section className="flex flex-col mb-8">
        <h2 className="font-bold text-md">Configurações</h2>
        <form>
          <label htmlFor="">Página visível ao público</label>
          <Switch checked={pageVisible} onChange={handlePageVisible} />
        </form>
      </section>
      <HandleModals />
    </main>
  );
}
