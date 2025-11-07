"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import img from "../assets/logoremovebg.png";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#212121] z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={img.src}
            alt="Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[180px] w-auto h-auto object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
