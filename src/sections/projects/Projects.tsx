import type { FC } from "react";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects: FC = () => (
  <Section
    id="projects"
    title="FEATURED PROJECTS"
    preHeadline="PORTFOLIO"
    desc="A selection of projects showcasing my expertise in building scalable, performant, and user-centric applications."
  >
    <div className="projects">
      {projects.map(
        (
          { title, description, image, techStack, liveUrl, sourceUrl },
          index
        ) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            image={image}
            techStack={techStack}
            liveUrl={liveUrl}
            sourceUrl={sourceUrl}
            index={index}
          />
        )
      )}
    </div>
  </Section>
);
