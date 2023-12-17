"use client";
import { useContext, useState } from "react";
import EditSlugModal from "./EditSlugModal";
import { ModalContext } from "@/contexts/ModalContext";

export default function HandleModals() {
  const { handleCloseModal, modal } = useContext(ModalContext);

  return (
    <>
      <EditSlugModal
        title="Editar link"
        visible={modal === "editSlug"}
        onHide={handleCloseModal}
        currentSlug={"jaianeoliveira"}
      ></EditSlugModal>
    </>
  );
}
