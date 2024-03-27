"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
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

      <p className="mb-3">
        As a determined software development engineer, I possess a proven
        proficiency in problem-solving and an unwavering passion for technology.
        With a{" "}
        <span className="font-medium">
          Master's in Computer Science from Arizona State University{" "}
        </span>{" "}
        and hands-on experience in industry-leading tools and technologies,
        including <span className="font-medium">MERN Stack, </span> I am
        equipped to tackle diverse challenges in software development.
      </p>
      <p className="mb-3">
        <span className="italic">
          From designing efficient strategies to mitigate fraud risks to
          developing dynamic projects, I thrive in different environments.
        </span>
      </p>
      <p className="mb-3">
        Proficient in the <span className="font-medium">SDLC</span>, from
        requirements analysis to deployment and maintenance. Complemented by a
        knack for continuous learning, I am eager to contribute my skills to
        come up with impactful solutions in software engineering roles.
      </p>
    </motion.section>
  );
};

export default About;
