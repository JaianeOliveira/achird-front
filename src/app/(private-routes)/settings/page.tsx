import { Envelope } from "@/components/icons/Envelope";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="flex flex-col px-8 md:px-16 lg:px-32 py-8">
      <h2 className="text-xl font-bold mb-4">
        Configure sua página{" "}
        <span className="italic text-sm font-normal">(Em breve)</span>
      </h2>
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
      <section>
        <h2 className="text-lg font-bold mb-2">Projeto sendo exibidos</h2>
        <ul className="flex gap-2 flex-wrap">
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
          <li className="badge badge-neutral">Solas</li>
        </ul>
      </section>
    </div>
  );
}
