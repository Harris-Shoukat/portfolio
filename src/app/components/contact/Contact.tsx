"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-[#00F5A0]" />
          <span className="text-[#00F5A0]">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const fields = [
    { key: "name" as const, label: "Name", type: "text" },
    { key: "email" as const, label: "Email", type: "email" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {fields.map(({ key, label, type }) => (
          <div key={key} className="relative">
            <input
              id={key}
              type={type}
              value={formState[key]}
              onChange={(e) => setFormState((prev) => ({ ...prev, [key]: e.target.value }))}
              onFocus={() => setFocused(key)}
              onBlur={() => setFocused(null)}
              className={`peer w-full rounded-lg border bg-[#0A0A0A] px-3 py-2.5 pt-5 text-sm text-[#FAFAFA] transition-all outline-none ${
                focused === key
                  ? "border-[#00F5A0] ring-1 ring-[#00F5A0]/30"
                  : "border-[#1F1F1F] hover:border-[#333]"
              }`}
              placeholder=" "
              required
            />
            <label
              htmlFor={key}
              className={`absolute left-3 transition-all pointer-events-none ${
                formState[key] || focused === key
                  ? "top-1 text-[10px] text-[#00F5A0]"
                  : "top-2.5 text-sm text-[#71717A]"
              }`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>

      <div className="relative">
        <textarea
          id="message"
          value={formState.message}
          onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          rows={3}
          className={`peer w-full rounded-lg border bg-[#0A0A0A] px-3 py-2.5 pt-5 text-sm text-[#FAFAFA] transition-all outline-none resize-none ${
            focused === "message"
              ? "border-[#00F5A0] ring-1 ring-[#00F5A0]/30"
              : "border-[#1F1F1F] hover:border-[#333]"
          }`}
          placeholder=" "
          required
        />
        <label
          htmlFor="message"
          className={`absolute left-3 transition-all pointer-events-none ${
            formState.message || focused === "message"
              ? "top-1 text-[10px] text-[#00F5A0]"
              : "top-2.5 text-sm text-[#71717A]"
          }`}
        >
          Project Brief
        </label>
      </div>

      <motion.button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#00F5A0] px-4 py-2.5 text-sm font-semibold text-[#0A0A0A] hover:bg-[#00F5A0]/90 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={sent}
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" />
            Sent!
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-[#00F5A0] opacity-[0.03] blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-sm font-medium text-[#71717A] tracking-wide uppercase mb-3 font-mono">
            {'<contact />'}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Let&apos;s assemble something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#4F46E5]">
              exceptional
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-[#71717A] max-w-xl mx-auto">
            Have a project in mind? Let&apos;s talk about building something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="mailto:harrisshaukat3@gmail.com"
              className="group flex items-center justify-between rounded-xl border border-[#1F1F1F] bg-[#111111] p-4 hover:border-[#00F5A0]/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F5A0]/10 group-hover:bg-[#00F5A0]/20 transition-colors">
                  <Mail className="h-4 w-4 text-[#00F5A0]" />
                </div>
                <div>
                  <p className="text-xs text-[#71717A]">Email</p>
                  <p className="text-sm text-[#FAFAFA]">harrisshaukat3@gmail.com</p>
                </div>
              </div>
              <CopyButton text="harrisshaukat3@gmail.com" />
            </a>

            <a
              href="https://github.com/Harris-Shoukat"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-[#1F1F1F] bg-[#111111] p-4 hover:border-[#4F46E5]/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F46E5]/10 group-hover:bg-[#4F46E5]/20 transition-colors">
                  <Github className="h-4 w-4 text-[#4F46E5]" />
                </div>
                <div>
                  <p className="text-xs text-[#71717A]">GitHub</p>
                  <p className="text-sm text-[#FAFAFA]">@Harris-Shoukat</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/harris-shoukat134/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-[#1F1F1F] bg-[#111111] p-4 hover:border-[#F59E0B]/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F59E0B]/10 group-hover:bg-[#F59E0B]/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs text-[#71717A]">LinkedIn</p>
                  <p className="text-sm text-[#FAFAFA]">Harris Shoukat</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-xl border border-[#1F1F1F] bg-[#111111] p-5 sm:p-6"
          >
            <h3 className="text-base font-semibold text-[#FAFAFA] mb-5">
              Send a message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
