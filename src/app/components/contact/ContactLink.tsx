"use client";

import type { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  iconBg: string;
  hoverBorder: string;
  label: string;
  value: string;
  action: ReactNode;
}

export function ContactLink({ href, icon, iconBg, hoverBorder, label, value, action }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between rounded-xl border border-[#1F1F1F] bg-[#111111] p-4 ${hoverBorder} transition-all`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg} group-hover:bg-opacity-20 transition-colors`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-[#71717A]">{label}</p>
          <p className="text-sm text-[#FAFAFA]">{value}</p>
        </div>
      </div>
      {action}
    </a>
  );
}
