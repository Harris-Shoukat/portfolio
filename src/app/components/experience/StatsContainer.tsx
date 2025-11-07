import React from "react";
import { Calendar, Briefcase, Code } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

interface StatsContainerProps {
  styles: any;
}

const StatsContainer: React.FC<StatsContainerProps> = ({ styles }) => {
  const stats = [
    { icon: <Calendar className={styles.icon} />, number: 1, label: "Years of Experience" },
    { icon: <Briefcase className={styles.icon} />, number: 6, label: "Projects Done", addPlus: true },
    { icon: <Code className={styles.icon} />, number: 900, label: "Hours Coded", addPlus: true },
  ];

  return (
    <div className={styles.statsContainer}>
      {stats.map((item, i) => (
        <div key={i} className={styles.statCard}>
          <div className={styles.iconWrapper}>{item.icon}</div>
          <NumberTicker
            value={item.number}
            addPlus={item.addPlus}
            className={`${styles.statNumber} text-5xl font-semibold text-black`}
          />
          <p className={styles.statLabel}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsContainer;
