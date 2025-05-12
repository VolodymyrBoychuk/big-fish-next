// components/AnimatedLayout.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // змінюється при переходах

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ position: "absolute", width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
