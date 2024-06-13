"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import React from "react";

export const Auth = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-20 flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <SignInButton>
        <div className="w-fit bg-foreground p-[2px] mt-4 rounded-full bg-gradient-to-r from-primary to-washed-blue-200 z-20">
          <Button
            variant="secondary"
            className=" text-home-text rounded-full p-6 text-base md:text-lg bg-home-bg hover:bg-home-bg hover:text-white transition-colors duration-200"
          >
            Get Think Space Free
          </Button>
        </div>
      </SignInButton>
    );
  }

  return (
    <div className="w-fit bg-foreground p-[2px] mt-4 rounded-full bg-gradient-to-r from-primary to-washed-blue-200 z-20">
      <Button
        variant="secondary"
        className=" text-home-text rounded-full p-6 text-base md:text-lg bg-home-bg hover:bg-home-bg hover:text-white transition-colors duration-200"
      >
        <Link href="/documents">Enter Think Space</Link>
      </Button>
    </div>
  );
};
