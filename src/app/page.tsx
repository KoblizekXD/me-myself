'use client';

import { Window } from "@/components/window";
import { useState } from "react";

export default function Home() {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <main className="bg-[#1E1E2E] flex flex-col justify-center items-center w-screen h-screen">
      <Window />
    </main>
  );
}
