import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["React developer.", "Python developer.", "Full-stack developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Tin</span>
          </h1>
          <div className={`${styles.heroSubText} flex`}>
            <p className="text-white-100">{text}</p>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#915eff"
            />
          </div>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
