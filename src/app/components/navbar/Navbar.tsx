"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { useLockBody } from "@/hooks/useLockBody";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScroll(20);

  useLockBody(menuOpen);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`mt-3 rounded-2xl border transition-colors duration-300 ${
              scrolled
                ? "border-[#1F1F1F] bg-[#0A0A0A]/90 backdrop-blur-xl shadow-lg shadow-black/10"
                : "border-transparent bg-transparent"
            }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex h-14 sm:h-16 items-center justify-between px-5 sm:px-6">
              <Logo />

              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>

              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="inline-flex h-9 items-center rounded-lg bg-[#00F5A0] px-4 text-sm font-semibold text-[#0A0A0A] hover:bg-[#00F5A0]/90 transition-colors"
                >
                  Hire Me
                </a>
              </div>

              <button
                className="md:hidden text-[#FAFAFA] p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] rounded-md"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} links={NAV_LINKS} onClose={closeMenu} />
    </>
  );
}
