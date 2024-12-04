"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative flex items-center justify-center">
      <Image src="/favicon.ico" alt="logo" width={50} height={50} priority />
      <motion.svg
        className="absolute w-[55px]"
        fill="transparent"
        viewBox="0 0 506 506"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </Link>
  );
};

export default Logo;
