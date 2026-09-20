"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is emergency care really available 24/7?",
    answer:
      "Yes. Our 24-Hour Emergency Care Unit provides immediate medical attention around the clock, every day of the year, including public holidays.",
  },
  {
    question: "What kind of care does the hospital provide?",
    answer:
      "Devine Medical Centre is a 23-bed facility for acute and continuous care, with a Male Ward and Female Ward (10 beds each) for medical and surgical care, a 2-bed Pediatric Ward for children, and an Operating Theatre for minor general surgeries.",
  },
  {
    question: "What does the Nursing Home offer?",
    answer:
      "Devine Nursing Home is a 40-bed residential facility: 30 beds provide dedicated nursing care for elderly patients, and 10 beds offer structured nursing care for disabled and mentally ill patients.",
  },
  {
    question: "What happens at the Rehabilitation Centre?",
    answer:
      "It's a step-down facility for patients discharged from hospital who aren't yet fully independent. Patients receive 24-hour nursing care and recovery support before returning home.",
  },
  {
    question: "Who leads the medical team?",
    answer:
      "The hospital is led by Dr. Chimanyi (Physician / Medical Officer), working alongside a General Surgeon and experienced nursing staff who care for the community every day of the year.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 lg:py-32 bg-[#F3EEE2] border-t border-[#E3DCCF]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#1D4E89]">
                FAQ
              </span>
              <h2
                id="faq-heading"
                className="mt-4 font-serif text-[#0F2C4C] text-[32px] sm:text-[40px] leading-[1.15] tracking-tight max-w-[320px]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Questions, answered.
              </h2>
              <p className="mt-4 text-[#161F2E]/70 text-base leading-relaxed max-w-[300px]">
                Can&apos;t find what you&apos;re looking for? Message us
                directly on WhatsApp.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`${i !== 0 ? "border-t" : ""} border-[#E3DCCF]`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#0F2C4C]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex-shrink-0 text-[#1D4E89]"
                    >
                      <Plus
                        size={20}
                        aria-hidden="true"
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[#161F2E]/75 text-base leading-relaxed max-w-[560px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
