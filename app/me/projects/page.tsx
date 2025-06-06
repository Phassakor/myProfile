"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import en from "../../../locales/en.json";
import th from "../../../locales/th.json";
import { useLanguage } from "@/contexts/LanguageContext";
const translations = {
  en,
  th,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};
interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  live: string;
  code: string;
  canViewWebsite: boolean;
  canViewExample: boolean;
  canViewCode: boolean;
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project  | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { lang } = useLanguage();
  const projects = [
    {
      title: "Asset World Webapp",
      description: translations[lang].project.descriptionCard1,
      images: [
        "/images/aw1.png",
        "/images/aw2.png",
        "/images/aw3.png",
        "/images/aw4.png",
        "/images/aw5.png",
      ],
      tech: ["Nuxt3.js", "TailwindCSS"],
      live: "https://aw.asset-world.com/home",
      code: "",
      canViewWebsite: true,
      canViewExample: true,
      canViewCode: false,
    },
    {
      title: "Fn-hospita Webapp",
      description: translations[lang].project.descriptionCard2,
      images: [
        "/images/fnh1.png",
        "/images/fnh2.png",
        "/images/fnh3.png",
        "/images/fnh4.png",
        "/images/fnh5.png",
        "/images/fnh6.png",
      ],
      tech: ["Nuxt2.js", "TailwindCSS"],
      live: "https://www.fn-hospital.com/",
      code: "",
      canViewWebsite: true,
      canViewExample: true,
      canViewCode: false,
    },
    {
      title: "Ladkrabang Profile Webapp",
      description: translations[lang].project.descriptionCard3,
      images: [
        "/images/ladkrabang1.png",
        "/images/ladkrabang2.png",
        "/images/ladkrabang3.png",
        "/images/ladkrabang4.png",
        "/images/ladkrabang5.png",
        "/images/ladkrabang6.png",
      ],
      tech: ["Vue.js", "TailwindCSS"],
      live: "https://ladkrabang.metro.police.go.th/",
      code: "",
      canViewWebsite: true,
      canViewExample: true,
      canViewCode: false,
    },
    {
      title: "Smart HR Webapp",
      description: translations[lang].project.descriptionCard4,
      images: [
        "/images/hr1.png",
        "/images/hr2.png",
        "/images/hr3.png",
        "/images/hr4.png",
        "/images/hr5.png",
        "/images/hr6.png",
      ],
      tech: ["Nuxt3.js", "Firebase", "TailwindCSS", "Developing"],
      live: "http://admin.ai-smarthr.com/smartHR",
      code: "",
      canViewWebsite: true,
      canViewExample: true,
      canViewCode: false,
    },
    {
      title: "Hero App",
      description: translations[lang].project.descriptionCard5,
      images: [
        "/images/hero1.png",
        "/images/hero2.png",
        "/images/hero3.png",
        "/images/hero4.png",
        "/images/hero5.png",
      ],
      tech: ["Vue.js", "Firebase", "TailwindCSS", "Developing"],
      live: "",
      code: "",
      canViewWebsite: false,
      canViewExample: true,
      canViewCode: false,
    },
    {
      title: "Cancer API",
      description: translations[lang].project.descriptionCard6,
      images: ["/images/apicancer1.png"],
      tech: [".net", "C#", "Studying"],
      live: "http://119.59.118.117/cancerAPI/swagger/index.html",
      code: "https://github.com/Phassakor/cancer-API",
      canViewWebsite: true,
      canViewExample: false,
      canViewCode: true,
    },
    {
      title: "FMone API",
      description: translations[lang].project.descriptionCard7,
      images: ["/images/apifmone1.png"],
      tech: [".net", "C#", "Studying"],
      live: "http://119.59.118.117/fmoneapi/swagger/index.html",
      code: "https://github.com/Phassakor/FMoneAPI",
      canViewWebsite: true,
      canViewExample: false,
      canViewCode: true,
    },
    {
      title: "Lovely Pets API",
      description: translations[lang].project.descriptionCard8,
      images: ["/images/apipet1.png"],
      tech: ["GO", "golang", "Studying"],
      live: "",
      code: "https://github.com/Phassakor/lovelypet",
      canViewWebsite: false,
      canViewExample: false,
      canViewCode: true,
    },
  ];

  const handleViewExample = (proj: Project ) => {
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
        {translations[lang].project.title}
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            custom={i + 1}
            variants={fadeUp}
            className="bg-gray-100 dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
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
                    <FaExternalLinkAlt /> {translations[lang].project.website}
                  </Link>
                )}
                {proj.canViewExample && (
                  <button
                    onClick={() => handleViewExample(proj)}
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <FaEye /> {translations[lang].project.view}
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
