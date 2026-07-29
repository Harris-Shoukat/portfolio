"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import aboutimg from "../../assets/about.jpeg";
import { Code2, Server, Database, GitBranch, ArrowUpRight } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Building end-to-end applications with React, Next.js, and Django—from UI to database.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    text: "Designing RESTful APIs with Django REST Framework, auth flows, and business logic.",
  },
  {
    icon: Database,
    title: "Data & Architecture",
    text: "Structuring databases, modeling data, and designing scalable system architecture.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Workflow",
    text: "Version control, automated pipelines, and production deployment workflows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#00F5A0] opacity-[0.02] blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#71717A] tracking-wide uppercase mb-3 font-mono">
            {'<about />'}
          </p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#4F46E5]">
              Me
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl border border-[#1F1F1F] overflow-hidden bg-[#111111]">
              <Image
                src={aboutimg}
                alt="Harris Shoukat - Software Engineer"
                width={aboutimg.width}
                height={aboutimg.height}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              I&apos;m a <strong className="text-[#FAFAFA]">Software Engineer</strong> who
              builds full-stack applications from the ground up. I engineer
              scalable frontends with React and Next.js, design robust backends
              with Python and Django, and connect it all through clean APIs and
              solid architecture. I care about code quality, system design, and
              delivering production-ready software.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-[#1F1F1F] bg-[#111111] p-4 hover:border-[#00F5A0]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="h-4 w-4 text-[#00F5A0]" aria-hidden />
                    <p className="text-sm font-semibold text-[#FAFAFA]">{item.title}</p>
                  </div>
                  <p className="text-xs text-[#71717A] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00F5A0] hover:text-[#FAFAFA] transition-colors group"
              >
                View my work
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
