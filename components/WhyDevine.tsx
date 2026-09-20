"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "State-of-the-art technology",
    description:
      "Modern diagnostic and monitoring equipment across our hospital, nursing home, and rehabilitation centre — supporting faster, more accurate care.",
  },
  {
    number: "02",
    title: "Personalised care plans",
    description:
      "No two patients are the same. Our physicians and nursing staff tailor treatment and recovery plans around each individual's needs.",
  },
  {
    number: "03",
    title: "Expert medical professionals",
    description:
      "Led by Dr. Chimanyi and a skilled team including a General Surgeon and experienced nursing staff, caring for our community every day of the year.",
  },
  {
    number: "04",
    title: "Faster recovery, preventative focus",
    description:
      "From our 24-hour Emergency Care Unit to our step-down Rehabilitation Centre, every stage of care is designed to get patients home, well, and staying that way.",
  },
];

export default function WhyDevine() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-16 sm:py-24 lg:py-32 bg-[#F3EEE2] border-t border-[#E3DCCF]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#1D4E89]">
              Why Devine Medical
            </span>
            <h2
              id="why-heading"
              className="mt-4 font-serif text-[#0F2C4C] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-tight max-w-[560px]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Excellence, delivered with care
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 lg:col-start-9 flex items-end"
          >
            <p className="text-[#161F2E]/70 text-base leading-relaxed">
              Trust us with your care, and your family&apos;s care.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 border-t border-l border-[#E3DCCF]">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.1,
                ease: "easeOut",
              }}
              className="border-r border-b border-[#E3DCCF] p-8 sm:p-10 lg:p-12 group"
            >
              <span
                className="font-serif text-[#E8A33D] text-3xl sm:text-4xl inline-block transition-transform duration-300 group-hover:-translate-y-1"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {reason.number}
              </span>
              <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#0F2C4C] tracking-tight">
                {reason.title}
              </h3>
              <p className="mt-3 text-[#161F2E]/70 text-sm sm:text-base leading-relaxed max-w-[380px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
