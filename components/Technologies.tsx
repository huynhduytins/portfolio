"use client";

import { motion, Variants } from "framer-motion";
import { RiReactjsLine, RiRemixRunFill, RiVuejsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SiMongodb, SiWebpack } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-16 text-center text-4xl"
      >
        Technologies
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex gap-8 justify-center flex-wrap"
      >
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <TbBrandRedux className="text-6xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <TbBrandNextjs className="text-6xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <RiRemixRunFill className="text-6xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <RiVuejsLine className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <SiWebpack className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <SiNestjs className="text-6xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-accent p-4"
        >
          <GrDocker className="text-6xl text-cyan-500 " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
