"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่สร้างด้วย Next.js และ TailwindCSS พร้อม Dark Mode และ Animation.",
    images: ["/images/aw1.png", "/images/aw2.png", "/images/aw3.png", "/images/aw4.png", "/images/aw5.png"],
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    live: "https://yourportfolio.com",
    code: "https://github.com/yourusername/portfolio",
    canViewWebsite: true,
    canViewExample: true,
    canViewCode: true,
  },
  {
    title: "Task Manager App",
    description:
      "แอปจัดการงานด้วย Vue.js และ Firebase แบบเรียลไทม์ พร้อม Drag & Drop UI",
    images: ["/images/fnh1.png","/images/fnh2.png","/images/fnh3.png","/images/fnh4.png","/images/fnh5.png","/images/fnh6.png"],
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    live: "https://yourtaskapp.com",
    code: "https://github.com/yourusername/taskapp",
    canViewWebsite: true,
    canViewExample: true,
    canViewCode: true,
  },
  {
    title: "gg",
    description:
      "แอปจัดการงานด้วย Vue.js และ Firebase แบบเรียลไทม์ พร้อม Drag & Drop UI",
    images: ["/images/ladkrabang1.png","/images/ladkrabang2.png","/images/ladkrabang3.png","/images/ladkrabang4.png","/images/ladkrabang5.png","/images/ladkrabang6.png"],
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    live: "https://yourtaskapp.com",
    code: "https://github.com/yourusername/taskapp",
    canViewWebsite: true,
    canViewExample: true,
    canViewCode: true,
  },
  {
    title: "ererer",
    description:
      "แอปจัดการงานด้วย Vue.js และ Firebase แบบเรียลไทม์ พร้อม Drag & Drop UI",
    images: ["/images/hr1.png","/images/hr2.png","/images/hr3.png","/images/hr4.png","/images/hr5.png","/images/hr6.png"],
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    live: "https://yourtaskapp.com",
    code: "https://github.com/yourusername/taskapp",
    canViewWebsite: true,
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
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewExample = (proj: any) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };

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
              src={proj.images[0]}
              alt={proj.title}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
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
                  <button
                    onClick={() => handleViewExample(proj)}
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> View
                  </button>
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
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </motion.section>
  );
}
