"use client";

import { useState, useEffect, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { scrollToId } from "@/utils/baseUtils";
import { cv } from "@/data/documents";
import { Button } from "@/components/Button";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToId(href);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`nav ${isScrolled ? "nav--scrolled" : ""}`}
      >
        <div className="nav__container">
          {/* Logo */}
          <button className="nav__logo" onClick={() => scrollToId("hero")}>
            <span className="nav__logo-icon">{`{AS}`}</span>
            ALEKSANDAR
          </button>

          {/* Desktop Navigation */}
          <div className="nav__links">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav__link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="nav__actions">
            <a
              href={cv}
              download
              aria-label="Download CV"
              className="nav__cv-btn"
            >
              <Button
                label="CV"
                icon={Download}
                variant="outlined"
                size="s"
                type="button"
              />
            </a>
            <button
              className="nav__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="nav__mobile-menu"
          >
            <button
              className="nav__mobile-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>

            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="nav__mobile-link"
              >
                {link.label}
              </motion.button>
            ))}

            <a href={cv} download>
              <Button label="Download CV" icon={Download} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
