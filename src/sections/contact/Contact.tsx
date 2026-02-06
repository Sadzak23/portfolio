import type { FC } from "react";
import { Section } from "@/components/Section";
import { ContactContent } from "@/sections/contact/ContactContent";

export const Contact: FC = () => (
  <Section
    id="contact"
    title="LET'S CONNECT"
    preHeadline="GET IN TOUCH"
    desc="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
  >
    <ContactContent />
  </Section>
);
