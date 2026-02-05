import heroImage from "@/assets/img/hero-portrait.webp";
import { HeroContent } from "@/sections/hero/HeroContent";
import Image from "next/image";

export const Hero = () => (
  <section className="hero-section">
    <div className="absolute inset-0">
      <Image src={heroImage} alt="Developer portrait" className="hero-img" />
      <div className="absolute inset-0 hero-overlay" />
    </div>
    <HeroContent />
  </section>
);
