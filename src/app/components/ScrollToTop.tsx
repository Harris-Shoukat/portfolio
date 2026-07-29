"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";
import { useScrollHysteresis } from "@/hooks/useScrollHysteresis";

export default function ScrollToTop() {
  const visible = useScrollHysteresis(450, 350);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-xl border border-[#1F1F1F] bg-[#111111] text-[#A1A1AA] hover:bg-[#1F1F1F] hover:text-[#FAFAFA] transition-colors sm:bottom-6 sm:right-6 sm:h-10 sm:w-10"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 sm:h-4 sm:w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
