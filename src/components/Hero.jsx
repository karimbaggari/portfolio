import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 ml-1 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Karim BAGGARI</span>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `} style={{fontSize:"20px"}}>
            I am a software engineer  <br className="sm:block hidden" />
           with experience in both frontend and backend development. I've worked with a range of technologies including JavaScript, Java, and Python, and I'm passionate about building robust and efficient applications. I'm also a cybersecurity enthusiast, and I specialize in penetration testing to identify and address vulnerabilities in systems.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            ></motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
