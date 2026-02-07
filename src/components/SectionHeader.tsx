"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  preHeadline?: string;
  desc?: string;
}

export const SectionHeader: FC<Props> = ({ title, preHeadline, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="section-header"
  >
    {preHeadline && <p className="pre-headline">{preHeadline}</p>}
    <h2>{title}</h2>
    {desc && <p className="c-text-alt">{desc}</p>}
  </motion.div>
);
