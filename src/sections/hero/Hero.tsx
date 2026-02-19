import type { FC } from "react";
import { HeroContent } from "@/sections/hero/HeroContent";

export const Hero: FC = () => (
  <section id="hero" className="hero-section">
    <div className="absolute inset-0 hero-overlay" />
    <HeroContent />
  </section>
);
