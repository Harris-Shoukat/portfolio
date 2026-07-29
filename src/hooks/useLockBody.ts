"use client";

import { useEffect } from "react";

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [locked]);
}
