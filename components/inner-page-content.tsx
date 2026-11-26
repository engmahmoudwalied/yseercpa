"use client"

import Link from "next/link"
import { ArrowLeft, Check, FileCheck2, Sparkles, Users } from "lucide-react"
import {
  AboutSection,
  AccreditationStrip,
  ContactForm,
  ContactSection,
  FaqSection,
  PageHero,
  PartnersSection,
  SectionHeading,
  ServicesSection,
  StandardsSection,
  WhySection,
} from "@/components/site"
import { useLanguage, tx } from "@/components/language-provider"
import { localizedHref } from "@/lib/seo"

const pages = ["من-نحن", "خدماتنا", "شركاؤنا", "تواصل-معنا", "توظيف"]

export function InnerPageContent({ slug }: { slug: string }) {
  const { language } = useLanguage()
  const t = (ar: string, en: string) => tx(language, ar, en)

  if (!pages.includes(slug)) {
    return (
      <main className="not-found">
        <span className="eyebrow">
          <i /> 404
        </span>
        <h1>{t("الصفحة غير موجودة", "Page not found")}</h1>
        <Link className="button button-primary" href={localizedHref("/", language)}>
          {t("العودة للرئيسية", "Back to home")} <ArrowLeft size={16} />
        </Link>
      </main>
    )
  }

  if (slug === "من-نحن") {
    return (
      <>
        <PageHero
          eyebrow={t("عن يسير", "About Yseer")}
          title={t("نؤمن أن الوضوح يصنع فرقًا.", "We believe clarity makes a difference.")}
          description={t(
            "يسير للاستشارات المهنية شريكك لبناء منظومة مالية أكثر كفاءة وموثوقية.",
            "Yseer Professional Consulting is your partner in building a more efficient and reliable financial function."
          )}
        />
        <AboutSection />
        <StandardsSection />
        <AccreditationStrip />
        <WhySection />
      </>
    )
  }

  if (slug === "خدماتنا") {
    return (
      <>
        <PageHero
          eyebrow={t("خدماتنا", "Our services")}
          title={t("خبرة مالية لكل مرحلة.", "Financial expertise for every stage.")}
          description={t(
            "حلول عملية وواضحة تساعد منشأتك على بناء أساس مالي متين والنمو بثقة.",
            "Clear, practical solutions to build a strong financial foundation and grow with confidence."
          )}
        />
        <ServicesSection />
        <FaqSection />
        <section className="inner-cta">
          <div className="container inner-cta-row">
            <div>
              <span className="eyebrow eyebrow-light">
                <i /> {t("لست متأكدًا من الخدمة؟", "Not sure what you need?")}
              </span>
              <h2>{t("نساعدك تحدد البداية.", "We’ll help you find the right starting point.")}</h2>
            </div>
            <Link className="button button-lime" href={localizedHref("/تواصل-معنا", language)}>
              {t("تحدث مع فريقنا", "Talk to our team")} <ArrowLeft size={17} />
            </Link>
          </div>
        </section>
      </>
    )
  }

  if (slug === "شركاؤنا") {
    return (
      <>
        <PageHero
          eyebrow={t("شركاؤنا", "Our partners")}
          title={t("الثقة تُبنى معًا.", "Trust is built together.")}
          description={t(
            "نؤمن بالشراكات المهنية القائمة على الوضوح والالتزام وتحقيق أثر يدوم.",
            "We believe in professional partnerships built on clarity, commitment and lasting impact."
          )}
        />
        <PartnersSection />
        <section className="inner-section">
          <div className="container partners-page">
            <SectionHeading
              eyebrow={t("شركاء يسير", "Yseer partnerships")}
              title={t("علاقات نعتز بها.", "Relationships we value.")}
              description={t(
                "نعمل مع منشآت وفرق من قطاعات متنوعة، ونبني كل علاقة على فهم الاحتياج وتقديم قيمة عملية.",
                "We work with organizations across industries, building every relationship on a clear understanding of needs and practical value."
              )}
            />
            <div className="partner-categories">
              {[
                {
                  icon: Users,
                  title: "منشآت نامية",
                  titleEn: "Growing businesses",
                  text: "دعم المنظومات المالية للمنشآت في مراحل نموها المختلفة.",
                  textEn: "Supporting financial operations through every stage of business growth.",
                },
                {
                  icon: FileCheck2,
                  title: "جهات مهنية",
                  titleEn: "Professional firms",
                  text: "تعاون مبني على جودة العمل والالتزام بالمعايير.",
                  textEn: "Collaboration grounded in quality and professional standards.",
                },
                {
                  icon: Sparkles,
                  title: "قطاعات متنوعة",
                  titleEn: "Diverse industries",
                  text: "فهم احتياجات متعددة بحلول مرنة ومناسبة.",
                  textEn: "Flexible, relevant solutions shaped around diverse needs.",
                },
              ].map(({ icon: Icon, title, titleEn, text, textEn }) => (
                <article className="partner-category" key={title}>
                  <span>
                    <Icon />
                  </span>
                  <h3>{t(title, titleEn)}</h3>
                  <p>{t(text, textEn)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="inner-cta">
          <div className="container inner-cta-row">
            <div>
              <span className="eyebrow eyebrow-light">
                <i /> {t("انضم إلى شركائنا", "Become a partner")}
              </span>
              <h2>{t("لنصنع أثرًا معًا.", "Let’s create lasting impact together.")}</h2>
            </div>
            <Link className="button button-lime" href={localizedHref("/تواصل-معنا", language)}>
              {t("ابدأ التواصل", "Start a conversation")} <ArrowLeft size={17} />
            </Link>
          </div>
        </section>
      </>
    )
  }

  if (slug === "توظيف") {
    return (
      <>
        <PageHero
          eyebrow={t("التوظيف", "Careers")}
          title={t("مسيرتك المهنية تبدأ من هنا.", "Your career starts here.")}
          description={t(
            "نبحث عن كفاءات طموحة تسهم في تطوير مستقبل المحاسبة والاستشارات.",
            "We’re looking for ambitious professionals ready to shape the future of accounting and consulting."
          )}
        />
        <section className="inner-section">
          <div className="container career-grid">
            <div>
              <SectionHeading
                eyebrow={t("انضم إلى يسير", "Join Yseer")}
                title={t("مكان يقدّر خبرتك ويطوّرها.", "A place to grow your expertise.")}
              />
              <p className="body-copy">
                {t(
                  "إذا كنت شغوفًا بالدقة، وتحب تحويل الأرقام إلى أثر، يسعدنا التعرف عليك. شاركنا خبراتك واهتماماتك وسنتواصل عند توفر فرصة مناسبة.",
                  "If you care about precision and turning numbers into meaningful impact, we’d love to hear from you. Tell us about your experience and interests, and we’ll be in touch when a suitable opportunity arises."
                )}
              </p>
              <div className="career-perks">
                <span>
                  <Check /> {t("بيئة مهنية داعمة", "A supportive professional environment")}
                </span>
                <span>
                  <Check /> {t("فرص للتعلم والتطور", "Opportunities to learn and grow")}
                </span>
                <span>
                  <Check /> {t("عمل يصنع قيمة حقيقية", "Work that creates real value")}
                </span>
              </div>
            </div>
            <div className="contact-form-wrap">
              <div className="form-heading">
                <div>
                  <span className="eyebrow">
                    <i /> {t("طلب توظيف", "Job application")}
                  </span>
                  <h3>{t("عرّفنا بنفسك", "Tell us about yourself")}</h3>
                </div>
                <Users />
              </div>
              <ContactForm hiring />
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow={t("تواصل معنا", "Contact us")}
        title={t("خلّنا نوضح الصورة سوا.", "Let’s bring clarity to your next step.")}
        description={t(
          "شاركنا احتياجك، ونساعدك في تحديد الخطوة المناسبة لمنشأتك.",
          "Tell us what your business needs. We’ll help you identify the right next step."
        )}
      />
      <ContactSection />
    </>
  )
}
