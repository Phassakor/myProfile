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
    }, 1000); // ⏱️ หน่วง 3 วินาที

    return () => clearTimeout(timeout); // เคลียร์ timeout ถ้า component unmount
  }, []);

  if (!mounted) return (
    <div className="flex items-center justify-center w-full h-screen">
      <Loading />
    </div>
  );

  return (
    <div
      className={`rounded transition-all duration-300 min-h-screen ${
        theme === "dark" ? "DarkMode" : "LightMode"
      }`}
    >
      <Navbar />
      {children}
    </div>
  );
}
