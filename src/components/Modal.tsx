"use client";

import type { FC, ReactNode } from "react";
import { Button } from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { X, type LucideIcon } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
}

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  description,
  icon: Icon,
  children,
}) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal__backdrop"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="modal__container"
        >
          {/* Header */}
          <div className="modal__header">
            {Icon && (
              <div className="modal__icon">
                <Icon />
              </div>
            )}
            <div className="flex center column">
              <h2 className="modal__title">{title}</h2>
              <p className="modal__subtitle c-primary">{description}</p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="modal__close btn-ghost btn--icon"
          >
            <X />
          </button>

          {/* Content */}
          <div className="modal__body">{children}</div>

          {/* Footer */}
          <div className="modal__footer">
            <Button
              label="Close"
              onClick={onClose}
              variant="outlined"
              size="s"
            />
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
