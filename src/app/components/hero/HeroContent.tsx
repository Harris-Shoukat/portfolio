"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scrollToBento = () => {
  document.getElementById("bento")?.scrollIntoView({ behavior: "smooth" });
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-5 sm:space-y-6"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs sm:text-sm font-medium text-[#71717A] tracking-wide uppercase font-mono"
      >
        {"<Hi />"} — Harris Shoukat
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]"
      >
        Engineering{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00F5A0] to-[#4F46E5]">
          fast, scalable
        </span>{" "}
        web &amp; mobile interfaces.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-[#A1A1AA] max-w-lg leading-relaxed"
      >
        Full-stack engineer specializing in TypeScript, Python, and cross-platform
        development. From polished UIs to scalable APIs.
      </motion.p>

      <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
        <button
          onClick={scrollToBento}
          className="group inline-flex h-11 items-center gap-2 rounded-xl border border-[#1F1F1F] bg-[#111111] px-5 text-sm font-medium text-[#FAFAFA] hover:border-[#00F5A0]/30 hover:bg-[#00F5A0]/5 transition-all duration-300"
        >
          Explore Work
          <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
        <a
          href="#contact"
          className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors"
        >
          Get in touch &rarr;
        </a>
      </motion.div>
    </motion.div>
  );
}
