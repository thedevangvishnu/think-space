"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-6 md:space-y-8 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans Unified. Welcome to{" "}
        <span className="underline">Think Space</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium md:w-[60%] md:text-center">
        Jotion is the connected workspace where better, faster work happens.
      </h3>
      <div className="h-12 flex items-center justify-center">
        {isLoading && <Spinner />}
        {!isLoading && !isAuthenticated && (
          <>
            <SignInButton>
              <Button>Login</Button>
            </SignInButton>
          </>
        )}
        {!isLoading && isAuthenticated && (
          <Button asChild className="h-full">
            <Link href="/documents">
              Enter Think Space <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
