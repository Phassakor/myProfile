'use client';

import "../app/backgroundprofile.css";

import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

export default function Hero() {
    const { theme } = useTheme();
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-8 ${theme === "dark" ? "DarkMode" : "LightMode"}`}
    >
      <div className={`card max-w-3xl text-center p-10 rounded-lg transition-all duration-500 ease-in-out h-[240px] hover:h-[400px] z-10 ${theme === "dark" ? "shadow-lg" : "shadow-lg"}`}>
        <motion.h1
          className="sm:text-2xl md:text-4xl xl:text-5xl text-xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          สวัสดีครับ ผมชื่อ BesT
        </motion.h1>

        <motion.h2
          className="md:text-xl xl:text-2xl text-[16px] font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Frontend Developer | coding Enthusiast
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ผมรักการสร้างเว็บไซต์ที่เร็ว สวย และใช้งานง่าย ด้วยประสบการณ์ใน Framework ที่ใช้ และ UX ที่ดี <br />
          กำลังพัฒนาทักษะอย่างต่อเนื่องเพื่อก้าวไปสู่การเป็น Full Stack Developer ในอนาคต
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="bgHeroGIF text-[#F9FAFB] py-4 px-8 rounded-xl shadow-xl cursor-pointer">Dowload Resume</p>
        </motion.div>

        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </div>


      <div className="lines z-0">
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
