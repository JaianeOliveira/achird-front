"use client";
import { ConfigContext } from "@/contexts/ConfigContext";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import AchirdLogo from "public/logo.svg";
import { PropsWithChildren, useContext } from "react";

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
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <Image src={AchirdLogo} alt="Logo" height={44} />
            <h1 className="text-xl  font-bold">Achird</h1>
          </div>
        </Link>

        <div className="flex gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar placeholder"
            >
              <div className="flex items-center justify-center bg-neutral text-neutral-content rounded-full p-3">
                <p className="text-center font-bold">US</p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    Cookies.remove("ACHIRD_TOKEN");
                    Cookies.remove("ACHIRD_SLUG");
                    window && window.location.reload();
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
