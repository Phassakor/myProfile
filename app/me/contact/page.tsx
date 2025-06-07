"use client";

import { Mail, MapPin, Phone, GitBranch, Linkedin  } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";
import en from "../../../locales/en.json";
import th from "../../../locales/th.json";
import { useLanguage } from "@/contexts/LanguageContext";
const translations = {
  en,
  th,
};

export default function Contact() {
  const { lang } = useLanguage();
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
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
    <section className="pt-10">
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen px-4 py-16 text-center"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl font-bold mb-4"
        >
         {translations[lang].contact.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="mb-10"
        >
         {translations[lang].contact.subtitle} 😊
        </motion.p>

        <div className="max-w-xl mx-auto space-y-6 text-left">
          {[
            {
              icon: <Mail />,
              text: "best20865@gmail.com",
              delay: 2,
            },
            {
              icon: <Phone />,
              text: "+66 961479734",
              delay: 3,
            },
            {
              icon: <MapPin />,
              text: "Bangkok, Thailand",
              delay: 4,
            },
            {
              icon: <GitBranch />,
              text: "github.com/Phassakorn",
              link: "https://github.com/Phassakor/myProfile",
              delay: 5,
            },
             {
              icon: <Linkedin  />,
              text: "linkedin",
              link: "linkedin.com/in/ภาสกร-สุวรรณโท-a4180a343",
              delay: 6,
            },
          ].map(({ icon, text, link, delay }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={delay}
              className="flex items-center gap-4"
            >
              {icon}
              {link ? (
                <Link
                  href={link}
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  {text}
                </Link>
              ) : (
                <span className="">{text}</span>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            custom={7}
            className="mt-8 flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/phassakorn_dev.pdf"
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              {translations[lang].contact.dowloadResume}
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
