"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { BrowserFrame } from "./BrowserFrame";
import { MobileFrame } from "./MobileFrame";
import { CodePreview } from "./CodePreview";
import type { Project } from "./projects-data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      className="group rounded-2xl border border-[#1F1F1F] bg-[#111111] overflow-hidden hover:border-[#00F5A0]/20 hover:shadow-lg hover:shadow-[#00F5A0]/5 transition-all duration-500"
    >
      <div>
        {project.image ? (
          project.type === "web" ? (
            <BrowserFrame url={project.url}>
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover object-top"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                quality={85}
              />
            </BrowserFrame>
          ) : (
            <div className="px-4 sm:px-6 pt-4 sm:pt-6">
              <MobileFrame>
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="180px"
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
              </MobileFrame>
            </div>
          )
        ) : (
          <div className="px-4 sm:px-6 pt-4 sm:pt-6">
            <div className="rounded-lg border border-[#1F1F1F] overflow-hidden">
              {project.codePreview && <CodePreview lines={project.codePreview} />}
            </div>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-[#FAFAFA] group-hover:text-[#00F5A0] transition-colors">
            {project.name}
          </h3>
          <span className="shrink-0 ml-3 text-[10px] font-medium uppercase tracking-wider text-[#71717A] border border-[#1F1F1F] rounded-md px-2 py-0.5">
            {project.type === "web" ? "Web" : "Mobile"}
          </span>
        </div>

        <p className="text-sm text-[#71717A] mb-4 leading-relaxed">
          {project.narrative}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#00F5A0]/10 px-3 py-1 text-xs font-medium text-[#00F5A0] hover:bg-[#00F5A0]/20 transition-colors"
              aria-label={`View live ${project.name}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
