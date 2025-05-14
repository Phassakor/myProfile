"use client";

import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import en from "../../../locales/en.json";
import th from "../../../locales/th.json";
import { useLanguage } from "@/contexts/LanguageContext";
const translations = {
  en,
  th,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();

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
    <motion.section
      id="about"
      className="min-h-screen px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        custom={0}
        variants={fadeUp}
        className="text-4xl font-bold text-center mb-12"
      >
        {translations[lang].about.title}
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div custom={1} variants={fadeUp} className="flex-shrink-0">
        <Image
          src="/images/devImg.png"
          alt="MyDev"
          width={250}
          height={250}
          className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
          priority
        />
        </motion.div>

        {/* About Content */}
        <motion.div
          custom={2}
          variants={fadeUp}
          className="space-y-6 text-left"
        >
          <h3 className="text-2xl font-semibold">
           {translations[lang].about.subtitle} 👨‍💻
          </h3>
          <p className="">
            {translations[lang].about.description1}
          </p>
          <p className="">
            {translations[lang].about.description2}
          </p>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div custom={3} variants={fadeUp} className="mt-16 text-center">
        <h4 className="text-xl font-semibold mb-6"> {translations[lang].about.tool}</h4>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-items-center text-4xl text-blue-600 dark:text-blue-400">
          <FaReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiTypescript title="TypeScript" />
          <SiJavascript title="JavaScript" />
          <FaVuejs title="Vue.js" />
          <SiTailwindcss title="TailwindCSS" />
          <SiFigma title="Figma" />
          <FaGithub title="GitHub" />
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
        </div>
      </motion.div>
    </motion.section>
  );
}
