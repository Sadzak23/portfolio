"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  index: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  sourceUrl,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="project-card"
  >
    {/* Image Container */}
    <img src={image} alt={title} className="project-card__image" />

    {/* Content */}
    <div className="project-card__content">
      <div className="flex column gap-3 grow">
        <h4>{title}</h4>
        <p className="project-card__description">{description}</p>
      </div>
      {/* Tech Stack Tags */}
      <div className="flex gap-2 wrap">
        {techStack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      {/* Actions */}
      <div className="flex gap-3">
        {sourceUrl && (
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button label="Code" icon={Github} size="s" variant="outlined" />
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button label="Live Demo" icon={ExternalLink} size="s" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);
