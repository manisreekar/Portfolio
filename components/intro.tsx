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
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const centerIndex = Math.floor(images.length / 2);
  const blobVariants = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%", // Initial state (0%)
        "30% 60% 70% 40% / 50% 60% 30% 60%", // Mid state (50%)
        "60% 40% 30% 70% / 60% 30% 70% 40%", // Final state, back to initial (100%)
      ],
      transition: {
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.5, 1], // Corresponds to 0%, 50%, and 100% of the animation duration
        repeat: Infinity,
      },
    },
  };

  function BlobComponent() {
    return (
      <motion.div
        className="w-[175px] h-[175px] m-[20px] bg-cover bg-center sm:w-[300px] sm:h-[300px]"
        variants={blobVariants}
        animate="animate"
        style={{
          backgroundImage: "url('/profile_photo-2.jpg')",
          boxShadow: "0 5px 5px 5px rgba(13, 110, 253, 0.2)",
        }}
      >
        {/* <img src="./redux.png" /> */}
      </motion.div>
    );
  }

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
      className="flex justify-center items-center mb-28 max-w-[50rem]text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "keyframes", delay: 0.3 }}
        className="absolute z-10 flex items-center justify-center gap-1 mb-7 sm:gap-4 md:gap-9 lg:gap-12 "
      >
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 1, scale: initialScale }}
            animate={{
              x: index === centerIndex ? 0 : index < centerIndex ? -20 : 20,
              opacity: 0,
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
            <Image
              src={image}
              alt={`Image ${index}`}
              width="192"
              height="192"
              className={`object-cover sm:w-20 sm:h-20 md:w-24 md:h-24  ${
                index === centerIndex
                  ? " w-19 h-19 rounded-full border-[0.15rem] border-white"
                  : " w-22 h-22 "
              }`}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "keyframes", delay: 3.5 }}
        className="relative flex flex-col items-center justify-center gap-2 sm:flex-row"
      >
        <BlobComponent />
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center">
              <span>
                <TypeAnimation
                  sequence={[
                    "",
                    2100,
                    "Hello, I'm Mani Sreekar.",
                    1000,
                    "I am a Software Developer.",
                    1200,
                    "I love building applications!",
                    1000,
                  ]}
                  wrapper="span"
                  speed={35}
                  className="font-bold text-6x1"
                  repeat={Infinity}
                />
              </span>
            </h1>
          </div>

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
              className="z-10 flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-10"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
            </Link>

            <a
              className="z-10 flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
              href="/Resume_SDE.pdf"
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
          <div className="flex flex-row gap-4 mt-10 ">
            <h1 className="font-mono">Built with</h1>
            <Image src="/logo512.png" height="30" width="30" alt="icon" />
            <Image src="/nextjs_icon.png" height="30" width="30" alt="icon" />
            <Image src="/tailwind.png" height="30" width="30" alt="icon" />
            <Image src="/framer-motion.png" height="30" width="30" alt="icon" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
