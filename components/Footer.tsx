import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2C4C] text-[#F1EDE3] py-16 sm:py-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image
              src="/logo_white.png"
              alt="Devine Medical Group"
              width={200}
              height={56}
              className="h-11 sm:h-12 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-[#F1EDE3]/60 max-w-[320px]">
              Delivering compassionate & excellent healthcare to Mt Darwin and
              surrounding areas since 2010.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-sm font-medium text-white/50">Navigate</p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F1EDE3]/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 lg:col-start-10">
            <p className="text-sm font-medium text-white/50">Contact</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#F1EDE3]/80">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                Corner Kadere and Makina Village, Mt Darwin, Zimbabwe
              </li>
              <li>
                <a
                  href="tel:+263784083740"
                  className="flex items-center gap-2.5 text-sm text-[#F1EDE3]/80 hover:text-white transition-colors duration-300"
                >
                  <Phone
                    size={15}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                  +263 784 083 740
                </a>
              </li>
              <li>
                <a
                  href="mailto:emmanuel.devinemedicalgroup@gmail.com"
                  className="flex items-center gap-2.5 break-all text-sm text-[#F1EDE3]/80 hover:text-white transition-colors duration-300"
                >
                  <Mail
                    size={15}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                  emmanuel.devinemedicalgroup@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F1EDE3]/40">
            © {new Date().getFullYear()} Devine Medical Group. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://tafadzwa.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#F1EDE3]/40 hover:text-white transition-colors duration-300"
            >
              Built by taachii
            </a>

            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[#F1EDE3]/50 hover:text-white transition-colors duration-300"
                  >
                    <Icon
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}