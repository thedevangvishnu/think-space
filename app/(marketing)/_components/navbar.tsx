"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const scrolled = useScrollTop();

  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background top-0 fixed flex items-center w-full p-6 transition-all duration-200",
        scrolled && "border-b shadow-md"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isLoading && !isAuthenticated && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button size="sm">Get TS Free</Button>
            </SignInButton>
          </>
        )}

        {!isLoading && isAuthenticated && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter TS</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};