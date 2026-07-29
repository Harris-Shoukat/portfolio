"use client";

import React from "react";
import { motion } from "motion/react";

const LINES = [
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

function TerminalLine({ line }: { line: string }) {
  if (line.startsWith(">")) {
    return (
      <>
        <span className="text-[#00F5A0]">&gt;</span>
        <span className="text-[#E6EDF3]">{line.slice(1)}</span>
      </>
    );
  }

  const isHighlight = line.startsWith("  🚀") || line.startsWith("  └");
  const isBranch = line.startsWith("  ├") || line.startsWith("  │");
  const isSuccess = line.startsWith("  ✓");

  if (isHighlight) return <span className="text-[#00F5A0]">{line}</span>;
  if (isBranch) return <span className="text-[#8B949E]">{line}</span>;
  if (isSuccess) return <span className="text-[#7EE787]">{line}</span>;
  return <span className="text-[#8B949E]">{line}</span>;
}

export function AnimatedTerminal() {
  const [line, setLine] = React.useState(0);
  const [char, setChar] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!started || line >= LINES.length) return;

    const currentLine = LINES[line];
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
  }, [started, line, char]);

  return (
    <div className="rounded-lg border border-[#1F1F1F] bg-[#0D1117] overflow-hidden font-mono text-xs shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-[#1F1F1F] px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-500/60" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
        <div className="h-2 w-2 rounded-full bg-green-500/60" />
        <span className="ml-1.5 text-[10px] text-[#71717A]">bash</span>
      </div>
      <div className="p-3 min-h-[180px]">
        {LINES.slice(0, line).map((l, i) => (
          <div key={i} className="whitespace-pre-wrap leading-5">
            <TerminalLine line={l} />
          </div>
        ))}
        {line < LINES.length && (
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
