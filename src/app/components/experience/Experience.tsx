import React from "react";
import styles from "./Experience.module.css";
import StatsContainer from "./StatsContainer";
import { TextAnimate } from "@/components/ui/text-animate";

function Experience() {
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

        <StatsContainer styles={styles} />
      </div>
    </section>
  );
}

export default Experience;
