"use client";
import Button from "@/components/UI/Button";
import Header from "@/components/UI/Header";
import { ConfigContext } from "@/contexts/ConfigContext";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { PropsWithChildren, useContext } from "react";

export default function PrivateLayout(props: PropsWithChildren) {
  const {
    darkModeIsActive,
    sideBarIsOpen,
    toggleSideBarIsOpen,
    toggleDarkModeIsActive,
  } = useContext(ConfigContext);
  const links = [
    { title: "Configurações", to: "/settings" },
    { title: "Minha página", to: "/to/me" },
  ];
  return (
    <>
      <div>
        <Header
          links={links}
          openMenu={() => toggleSideBarIsOpen(true)}
          darkModeIsActive={darkModeIsActive}
          toggleDarkModeIsActive={toggleDarkModeIsActive}
        />
        {props.children}
      </div>
      <Sidebar
        className="py-8 px-4 shadow-lg cursor-auto bg-slate-100 dark:bg-slate-930 transition-all"
        position="right"
        visible={sideBarIsOpen}
        onHide={() => toggleSideBarIsOpen(false)}
      >
        <nav className="mt-2">
          <h4 className="font-bold text-sm opacity-70 mb-3">Ir para</h4>
          <ul>
            {links.map((link) => (
              <li
                key={link.title}
                className="cursor-pointer border-b border-slate-200 dark:border-slate-800 py-2 px-4 hover:text-slate-700 dark:hover:text-slate-200 font-semibold transition-all text-sm text-slate-700/70 dark:text-slate-200/70 text-md"
              >
                <Link href={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col mt-8">
          <Button>Sair</Button>
        </div>
      </Sidebar>
    </>
  );
}
