"use client";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import en from "../locales/en.json";
import th from "../locales/th.json";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en,
  th,
};

export default function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
const { lang, toggleLang } = useLanguage();
  
  const navItems = [
    { name: translations[lang].navbar.home, href: "/me/home" },
    { name: translations[lang].navbar.about, href: "/me/about" },
    { name: translations[lang].navbar.skill, href: "/me/skills" },
    { name: translations[lang].navbar.project, href: "/me/projects" },
    { name: translations[lang].navbar.experience, href: "/me/experience" },
    { name: translations[lang].navbar.contact, href: "/me/contact" },
  ];

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
          {translations[lang].navbar.fullname}
        </p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                pathname === item.href
                ? 'text-blue-500 border-b-2 border-blue-500 neon-text'
                : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <section className="flex gap-2">
            <ThemeToggle />
            <button
              onClick={toggleLang}
              className="px-3 border rounded-[50%] cursor-pointer"
            >
              {lang === "th" ? "EN" : "TH"}
            </button>
          </section>
         
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} /> }
          </button>
          <ThemeToggle />
          <button
            onClick={toggleLang}
            className="px-2 py-0 border rounded cursor-pointer"
          >
            {lang === "th" ? "EN" : "TH"}
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
