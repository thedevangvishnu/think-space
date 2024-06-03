"use client";

import { useEffect, useState } from "react";

import { SettingsMddal } from "../modals/settings-command";
import { CoverImageModal } from "../modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsMddal />
      <CoverImageModal />
    </>
  );
};
