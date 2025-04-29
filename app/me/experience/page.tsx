'use client';

import { motion } from 'framer-motion';
import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";

const experiences = [
  {
    company: 'Freelance',
    role: 'Frontend Developer',
    date: 'Jan 2024 – Present',
    description:
      'Developed responsive websites using React, Next.js, and Tailwind. Collaborated with clients on UI/UX, and deployed with Vercel.',
  },
  {
    company: 'Personal Project',
    role: 'Fullstack Dev (Learning)',
    date: '2023 – Present',
    description:
      'Built fullstack projects with Node.js, .NET, and MySQL. Focused on REST APIs and Authentication.',
  },
  {
    company: 'University',
    role: 'IT Student',
    date: '2021 – Present',
    description:
      'Studying web development, software engineering, and contributing to open-source class projects.',
  },
];

export default function Experience() {
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
    <section
      id="experience"
      className="min-h-screen px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="border-l-4 border-blue-500 pl-6 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-3 top-1.5 w-3 h-3 bg-blue-500 rounded-full" />
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exp.company} — {exp.date}
            </p>
            <p className="mt-2 text-base">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
