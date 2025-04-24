"use client";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`${theme === "dark" ? "DarkModesection" : "LightModesection"} shadow-md sticky top-0 z-50"`}>
      <div className="px-20 py-5 mx-auto flex justify-between items-center">
        <p
          className="text-xl font-bold text-[30px]"
        >
          MyPortfolio
        </p>

        <ThemeToggle />
      </div>
    </nav>
  );
}
