import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={edu.date}
      iconStyle={{ background: edu.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={edu.icon}
            alt={edu.institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="dark:bg-white rounded-lg p-2 transition-colors duration-300">
        <h3 className="text-white dark:text-cyan-700 text-[22px] font-bold transition-colors duration-300">
          {edu.degree}
        </h3>
        <p
          className="text-secondary dark:text-gray-700 text-[16px] font-semibold transition-colors duration-300"
          style={{ margin: 0 }}
        >
          {edu.institution}
        </p>
        <p className="text-white-100 dark:text-cyan-600 text-[14px] mt-1 transition-colors duration-300">
          {edu.percentage && `Score: ${edu.percentage}`}
        </p>
      </div>
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {edu.points.map((point, idx) => (
          <li
            key={`edu-point-${idx}`}
            className="text-white-100 dark:text-gray-700 text-[14px] pl-1 tracking-wider transition-colors duration-300"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center dark:text-cyan-700 transition-colors duration-300`}
        >
          My Academic Journey
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center dark:text-gray-900 transition-colors duration-300`}
        >
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, idx) => (
            <EducationCard key={`education-${idx}`} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
