"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import aboutimg from "../../assets/about.jpg";
import styles from "./About.module.css";
import {
  Smartphone,
  Palette,
  Zap,
  Plug,
} from "lucide-react";

const focusAreas = [
  // {
  //   icon: Code2,
  //   title: "Frontend & UI",
  //   text: "Building clean, maintainable interfaces with React and modern JavaScript.",
  // },
  {
    icon: Plug,
    title: "API integration",
    text: "Connecting UIs to REST and GraphQL APIs, auth flows, and robust error handling.",
  },
  {
    icon: Smartphone,
    title: "Web apps",
    text: "Building web applications with React and Next.js—responsive, fast, and scalable.",
  },
  {
    icon: Palette,
    title: "Design to code",
    text: "Turning design concepts into responsive, accessible experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Fast load times and smooth interactions that users notice.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 id="about-heading" className={styles.title}>
            About Me
          </h2>
          <p className={styles.subtitle}>
            I build web apps that look good and feel fast.
          </p>
        </header>

        <div className={styles.layout} ref={contentRef}>
          <div className={styles.imageWrap}>
            <Image
              src={aboutimg}
              alt="Harris Shoukat - Frontend Developer"
              width={aboutimg.width}
              height={aboutimg.height}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            <p className={styles.lead}>
              I&apos;m a{" "}
              <strong className={styles.role}>Frontend Developer</strong> who
              builds fast, scalable interfaces and connects them to the
              backend. I ship clean UIs with React and React Native, wire up
              REST and GraphQL APIs, handle auth and state, and care about
              performance and accessibility. From design to deployment, I focus
              on code that works well and is easy to maintain.
            </p>

            <div className={styles.focus}>
              <span className={styles.focusLabel}>What I focus on</span>
              <ul className={styles.focusList}>
                {focusAreas.map((item) => (
                  <li key={item.title} className={styles.focusItem}>
                    <item.icon className={styles.focusIcon} aria-hidden />
                    <div>
                      <span className={styles.focusTitle}>{item.title}</span>
                      <p className={styles.focusText}>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
