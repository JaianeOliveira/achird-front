import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { Button } from "primereact/button";

interface AuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

export default function AuthButton({ children, ...props }: AuthButtonProps) {
  return (
    <Button
      className="flex items-center gap-2 bg-slate-950 dark:bg-slate-300 dark:text-slate-950 text-slate-200 px-4 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 ease-out duration-500 transition-all mt-4 mb-2"
      {...props}
    >
      <i className="pi pi-github text-xl" />
      <span> {children} </span>
    </Button>
  );
}
