import Image from "next/image";
import React from "react";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/images/employer.png"
            alt="Hero"
            fill
            className="object-contain dark:hidden"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src="/images/employer-dark.png"
            alt="Hero"
            fill
            className="object-contain hidden dark:block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="hidden md:block relative h-[400px] w-[400px]">
          <Image
            src="/images/manager.png"
            alt="Manager"
            fill
            className="object-contain dark:hidden"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src="/images/manager-dark.png"
            alt="Manager"
            fill
            className="object-contain hidden dark:block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};
