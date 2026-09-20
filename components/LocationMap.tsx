"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <section
      aria-labelledby="map-heading"
      className="pt-16 sm:pt-20 pb-16 sm:pb-24 lg:pb-32 bg-[#FAF7F1]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#1D4E89]">
            Find Us
          </span>
          <h2
            id="map-heading"
            className="mt-3 font-serif text-[#0F2C4C] text-[28px] sm:text-[34px] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Right in the heart of Mt Darwin
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full h-[340px] sm:h-[420px] rounded-[20px] overflow-hidden border border-[#E3DCCF]"
        >
          <iframe
            title="Devine Medical Group location"
            src="https://www.google.com/maps?q=Corner+Kadere+and+Makina+Village,+Mt+Darwin,+Zimbabwe&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-[#FAF7F1] border border-[#E3DCCF] rounded-[14px] px-5 py-4 shadow-lg">
            <p
              className="font-serif text-[#0F2C4C] text-base"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Devine Medical Group
            </p>
            <p className="mt-1 text-sm text-[#161F2E]/70">
              Corner Kadere and Makina Village, Mt Darwin, Zimbabwe
            </p>
            
             <a href="https://www.google.com/maps/dir/?api=1&destination=Corner+Kadere+and+Makina+Village,+Mt+Darwin,+Zimbabwe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#1D4E89] hover:text-[#0F2C4C] transition-colors duration-300"
            >
              Get directions →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}