"use client";

import { Code } from "lucide-react";

interface CodePreviewProps {
  lines: string[];
}

function lineColor(line: string) {
  const trimmed = line.trim();
  const isKeyword = /^(interface|async|function|const|if|return|import|from)\b/.test(trimmed);
  const isString = /['"`]/.test(line);
  const isComment = /^\s*\/\//.test(trimmed);
  const isBracket = /^[{|}]$/.test(trimmed);

  if (isComment) return "text-[#8B949E] italic";
  if (isKeyword) return "text-[#FF7B72]";
  if (isString) return "text-[#A5D6FF]";
  if (isBracket) return "text-[#F2CC60]";
  if (/:\s\w+/.test(line) || /\d+/.test(line)) return "text-[#79C0FF]";
  return "text-[#8B949E]";
}

export function CodePreview({ lines }: CodePreviewProps) {
  return (
    <div className="h-full w-full bg-[#0D1117] p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1F1F1F]">
        <Code className="h-3 w-3 text-[#00F5A0]" />
        <span className="text-[10px] text-[#71717A]">src/app/page.tsx</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre">
          <span className="text-[#484F58] select-none w-5 sm:w-6 inline-block text-right mr-2 sm:mr-3">
            {i + 1}
          </span>
          <span className={lineColor(line)}>{line}</span>
        </div>
      ))}
    </div>
  );
}
