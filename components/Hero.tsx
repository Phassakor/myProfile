'use client';

import "../app/backgroundprofile.css";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from "next-themes";

export default function Hero() {
    const { theme } = useTheme();
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-8 ${theme === "dark" ? "DarkMode" : "LightMode"}`}
    >
      <div className={`max-w-3xl text-center p-5 rounded-lg ${theme === "dark" ? "shadow-lg" : "shadow-lg"}`}>
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          สวัสดีครับ ผมชื่อ [Your Name]
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Frontend Developer | React / Next.js Enthusiast
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ผมรักการสร้างเว็บไซต์ที่เร็ว สวย และใช้งานง่าย ด้วยประสบการณ์ใน Next.js, Tailwind และ UX ที่ดี
        </motion.p>

      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
      
    </section>
  );
}
