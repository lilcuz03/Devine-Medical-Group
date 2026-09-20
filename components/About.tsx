"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 lg:col-start-1"
          >
            <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden">
              <Image
                src="/cheerful_doctor.jpg"
                alt="A Devine Medical Group nurse caring for a patient"
                fill
                className="object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 lg:col-start-7 lg:pt-16"
          >
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#1D4E89]">
              About Us & Medical Leadership
            </span>

            <h2
              id="about-heading"
              className="mt-4 font-serif text-[#0F2C4C] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-tight max-w-[600px]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Founded in 2010, built on trust
            </h2>

            <p className="mt-6 text-[#161F2E]/80 text-base sm:text-lg leading-relaxed max-w-[540px]">
              Devine Medical Group is committed to providing high-quality,
              comprehensive medical services to Mt Darwin and surrounding areas.
              What began as a single hospital has grown into a full continuum of
              care for our community.
            </p>

            <p className="mt-5 text-[#161F2E]/80 text-base sm:text-lg leading-relaxed max-w-[540px]">
              Our hospital is proudly led by{" "}
              <strong className="font-medium text-[#0F2C4C]">
                Dr. Chimanyi (Physician / Medical Officer)
              </strong>
              , working alongside a skilled medical team including a General
              Surgeon and experienced Nursing Staff.
            </p>

            <div className="mt-8 pt-8 border-t border-[#E3DCCF]">
              <p className="text-base text-[#161F2E]/70 leading-relaxed max-w-[480px]">
                A dedicated team of physicians, surgeons, and nurses caring for
                our community every day of the year.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
