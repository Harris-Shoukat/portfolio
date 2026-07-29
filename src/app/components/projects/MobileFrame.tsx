"use client";

import type { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="flex justify-center py-2">
      <div className="relative w-[180px] sm:w-[200px]">
        <div className="rounded-[2.5rem] border-2 border-[#2A2A2A] overflow-hidden bg-[#0A0A0A] shadow-xl shadow-black/30">
          <div className="flex justify-center pt-2.5 pb-1">
            <div className="h-1.5 w-16 rounded-full bg-[#2A2A2A]" />
          </div>
          <div className="aspect-[9/19] overflow-hidden relative">
            {children}
          </div>
          <div className="flex justify-center pb-2.5 pt-1">
            <div className="h-0.5 w-1 rounded-full bg-[#2A2A2A]" />
          </div>
        </div>
      </div>
    </div>
  );
}
