import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <p className="text-4xl text-center p-4 font-bold">Think Space</p>
      <Button>New Note</Button>
    </div>
  );
}
