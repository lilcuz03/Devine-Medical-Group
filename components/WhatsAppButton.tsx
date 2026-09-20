"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, ArrowRight } from "lucide-react";

const SERVICES = ["General Hospital", "Nursing Home", "Rehabilitation Centre", "General Enquiry"];
const WHATSAPP_NUMBER = "263784083740"; // no +, no leading 0

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Devine Medical Group, my name is ${name}. I'd like to enquire about: ${service}.${
      message ? ` ${message}` : ""
    }`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setIsOpen(false);
    setName("");
    setService(SERVICES[0]);
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] bg-[#FAF7F1] border border-[#E3DCCF] rounded-[18px] shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0F2C4C] px-6 py-5">
              <p
                className="font-serif text-white text-lg"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Message us on WhatsApp
              </p>
              <p className="mt-1 text-sm text-[#F1EDE3]/70">
                Tell us a bit about what you need — we typically reply within
                minutes.
              </p>
            </div>

            {/* Emergency callout — separate from the form, always visible */}
            
            <a  href="tel:+263784083740"
              className="flex items-center justify-between gap-3 px-6 py-4 bg-[#E8A33D]/10 border-b border-[#E3DCCF] hover:bg-[#E8A33D]/20 transition-colors duration-300"
            >
              <span className="flex items-center gap-2.5 text-sm font-medium text-[#0F2C4C]">
                <Phone size={16} aria-hidden="true" />
                Medical emergency? Call now
              </span>
              <ArrowRight size={15} className="text-[#0F2C4C]" aria-hidden="true" />
            </a>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              <div>
                <label
                  htmlFor="wa-name"
                  className="block text-xs font-medium text-[#161F2E]/70 mb-1.5"
                >
                  Your name
                </label>
                <input
                  id="wa-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-[10px] border border-[#E3DCCF] bg-white px-3.5 py-2.5 text-sm text-[#161F2E] placeholder:text-[#161F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="wa-service"
                  className="block text-xs font-medium text-[#161F2E]/70 mb-1.5"
                >
                  Which service is this about?
                </label>
                <select
                  id="wa-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-[10px] border border-[#E3DCCF] bg-white px-3.5 py-2.5 text-sm text-[#161F2E] focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="wa-message"
                  className="block text-xs font-medium text-[#161F2E]/70 mb-1.5"
                >
                  Message (optional)
                </label>
                <textarea
                  id="wa-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly, how can we help?"
                  className="w-full rounded-[10px] border border-[#E3DCCF] bg-white px-3.5 py-2.5 text-sm text-[#161F2E] placeholder:text-[#161F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#1D4E89] hover:bg-[#0F2C4C] text-white text-sm font-medium py-3 rounded-full transition-all duration-300"
              >
                Continue on WhatsApp
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={isOpen ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={isOpen}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={26} fill="white" strokeWidth={0} />}
      </motion.button>
    </div>
  );
}