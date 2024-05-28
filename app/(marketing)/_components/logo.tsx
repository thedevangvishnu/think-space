import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden w-[250px] md:flex flex-row items-center gap-x-2">
      <Image
        src="/logo/logo.svg"
        alt="Logo"
        width="40"
        height="40"
        className="dark:hidden"
      />
      <Image
        src="/logo/logo-dark.svg"
        alt="Logo"
        width="40"
        height="40"
        className="hidden dark:flex"
      />
      <p className={cn("font-semibold text-xl", poppins.className)}>
        Think Space
      </p>
    </div>
  );
};
