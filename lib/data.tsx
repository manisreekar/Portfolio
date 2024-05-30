import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { RiReactjsFill } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BiLogoSpringBoot } from "react-icons/bi";

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
        Arizona State University
        <br />
        Technology Consultant
      </div>
    ),
    location: "Arizona, United States",
    description: (
      // <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
      //   - Revitalized a legacy JavaScript application by transitioning to React,
      //   boosting scalability and performance by 30%. <br />
      //   - Revamped the frontend codebase by designing and implementing reusable
      //   components, enhancing efficiency and modularity. <br />
      //   - Engineered scalable microservices using Spring Boot, and established
      //   CI/CD pipelines with AWS, reducing downtime by 17%. <br />- Managed and
      //   played a key role in system maintenance and code review, reducing
      //   production issues by 36%.
      // </div>
      <div></div>
    ),
    icon: <BiLogoSpringBoot />,
    date: "Dec 2022 - May 2024",
  },

  {
    title: (
      <div className="m-0 font-semibold capitalize">
        Arizona State University
        <br />
        Masters&apos;s in Computer Science
      </div>
    ),
    location: "Arizona, United States",
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

  {
    title: (
      <div className="m-0 font-semibold capitalize">
        Synchrony Financial
        <br />
        Senior Analyst
      </div>
    ),
    location: "Hyderabad, India",
    description: (
      // <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
      //   - Developed application verification dashboards using React, enhancing
      //   processing efficiency by 20%. <br />
      //   - Improved user interface design to enhance navigation and user
      //   satisfaction. <br />
      //   - Architected robust Spring Boot RESTful APIs, reducing credit card
      //   approval times by 50%. <br />
      //   - Optimized database interactions, enhancing data retrieval and storage
      //   efficiency. <br />- Managed certificate retrieval and keystore updates,
      //   maintaining robust server communication and data security.
      // </div>
      <div></div>
    ),
    icon: <IoAnalyticsOutline />,
    date: "June 2021 - May 2022",
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
      // <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
      //   - Created Tableau dashboards for ticket management and improved SQL data
      //   handling.
      //   <br />
      //   - Enhanced SQL methods to boost efficiency by 25%.
      //   <br />
      //   - Implemented Decision Trees Algorithms to reduce true name fraud by
      //   20%, preventing 50 incidents per client.
      //   <br /> - Cut customer queuing by 9% and saved $400,000 using data
      //   analysis and fraud strategies.
      //   <br />- Led the shift from Excel monitoring to Tableau, speeding up
      //   decision-making by 17%.
      // </div>
      <div></div>
    ),
    icon: <RiReactjsFill />,
    date: "Oct 2020 - May 2021",
  },
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
] as const;

export const projectsData = [
  {
    title: "I-Split (2024)",
    description:
      "I-Split, A web application designed to facilitate the splitting of items in uploaded invoice among group members. It enables each member to select their items from a shared invoice, and it calculates each person’s share of the total cost.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind"],
    imageUrl: "/split_project.png",
  },
  {
    title: "E-Platform (2023-2024)",
    description:
      "A dynamic eCommerce platform built focusing on a seamless shopping experience. Developed features like a full-featured shopping cart, product reviews, search, and admin management tools for products and orders. Integrated secure payment.",
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
    imageUrl: "/proshop.png",
  },
  {
    title: "Corona Virus Tracker (2020)",
    description:
      "Created a dashboard using Spring Boot to track reported data of confirmed Coronavirus infections COVID-19 (2019-nCoV) around the world. Used dependencies thymelead , Spring Web.",
    tags: ["Spring Boot", "Maven", "Bootstrap"],
    imageUrl: "/corona.png",
  },
] as const;

export const skillsData = [
  { src: "/java.png", skill: "JAVA" },
  { src: "/C.png", skill: "C" },
  { src: "/python.png", skill: "Python" },
  { src: "/sql.png", skill: "SQL" },
  { src: "/sas.png", skill: "SAS" },
  { src: "/logo512.png", skill: "React" },
  { src: "/redux.png", skill: "Redux" },
  { src: "/bootstrap.png", skill: "BootStrap" },
  { src: "/tailwind.png", skill: "Tailwind" },
  { src: "/framer-motion.png", skill: "Framer Motion" },
  { src: "/javascript.png", skill: "JavaScript" },
  { src: "/typescript.png", skill: "TypeScript" },
  { src: "/nextjs_icon.png", skill: "Next.js" },
  { src: "/nodejs_icon.png", skill: "Node.js" },
  { src: "/express.png", skill: "Express.js" },
  { src: "/springboot.png", skill: "Spring Boot" },
  { src: "/maven.png", skill: "Maven" },
  { src: "/rest.png", skill: "REST" },
  { src: "/jwt.png", skill: "JWT" },
  { src: "/postgresql.png", skill: "Postgre SQL" },
  { src: "/mongodb.png", skill: "MongoDB" },
  { src: "/git.png", skill: "Git" },
  { src: "/android.png", skill: "Android Studio" },
  { src: "/aws.png", skill: "AWS EC2" },
  { src: "/tableau.png", skill: "Tableau" },
  { src: "/jenkins.png", skill: "Jenkins" },
  { src: "/docker.png", skill: "Docker" },
] as const;
