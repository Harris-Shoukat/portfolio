"use client";

import { motion } from "motion/react";

interface SkillBarProps {
  name: string;
  pct: number;
  color: string;
  delay?: number;
}

export function SkillBar({ name, pct, color, delay = 0 }: SkillBarProps) {
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
