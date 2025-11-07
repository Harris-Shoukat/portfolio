// src/components/Experience.tsx
import React from "react";
import styles from "./Experience.module.css";
import StatsContainer from "./StatsContainer";
import { TextAnimate } from "@/components/ui/text-animate";
import { SkillsetReel } from "../skillsetreel/SkillsetReel";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.content}>
        <TextAnimate
          animation="slideUp"
          by="character"
          className={styles.title}
        >
          Experience
        </TextAnimate>

        {/* Stats come first */}
        <StatsContainer styles={styles} />

        {/* SkillsetReel comes directly below */}
        <div className={styles.skillsetContainer}>
          <SkillsetReel />
        </div>
      </div>
    </section>
  );
}