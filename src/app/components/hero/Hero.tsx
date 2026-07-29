"use client";

import { motion } from "motion/react";
import { Terminal } from "./Terminal";
import { HeroContent } from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-[#4F46E5] opacity-[0.08] blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-[#00F5A0] opacity-[0.08] blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <HeroContent />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
