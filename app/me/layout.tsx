"use client";

import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Loading from "../loading/page";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return (
    <div className="flex items-center justify-center w-full max-w-[1920px] h-screen">
      <Loading />
    </div>
  );

  return (
    <div
      className={`rounded transition-all duration-300 max-w-[1920px] mx-auto min-h-[cals(100vh-70px)] ${
        theme === "dark" ? "DarkMode" : "LightMode"
      }`}
    >
      <Navbar />
      <p className="mb-[70px]"></p>
      {children}
    </div>
  );
}
