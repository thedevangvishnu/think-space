import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  title?: string;
  message: string;
  src?: string;
}

export const TestimonialCard = ({
  name,
  title,
  message,
  src,
}: TestimonialCardProps) => {
  return (
    <Card className="w-[300px] md:w-[450px] bg-gradient-to-b from-brand-primaryPurple/20 to-brand-primaryPurple/50 border-washed-purple-800 relative">
      <CardHeader className="flex flex-row items-start gap-x-4 relative space-y-0">
        <Avatar className="w-[40px] h-[40px]">
          <AvatarImage src={src} />
        </Avatar>
        <span className="flex flex-col justify-start items-start">
          <CardTitle className="text-base md:text-lg mt-0">{name}</CardTitle>
          <CardDescription className="text-washed-blue-300 text-[10px] md:text-xs line-clamp-1">
            {title}
          </CardDescription>
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-home-text text-sm line-clamp-4 md:line-clamp-none">
          {message}
        </p>
      </CardContent>
    </Card>
  );
};
