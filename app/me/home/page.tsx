"use client";

import Loading from "@/app/loading/page";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted)
    return (
      <div className="flex items-center justify-center w-full max-w-[1920px] h-[calc(100vh-70px)]">
        <Loading />
      </div>
    );

  return (
    <div className=" text-white">
      <Hero />
    </div>
  );
}
