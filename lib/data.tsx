import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { RiReactjsFill } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import mernimage from "@/public/mernimage.jpeg";
import nextjsimage from "@/public/nextjsimage.jpg";
import springbootimage from "@/public/springbootimage.png";

export const images = [
  "/logo512.png",
  "/javascript.png",
  "/profile_photo-2.jpg",
  "/nodejs.png",
  "/springboot.png",
];
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: (
      <div className="m-0 font-semibold capitalize">
        CVR College of Engineering
        <br />
        Bachelor&apos;s in Computer Science
      </div>
    ),
    location: "Hyderabad, India",
    description: (
      <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {" "}
        <div className="font-semibold">CGPA : 9.55/10</div>
        <span className="font-semibold">Main Courses:</span> Design and
        Algorithm Analysis, Operating Systems, Data Structures, Web
        Technologies, Software Engineering, DBMS
      </div>
    ),
    icon: <LuGraduationCap />,
    date: "Aug 2017 - March 2021",
  },
  {
    title: (
      <div className="m-0 font-semibold capitalize">
        Synchrony Financial
        <br />
        Software Analytics Intern
      </div>
    ),
    location: "Hyderabad, India",
    description: (
      <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        - Created Tableau dashboards for ticket management and improved SQL data
        handling.
        <br />
        - Enhanced SQL methods to boost efficiency by 25%.
        <br />
        - Developeda MERN Stack website, increasing productivity by 15%.
        <br />- Integrated dashboards for better filtration and accuracy,
        raising ticket resolution by 34%.
      </div>
    ),
    icon: <RiReactjsFill />,
    date: "Oct 2020 - May 2021",
  },
  {
    title: (
      <div className="m-0 font-semibold capitalize">
        Synchrony Financial
        <br />
        Senior Data Analyst
      </div>
    ),
    location: "Hyderabad, India",
    description: (
      <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        - Implemented Decision Trees Algorithms to reduce true name fraud by
        20%, preventing 50 incidents per client.
        <br /> - Cut customer queuing by 9% and saved $400,000 using data
        analysis and fraud strategies.
        <br />- Led the shift from Excel monitoring to Tableau, speeding up
        decision-making by 17%.
      </div>
    ),
    icon: <IoAnalyticsOutline />,
    date: "June 2021 - May 2022",
  },
  {
    title: (
      <div className="m-0 font-semibold capitalize">
        Arizona State University
        <br />
        Masters&apos;s in Computer Science
      </div>
    ),
    location: "Tempe, Arizona",
    description: (
      <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {" "}
        <div className="font-semibold">CGPA : 4/4</div>
        <span className="font-semibold">Main Courses:</span> Foundations of
        Algorithms, Mobile Computing, Data Mining, Applications of Blockchain,
        Data Processing at Scale
      </div>
    ),
    icon: <LuGraduationCap />,
    date: "Aug 2022 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "I-Split (2024)",
    description:
      "I-Split, A web application designed to facilitate the splitting of items in uploaded invoice among group members. It enables each member to select their items from a shared invoice, and it calculates each person’s share of the total cost.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind"],
    imageUrl: "./nextjs_icon.png",
  },
  {
    title: "E-Platform (2023-2024)",
    description:
      "A dynamic eCommerce platform built focusing on a seamless shopping experience. Developed features like a full-featured shopping cart, product reviews, search, and admin management tools for products and orders. Integrated secure payment.",
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
    imageUrl: "/logo512.png",
  },
  {
    title: "Corona Virus Tracker (2020)",
    description:
      "Created a dashboard using Spring Boot to track reported data of confirmed Coronavirus infections COVID-19 (2019-nCoV) around the world. Used dependencies thymelead , Spring Web.",
    tags: ["Spring Boot", "Maven", "Bootstrap"],
    imageUrl: "./springboot.png",
  },
] as const;

export const skillsData = [
  "JAVA",
  "C",
  "Python",
  "SQL",
  "SAS",
  "React",
  "Redux",
  "BootStrap",
  "Tailwind CSS",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "Spring Boot",
  "Maven",
  "REST",
  "JWT",
  "Postgre SQL",
  "MongoDB",
  "Git",
  "Android Studio",
  "AWS EC2",
  "Tableau",
  "Jenkins",
  "Docker",
] as const;