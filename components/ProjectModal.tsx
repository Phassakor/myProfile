"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    images: string[];
  } | null;
};

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (project) setCurrentIndex(0);
  }, [project]);

  if (!project) return null;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white dark:bg-zinc-900 rounded-xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute z-20 top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>

            <div className="relative mb-4">
              <Image
                src={project.images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-[250px] sm:h-[350px]"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 dark:bg-black/40 p-2 rounded-full"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 dark:bg-black/40 p-2 rounded-full"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* project details */}
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {project.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
