import Image from "next/image";
import Logo from "public/logo.png";

export default function AuthHeader() {
  return (
    <div className="flex flex-col items-center">
      <Image src={Logo} width={64} height={64} alt="Achird logo" />
      <h1 className="text-center text-3xl font-bold text-slate-900 dark:text-slate-300/80 drop-shadow-lg mt-2">
        Achird
      </h1>
      <p className="text-center text-slate-800/60 dark:text-slate-300/70 text-sm mb-4 drop-shadow-lg">
        Gere seu site portfólio de forma fácil!
      </p>
    </div>
  );
}
