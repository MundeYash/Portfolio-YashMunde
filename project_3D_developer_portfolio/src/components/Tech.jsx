import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="relative w-28 h-28 group dark:bg-white rounded-xl transition-colors duration-300"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-[-32px] px-2 py-1 rounded bg-black dark:bg-cyan-100 text-white dark:text-cyan-700 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 transition-colors duration-300">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
