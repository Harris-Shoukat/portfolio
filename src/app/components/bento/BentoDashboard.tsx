"use client";

import React from "react";
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

function AnimatedTerminal() {
  const [line, setLine] = React.useState(0);
  const [char, setChar] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  const lines = [
    "> npm create portfolio@latest",
    "  ✓ Scaffolding project...",
    "  ✓ Installing dependencies...",
    "  ✓ Setting up Tailwind CSS v4",
    "  ✓ Configuring Motion & Lucide",
    "  ✓ Optimizing assets...",
    "",
    "  🚀 Harris Shoukat — Frontend Engineer",
    "  │",
    "  ├─ 🎨 UI: Tailwind + Motion",
    "  ├─ ⚛️  Stack: Next.js + TypeScript",
    "  ├─ 📱 Mobile: React Native + Expo",
    "  └─ 🔧 Tools: Supabase + Git",
    "  │",
    "  └─ ✨ Ready for production",
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!started) return;
    if (line >= lines.length) return;

    const currentLine = lines[line];
    if (char >= currentLine.length) {
      const delay = currentLine === "" ? 200 : 80;
      const t = setTimeout(() => {
        setLine((l) => l + 1);
        setChar(0);
      }, delay);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setChar((c) => c + 1), 15 + Math.random() * 20);
    return () => clearTimeout(t);
  }, [started, line, char, lines]);

  return (
    <div className="rounded-lg border border-[#1F1F1F] bg-[#0D1117] overflow-hidden font-mono text-xs shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-[#1F1F1F] px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-500/60" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
        <div className="h-2 w-2 rounded-full bg-green-500/60" />
        <span className="ml-1.5 text-[10px] text-[#71717A]">bash</span>
      </div>
      <div className="p-3 min-h-[180px]">
        {lines.slice(0, line).map((l, i) => (
          <div key={i} className="whitespace-pre-wrap leading-5">
            {l.startsWith(">") ? (
              <>
                <span className="text-[#00F5A0]">&gt;</span>
                <span className="text-[#E6EDF3]">{l.slice(1)}</span>
              </>
            ) : l.startsWith("  🚀") || l.startsWith("  └") ? (
              <span className="text-[#00F5A0]">{l}</span>
            ) : l.startsWith("  ├") || l.startsWith("  │") ? (
              <span className="text-[#8B949E]">{l}</span>
            ) : l.startsWith("  ✓") ? (
              <span className="text-[#7EE787]">{l}</span>
            ) : (
              <span className="text-[#8B949E]">{l}</span>
            )}
          </div>
        ))}
        {line < lines.length && (
          <motion.span
            className="inline-block h-3.5 w-1.5 bg-[#00F5A0] ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>
    </div>
  );
}

function SkillBar({ name, pct, color, delay }: { name: string; pct: number; color: string; delay: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-[#A1A1AA]">{name}</span>
        <span className="font-mono text-[10px]" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1A1A1A] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}66, ${color})`,
            boxShadow: `0 0 6px ${color}44`,
          }}
        />
      </div>
    </div>
  );
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

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
            {'<developer />'}
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
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* ── Card 1: Terminal Profile (spans 2 cols) ── */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-2 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F5A0]/10">
                <Terminal className="h-4 w-4 text-[#00F5A0]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#FAFAFA]">Developer Profile</h3>
                <p className="text-[10px] text-[#71717A] font-mono">npx harris-shoukat</p>
              </div>
            </div>
            <AnimatedTerminal />
          </motion.div>

          {/* ── Card 2: Quick Metrics ── */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-1 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F46E5]/10">
                <Gauge className="h-4 w-4 text-[#4F46E5]" />
              </div>
              <h3 className="text-sm font-semibold text-[#FAFAFA]">Quick Metrics</h3>
            </div>
            <div className="space-y-5">
              <div className="border-b border-[#1F1F1F] pb-3">
                <NumberTicker
                  value={5}
                  addPlus
                  className="text-3xl font-bold font-mono text-[#00F5A0]"
                />
                <p className="text-xs text-[#71717A] mt-0.5">Years of Experience</p>
              </div>
              <div className="border-b border-[#1F1F1F] pb-3">
                <NumberTicker
                  value={15}
                  addPlus
                  className="text-3xl font-bold font-mono text-[#4F46E5]"
                />
                <p className="text-xs text-[#71717A] mt-0.5">Apps Shipped</p>
              </div>
              <div>
                <NumberTicker
                  value={100}
                  className="text-3xl font-bold font-mono text-[#F59E0B]"
                />
                <p className="text-xs text-[#71717A] mt-0.5">% Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Active Workflow ── */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-1 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F59E0B]/10">
                <GitBranch className="h-4 w-4 text-[#F59E0B]" />
              </div>
              <h3 className="text-sm font-semibold text-[#FAFAFA]">Active Workflow</h3>
            </div>
            <div className="space-y-0">
              {[
                { step: "01", label: "API Integration", sub: "REST / GraphQL", color: "#00F5A0" },
                { step: "02", label: "Design to Code", sub: "Pixel-perfect UI", color: "#4F46E5" },
                { step: "03", label: "Performance", sub: "Core Web Vitals", color: "#F59E0B" },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`flex items-start gap-3 py-3 ${i < 2 ? "border-b border-[#1F1F1F]" : ""}`}
                >
                  <span
                    className="font-mono text-[10px] font-bold leading-5 shrink-0"
                    style={{ color: item.color }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#FAFAFA]">{item.label}</p>
                    <p className="text-xs text-[#71717A]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 5: Tech Radar (spans 2 cols, row 2) ── */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-2 lg:row-span-1 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F5A0]/10">
                <Cpu className="h-4 w-4 text-[#00F5A0]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#FAFAFA]">Tech Radar</h3>
                <p className="text-[10px] text-[#71717A]">Proficiency breakdown</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Code2 className="h-3 w-3 text-[#00F5A0]" />
                  <span className="text-[10px] font-medium text-[#A1A1AA] uppercase tracking-wide">Frontend</span>
                </div>
                <SkillBar name="Next.js / TypeScript" pct={88} color="#00F5A0" delay={0} />
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
          </motion.div>

          {/* ── Card 6: Available (small) ── */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-1 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F5A0]/10">
                <Layout className="h-4 w-4 text-[#00F5A0]" />
              </div>
              <h3 className="text-sm font-semibold text-[#FAFAFA]">Status</h3>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-3">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-[#00F5A0]/20 bg-[#00F5A0]/5 px-3.5 py-1.5 text-xs font-medium text-[#00F5A0]"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0,245,160,0.3)",
                    "0 0 0 8px rgba(0,245,160,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F5A0]" />
                </span>
                Available
              </motion.span>
              <p className="text-[10px] text-[#71717A]">
                Open for freelance &amp; full-time
              </p>
              <a
                href="https://github.com/Harris-Shoukat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-[#71717A] hover:text-[#FAFAFA] transition-colors"
              >
                @Harris-Shoukat
              </a>
            </div>
          </motion.div>

          {/* ── Card 7: GitHub (small) ── */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-1 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F46E5]/10">
                <GitBranch className="h-4 w-4 text-[#4F46E5]" />
              </div>
              <h3 className="text-sm font-semibold text-[#FAFAFA]">GitHub</h3>
            </div>
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
              <a
                href="https://github.com/Harris-Shoukat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-[#4F46E5] hover:text-[#00F5A0] transition-colors"
              >
                github.com/Harris-Shoukat
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
