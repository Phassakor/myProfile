"use client";

import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    }, 3000); // ⏱️ หน่วง 3 วินาที

    return () => clearTimeout(timeout); // เคลียร์ timeout ถ้า component unmount
  }, []);

  if (!mounted) return null; // ❗️ป้องกัน hydration mismatch

  return (
    <div
      className={`p-4 rounded transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      {children}
      Hello! Current theme: {theme}
    </div>
  );
}
