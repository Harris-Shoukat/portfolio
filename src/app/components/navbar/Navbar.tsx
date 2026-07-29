"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#bento", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized Scroll Handler with RequestAnimationFrame (Throttling)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll on Mobile Menu Open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [menuOpen]);

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
              {/* Logo */}
              <a href="#" className="text-base sm:text-lg font-bold tracking-tight text-[#FAFAFA]">
                Harris<span className="text-[#00F5A0]">.</span>
              </a>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#00F5A0] after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="inline-flex h-9 items-center rounded-lg bg-[#00F5A0] px-4 text-sm font-semibold text-[#0A0A0A] hover:bg-[#00F5A0]/90 transition-colors"
                >
                  Hire Me
                </a>
              </div>

              {/* Mobile Menu Toggle Button */}
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

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-full bg-[#0A0A0A]/90 backdrop-blur-xl flex flex-col items-center justify-center md:hidden z-50"
          >
            <button
              className="absolute top-6 right-6 text-[#FAFAFA] p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] rounded-md"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-2xl text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-[#00F5A0] px-8 text-base font-semibold text-[#0A0A0A] hover:bg-[#00F5A0]/90 transition-colors"
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}