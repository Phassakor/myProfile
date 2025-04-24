"use client";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/me" },
  { name: "About", href: "/me/myprofile" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed w-full mx-auto max-w-[1920px] top-0 z-50 h-[70px] shadow-md ${
        theme === "dark" ? "DarkModesection" : "LightModesection"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <p
          className="text-xl font-bold"
        >
          YourName
        </p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
                 <ThemeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} /> }
            <ThemeToggle />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
