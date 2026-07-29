"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Check } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const fields = [
  { key: "name" as const, label: "Name", type: "text" },
  { key: "email" as const, label: "Email", type: "email" },
];

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ name: "", email: "", message: "" });
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

  const inputClass = (key: string) =>
    `peer w-full rounded-lg border bg-[#0A0A0A] px-3 py-2.5 pt-5 text-sm text-[#FAFAFA] transition-all outline-none ${
      focused === key
        ? "border-[#00F5A0] ring-1 ring-[#00F5A0]/30"
        : "border-[#1F1F1F] hover:border-[#333]"
    }`;

  const labelClass = (key: string) =>
    `absolute left-3 transition-all pointer-events-none ${
      formState[key as keyof FormState] || focused === key
        ? "top-1 text-[10px] text-[#00F5A0]"
        : "top-2.5 text-sm text-[#71717A]"
    }`;

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
              className={inputClass(key)}
              placeholder=" "
              required
            />
            <label htmlFor={key} className={labelClass(key)}>
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
          className={`${inputClass("message")} resize-none`}
          placeholder=" "
          required
        />
        <label htmlFor="message" className={labelClass("message")}>
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
