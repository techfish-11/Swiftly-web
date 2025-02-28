"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import React from "react";

interface ScrollProgressProps {
  className?: string;
  // Add any other props you need
}

export const ScrollProgress = ({ className = "" }: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#0B65FB] via-[#009EF9] to-[#00CFF3]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

ScrollProgress.displayName = "ScrollProgress";
