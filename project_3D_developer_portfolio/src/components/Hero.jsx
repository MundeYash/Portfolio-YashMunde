import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary dark:bg-white transition-colors duration-300">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] dark:bg-cyan-500 transition-colors duration-300" />
          <div className="w-1 sm:h-80 h-40 violet-gradient dark:bg-cyan-200 transition-colors duration-300" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white dark:text-gray-900 transition-colors duration-300`}
          >
            Hi, I'm{" "}
            <span className="text-[#915EFF] dark:text-cyan-500 transition-colors duration-300">
              Yash Munde
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 dark:text-gray-700 transition-colors duration-300`}
          >
            Software Engineer crafting full-stack apps{" "}
            <br className="sm:block hidden" />
            that scale, perform, and solve real-world problems.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary dark:border-cyan-500 flex justify-center items-start p-2 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary dark:bg-cyan-500 mb-1 transition-colors duration-300"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
