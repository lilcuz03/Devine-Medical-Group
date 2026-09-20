"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

const stats = [
  { value: "2010", label: "Caring for Mt Darwin since" },
  { value: "23", label: "Hospital beds" },
  { value: "40", label: "Nursing home beds" },
  { value: "24/7", label: "Emergency care" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden"
    >
      <Image
        src="/hero_bg.png"
        alt=""
        fill
        priority
        className="object-cover object-[75%_center] sm:object-[65%_center] lg:object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,44,76,0.15) 0%, rgba(15,44,76,0.35) 45%, rgba(15,44,76,0.88) 100%)",
        }}
      />

      <div className="relative w-full max-w-[1240px] mx-auto px-5 sm:px-8 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[800px]"
        >
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#E8A33D]">
            Mt Darwin, Zimbabwe
          </span>

          <h1
            className="mt-4 font-serif text-white text-[40px] leading-[1.08] sm:text-[56px] lg:text-[72px] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Delivering Compassionate & Excellent Healthcare Since 2010
          </h1>

          <p className="mt-6 text-[#F1EDE3] text-base sm:text-lg leading-relaxed max-w-[560px]">
            Devine Medical Group provides high-quality, comprehensive medical
            services to Mt Darwin and the surrounding community — from emergency
            care to long-term nursing and rehabilitation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="tel:+263784083740"
              className="group inline-flex items-center gap-2.5 bg-white text-[#0F2C4C] font-medium px-7 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone
                size={16}
                aria-hidden="true"
              />
              Call +263 784 083 740
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-white font-medium px-2 py-4 transition-colors duration-300 hover:text-[#E8A33D]"
            >
              Get Directions
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>

        {/* Stat strip — matches the original site's hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-14 sm:mt-16 pb-14 sm:pb-20 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/15 pt-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i > 0 ? "pl-10 border-l border-white/15" : ""}
            >
              <p
                className="font-serif text-white text-3xl sm:text-4xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#F1EDE3]/70 max-w-[130px]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}