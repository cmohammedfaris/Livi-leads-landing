"use client";

import React, { useEffect } from "react";
import { usePreRegistrationStore } from "@/store/preRegistrationStore";
import PreRegistrationChatModal from "./PreRegistrationChatModal";

export default function GlobalPreRegistrationModal() {
  const { isOpen, openModal, closeModal } = usePreRegistrationStore();

  useEffect(() => {
    const handleOpen = () => openModal();
    window.addEventListener("open-pre-register", handleOpen);
    return () => window.removeEventListener("open-pre-register", handleOpen);
  }, [openModal]);

  return (
    <PreRegistrationChatModal
      isOpen={isOpen}
      onClose={closeModal}
    />
  );
}
