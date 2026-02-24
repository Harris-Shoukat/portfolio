"use client";

import React, { useEffect, useState, useRef } from 'react';

type Skill = { name: string; percentage: number };
type Group = { groupName: string; skills: Skill[] };

const column1: Group[] = [
  {
    groupName: 'Markup & styling',
    skills: [
      { name: 'HTML / CSS / Tailwind', percentage: 90 },
    ],
  },
  {
    groupName: 'JS / React',
    skills: [
      { name: 'JavaScript / React', percentage: 88 },
    ],
  },
];

const column2: Group[] = [
  {
    groupName: 'Next / TypeScript',
    skills: [
      { name: 'Next.js / TypeScript', percentage: 84 },
    ],
  },
  {
    groupName: 'Tools & practices',
    skills: [
      { name: 'Git / APIs / Responsive / UI', percentage: 85 },
    ],
  },
];

const TechnicalProficiency = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          // Stop observing once animated
          if (currentSectionRef) {
            observer.unobserve(currentSectionRef);
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 10% of the section is visible
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    // Cleanup
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#2d2d2d] text-white" id="technical-proficiency">
      <div className="w-full max-w-[min(1100px,92vw)] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#f5f5f5' }}>Proficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-14 lg:gap-x-16 gap-y-10">
          {[column1, column2].map((column, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {column.map((group) =>
                group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-base font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold text-white/90">{skill.percentage}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3.5 relative overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hasAnimated ? `${skill.percentage}%` : '0%',
                          background: `linear-gradient(to right, #f5f5f5 10%, #b99648 60%)`,
                        }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
