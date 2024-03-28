"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { images } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const centerIndex = Math.floor(images.length / 2);

  const [initialScale, setInitialScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) {
        setInitialScale(0.4);
      } else if (window.innerWidth < 768) {
        setInitialScale(0.7);
      } else {
        setInitialScale(0.8);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem]text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "keyframes", delay: 0.3 }}
        className="flex items-center justify-center gap-1 mb-7 sm:gap-4 md:gap-9 lg:gap-12 "
      >
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 1, scale: initialScale }}
            animate={{
              x: index === centerIndex ? 0 : index < centerIndex ? -20 : 20,
              opacity: index === centerIndex ? 1 : 0,
              scale: index === centerIndex ? 1.4 : initialScale,
              // scale: 1.4,
            }}
            transition={{
              x: {
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 1,
              },
              opacity: { delay: 1, duration: 3 },
              scale: index === centerIndex ? { delay: 2, duration: 1 } : 0,
              // scale: { delay: 2, duration: 1 },
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <img
              src={image}
              alt={`Image ${index}`}
              // className="object-cover w-24 h-24 rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24"
              // Responsive image sizes
              className={` ${
                index === centerIndex
                  ? "object-cover w-19 h-19 rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 border-[0.15rem] border-white"
                  : "object-cover w-22 h-22 sm:w-20 sm:h-20 md:w-24 md:h-24"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>

      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center">
        <span>
          <TypeAnimation
            sequence={[
              "",
              2100,
              "Hello, I'm Mani Sreekar.",
              1200,
              "I am Software Developer.",
              1200,
              "I enjoy building applications.",
              1200,
            ]}
            wrapper="span"
            speed={30}
            className="font-bold text-6x1"
            repeat={Infinity}
          />
        </span>
      </h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-10"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          href="/Resume_Mani_SDE.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/mani-sreekar-p/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/manisreekar"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
