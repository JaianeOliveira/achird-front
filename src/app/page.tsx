"use client"

import { ThemeHandler } from "@/components/ThemeHandler";
import { listUsers } from "@/services/api/userService";
import Image from "next/image";
import Link from "next/link";
import AchirdLogo from "public/logo.svg";
import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const users = await listUsers();
      setUsers(users.data);
    })()
  },[ ])
  return (
    <ThemeHandler theme="achird-dark">
      <div>
        <header className="navbar px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between gap-8">
          <div className="flex gap-2">
            <Image src={AchirdLogo} alt="Logo" height={44} />
            <h1 className="text-xl  font-bold">Achird</h1>
          </div>

          <Link href="/auth/login">
            <button className="btn btn-primary">Acessar minha conta</button>
          </Link>
        </header>

        <section className="px-16 lg:px-32 pt-16 pb-8">
          <h2 className="text-2xl font-semibold">Bem vindo ao Achird!</h2>
          <p>
            Veja o perfil de agumas pessoas que já estão usando a plataforma.{" "}
          </p>
        </section>

        <section className="px-16 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:git-cols-4 gap-8 ">
          {users.map(
            (user: {
              github_id: string;
              name: string;
              bio: string;
              avatar_url: string;
              github_user: string;
              slug: string;
            }) => (
              <Link key={user.github_id} href={`/to/${user.slug}`}>
                <div className="card bg-base-200  shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 w-full h-full">
                  <div className="card-body">
                    <div className="flex gap-4 items-center">
                      <Image
                        className="avatar rounded-full shadow-2xl w-16 aspect-square "
                        src={user.avatar_url}
                        alt="Profile"
                        height={64}
                        width={64}
                      />
                      <div>
                        <h3 className="font-bold">{user.name}</h3>
                        <p className="text-sm">{user.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </section>
      </div>
    </ThemeHandler>
  );
}
