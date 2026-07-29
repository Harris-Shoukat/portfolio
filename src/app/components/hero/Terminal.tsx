"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TerminalIcon } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

const LINES = [
  '{',
  `  "email": "${SOCIAL.email}",`,
  `  "github": "${SOCIAL.githubHandle}",`,
  '  "availability": "Open for Freelance / Full-time"',
  '}',
];

function useTypewriter() {
  const [output, setOutput] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const run = () => {
    if (running || done) return;
    setRunning(true);
    setOutput([]);
    setDone(false);

    let l = 0;
    let c = 0;

    const type = () => {
      if (l >= LINES.length) {
        setRunning(false);
        setDone(true);
        return;
      }

      const currentLine = LINES[l];
      if (c > currentLine.length) {
        l++;
        c = 0;
        setTimeout(type, 120);
        return;
      }

      setOutput((prev) => {
        const next = [...prev];
        next[l] = currentLine.slice(0, c);
        return next;
      });
      c++;
      setTimeout(type, 20 + Math.random() * 30);
    };

    setTimeout(type, 400);
  };

  return { output, running, done, run };
}

function OutputLine({ line }: { line: string }) {
  const isBracket = line === "{" || line === "}";
  const isKey = line.includes('"');
  const color = isBracket
    ? "text-[#F2CC60]"
    : isKey
      ? "text-[#A5D6FF]"
      : "text-[#8B949E]";

  return <div className={color}>{line}</div>;
}

export function Terminal() {
  const { output, running, done, run } = useTypewriter();

  return (
    <div className="w-full max-w-lg rounded-xl border border-[#1F1F1F] bg-[#0D1117] overflow-hidden font-mono text-sm shadow-xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-[#1F1F1F] px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] text-[#71717A]">terminal — bash</span>
      </div>
      <div className="px-4 py-3 min-h-[160px]">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#00F5A0] select-none">$</span>
          <span className="text-[#E6EDF3]">npx harris-shoukat</span>
          {!running && !done && (
            <motion.button
              onClick={run}
              className="inline-flex items-center gap-1 rounded-md border border-[#00F5A0]/30 bg-[#00F5A0]/8 px-2.5 py-1 text-[10px] font-medium text-[#00F5A0] hover:bg-[#00F5A0]/15 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TerminalIcon className="h-3 w-3" />
              Run
            </motion.button>
          )}
        </div>

        <div className="mt-2.5 space-y-0.5">
          {output.map((line, i) => (
            <OutputLine key={i} line={line} />
          ))}
          {running && (
            <span className="inline-block h-4 w-1.5 bg-[#00F5A0] ml-0.5 animate-pulse" />
          )}
        </div>

        {done && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center gap-2 text-xs text-[#7EE787] border-t border-[#1F1F1F] pt-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
            Ready to collaborate
          </motion.div>
        )}
      </div>
    </div>
  );
}
