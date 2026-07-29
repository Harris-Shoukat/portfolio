"use client";

import type { ReactNode } from "react";
import { Globe } from "lucide-react";

interface BrowserFrameProps {
  url: string;
  children: ReactNode;
}

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="rounded-lg border border-[#1F1F1F] overflow-hidden bg-[#0A0A0A] shadow-lg shadow-black/20">
      <div className="flex items-center gap-2 border-b border-[#1F1F1F] px-4 py-2.5">
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex justify-center min-w-0 mx-2">
          <div className="flex items-center gap-1.5 rounded-md bg-[#1A1A1A] px-3 py-1 text-[10px] text-[#71717A] truncate max-w-full">
            <Globe className="h-2.5 w-2.5 shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden bg-[#0A0A0A]">
        {children}
      </div>
    </div>
  );
}
