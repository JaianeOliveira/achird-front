"use client";
import { useTheme } from "next-themes";
import { PropsWithChildren, createContext, useState } from "react";

export type ConfigContextProps = {
  darkModeIsActive: boolean;
  toggleDarkModeIsActive: (to?: boolean) => void;
  toggleSideBarIsOpen: (to?: boolean) => void;
  sideBarIsOpen: boolean;
};

export const ConfigContext = createContext<ConfigContextProps>({
  darkModeIsActive: false,
  toggleDarkModeIsActive: () => {},
  toggleSideBarIsOpen: () => {},
  sideBarIsOpen: false,
});

export function ConfigProvider(props: PropsWithChildren) {
  const { theme, setTheme } = useTheme();
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  function toggleDarkModeIsActive(to?: boolean) {
    setTheme(
      to
        ? "achird-dark"
        : theme === "achird-dark"
        ? "achird-light"
        : "achird-dark"
    );
  }

  function toggleSideBarIsOpen(to?: boolean) {
    setSideBarIsOpen((prevState) => to ?? !prevState);
  }

  return (
    <ConfigContext.Provider
      value={{
        darkModeIsActive: theme === "achird-dark",
        toggleDarkModeIsActive,
        toggleSideBarIsOpen,
        sideBarIsOpen,
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
}
