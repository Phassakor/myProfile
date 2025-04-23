"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
//   const [ theme, setTheme ] = useState<string>("light");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 3000); // ⏱️ หน่วง 3 วินาที

    return () => clearTimeout(timeout); // เคลียร์ timeout ถ้า component unmount
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Moon className="xl:w-[30px] w-[20px] xl:h-[30px] h-[20px]" /> : <Sun className="xl:w-[30px] w-[20px] xl:h-[30px] h-[20px]" />}
    </button>
  );
}
