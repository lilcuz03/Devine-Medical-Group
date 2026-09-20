"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Why Us", href: "why" },
  { label: "Facilities", href: "facilities" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href),
    ).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F1]/90 backdrop-blur-md border-b border-[#E3DCCF] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-[1240px] mx-auto flex items-center justify-between px-5 sm:px-8"
      >
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Devine Medical Group"
            width={200}
            height={56}
            priority
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-8 sm:h-9" : "h-10 sm:h-12"
            }`}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  className="relative text-sm font-medium text-[#161F2E] pb-1 group"
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#E8A33D] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}

        <a
          href="tel:+263784083740"
          className="hidden md:inline-flex items-center gap-2 bg-[#1D4E89] hover:bg-[#0F2C4C] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
        >
          <Phone
            size={15}
            aria-hidden="true"
          />
          Book an Appointment
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-[#0F2C4C]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7F1] border-t border-[#E3DCCF] px-5 py-6">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#161F2E]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+263784083740"
                className="flex items-center justify-center gap-2 bg-[#1D4E89] text-white text-sm font-medium px-6 py-3 rounded-full mt-2"
              >
                <Phone
                  size={15}
                  aria-hidden="true"
                />
                Book an Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}