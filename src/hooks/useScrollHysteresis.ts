"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollHysteresis(showAt = 450, hideAt = 350) {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setVisible((prev) => {
            if (prev && scrollY < hideAt) return false;
            if (!prev && scrollY > showAt) return true;
            return prev;
          });
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAt, hideAt]);

  return visible;
}
