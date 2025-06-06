"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่สร้างด้วย Next.js และ TailwindCSS พร้อม Dark Mode และ Animation.",
    image: "/images/test1.jpg",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    live: "https://yourportfolio.com",
    code: "https://github.com/yourusername/portfolio",
    canViewWebsite: true,
    canViewExample: false,
    canViewCode: true,
  },
  {
    title: "Task Manager App",
    description:
      "แอปจัดการงานด้วย Vue.js และ Firebase แบบเรียลไทม์ พร้อม Drag & Drop UI",
    image: "/images/test2.jpg",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    live: "https://yourtaskapp.com",
    code: "https://github.com/yourusername/taskapp",
    canViewWebsite: false,
    canViewExample: true,
    canViewCode: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Projects() {
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
      id="projects"
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
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            custom={i + 1}
            variants={fadeUp}
            className="bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={800}
              height={400}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">
                {proj.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {proj.canViewWebsite && (
                  <Link
                    href={proj.live}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> Website
                  </Link>
                )}
                {proj.canViewExample && (
                  <Link
                    href={proj.live}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> View
                  </Link>
                )}
                {proj.canViewCode && (
                  <Link
                    href={proj.code}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    <FaGithub /> Code
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
