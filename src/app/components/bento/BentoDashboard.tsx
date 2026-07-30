"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Gauge,
  GitBranch,
  Terminal,
  Cpu,
  Layout,
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SkillBar } from "@/components/ui/SkillBar";
import { SOCIAL } from "@/lib/constants";
import { AnimatedTerminal } from "./AnimatedTerminal";
import { BentoCard } from "./BentoCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const workFlowSteps = [
  { step: "01", label: "API Integration", sub: "REST / GraphQL", color: "#00F5A0" },
  { step: "02", label: "Design to Code", sub: "Pixel-perfect UI", color: "#4F46E5" },
  { step: "03", label: "Performance", sub: "Core Web Vitals", color: "#F59E0B" },
];

export default function BentoDashboard() {
  return (
    <section id="bento" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-[#00F5A0] opacity-[0.03] blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-[#4F46E5] opacity-[0.03] blur-[128px]" />
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
            {"<developer />"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#4F46E5]">
              Dashboard
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Terminal Profile */}
          <BentoCard
            icon={<Terminal className="h-4 w-4 text-[#00F5A0]" />}
            title="Developer Profile"
            subtitle="npx harris-shoukat"
            className="lg:col-span-2"
          >
            <AnimatedTerminal />
          </BentoCard>

          {/* Quick Metrics */}
          <BentoCard
            icon={<Gauge className="h-4 w-4 text-[#4F46E5]" />}
            title="Quick Metrics"
            iconBg="bg-[#4F46E5]/10"
          >
            <div className="space-y-5">
              <div className="border-b border-[#1F1F1F] pb-3">
                <NumberTicker value={5} addPlus className="text-3xl font-bold font-mono text-[#00F5A0]" />
                <p className="text-xs text-[#71717A] mt-0.5">Years of Experience</p>
              </div>
              <div className="border-b border-[#1F1F1F] pb-3">
                <NumberTicker value={15} addPlus className="text-3xl font-bold font-mono text-[#4F46E5]" />
                <p className="text-xs text-[#71717A] mt-0.5">Apps Shipped</p>
              </div>
              <div>
                <NumberTicker value={100} className="text-3xl font-bold font-mono text-[#F59E0B]" />
                <p className="text-xs text-[#71717A] mt-0.5">% Projects Delivered</p>
              </div>
            </div>
          </BentoCard>

          {/* Active Workflow */}
          <BentoCard
            icon={<GitBranch className="h-4 w-4 text-[#F59E0B]" />}
            title="Active Workflow"
            iconBg="bg-[#F59E0B]/10"
          >
            <div className="space-y-0">
              {workFlowSteps.map((item, i) => (
                <div
                  key={item.step}
                  className={`flex items-start gap-3 py-3 ${i < workFlowSteps.length - 1 ? "border-b border-[#1F1F1F]" : ""}`}
                >
                  <span className="font-mono text-[10px] font-bold leading-5 shrink-0" style={{ color: item.color }}>
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#FAFAFA]">{item.label}</p>
                    <p className="text-xs text-[#71717A]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Tech Radar */}
          <BentoCard
            icon={<Cpu className="h-4 w-4 text-[#00F5A0]" />}
            title="Tech Radar"
            subtitle="Proficiency breakdown"
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Code2 className="h-3 w-3 text-[#00F5A0]" />
                  <span className="text-[10px] font-medium text-[#A1A1AA] uppercase tracking-wide">Frontend</span>
                </div>
                <SkillBar name="Next.js / TypeScript" pct={88} color="#00F5A0" />
                <SkillBar name="React / JS" pct={92} color="#00F5A0" delay={0.1} />
                <SkillBar name="Tailwind CSS" pct={90} color="#00F5A0" delay={0.2} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Database className="h-3 w-3 text-[#F59E0B]" />
                  <span className="text-[10px] font-medium text-[#A1A1AA] uppercase tracking-wide">Backend</span>
                </div>
                <SkillBar name="Python / Django / DRF" pct={80} color="#F59E0B" delay={0.15} />
                <SkillBar name="Supabase / APIs" pct={82} color="#F59E0B" delay={0.25} />
                <SkillBar name="Git / CI/CD" pct={86} color="#F59E0B" delay={0.35} />
              </div>
            </div>
          </BentoCard>

          {/* Status */}
          <BentoCard
            icon={<Layout className="h-4 w-4 text-[#00F5A0]" />}
            title="Status"
            className="flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-[#00F5A0]/20 bg-[#00F5A0]/5 px-3.5 py-1.5 text-xs font-medium text-[#00F5A0]"
                animate={{ boxShadow: ["0 0 0 0 rgba(0,245,160,0.3)", "0 0 0 8px rgba(0,245,160,0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F5A0]" />
                </span>
                Available
              </motion.span>
              <p className="text-[10px] text-[#71717A]">Open for freelance &amp; full-time</p>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-[#00F5A0] hover:text-[#FAFAFA] transition-colors">
                {SOCIAL.githubHandle}
              </a>
            </div>
          </BentoCard>

          {/* GitHub */}
          <BentoCard
            icon={<GitBranch className="h-4 w-4 text-[#4F46E5]" />}
            title="GitHub"
            iconBg="bg-[#4F46E5]/10"
            className="flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
              <div className="rounded-lg border border-[#1F1F1F] bg-[#0A0A0A] p-3 w-full">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#A1A1AA]">commits</span>
                  <span className="text-[#FAFAFA] font-mono">2.4k+</span>
                </div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#A1A1AA]">repos</span>
                  <span className="text-[#FAFAFA] font-mono">30+</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A1A1AA]">contributions</span>
                  <span className="text-[#FAFAFA] font-mono">active</span>
                </div>
              </div>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-[#00F5A0] hover:text-[#FAFAFA] transition-colors">
                github.com/Harris-Shoukat
              </a>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
