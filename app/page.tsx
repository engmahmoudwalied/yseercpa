"use client"

import {
  HeroSection,
  StatsStrip,
  AboutSection,
  StandardsSection,
  ServicesSection,
  WhySection,
  PartnersSection,
  ContactSection,
} from "@/components/site"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* 1. Hero with headline "نجاح أعمالك يبدأ من وضوح أرقامك" and geometric emblem */}
      <HeroSection />

      {/* 2. Stats & metrics bar: 200+ تقارير مهنية, 100+ عميل وشريك, etc. */}
      <StatsStrip />

      {/* 3. About Us ("عن يسير") with Vision, Mission, and profile visual */}
      <AboutSection />

      {/* 4. Standards ("معاييرنا") 1 through 7 */}
      <StandardsSection />

      {/* 5. Services ("خدماتنا") 8 cards with icons and exact copy */}
      <ServicesSection />

      {/* 6. Why Yseer ("لماذا يسير؟") with quotation mark */}
      <WhySection />

      {/* 7. Partners in success ("شركاؤنا في النجاح") carousel */}
      <PartnersSection />

      {/* 8. Contact Us ("تواصل معنا") with quote form and location map */}
      <ContactSection />
    </main>
  )
}
