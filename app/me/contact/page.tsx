"use client";

import { Mail, MapPin, Phone, LineChart, } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

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
              icon: <Mail className="" />,
              text: "you@example.com",
              delay: 2,
            },
            {
              icon: <Phone className="" />,
              text: "+66 812345678",
              delay: 3,
            },
            {
              icon: <MapPin className="" />,
              text: "Bangkok, Thailand",
              delay: 4,
            },
            {
              icon: <LineChart className="" />,
              text: "github.com/yourusername",
              link: "https://github.com/yourusername",
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
