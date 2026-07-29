"use client";

import { motion } from "motion/react";

interface NavLinkProps {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  delay?: number;
  onClick?: () => void;
}

export function NavLink({ href, label, variant = "desktop", delay = 0, onClick }: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        className="text-2xl text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
      >
        {label}
      </motion.a>
    );
  }

  return (
    <a
      href={href}
      className="relative text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#00F5A0] after:transition-all hover:after:w-full"
    >
      {label}
    </a>
  );
}
