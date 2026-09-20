"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    number: "01",
    title: "Devine Medical Centre",
    since: "Since 2010",
    description:
      "A 23-bed hospital facility equipped for acute and continuous care.",
    items: [
      "24-Hour Emergency Care Unit",
      "Operating Theatre — 1 bed for minor general surgeries",
      "Male Ward — 10 beds (medical & surgical care)",
      "Female Ward — 10 beds (medical & surgical care)",
      "Pediatric Ward — 2 beds dedicated to children",
    ],
    image: "/hospital_ward.jpg",
  },
  {
    number: "02",
    title: "Devine Nursing Home",
    since: "Since 2015",
    description:
      "A specialised 40-bed residential facility designed to support specific long-term care needs.",
    items: [
      "30 beds — dedicated, compassionate nursing care for the elderly",
      "10 beds — structured nursing care for disabled and mentally ill patients",
    ],
    image: "/senior_man_and_caregiver.jpg",
  },
  {
    number: "03",
    title: "Devine Rehabilitation Centre",
    since: "Since 2012",
    description:
      "A step-down facility for patients discharged from hospital who are not yet fully independent and require 24-hour nursing care during their recovery.",
    items: [
      "24-hour nursing care",
      "Dedicated recovery support before returning home",
    ],
    image: "/physiotherapy_recovery.jpg",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="py-16 sm:py-24 lg:py-32 bg-[#0F2C4C]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#E8A33D]">
          Our Facilities & Services
        </span>
        <motion.h2
          id="facilities-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 font-serif text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-tight max-w-[640px]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          A full continuum of care, close to home
        </motion.h2>

        <div className="mt-16 sm:mt-20">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start py-10 sm:py-14 ${
                i !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:col-start-8 lg:order-2" : "lg:col-start-1"
                }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${
                  i % 2 === 1 ? "lg:col-start-1 lg:order-1" : "lg:col-start-7"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-serif text-[#E8A33D] text-lg"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {facility.number}
                  </span>
                  <span className="text-xs text-white/50">{facility.since}</span>
                </div>

                <h3
                  className="mt-2 font-serif text-white text-2xl sm:text-3xl tracking-tight"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {facility.title}
                </h3>

                <p className="mt-4 text-[#F1EDE3]/75 text-base sm:text-lg leading-relaxed max-w-[480px]">
                  {facility.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {facility.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#F1EDE3]/80"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E8A33D] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Emergency unit — listed as its own item on the original site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-t border-white/10 pt-10 sm:pt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <div>
              <h3
                className="font-serif text-white text-xl sm:text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                24-Hour Emergency Care Unit
              </h3>
              <p className="mt-2 text-[#F1EDE3]/70 text-base max-w-[480px]">
                Immediate medical attention around the clock, every day of
                the year.
              </p>
            </div>
            
            <a  href="tel:+263784083740"
              className="inline-flex items-center justify-center bg-white text-[#0F2C4C] font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              +263 784 083 740
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}