"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about__header"
        >
          <p className="pre-headline">The Journey</p>
          <h2>ABOUT ME</h2>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about__story"
        >
          <div className="about__story-card">
            <h3 className="about__story-title">THE PIVOT</h3>
            <p className="about__story-text">
              My journey began at DIF (Sports University), where I trained as a
              professional athlete. The discipline, resilience, and competitive
              drive I developed on the field became the foundation for
              everything that followed.
            </p>
            <p className="about__story-text">
              When COVID hit in 2020, the world paused—but I pivoted. What
              started as curiosity about how digital products work evolved into
              an obsession with React and frontend architecture. Late nights
              became coding sessions, athletic training became technical
              training.
            </p>
            <p className="about__story-text">
              Today, I lead frontend teams, architecting high-performance
              applications and mentoring the next generation of developers. The
              athlete's mindset—constant improvement, teamwork, performing under
              pressure—translates perfectly to engineering leadership.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
