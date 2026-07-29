"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { staggerItem } from "./variants";

interface BentoCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  iconBg?: string;
  className?: string;
  children: ReactNode;
}

export function BentoCard({ icon, title, subtitle, iconBg = "bg-[#00F5A0]/10", className = "", children }: BentoCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={`rounded-2xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#FAFAFA]">{title}</h3>
          {subtitle && <p className="text-[10px] text-[#71717A] font-mono">{subtitle}</p>}
        </div>
      </div>
      {children}
    </motion.div>
  );
}
