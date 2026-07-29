import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F1F1F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-sm font-bold text-[#FAFAFA]">
            Harris<span className="text-[#00F5A0]">.</span>
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Harris-Shoukat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harris-shoukat134/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:harrisshaukat3@gmail.com"
              className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-xs text-[#71717A]">
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
