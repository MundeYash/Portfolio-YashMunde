import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='relative w-28 h-28 group' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-[-32px] px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
