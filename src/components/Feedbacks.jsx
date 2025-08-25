import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const AchievementCard = ({ index, testimonial }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-2xl w-full xs:w-[360px] flex flex-col items-center justify-center text-center min-h-[220px] shadow-lg"
  >
    {/* Trophy Icon (SVG instead of lucide-react) */}

    <div className="mb-4 relative flex items-center justify-center">
  {/* Medal */}
  <span className="text-6xl drop-shadow-lg">🥇</span>

  {/* Glowing Aura */}
  <div className="absolute w-16 h-16 rounded-full bg-yellow-300 opacity-50 blur-xl animate-ping"></div>
  <div className="absolute w-20 h-20 rounded-full bg-yellow-400 opacity-30 blur-lg animate-pulse"></div>
</div>



    {/* Achievement text */}
    <p className="text-white text-[18px] font-medium tracking-wide">
      {testimonial}
    </p>
  </motion.div>
);


const Testimonials = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I’ve Achieved</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>
      <div className={`-mt-16 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((achievement, index) => (
          <AchievementCard key={index} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "");
