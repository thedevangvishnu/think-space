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
    <div className="w-[250px] flex flex-row items-center gap-x-2">
      <Image
        src="/logo/logo-dark.svg"
        alt="Logo"
        width="25"
        height="25"
        className=""
      />
      <p
        className={cn(
          "font-semibold text-lg hidden md:block",
          poppins.className
        )}
      >
        Think Space
      </p>
    </div>
  );
};
