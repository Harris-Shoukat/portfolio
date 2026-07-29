"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#bento", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`mt-3 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-[#1F1F1F] bg-[#0A0A0A]/90 backdrop-blur-xl shadow-lg shadow-black/10"
              : "border-transparent bg-transparent"
          }`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex h-14 sm:h-16 items-center justify-between px-5 sm:px-6">
            <a href="#" className="text-base sm:text-lg font-bold tracking-tight text-[#FAFAFA]">
              Harris<span className="text-[#00F5A0]">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#00F5A0] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
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
              className="md:hidden text-[#FAFAFA] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#1F1F1F] px-5 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-9 items-center justify-center rounded-lg bg-[#00F5A0] px-4 text-sm font-semibold text-[#0A0A0A] mt-2"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </nav>
  );
}
