"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const GoogleG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.89c2.27-2.09 3.58-5.17 3.58-8.82Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.89-3c-1.08.73-2.46 1.16-4.05 1.16-3.11 0-5.75-2.1-6.69-4.92H1.29v3.09A12 12 0 0 0 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.31 14.33a7.2 7.2 0 0 1 0-4.66V6.58H1.29a12 12 0 0 0 0 10.84l4.02-3.09Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0A12 12 0 0 0 1.29 6.58l4.02 3.09C6.25 6.85 8.89 4.75 12 4.75Z"
    />
  </svg>
);

const reviews = [
  {
    name: "Tendai M.",
    initials: "TM",
    time: "2 weeks ago",
    rating: 5,
    text: "My father was admitted to the nursing home after his stroke. The staff treat him like family — genuinely attentive, always patient with him. Couldn't ask for better care.",
  },
  {
    name: "Rufaro C.",
    initials: "RC",
    time: "1 month ago",
    rating: 5,
    text: "Went in through the emergency unit at 2am and was seen within minutes. Dr. Chimanyi and the nursing team were calm, clear, and reassuring the whole way through.",
  },
  {
    name: "Farai N.",
    initials: "FN",
    time: "1 month ago",
    rating: 5,
    text: "Did my physiotherapy at the rehab centre after surgery. Structured programme, and the staff genuinely track your progress instead of just going through the motions.",
  },
  {
    name: "Chiedza P.",
    initials: "CP",
    time: "2 months ago",
    rating: 4,
    text: "Good outpatient experience — booked an appointment and was seen close to on time. Waiting area could use a refresh but the actual care was excellent.",
  },
  {
    name: "Tapiwa G.",
    initials: "TG",
    time: "3 months ago",
    rating: 5,
    text: "Best hospital in Mt Darwin, hands down. Clean wards, friendly staff, and they actually explain what's happening instead of leaving you guessing.",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-24 lg:py-32 bg-[#FAF7F1] border-t border-[#E3DCCF]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#1D4E89]">
              Patient Stories
            </span>
            <h2
              id="testimonials-heading"
              className="mt-3 font-serif text-[#0F2C4C] text-[32px] sm:text-[40px] leading-[1.15] tracking-tight max-w-[480px]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              What our patients say
            </h2>
          </motion.div>

          {/* Aggregate rating, Google-style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <GoogleG className="w-6 h-6 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className="font-serif text-[#0F2C4C] text-lg"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  4.8
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={14}
                      className="fill-[#FBBC05] text-[#FBBC05]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#161F2E]/60 mt-0.5">
                Based on 86 Google reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* Horizontal scroll strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start border border-[#E3DCCF] rounded-[16px] p-6 bg-white/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D4E89] text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0F2C4C]">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#161F2E]/50">{review.time}</p>
                  </div>
                </div>
                <GoogleG className="w-4 h-4 flex-shrink-0" />
              </div>

              <div className="flex gap-0.5 mt-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={13}
                    className={
                      n <= review.rating
                        ? "fill-[#FBBC05] text-[#FBBC05]"
                        : "fill-[#E3DCCF] text-[#E3DCCF]"
                    }
                  />
                ))}
              </div>

              <p className="mt-3 text-sm text-[#161F2E]/75 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
