import React from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-2 md:p-6 bg-home-bg text-home-text z-50">
      <div className="flex w-full items-center max-w-[1300px] mx-auto">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-transparent text-washed-purple-500"
          >
            Privacy Policy
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-transparent text-washed-purple-500"
          >
            Terms & Condition
          </Button>
        </div>
      </div>
    </footer>
  );
};
