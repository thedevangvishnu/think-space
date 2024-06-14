"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./logo";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
  const scrolled = useScrollTop();

  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <header
      className={cn(
        "z-50 bg-background top-0 fixed w-full px-6 py-4 md:py-5 transition-all duration-200",
        scrolled && "border-b shadow-md"
      )}
    >
      <nav className="w-full h-full flex items-center justify-between relative max-w-[1300px] mx-auto">
        <Logo />
        <div className="flex items-center gap-x-4">
          {isLoading && <Spinner />}
          {!isLoading && !isAuthenticated && (
            <SignInButton mode="modal">
              <div className="w-fit bg-foreground p-[2px] rounded-full bg-gradient-to-r from-primary to-washed-blue-200">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-home-text rounded-full h-8 px-4 text-sm bg-home-bg hover:bg-home-bg hover:text-white transition-colors duration-200"
                >
                  Login
                </Button>
              </div>
            </SignInButton>
          )}

          {!isLoading && isAuthenticated && <UserButton afterSignOutUrl="/" />}
        </div>
      </nav>
    </header>
  );
};
