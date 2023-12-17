"use client";

import {
  PropsWithChildren,
  createContext,
  createServerContext,
  useState,
} from "react";

export type ModalContextProps = {
  modal: null | "editSlug" | "editProjects" | "editExperience";
  setModal: (
    modal: null | "editSlug" | "editProjects" | "editExperience"
  ) => void;
  handleOpenModal: (
    modal: "editSlug" | "editProjects" | "editExperience"
  ) => void;
  handleCloseModal: () => void;
};

export const ModalContext = createContext<ModalContextProps>({
  modal: null,
  setModal: () => {},
  handleCloseModal: () => {},
  handleOpenModal: () => {},
});

export function ModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<
    null | "editSlug" | "editProjects" | "editExperience"
  >(null);

  function handleOpenModal(
    modal: "editSlug" | "editProjects" | "editExperience"
  ) {
    setModal(modal);
  }

  function handleCloseModal() {
    setModal(null);
  }
  return (
    <ModalContext.Provider
      value={{ modal, setModal, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
