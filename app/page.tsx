"use client"

import {
  HeroSection,
  StatsStrip,
  AccreditationStrip,
  AboutSection,
  StandardsSection,
  ServicesSection,
  WhySection,
  PartnersSection,
  FaqSection,
  ContactSection,
} from "@/components/site"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* 1. Hero with headline "نجاح أعمالك يبدأ من وضوح أرقامك" and geometric emblem */}
      <HeroSection />

      {/* 2. Stats & metrics bar: 200+ تقارير مهنية, 100+ عميل وشريك, etc. */}
      <StatsStrip />

      {/* 3. Accreditations & Licenses: SOCPA, ZATCA, IFRS, Ministry of Commerce */}
      <AccreditationStrip />

      {/* 4. About Us ("عن يسير") with Vision, Mission, and profile visual */}
      <AboutSection />

      {/* 5. Standards ("معاييرنا") 1 through 7 */}
      <StandardsSection />

      {/* 6. Services ("خدماتنا") 8 cards with icons and exact copy */}
      <ServicesSection />

      {/* 7. Why Yseer ("لماذا يسير؟") with quotation mark */}
      <WhySection />

      {/* 8. Partners in success ("شركاؤنا في النجاح") carousel */}
      <PartnersSection />

      {/* 9. Frequently Asked Questions ("الأسئلة الشائعة") */}
      <FaqSection />

      {/* 10. Contact Us ("تواصل معنا") with quote form and location map */}
      <ContactSection />
    </main>
  )
}
