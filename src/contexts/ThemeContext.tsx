"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

export function ThemeProvider(props: PropsWithChildren) {
  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{props.children}</>;
  }

  return (
    <NextThemeProvider enableSystem={true} attribute="data-theme" >
      {props.children}
    </NextThemeProvider>
  );
}
