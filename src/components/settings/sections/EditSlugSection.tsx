"use client";
import { ModalContext } from "@/contexts/ModalContext";
import Link from "next/link";
import { Button } from "primereact/button";
import { useContext } from "react";

export type EditSlugSectionProps = {
  currentSlug: string;
};

export default function EditSlugSection({ currentSlug }: EditSlugSectionProps) {
  const { handleOpenModal } = useContext(ModalContext);
  const userPath = window && `${window.location.origin}/to/${currentSlug}`;

  return (
    <section>
      <div className="text-sm inline-flex flex-wrap gap-2">
        <p>
          Sua página pode ser acessada em{" "}
          <Link
            href={userPath}
            target="_blank"
            className="font-medium underline underline-offset-2"
          >
            {userPath}
          </Link>
        </p>
        <Button
          tooltip="Copiar"
          tooltipOptions={{
            position: "mouse",
            className:
              "bg-slate-300 dark:bg-slate-900 px-2 rounded-md text-sm shadow-md",
          }}
          className="hover:scale-110 transition-all"
          icon="pi pi-copy"
        ></Button>
        <Button
          onClick={() => handleOpenModal("editSlug")}
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
    </section>
  );
}
