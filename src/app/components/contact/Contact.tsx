"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SOCIAL } from "@/lib/constants";
import { ContactForm } from "./ContactForm";
import { ContactLink } from "./ContactLink";
import { CopyButton } from "./CopyButton";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-[#00F5A0] opacity-[0.03] blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          tag="<contact />"
          title="Let&apos;s assemble something"
          gradient="exceptional"
          suffix="."
          subtitle="Have a project in mind? Let's talk about building something great together."
          mono
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactLink
              href={`mailto:${SOCIAL.email}`}
              icon={<Mail className="h-4 w-4 text-[#00F5A0]" />}
              iconBg="bg-[#00F5A0]/10"
              hoverBorder="hover:border-[#00F5A0]/20"
              label="Email"
              value={SOCIAL.email}
              action={<CopyButton text={SOCIAL.email} />}
            />

            <ContactLink
              href={SOCIAL.github}
              icon={<Github className="h-4 w-4 text-[#4F46E5]" />}
              iconBg="bg-[#4F46E5]/10"
              hoverBorder="hover:border-[#4F46E5]/20"
              label="GitHub"
              value={SOCIAL.githubHandle}
              action={<ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />}
            />

            <ContactLink
              href={SOCIAL.linkedin}
              icon={<Linkedin className="h-4 w-4 text-[#F59E0B]" />}
              iconBg="bg-[#F59E0B]/10"
              hoverBorder="hover:border-[#F59E0B]/20"
              label="LinkedIn"
              value="Harris Shoukat"
              action={<ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />}
            />
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
