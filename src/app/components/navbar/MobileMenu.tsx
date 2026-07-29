"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { NavLink } from "./NavLink";

interface MobileMenuProps {
  open: boolean;
  links: readonly { href: string; label: string }[];
  onClose: () => void;
}

export function MobileMenu({ open, links, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 w-full h-full bg-[#0A0A0A]/90 backdrop-blur-xl flex flex-col items-center justify-center md:hidden z-50"
        >
          <button
            className="absolute top-6 right-6 text-[#FAFAFA] p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] rounded-md"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                variant="mobile"
                delay={i * 0.05}
                onClick={onClose}
              />
            ))}
            <motion.a
              href="#contact"
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: links.length * 0.05 }}
              className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-[#00F5A0] px-8 text-base font-semibold text-[#0A0A0A] hover:bg-[#00F5A0]/90 transition-colors"
            >
              Hire Me
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
