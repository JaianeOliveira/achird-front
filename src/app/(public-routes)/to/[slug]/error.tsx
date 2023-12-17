"use client";

import Image from "next/image";
import { useEffect } from "react";
import AchirdLogo from "public/logo.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; status: number };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <header className="navbar px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between gap-8">
        <div className="flex gap-2">
          <Image src={AchirdLogo} alt="Logo" height={44} />
          <h1 className="text-xl  font-bold">Achird</h1>
        </div>
      </header>
      <div className="text-center px-8 py-16">
        <p className="text-xl font-bold">
          {error.status === 404
            ? "Ops! Não encontramos este perfil."
            : "Ops! Algo deu errado."}
        </p>
        <p className="text-sm font-semibold">
          {error.status === 404 &&
            "Que tal tentar novamente com outro usuário?"}
        </p>
        {reset && (
          <button className="btn btn-primary mt-4" onClick={reset}>
            Tentar novamente
          </button>
        )}
      </div>
    </div>
  );
}
