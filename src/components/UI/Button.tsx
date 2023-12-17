import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Button as PrimeButton } from "primereact/button";
export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  customType?: "primary" | "danger" | "text" | "text-danger";
}

export default function Button({
  children,
  customType = "primary",
  ...props
}: ButtonProps) {
  function getClassName() {
    switch (customType) {
      case "primary":
        return "bg-emerald-500 dark:bg-emerald-500/70 dark:text-slate-950 px-2 md:px-4 py-1 text-sm rounded-md font-semibold min-w-max flex items-center justify-center";
      case "text":
        return "text-slate-950 dark:text-slate-200 text-sm rounded-md font-semibold min-w-max flex items-center justify-center";
      case "danger":
        return "bg-red-500 dark:bg-red-500/70 dark:text-slate-950 px-2 md:px-4 py-1 text-sm rounded-md font-semibold min-w-max flex items-center justify-center";
      case "text-danger":
        return "text-red-500 text-sm font-semibold cursor-pointer hover:text-red-600 transition-colors";
      default:
        return "";
    }
  }
  return (
    <PrimeButton
      {...props}
      className={`${getClassName()} disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {children}
    </PrimeButton>
  );
}
