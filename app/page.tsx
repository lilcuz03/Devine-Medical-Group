import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import LocationMap from "@/components/LocationMap";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import WhyDevine from "@/components/WhyDevine";
export const metadata: Metadata = {
  title: "Home",
  description:
    "Devine Medical Group provides quality hospital care, nursing home services, and rehabilitation in Mt Darwin, Zimbabwe. Book an appointment today.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyDevine />
      <Facilities />
      {/* <Testimonials /> */}
      <Contact />
      <FAQ />
      <LocationMap />
    </>
  );
}
