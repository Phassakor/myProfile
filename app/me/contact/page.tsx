"use client";

import { Mail, MapPin, Phone, GitBranch, } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "@/app/loading/page";
import { useEffect, useState } from "react";

export default function Contact() {
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
          My Contact
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="mb-10"
        >
          ถ้าคุณสนใจร่วมงาน หรืออยากคุยเรื่องโปรเจกต์
          สามารถติดต่อผมได้ตามช่องทางด้านล่างนี้ครับ 😊
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
              href="/resume.pdf"
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Dowload Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
