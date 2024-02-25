"use client";

import { Envelope } from "@/components/icons/Envelope";
import { useClipboard } from "@/hooks/useClipboard";
import Image from "next/image";
import { FiCopy, FiHelpCircle } from "react-icons/fi";
import { toast } from "sonner";

export default function SettingsPage() {
  const { copy } = useClipboard();
  return (
    <div className="flex flex-col px-8 md:px-16 lg:px-32 py-8">
      <h2 className="text-xl font-bold mb-4">Personalize sua página</h2>
      <section className="flex items-center gap-2 mb-8">
        <p className="text-sm">
          Sua url é:{" "}
          <a
            className="link link-hover link-primary italic"
            href="https://achird.jaianeoliveira.dev"
            target="_blanks"
          >
            https://achird.jaianeoliveira.dev
          </a>
        </p>
        <div className="tooltip" data-tip="Copiar link">
          <button
            className="btn btn-circle btn-sm"
            onClick={() => {
              copy("https://achird.jaianeoliveira.dev");
              toast.success("Link copiado", { duration: 1000 });
            }}
          >
            <FiCopy />
          </button>
        </div>
      </section>
      <section className="mb-8">
        <div className="p-4 flex flex-col items-center md:items-start gap-4 md:flex-row bg-base-200 shadow-inner rounded-xl w-full">
          <Image
            src="https://github.com/jaianeoliveira.png"
            alt="Jaiane Oliveira"
            className="rounded-full h-32 shadow-xl"
            height={128}
            width={128}
          />
          <div className="flex flex-col items-center md:items-start mt-4">
            <h2 className="font-bold text-xl">Jaiane Oliveira</h2>
            <p className="text-sm">Fullstack Developer</p>

            <div className="divider invisible md:visible divider-start m-0 w-12"></div>
            <div className="flex gap-2 flex-wrap items-center justify-center md:justify-start md:items-start">
              <p className="underline underline-offset-2 text-sm font-medium">
                Jaiane Oliveira
              </p>
              <p className="underline underline-offset-2 text-sm font-medium">
                jaianeoliveira.dev@gmail.com
              </p>
            </div>
            <div className="divider invisible md:visible divider-start m-0 w-12"></div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold">Redes sociais</h3>
              <ul className="flex gap-2 flex-wrap items-center justify-center md:items-start md:justify-start">
                <li className="">
                  <a
                    href="#"
                    className="font-medium underline underline-offset-2 text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium underline underline-offset-2 text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium underline underline-offset-2 text-sm"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">
          Projeto sendo exibidos{" "}
          <div className="tooltip tooltip-info" data-tip="Como configurar">
            <button
              className="btn btn-ghost btn-circle btn-sm"
              onClick={() => document.getElementById("my_modal_1")?.showModal()}
            >
              <FiHelpCircle />
            </button>
          </div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </h2>
        <ul className="flex gap-2 flex-wrap">
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Experiências profissionais</h2>
        <p className="text-sm italic opacity-75">Em breve</p>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Configurações</h2>
        <form className="flex gap-2 items-center">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Escolha o tema da sua página
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <button className="btn btn-error btn-outline ">Cancelar</button>
          <button type="submit" className="btn btn-primary ">
            Salvar
          </button>
        </form>

        <div className="form-control w-64 mt-2">
          <label className="cursor-pointer label">
            <span className="label-text">Página visível ao público</span>
            <input type="checkbox" className="toggle toggle-primary" checked />
          </label>
        </div>
      </section>
    </div>
  );
}
