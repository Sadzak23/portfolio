import type { FC } from "react";
import { Section } from "@/components/Section";
import { AboutStory } from "@/sections/about/AboutStory";

export const About: FC = () => (
  <Section id="about" title="ABOUT ME" preHeadline="The Journey">
    <AboutStory />
  </Section>
);
