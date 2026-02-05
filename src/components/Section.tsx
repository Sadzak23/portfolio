import { SectionHeader } from "@/components/SectionHeader";
import type { FC, ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  preHeadline?: string;
  desc?: string;
  children?: ReactNode;
}

export const Section: FC<Props> = ({ id, children, ...rest }) => (
  <section id={id} className="section">
    <SectionHeader {...rest} />
    {children}
  </section>
);
