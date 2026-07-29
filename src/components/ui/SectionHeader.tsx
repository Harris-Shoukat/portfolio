"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  gradient: string;
  suffix?: string;
  subtitle?: string;
  mono?: boolean;
}

export function SectionHeader({ tag, title, gradient, suffix, subtitle, mono }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      {tag && (
        <p className={`text-sm font-medium text-[#71717A] tracking-wide uppercase mb-3 ${mono ? "font-mono" : ""}`}>
          {tag}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#4F46E5]">
          {gradient}
        </span>
        {suffix}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#71717A] max-w-xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
