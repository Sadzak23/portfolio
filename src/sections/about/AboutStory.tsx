"use client";

import { useState, type FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { AboutModal } from "@/sections/about/AboutModal";
import { storyShort } from "@/data/story";

export const AboutStory: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="story"
      >
        <div className="story__card flex column gap-4">
          <h4 className="c-primary">THE PIVOT</h4>
          <p>{storyShort}</p>
          <Button
            label="Get to know me"
            icon={ArrowRight}
            onClick={() => setIsOpen(true)}
            variant="outlined"
            size="s"
          />
        </div>
      </motion.div>
      <AboutModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
