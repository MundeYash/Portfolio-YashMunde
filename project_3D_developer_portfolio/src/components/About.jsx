import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient dark:bg-gradient-to-br dark:from-cyan-200 dark:to-pink-200 p-[1px] rounded-[20px] shadow-card transition-colors duration-300"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary dark:bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-colors duration-300"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white dark:text-cyan-700 text-[20px] font-bold text-center transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} dark:text-cyan-700 transition-colors duration-300`}
        >
          Introduction
        </p>
        <h2
          className={`${styles.sectionHeadText} dark:text-gray-900 transition-colors duration-300`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary dark:text-gray-700 text-[17px] max-w-3xl leading-[30px] transition-colors duration-300"
      >
        I’m a passionate Software Engineer with 1 year of experience building
        performant, real-time web applications using React.js, TypeScript, and
        Node.js. I’ve contributed to both government and product-based
        projects—developing export automation tools, multilingual dashboards,
        and data-driven features used by 1000+ users globally. With a strong
        foundation in data structures, clean coding practices, and full-stack
        development, I enjoy turning complex problems into simple, scalable
        solutions. I thrive in fast-paced, collaborative environments and love
        crafting interfaces that balance functionality with user experience
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
