"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref, inView } = useSectionInView("About", 0.5);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        viewport={{
          once: true,
        }}
      >
        <motion.p variants={itemVariants} className="mb-3">
          As a determined software development engineer, I possess a proven
          proficiency in problem-solving and an unwavering passion for
          technology. With a{" "}
          <span className="font-medium">
            Master&apos;s in Computer Science from Arizona State University{" "}
          </span>{" "}
          and hands-on experience in industry-leading tools and technologies,
          including <span className="font-medium">MERN Stack, </span> I am
          equipped to tackle diverse challenges in software development.
        </motion.p>
        <motion.p variants={itemVariants} className="mb-3">
          <span className="italic">
            From designing efficient strategies to mitigate fraud risks to
            developing dynamic projects, I thrive in different environments.
          </span>
        </motion.p>
        <motion.p variants={itemVariants} className="mb-3">
          Proficient in the <span className="font-medium">SDLC</span>, from
          requirements analysis to deployment and maintenance. Complemented by a
          knack for continuous learning, I am eager to contribute my skills to
          come up with impactful solutions in software engineering roles.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
