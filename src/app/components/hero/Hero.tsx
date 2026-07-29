"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TerminalIcon, ChevronDown } from "lucide-react";

function TerminalComponent() {
  const [output, setOutput] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [cursorLine, setCursorLine] = useState(0);
  const [cursorChar, setCursorChar] = useState(0);

  const runCommand = () => {
    if (running || done) return;
    setRunning(true);
    setOutput([]);
    setDone(false);
    setCursorLine(0);
    setCursorChar(0);

    const lines = [
      '{',
      '  "email": "harrisshaukat3@gmail.com",',
      '  "github": "@Harris-Shoukat",',
      '  "availability": "Open for Freelance / Full-time"',
      '}',
    ];

    let l = 0;
    let c = 0;

    const type = () => {
      if (l >= lines.length) {
        setRunning(false);
        setDone(true);
        return;
      }

      const currentLine = lines[l];
      if (c > currentLine.length) {
        l++;
        c = 0;
        setCursorLine(l);
        setCursorChar(0);
        setTimeout(type, 120);
        return;
      }

      setOutput((prev) => {
        const next = [...prev];
        next[l] = currentLine.slice(0, c);
        return next;
      });
      c++;
      setCursorChar(c);
      setTimeout(type, 20 + Math.random() * 30);
    };

    setTimeout(type, 400);
  };

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
              onClick={runCommand}
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
          {output.map((line, i) => {
            const isBracket = line === '{' || line === '}';
            const isKey = line.includes('"');
            return (
              <div
                key={i}
                className={`${
                  isBracket ? 'text-[#F2CC60]' :
                  isKey ? 'text-[#A5D6FF]' :
                  'text-[#8B949E]'
                }`}
              >
                {line}
              </div>
            );
          })}
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

export default function Hero() {
  const scrollToBento = () => {
    document.getElementById("bento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-[#4F46E5] opacity-[0.08] blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-[#00F5A0] opacity-[0.08] blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 sm:space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-xs sm:text-sm font-medium text-[#71717A] tracking-wide uppercase font-mono"
            >
              {'<Hi />'} — Harris Shoukat
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00F5A0] to-[#4F46E5]">
                fast, scalable
              </span>{" "}
              web &amp; mobile interfaces.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base sm:text-lg text-[#A1A1AA] max-w-lg leading-relaxed"
            >
              Specialized in React, Next.js, and React Native. Bridging design and high-performance production code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToBento}
                className="group inline-flex h-11 items-center gap-2 rounded-xl border border-[#1F1F1F] bg-[#111111] px-5 text-sm font-medium text-[#FAFAFA] hover:border-[#00F5A0]/30 hover:bg-[#00F5A0]/5 transition-all duration-300"
              >
                Explore Work
                <ChevronDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="#contact"
                className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors"
              >
                Get in touch &rarr;
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
