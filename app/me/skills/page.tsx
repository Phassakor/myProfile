'use client';

import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaNodeJs 
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiDotnet, 
  SiGo,
  SiMysql,
  SiBootstrap,
  SiNuxtdotjs,
  SiAngular 
} from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'React', icon: <FaReact className="text-sky-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
      { name: 'Nuxt.js', icon: <SiNuxtdotjs className="text-emerald-500" /> },
      { name: 'Angular', icon: <SiAngular className="text-red-600" /> }
    ],
  },
  {
    title: 'Backend (Studying)',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: '.NET', icon: <SiDotnet className="text-purple-700" /> },
      { name: 'Golang', icon: <SiGo className="text-sky-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    title: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Sass', icon: <SiSass className="text-pink-400" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> }, // ✅ เพิ่มตรงนี้
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
      { name: 'Figma', icon: <FaFigma className="text-purple-500" /> }
    ],
  },
];


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);
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
      id="skills"
      className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-zinc-900 text-zinc-900 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        variants={itemAnim}
      >
        Skills & Tools
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {skills.map((section, i) => (
          <motion.div
            key={i}
            className="space-y-6"
            variants={itemAnim}
          >
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <motion.div
              className="grid grid-cols-3 md:grid-cols-5 gap-6"
              variants={container}
            >
              {section.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  variants={itemAnim}
                  className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-xl shadow hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
