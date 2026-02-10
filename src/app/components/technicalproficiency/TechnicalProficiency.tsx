"use client";

import React, { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 95 },
  { name: 'TailwindCSS', percentage: 85 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'ReactJS', percentage: 85 },
  { name: 'NextJS', percentage: 85 },
  { name: 'UI/UX', percentage: 80 },
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
      <div className="md:max-w-[60%] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#f5f5f5' }}>Proficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6 ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm font-semibold text-white">{skill.percentage}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-4 relative">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: hasAnimated ? `${skill.percentage}%` : '0%',
                    background: `linear-gradient(to right, #f5f5f5 10%, #b99648 60%)`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
