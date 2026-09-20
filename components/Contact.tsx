"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE"; // from web3forms.com
const WHATSAPP_NUMBER = "263784083740";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          phone,
          email,
          message,
          subject: "New enquiry from Devine Medical Group website",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!name || !message) return;
    const text = `Hi Devine Medical Group, my name is ${name}${
      phone ? ` (${phone})` : ""
    }. ${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + direct details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#1D4E89]">
              Get In Touch
            </span>
            <h2
              id="contact-heading"
              className="mt-4 font-serif text-[#0F2C4C] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-tight max-w-[440px]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Contact Information
            </h2>
            <p className="mt-6 text-[#161F2E]/80 text-base sm:text-lg leading-relaxed max-w-[440px]">
              Reach out any time — our emergency care unit is staffed around the clock.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-[#1D4E89] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#161F2E]/60">Address</p>
                  <p className="text-lg font-medium text-[#0F2C4C]">
                    Corner Kadere and Makina Village
                    <br />
                    Mt Darwin, Zimbabwe
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="mt-1 text-[#1D4E89] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#161F2E]/60">Phone</p>
                  
                   <a href="tel:+263784083740"
                    className="text-lg font-medium text-[#0F2C4C] hover:text-[#1D4E89] transition-colors duration-300"
                  >
                    +263 784 083 740
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="mt-1 text-[#1D4E89] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#161F2E]/60">Email</p>
                  
                 <a   href="mailto:info@devinemedicalgroup.org.zw"
                    className="text-lg font-medium text-[#0F2C4C] hover:text-[#1D4E89] transition-colors duration-300"
                  >
                    info@devinemedicalgroup.org.zw
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="mt-1 text-[#1D4E89] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#161F2E]/60">Emergency Care</p>
                  <p className="text-lg font-medium text-[#0F2C4C]">Open 24 hours, every day</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form with dual submit */}
          <motion.form
            onSubmit={handleEmailSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 lg:col-start-7 border border-[#E3DCCF] rounded-[18px] p-8 sm:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#161F2E] mb-2">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-[10px] border border-[#E3DCCF] bg-transparent px-4 py-3 text-[#161F2E] placeholder:text-[#161F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#161F2E] mb-2">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+263 ..."
                  className="w-full rounded-[10px] border border-[#E3DCCF] bg-transparent px-4 py-3 text-[#161F2E] placeholder:text-[#161F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#161F2E] mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-[10px] border border-[#E3DCCF] bg-transparent px-4 py-3 text-[#161F2E] placeholder:text-[#161F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#161F2E] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="w-full rounded-[10px] border border-[#E3DCCF] bg-transparent px-4 py-3 text-[#161F2E] placeholder:text-[#161F2E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D4E89] focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#1D4E89] hover:bg-[#0F2C4C] text-white text-sm sm:text-base font-medium px-6 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send via Email"}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#25D366] hover:bg-[#1DA851] text-white text-sm sm:text-base font-medium px-6 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle size={17} className="flex-shrink-0" aria-hidden="true" />
                Send via WhatsApp
              </button>
            </div>

            {status === "sent" && (
              <p className="mt-4 text-sm text-green-700">
                Message sent — we&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong. Please try WhatsApp or call us directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}