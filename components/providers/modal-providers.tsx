"use client";

import { useEffect, useState } from "react";

import { SettingsMddal } from "../modals/settings-command";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsMddal />
    </>
  );
};
