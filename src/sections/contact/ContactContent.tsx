"use client";

import { useState, type ChangeEvent, type FC } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { TextareaInput } from "@/components/TextareaInput";
import { socialLinks } from "@/data/contacts";
import { toast, ToastContainer } from "react-toastify";

export const ContactContent: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Thanks for reaching out. I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send your message.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact__content">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="flex column gap-4">
          <TextInput
            label="Name"
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextareaInput
            label="Message"
            id="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send />
              </>
            )}
          </Button>
        </form>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="contact__info"
      >
        <div className="contact__info-card">
          <h3 className="contact__info-title">Let's Build Something</h3>
          <p className="contact__info-text">
            I'm currently open to new opportunities and exciting projects.
            Whether you need a lead developer, technical consultant, or just
            want to chat about React architecture—reach out!
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon--lg"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <ToastContainer
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss={false}
        position="top-center"
        // theme={theme === "dark" ? "dark" : "light"}
        theme="colored"
      />
    </div>
  );
};
