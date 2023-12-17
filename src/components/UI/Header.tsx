"use client";
import Image from "next/image";
import Logo from "public/logo.png";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

export type HeaderProps = {
  links?: { title: string; to: string }[];
  openMenu?: () => void;
  darkModeIsActive: boolean;
  toggleDarkModeIsActive: (to?: boolean) => void;
};

export default function Header({
  links = [],
  openMenu = () => {},
  darkModeIsActive,
  toggleDarkModeIsActive,
}: HeaderProps) {
  return (
    <header className=" min-h-[6vh] shadow-md dark:shadow-slate-900 py-4 px-[8vw] flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image src={Logo} alt="" width={32} height={32} />
        <h2 className="text-sm lg:text-md font-bold">
          <a target="_blank" href="redirectLink">
            Achird
          </a>
        </h2>
      </div>
      <nav className="hidden lg:flex flex-1 px-12">
        <ul className="flex gap-4 text-slate-700/70 dark:text-slate-200/70 font-semibold  items-center">
          {links.map((link) => (
            <Link key={link.title} href={link.to}>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button
          className="text-md md:text-lg"
          onClick={() => toggleDarkModeIsActive()}
        >
          {!darkModeIsActive && <i className="pi pi-moon" />}
          {darkModeIsActive && <i className="pi pi-sun" />}
        </button>
        <button onClick={openMenu} className="lg:hidden text-lg lg:text-3xl">
          <i className="pi pi-bars " />
        </button>
        <div className="hidden lg:block">
          <slot name="actions"></slot>
        </div>
      </div>
    </header>
  );
}
