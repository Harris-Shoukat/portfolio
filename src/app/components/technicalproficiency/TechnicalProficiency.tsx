"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Database, Cpu, } from 'lucide-react';
import { TextAnimate } from "@/components/ui/text-animate";

type Skill = { name: string; percentage: number };
type Group = { 
  title: string; 
  icon: React.ReactNode; 
  skills: Skill[];
  color: string;
};

const skillGroups: Group[] = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-6 h-6" />,
    color: '#b99648',
    skills: [
      { name: 'JavaScript / React', percentage: 88 },
      { name: 'Next.js / TypeScript', percentage: 84 },
    ],
  },
  {
    title: 'Styling & UI',
    icon: <Palette className="w-6 h-6" />,
    color: '#f5f5f5',
    skills: [
      { name: 'HTML / CSS / Tailwind', percentage: 90 },
      { name: 'Responsive Design / UI', percentage: 85 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: <Database className="w-6 h-6" />,
    color: '#b99648',
    skills: [
      { name: 'Supabase', percentage: 82 },
      { name: 'Git / APIs', percentage: 85 },
    ],
  },
  {
    title: 'Design & workflow',
    icon: <Cpu className="w-6 h-6" />,
    color: '#f5f5f5',
    skills: [
      { name: 'Canva', percentage: 86 },
      { name: 'Project Management', percentage: 80 },
    ],
  },
];

const TechnicalProficiency = () => {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden" id="technical-proficiency">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b99648]/30 to-transparent" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#b99648]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#b99648]/5 rounded-full blur-3xl" />

      <div className="w-full max-w-[min(1200px,92vw)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <TextAnimate
            animation="slideUp"
            by="character"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Proficiency
          </TextAnimate>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-1.5 w-24 bg-[#b99648] mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive overview of my technical stack and expertise levels in various domains of software development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-[#2d2d2d]/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#b99648]/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#b99648]/10 rounded-xl text-[#b99648] group-hover:bg-[#b99648] group-hover:text-black transition-all duration-300">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
              </div>

              <div className="space-y-8">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-base font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm font-bold text-[#b99648]">{skill.percentage}%</span>
                    </div>
                    <div className="bg-white/5 rounded-full h-3 w-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (skillIndex * 0.1) }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, #b99648 0%, #d4b87a 100%)`,
                          boxShadow: '0 0 10px rgba(185, 150, 72, 0.3)'
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
