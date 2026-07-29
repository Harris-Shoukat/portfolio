"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import users from "../../assets/users.png";
import cargo from "../../assets/cargo.png";
import coffeepoint from "../../assets/coffeepoint.png";
import type { StaticImageData } from "next/image";
import { Github, ExternalLink, Globe, Code } from "lucide-react";

interface Project {
  id: number;
  name: string;
  image?: StaticImageData;
  codePreview?: string[];
  url: string;
  githubUrl: string;
  liveUrl?: string;
  narrative: string;
  tags: string[];
  type: "web" | "mobile";
}

const projects: Project[] = [
  {
    id: 1,
    name: "Cargo Webapp",
    image: cargo,
    url: "speedypk.com",
    githubUrl: "https://github.com/yourusername/cargo-webapp",
    liveUrl: "https://speedypk.com",
    narrative:
      "A web platform for local businesses to handle worldwide parcel delivery and order tracking. Features full authentication and an immutable logistics tracking ledger.",
    tags: ["Next.js", "Supabase", "Auth", "Logistics"],
    type: "web",
  },
  {
    id: 2,
    name: "HMC Society",
    codePreview: [
      "interface Member {",
      "  id: string;",
      "  role: 'admin' | 'member';",
      "  name: string;",
      "  joinDate: Date;",
      "}",
      "",
      "async function getMembers(): Promise<Member[]> {",
      "  const { data, error } = await supabase",
      "    .from('members')",
      "    .select('*');",
      "  if (error) throw error;",
      "  return data;",
      "}",
    ],
    url: "hmc-society.vercel.app",
    githubUrl: "https://github.com/yourusername/project-one",
    narrative:
      "A role-based access management platform with secure authentication, member data management, event coordination, and real-time announcements.",
    tags: ["React", "Node.js", "Auth", "Real-time"],
    type: "web",
  },
  {
    id: 3,
    name: "CoffeePoint",
    image: coffeepoint,
    url: "coffeepoint.vercel.app",
    githubUrl: "https://github.com/yourusername/coffeepoint",
    liveUrl: "https://coffeepoint.vercel.app",
    narrative:
      "A modern coffee ordering and discovery platform — browse specialty coffee menus, find nearby branches, and place orders seamlessly. Built with a focus on fast load times and a smooth mobile-first experience.",
    tags: ["Next.js", "Tailwind", "Vercel", "UI/UX"],
    type: "web",
  },
  {
    id: 4,
    name: "POKO",
    image: users,
    url: "poko-app",
    githubUrl: "https://github.com/yourusername/project-four",
    narrative:
      "A data dashboard that consumes a public API to display users, visualize counts with interactive charts, and present detailed data in a structured table.",
    tags: ["Expo", "RTK", "API", "Charts"],
    type: "web",
  },
];

function BrowserFrame({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="rounded-lg border border-[#1F1F1F] overflow-hidden bg-[#0A0A0A] shadow-lg shadow-black/20">
      <div className="flex items-center gap-2 border-b border-[#1F1F1F] px-4 py-2.5">
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex justify-center min-w-0 mx-2">
          <div className="flex items-center gap-1.5 rounded-md bg-[#1A1A1A] px-3 py-1 text-[10px] text-[#71717A] truncate max-w-full">
            <Globe className="h-2.5 w-2.5 shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden bg-[#0A0A0A]">
        {children}
      </div>
    </div>
  );
}

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center py-2">
      <div className="relative w-[180px] sm:w-[200px]">
        <div className="rounded-[2.5rem] border-2 border-[#2A2A2A] overflow-hidden bg-[#0A0A0A] shadow-xl shadow-black/30">
          <div className="flex justify-center pt-2.5 pb-1">
            <div className="h-1.5 w-16 rounded-full bg-[#2A2A2A]" />
          </div>
          <div className="aspect-[9/19] overflow-hidden relative">
            {children}
          </div>
          <div className="flex justify-center pb-2.5 pt-1">
            <div className="h-0.5 w-1 rounded-full bg-[#2A2A2A]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CodePreview({ lines }: { lines: string[] }) {
  return (
    <div className="h-full w-full bg-[#0D1117] p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1F1F1F]">
        <Code className="h-3 w-3 text-[#00F5A0]" />
        <span className="text-[10px] text-[#71717A]">src/app/page.tsx</span>
      </div>
      {lines.map((line, i) => {
        const isKeyword = /^(interface|async|function|const|if|return|import|from)\b/.test(line.trim());
        const isString = /['"`]/.test(line);
        const isType = /: \w+/.test(line) || /</.test(line);
        const isComment = /^\s*\/\//.test(line);
        const isBracket = /^[{|}]$/.test(line.trim());

        let color = "text-[#8B949E]";
        if (isComment) color = "text-[#8B949E] italic";
        else if (isKeyword) color = "text-[#FF7B72]";
        else if (isString) color = "text-[#A5D6FF]";
        else if (isType) color = "text-[#79C0FF]";
        else if (isBracket) color = "text-[#F2CC60]";
        else if (/\d+/.test(line)) color = "text-[#79C0FF]";

        return (
          <div key={i} className="whitespace-pre">
            <span className="text-[#484F58] select-none w-5 sm:w-6 inline-block text-right mr-2 sm:mr-3">
              {i + 1}
            </span>
            <span className={color}>{line}</span>
          </div>
        );
      })}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
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
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
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
                    <span
                      key={tag}
                      className="inline-block rounded-md border border-[#1F1F1F] bg-[#0A0A0A] px-2 py-0.5 text-[11px] font-medium text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
