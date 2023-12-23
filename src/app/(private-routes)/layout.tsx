"use client";
import Button from "@/components/UI/Button";
import Header from "@/components/UI/Header";
import { ConfigContext } from "@/contexts/ConfigContext";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { PropsWithChildren, useContext } from "react";
import AchirdLogo from "public/logo.svg";

export default function PrivateLayout({ children }: PropsWithChildren) {
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
      <header className="navbar px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between gap-8">
        <div className="flex gap-2">
          <Image src={AchirdLogo} alt="Logo" height={44} />
          <h1 className="text-xl  font-bold">Achird</h1>
        </div>

        <div className="flex gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar placeholder"
            >
              <div className="flex items-center justify-center bg-neutral text-neutral-content rounded-full p-3">
                <p className="text-center font-bold">FD</p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
            >
              <li>
                <a>Configurações</a>
              </li>
              <li>
                <a>Minha página</a>
              </li>
              <li>
                <a>Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
