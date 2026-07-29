"use client";

import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects-data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-[#4F46E5] opacity-[0.03] blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#71717A] tracking-wide uppercase mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Production{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#4F46E5]">
              Projects
            </span>
          </h2>
          <p className="text-[#71717A] mt-4 max-w-xl mx-auto">
            Real-world applications built for production scale.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
