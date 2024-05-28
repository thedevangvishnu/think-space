"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans Unified. Welcome to{" "}
        <span className="underline">Think Space</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium md:w-[60%] md:text-center">
        Jotion is the connected workspace where better, faster work happens.
      </h3>
      <Button>
        Enter Think Space <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};
