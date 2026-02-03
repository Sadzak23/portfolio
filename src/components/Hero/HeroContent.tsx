"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { bebasNeue } from "@/utils/fonts";
import { scrollToId } from "@/utils/baseUtils";

export const HeroContent: FC = () => {
  return (
    <div className="hero-content text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="content"
      >
        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="intro c-primary"
        >
          ENGINEERING EXCELLENCE
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${bebasNeue.className}`}
        >
          LEAD FRONTEND
          <br />
          <span className="gradient-primary">DEVELOPER</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="desc"
        >
          From Professional Athlete to Engineering Leader
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            label="Explore My Journey"
            onClick={() => scrollToId("about")}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="scroll-indicator absolute"
      >
        <button
          onClick={() => scrollToId("about")}
          className="scroll-content"
          aria-label="Scroll to next section"
        >
          <span>SCROLL</span>
          <ChevronDown width={24} height={24} />
        </button>
      </motion.div>
    </div>
  );
};
