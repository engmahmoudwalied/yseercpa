"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { localizedHref } from "@/lib/seo"
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react"
import { tx, useLanguage } from "@/components/language-provider"
import {
  IconFinancialSetup,
  IconZakatTax,
  IconBookkeeping,
  IconAuditAssurance,
  IconFinancialAnalysis,
  IconAccountingSupervision,
  IconGovernance,
  IconAdminSupport,
  IconStatsReports,
  IconStatsClients,
  IconStatsSectors,
  IconStatsVisits,
  IconStatsDecisions,
  IconStatsDevelopment,
  YseerEmblemGraphic,
  LogoLamshNorah,
  LogoAlTabtabaei,
  LogoAfaq,
  LogoAlRoaya,
  LogoTamkeen,
  LogoAlSarh,
  SaudiProfileGraphic,
  OfficialWhatsAppIcon,
} from "@/components/icons"

export const navItems = [
  { label: "الرئيسية", labelEn: "Home", href: "/" },
  { label: "عن يسير", labelEn: "About", href: "/من-نحن" },
  { label: "خدماتنا", labelEn: "Services", href: "/خدماتنا" },
  { label: "شركاؤنا", labelEn: "Partners", href: "/شركاؤنا" },
  { label: "التوظيف", labelEn: "Careers", href: "/توظيف" },
  { label: "تواصل معنا", labelEn: "Contact", href: "/تواصل-معنا" },
]

export const socialLinks = [
  {
    label: "إنستغرام",
    labelEn: "Instagram",
    href: "https://www.instagram.com/yseercpa?igsh=MTR0dnZpNHBrcm4xdg==",
    icon: ({ size = 16 }: { size?: number }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "واتساب",
    labelEn: "WhatsApp",
    href: "https://wa.me/966537177706",
    icon: ({ size = 16 }: { size?: number }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
      </svg>
    ),
  },
  {
    label: "لينكدإن",
    labelEn: "LinkedIn",
    href: "https://www.linkedin.com/company/yseer-cpa/",
    icon: ({ size = 16 }: { size?: number }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "إكس",
    labelEn: "X",
    href: "https://x.com/yseercpa?s=21",
    icon: ({ size = 16 }: { size?: number }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

function navigateToHomeSection(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("/#") || window.location.pathname !== "/") return
  const target = document.getElementById(href.slice(2))
  if (!target) return
  event.preventDefault()
  window.history.pushState(null, "", href)
  target.scrollIntoView({ behavior: "smooth", block: "start" })
}

// Exactly 8 services from Screenshot 3 with exact text
export const services = [
  {
    number: "01",
    title: "التأسيس المالي",
    titleEn: "Financial Setup",
    description:
      "بناء الأنظمة المحاسبية وتأسيس شجرة الحسابات وبناء الإجراءات المالية للمنشأة وتدريب الموظفين على العمل عليها.",
    descriptionEn:
      "Building accounting systems, designing the chart of accounts, establishing financial procedures, and training staff on their execution.",
    icon: IconFinancialSetup,
  },
  {
    number: "02",
    title: "الزكاة والضريبة",
    titleEn: "Zakat & Tax",
    description:
      "التسجيل وإلغاء التسجيل في هيئة الزكاة والضريبة والجمارك والعمل على إغلاق ورفع الإقرارات الضريبية لكل ربع مالي حسب معايير هيئة الزكاة والدخل، وتقديم الاعتراضات والمتابعة في النزاعات الزكوية والضريبية.",
    descriptionEn:
      "Registration and deregistration with ZATCA, filing quarterly returns according to standards, handling objections, and following up on Zakat and tax disputes.",
    icon: IconZakatTax,
  },
  {
    number: "03",
    title: "مسك دفاتر",
    titleEn: "Bookkeeping",
    description:
      "تسجيل القيود اليومية وأرشفة المستندات المالية ورقياً وإلكترونياً لدى المنشأة على النظام المالي المحدد.",
    descriptionEn:
      "Daily journal entries and organized physical and electronic archiving of financial records on your specified accounting system.",
    icon: IconBookkeeping,
  },
  {
    number: "04",
    title: "المراجعة والتدقيق",
    titleEn: "Audit & Assurance",
    description:
      "التدقيق والمراجعة لمهام مالية لفترة سابقة وإصدار تقرير محاسبي مفصل لتحليل البيانات واتخاذ القرارات.",
    descriptionEn:
      "Auditing and reviewing financial tasks for past periods, issuing detailed accounting reports to analyze data and guide decisions.",
    icon: IconAuditAssurance,
  },
  {
    number: "05",
    title: "التحليل المالي",
    titleEn: "Financial Analysis",
    description:
      "في هذه الخدمة يتم معالجة البيانات المالية للمنشأة بهدف حصولها على معلومات تساعدها في اتخاذ القرارات وتقييم الأداء في الماضي والحاضر والتنبؤ فيما ستكون عليه بالمستقبل.",
    descriptionEn:
      "Processing financial data to extract actionable intelligence that aids decision-making, evaluates past and present performance, and forecasts future outcomes.",
    icon: IconFinancialAnalysis,
  },
  {
    number: "06",
    title: "الإشراف المحاسبي",
    titleEn: "Accounting Supervision",
    description:
      "في هذه الخدمة نقوم بالإشراف على المحاسبين الخاصين بالمنشأة ومتابعة أعمالهم وسيرها بالشكل الصحيح لتقديم التقارير خالية من الأخطاء.",
    descriptionEn:
      "Supervising the company's in-house accountants, overseeing their workflow to ensure proper execution and error-free reporting.",
    icon: IconAccountingSupervision,
  },
  {
    number: "07",
    title: "الحوكمة",
    titleEn: "Governance",
    description:
      "تقدم خدمات الحوكمة لبناء أنظمة داخلية فعالة تضمن الشفافية، وضبط الصلاحيات، وتقليل المخاطر التشغيلية. نساعدك في تصميم السياسات والإجراءات الهيكل التنظيمي، وضوابط الامتثال لتأسيس كيان منظم ومستدام.",
    descriptionEn:
      "Governance services to establish internal controls ensuring transparency, defining authority, and mitigating operational risks. We help design organizational structures, policies, and compliance controls.",
    icon: IconGovernance,
  },
  {
    number: "08",
    title: "الدعم الإداري",
    titleEn: "Administrative Support",
    description:
      "تقدم خدمات الحوكمة لبناء أنظمة داخلية فعالة تضمن الشفافية، وضبط الصلاحيات، وتقليل المخاطر التشغيلية. نساعدك في تصميم السياسات والإجراءات الهيكل التنظيمي، وضوابط الامتثال لتأسيس كيان منظم ومستدام.",
    descriptionEn:
      "Streamlining administrative functions and building clear operational procedures that support business growth, team productivity, and sustainable organization.",
    icon: IconAdminSupport,
  },
]

// Stats strip items from Screenshot 1
export const statsData = [
  { number: "200+", labelAr: "تقارير مهنية", labelEn: "Professional Reports", icon: IconStatsReports },
  { number: "100+", labelAr: "عميل وشريك", labelEn: "Clients & Partners", icon: IconStatsClients },
  { number: "20+", labelAr: "قطاع متنوع", labelEn: "Diverse Sectors", icon: IconStatsSectors },
  { number: "50+", labelAr: "زيارات ميدانية", labelEn: "Field Visits", icon: IconStatsVisits },
  { number: "100+", labelAr: "قرارات مدعومة", labelEn: "Supported Decisions", icon: IconStatsDecisions },
  { number: "500+", labelAr: "توصيات تطوير", labelEn: "Improvement Recommendations", icon: IconStatsDevelopment },
]

// Standards from Screenshots 1 & 3
export const standardsData = [
  { num: "01", textAr: "نلتزم بأعلى معايير الاستقلالية المهنية", textEn: "Upholding the highest standards of professional independence" },
  { num: "02", textAr: "نحافظ على الحياد والموضوعية في كل تقرير", textEn: "Maintaining impartiality and objectivity in every report" },
  { num: "03", textAr: "نحرص على النزاهة والدقة في جميع البيانات", textEn: "Ensuring integrity and precision in all data and records" },
  { num: "4", textAr: "نسعى لتحقيق قيمة مستدامة لعملائنا", textEn: "Striving to deliver sustainable, long-term value for our clients" },
  { num: "5", textAr: "نركز على تحقيق أعلى معايير جودة الأداء", textEn: "Focusing on the highest benchmarks of performance quality" },
  { num: "6", textAr: "نعمل على تطوير القدرات المهنية بشكل مستمر", textEn: "Continuously advancing our professional expertise and capabilities" },
  { num: "7", textAr: "نبني علاقات طويلة الأمد قائمة على الثقة", textEn: "Building long-term relationships grounded in mutual trust" },
]

// Brand Logo that switches dynamically between Arabic and English
export function BrandLogo({ language, isFooter = false }: { language: "ar" | "en"; isFooter?: boolean }) {
  if (language === "ar") {
    return (
      <span className={`brand-arabic-lockup ${isFooter ? "brand-arabic-footer" : ""}`} dir="ltr">
        <Image
          className="brand-arabic-script"
          src="/yseer-arabic-script.png"
          alt="يسير للاستشارات المهنية"
          width={105}
          height={40}
          priority
        />
        <Image
          className="brand-english-symbol"
          src="/yseer-mark.png"
          alt="شعار يسير"
          width={38}
          height={34}
          priority
        />
      </span>
    )
  }

  return (
    <span className={`brand-english ${isFooter ? "brand-english-footer" : ""}`} dir="ltr">
      <Image
        className="brand-english-symbol"
        src="/yseer-mark.png"
        alt="Yseer Symbol"
        width={38}
        height={34}
        priority
      />
      <span className="brand-english-copy">
        <strong>YSEER</strong>
        <small>Professional Consulting</small>
      </span>
    </span>
  )
}

// Site Header with responsive menu, social icons, language toggle, and theme switch
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const { language, toggleLanguage } = useLanguage()
  const pathname = usePathname() || "/"

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const saved = localStorage.getItem("yseer-theme") as "light" | "dark" | null
    const initial = saved || (isDark ? "dark" : "light")
    document.documentElement.dataset.theme = initial
    setTheme(initial)
  }, [])

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem("yseer-theme", nextTheme)
    setTheme(nextTheme)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href={localizedHref("/", language)}
          aria-label={tx(language, "يسير للاستشارات المهنية - الصفحة الرئيسية", "Yseer Professional Consulting - Home")}
        >
          <BrandLogo language={language} />
        </Link>

        {/* Navigation links */}
        <nav
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label={tx(language, "القائمة الرئيسية", "Main navigation")}
        >
          {navItems.map((item) => {
            const targetHref = localizedHref(item.href, language)
            const isHome = item.href === "/"
            const isActive = isHome
              ? pathname === "/" || pathname === "/en"
              : pathname === targetHref || pathname.startsWith(targetHref + "/")

            return (
              <Link
                key={item.href}
                href={targetHref}
                className={isActive ? "is-active" : undefined}
                onClick={(event) => {
                  setOpen(false)
                  navigateToHomeSection(event, targetHref)
                }}
              >
                {tx(language, item.label, item.labelEn)}
              </Link>
            )
          })}
          <Link
            className="mobile-nav-cta"
            href={localizedHref("/تواصل-معنا", language)}
            onClick={(event) => {
              setOpen(false)
              navigateToHomeSection(event, localizedHref("/تواصل-معنا", language))
            }}
          >
            {tx(language, "اطلب عرض سعر", "Request a quote")}{" "}
            {language === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </nav>

        {/* Controls: Language toggle, theme toggle, mobile hamburger */}
        <div className="header-controls">
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={tx(language, "Switch to English", "التبديل إلى العربية")}
          >
            {language === "ar" ? "EN" : "عربي"}
          </button>

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={tx(language, "تبديل المظهر", "Toggle theme")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="menu-toggle"
            aria-label={tx(language, open ? "إغلاق القائمة" : "فتح القائمة", open ? "Close menu" : "Open menu")}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

// Hero Section matching Screenshot 1
export function HeroSection() {
  const { language } = useLanguage()
  const isAr = language === "ar"

  return (
    <section className="hero-modern" id="home">
      <div className="container hero-grid-wrap">
        <div className="hero-text-side">
          <h1 className="hero-title-main">
            {tx(language, "نجاح أعمالك", "Your Business Success")}{" "}
            <span className="block text-[#183b39] dark:text-[#e5f1ef]">
              {tx(language, "يبدأ من وضوح أرقامك", "Starts With Clear Numbers")}
            </span>
          </h1>

          <p className="hero-subtitle">
            {tx(
              language,
              "نحول بياناتك المالية إلى رؤى تدعم قراراتك من خلال حلول محاسبية واستشارية تمكن أعمالك من النمو",
              "We transform your financial data into actionable insights that empower your strategic decisions through tailored accounting and advisory solutions."
            )}
          </p>

          <div className="hero-buttons">
            <Link href={localizedHref("/خدماتنا", language)} className="btn-teal-primary group">
              <span>{tx(language, "استكشف خدماتنا", "Explore Services")}</span>
              <span className="btn-icon-shift">
                {isAr ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
              </span>
            </Link>

            <Link href={localizedHref("/تواصل-معنا", language)} className="btn-white-outline group">
              <span>{tx(language, "تواصل معنا", "Contact Us")}</span>
              <Phone size={16} className="text-[#00a899] transition-transform group-hover:scale-110" />
            </Link>
          </div>

          <div className="hero-badges-row">
            <div className="hero-badge-pill">
              <span className="badge-dot" />
              <span>{tx(language, "خبرة متخصصة", "Specialized Expertise")}</span>
            </div>
            <div className="hero-badge-pill">
              <span className="badge-dot" />
              <span>{tx(language, "معايير مهنية", "Professional Standards")}</span>
            </div>
            <div className="hero-badge-pill">
              <span className="badge-dot" />
              <span>{tx(language, "سرية تامة", "Complete Confidentiality")}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Animated Interlocking Teal Diamond Emblem */}
        <div className="hero-visual-side">
          <YseerEmblemGraphic />
        </div>
      </div>
    </section>
  )
}

// Animated Number Counter using Intersection Observer
function AnimatedNumber({ value }: { value: string }) {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0
  const suffix = value.replace(/[0-9]/g, "")
  const [count, setCount] = useState(0)
  const elementRef = React.useRef<HTMLSpanElement>(null)
  const hasAnimated = React.useRef(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1800
          const startTime = performance.now()

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentCount = Math.floor(easeOut * numericPart)

            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(updateCounter)
            } else {
              setCount(numericPart)
            }
          }

          requestAnimationFrame(updateCounter)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [numericPart])

  return (
    <span ref={elementRef} className="stat-count-animated" dir="ltr">
      {count}
      {suffix}
    </span>
  )
}

// Stats Strip matching Screenshot 1 with animated counters
export function StatsStrip() {
  const { language } = useLanguage()

  return (
    <section className="stats-strip" aria-label={tx(language, "أرقام وإحصائيات يسير", "Yseer in Numbers")}>
      <div className="container stats-inner">
        {statsData.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.labelAr} className="stat-card">
              <div className="stat-icon-wrap">
                <Icon size={24} />
              </div>
              <strong className="stat-number" dir="ltr">
                <AnimatedNumber value={stat.number} />
              </strong>
              <span className="stat-label">
                {tx(language, stat.labelAr, stat.labelEn)}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// Accreditations & Licenses Strip
export function AccreditationStrip() {
  const { language } = useLanguage()
  const accreditations = [
    {
      id: "socpa",
      nameAr: "الهيئة السعودية للمراجعين والمحاسبين (SOCPA)",
      nameEn: "Saudi Organization for CPAs (SOCPA)",
      badgeAr: "محاسبون قانونيون مرخصون",
      badgeEn: "Licensed CPAs",
      descAr: "ترخيص مهني معتمد للمراجعة والتدقيق المالي وإصدار القوائم المعتمدة",
      descEn: "Independent certified audit & assurance license",
      icon: BadgeCheck,
    },
    {
      id: "zatca",
      nameAr: "هيئة الزكاة والضريبة والجمارك (ZATCA)",
      nameEn: "Zakat, Tax & Customs Authority (ZATCA)",
      badgeAr: "ممارسون ووكلاء معتمدون",
      badgeEn: "Certified Tax Practitioners",
      descAr: "تمثيل نظامي معتمد وامتثال شامل للمرحلة الثانية للفوترة الإلكترونية",
      descEn: "Authorized representation & Phase 2 e-Invoicing compliance",
      icon: ShieldCheck,
    },
    {
      id: "ifrs",
      nameAr: "معايير التقارير المالية الدولية (IFRS)",
      nameEn: "International Financial Reporting (IFRS)",
      badgeAr: "مطابقة للمعايير المعتمدة",
      badgeEn: "Full IFRS Compliance",
      descAr: "إعداد ومراجعة القوائم المالية وفق أحدث المعايير الدولية المعتمدة بالمملكة",
      descEn: "Financial reporting strictly aligned with KSA endorsed IFRS",
      icon: FileCheck2,
    },
    {
      id: "mc",
      nameAr: "وزارة التجارة السعودية",
      nameEn: "Saudi Ministry of Commerce",
      badgeAr: "شركة مهنية مرخصة",
      badgeEn: "Licensed Professional Co.",
      descAr: "سجل مهني ساري ومعتمد لمزاولة الاستشارات والخدمات المحاسبية",
      descEn: "Official commercial registration for professional practice",
      icon: Building2,
    },
  ]

  return (
    <section className="accreditation-strip" aria-label={tx(language, "الاعتمادات والتراخيص المهنية", "Professional Accreditations")}>
      <div className="container">
        <div className="accreditation-header">
          <span className="eyebrow">
            <i /> {tx(language, "الموثوقية والامتثال", "Trust & Compliance")}
          </span>
          <h2 className="accreditation-title">
            {tx(language, "اعتمادات مهنية وتراخيص رسمية تعزز ثقة أعمالك", "Accreditations & Official Licenses You Can Trust")}
          </h2>
          <p className="accreditation-subtitle">
            {tx(
              language,
              "نمارس أعمالنا وخدماتنا المهنية وفق أعلى المعايير التنظيمية والرقابية الصادرة عن الهيئات الرسمية في المملكة العربية السعودية.",
              "We operate under the highest standards certified by regulatory and professional bodies in the Kingdom of Saudi Arabia."
            )}
          </p>
        </div>

        <div className="accreditation-grid">
          {accreditations.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="accreditation-card">
                <div className="accreditation-card-top">
                  <div className="accreditation-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="accreditation-badge">
                    {tx(language, item.badgeAr, item.badgeEn)}
                  </span>
                </div>
                <h3 className="accreditation-card-name">
                  {tx(language, item.nameAr, item.nameEn)}
                </h3>
                <p className="accreditation-card-desc">
                  {tx(language, item.descAr, item.descEn)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// About Section matching Screenshot 1
export function AboutSection() {
  const { language } = useLanguage()
  const isAr = language === "ar"

  return (
    <section className="about-modern" id="about">
      <div className="container">
        <div className="about-top-heading">
          <h2 className="section-title-clean">{tx(language, "عن يسير", "About Yseer")}</h2>
        </div>

        <div className="about-main-grid">
          <div className="about-content-column">
            <p className="about-lead-paragraph">
              {tx(
                language,
                "يسير للاستشارات المهنية شريكك في بناء منظومة مالية أكثر كفاءة وموثوقية، نقدم خدمات المراجعة والاستشارات المالية، والزكوية والضريبية لمساعدة المنشآت على تعزيز الامتثال ورفع جودة التقارير المالية واتخاذ قرارات مبنية على بيانات دقيقة تدعم النمو والاستدامة.",
                "Yseer Professional Consulting is your partner in building a more efficient and reliable financial infrastructure. We provide audit, financial, Zakat, and tax advisory services to help businesses enhance compliance, improve reporting quality, and make data-driven decisions that foster growth and sustainability."
              )}
            </p>

            <Link href={localizedHref("/من-نحن", language)} className="btn-clean-outline">
              <span>{tx(language, "تعرف علينا أكثر", "Learn More About Us")}</span>
              <FileText size={16} className="text-[#00a899]" />
            </Link>

            {/* Vision and Mission Blocks */}
            <div className="vision-mission-grid">
              {/* Vision */}
              <div className="vision-mission-card">
                <div className="card-header-badge">
                  <span className="vm-icon-circle">
                    <ShieldCheck size={20} />
                  </span>
                  <h3>{tx(language, "رؤيتنا", "Our Vision")}</h3>
                </div>
                <p>
                  {tx(
                    language,
                    "أن نكون من بيوت الخبرة المهنية الرائدة في المملكة العربية السعودية، والشريك الموثوق للمنشآت في تطوير أنظمتها المالية وتعزيز الشفافية وجودة التقارير المالية بما يدعم النمو المستدام ويتماشى مع مستهدفات رؤية المملكة 2030.",
                    "To be one of the premier professional advisory firms in the Kingdom of Saudi Arabia, and the trusted partner for enterprises advancing financial systems, transparency, and reporting quality in alignment with Saudi Vision 2030."
                  )}
                </p>
              </div>

              {/* Mission */}
              <div className="vision-mission-card">
                <div className="card-header-badge">
                  <span className="vm-icon-circle">
                    <Sparkles size={20} />
                  </span>
                  <h3>{tx(language, "رسالتنا", "Our Mission")}</h3>
                </div>
                <p>
                  {tx(
                    language,
                    "تقديم خدمات مهنية مستقلة وموثوقة في مجالات المراجعة والاستشارات المالية والزكوية والضريبية، من خلال فرق عمل مؤهلة ومنهجيات تنفيذ احترافية تمكن عملاءنا من تحسين كفاءة الأداء المالي وتقليل المخاطر وتحقيق أعلى مستويات الامتثال.",
                    "To deliver independent, trusted services in audit, financial, Zakat, and tax advisory through certified teams and rigorous execution methodologies that empower clients to optimize financial performance, mitigate risk, and achieve peak compliance."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Visual with professional Saudi consultant photo and Arabic calligraphy watermark */}
          <div className="about-visual-column">
            <div className="about-calligraphy-watermark" aria-hidden="true">
              يسير
            </div>
            <div className="about-photo-wrapper">
              <div className="about-photo-glow" />
              <div className="about-photo-frame">
                <Image
                  src="/about-consultant.png"
                  alt={tx(language, "مستشار مالي سعودي في يسير للاستشارات المهنية", "Saudi Financial Consultant at Yseer")}
                  width={540}
                  height={640}
                  className="about-consultant-img"
                  priority
                />
                <div className="about-photo-badge">
                  <span className="badge-pulse-dot" />
                  <div>
                    <strong>{tx(language, "خبرة مهنية معتمدة", "Certified Expertise")}</strong>
                    <small>{tx(language, "استشارات مالية وحلول محاسبية", "Financial Advisory & Accounting Solutions")}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Standards Section matching Screenshots 1 & 3
export function StandardsSection() {
  const { language } = useLanguage()

  return (
    <section className="standards-section">
      <div className="container">
        <h2 className="standards-heading">{tx(language, "معاييرنا", "Our Standards")}</h2>

        <div className="standards-grid">
          {standardsData.map((std) => (
            <div key={std.num} className="standard-card">
              <span className="standard-num">{std.num}</span>
              <p className="standard-text">
                {tx(language, std.textAr, std.textEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Grid matching Screenshot 3
export function ServicesSection() {
  const { language } = useLanguage()
  const isAr = language === "ar"

  return (
    <section className="services-modern-section" id="services">
      <div className="container">
        <div className="services-section-header">
          <h2 className="section-title-clean">{tx(language, "خدماتنا", "Our Services")}</h2>
          <p className="services-lead-text">
            {tx(
              language,
              "حلول مالية واستشارية متكاملة مصممة لدعم دقة أرقامك وتسهيل قراراتك الاستراتيجية.",
              "Comprehensive financial and advisory solutions tailored to bring precision to your numbers and empower strategic decisions."
            )}
          </p>
        </div>

        <div className="services-cards-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.number} className="service-card-modern" id={`service-${service.number}`}>
                <div className="service-icon-box">
                  <Icon size={34} className="service-svg-icon" />
                </div>
                <h3 className="service-card-title">{tx(language, service.title, service.titleEn)}</h3>
                <p className="service-card-desc">{tx(language, service.description, service.descriptionEn)}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Legacy ServiceGrid helper for inner pages
export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage()
  const list = compact ? services.slice(0, 4) : services
  return (
    <div className="services-grid">
      {list.map((service) => {
        const Icon = service.icon
        return (
          <article className="service-card" id={`service-${service.number}`} key={service.number}>
            <div className="service-card-top">
              <span className="service-icon">
                <Icon size={24} />
              </span>
              <span className="service-number">{service.number}</span>
            </div>
            <h3>{tx(language, service.title, service.titleEn)}</h3>
            <p>{tx(language, service.description, service.descriptionEn)}</p>
            <Link
              href={`/خدماتنا#service-${service.number}`}
              aria-label={tx(language, `اكتشف خدمة ${service.title}`, `Explore ${service.titleEn}`)}
            >
              {language === "ar" ? <ArrowLeft size={19} /> : <ArrowRight size={19} />}
            </Link>
          </article>
        )
      })}
    </div>
  )
}

// Why Yseer Section matching Screenshots 2 & 3
export function WhySection() {
  const { language } = useLanguage()

  return (
    <section className="why-yseer-section">
      <div className="container why-yseer-box">
        {/* Quote mark on top corner */}
        <div className="quote-mark-icon" aria-hidden="true">
          ❝
        </div>

        <h2 className="why-yseer-title">{tx(language, "لماذا يسير؟", "Why Yseer?")}</h2>

        <p className="why-yseer-paragraph">
          {tx(
            language,
            "نعمل في يسير كشريك مهني يركز على تحسين جودة المعلومات المالية، وتعزيز كفاءة الأنظمة، وتقليل المخاطر التنظيمية، من خلال منهجيات تنفيذ احترافية وتوصيات عملية تدعم اتخاذ القرار وتحقيق أداء مالي أكثر استقراراً وكفاءة.",
            "At Yseer, we act as a trusted professional partner dedicated to elevating financial data quality, enhancing system efficiency, and minimizing regulatory risks through structured execution and practical recommendations that support decisions and yield stable, high-performance financial management."
          )}
        </p>
      </div>
    </section>
  )
}

// Partners in Success matching Screenshot 2 with continuous animated marquee carousel
export function PartnersSection() {
  const { language } = useLanguage()

  const partners = [
    { id: 1, name: "LAMSH NORAH", component: LogoLamshNorah },
    { id: 2, name: "أولاد عبد الجليل يوسف الطبطبائي", component: LogoAlTabtabaei },
    { id: 3, name: "شركة آفاق المالية", component: LogoAfaq },
    { id: 4, name: "مجموعة الرؤية للاستثمار", component: LogoAlRoaya },
    { id: 5, name: "شركة تمكين القابضة", component: LogoTamkeen },
    { id: 6, name: "مؤسسة الصرح للتجارة", component: LogoAlSarh },
  ]

  return (
    <section className="partners-carousel-section" id="partners">
      <div className="container">
        <div className="partners-header-wrap">
          <h2 className="section-title-clean text-center mb-3">
            {tx(language, "شركاؤنا في النجاح", "Our Partners in Success")}
          </h2>
          <p className="partners-subtitle-text text-center">
            {tx(
              language,
              "شراكات مهنية استراتيجية قائمة على الثقة وتحقيق الأثر المالي المستدام",
              "Strategic professional partnerships built on trust and sustainable financial impact"
            )}
          </p>
        </div>

        {/* Continuous Animated Infinite Marquee Track */}
        <div className="partners-marquee-container" dir="ltr">
          <div className="partners-marquee-fade-left" aria-hidden="true" />
          <div className="partners-marquee-fade-right" aria-hidden="true" />
          <div className="partners-marquee-track">
            {[...partners, ...partners, ...partners].map((partner, index) => {
              const Comp = partner.component
              return (
                <div key={`${partner.id}-${index}`} className="partner-marquee-card">
                  <Comp />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Custom Styled Service Select Dropdown
export function CustomServiceSelect({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const currentService = services.find((s) => s.title === value) || services[0]
  const CurrentIcon = currentService.icon

  return (
    <div className="custom-select-wrapper" ref={dropdownRef}>
      <input type="hidden" name="service" value={value} />
      <button
        type="button"
        className={`custom-select-trigger ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="trigger-content">
          <span className="trigger-icon-box">
            <CurrentIcon size={18} />
          </span>
          <span className="trigger-label">{tx(language, currentService.title, currentService.titleEn)}</span>
        </span>
        <ChevronDown size={17} className={`trigger-chevron ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="custom-select-dropdown" role="listbox">
          {services.map((service) => {
            const Icon = service.icon
            const isSelected = service.title === value
            return (
              <li
                key={service.number}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? "is-selected" : ""}`}
                onClick={() => {
                  onChange(service.title)
                  setOpen(false)
                }}
              >
                <div className="option-inner">
                  <span className="option-icon-box">
                    <Icon size={18} />
                  </span>
                  <span className="option-title">
                    {tx(language, service.title, service.titleEn)}
                  </span>
                </div>
                {isSelected && <Check size={16} className="option-check text-[#00a899]" />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// Frequently Asked Questions (FAQ) Section
export function FaqSection() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      qAr: "متى تكون المنشأة ملزمة نظامًا بتعيين مراجع حسابات قانوني؟",
      qEn: "When is a company legally required to appoint a certified auditor?",
      aAr: "وفقًا لنظام الشركات واللوائح المعمول بها في المملكة، تلتزم الشركات المساهمة، والشركات ذات المسؤولية المحدودة التي تتجاوز المعايير النظامية (مثل حجم رأس المال أو الإيرادات السنوية أو عدد العاملين)، وكذلك المنشآت التي تتطلب جهات التمويل أو المناقصات الحكومية فحص قوائمها، بتعيين مراجع حسابات قانوني مرخص ومستقل لإصدار القوائم المالية المدققة.",
      aEn: "Under the Saudi Companies Law and regulatory frameworks, joint-stock companies, LLCs exceeding statutory thresholds (in capital, revenue, or headcount), and entities seeking bank financing or government tenders are legally required to appoint an independent certified public accountant (CPA) to audit and issue audited financial statements.",
    },
    {
      qAr: "ما الفرق الأساسي بين مسك الدفاتر والمراجعة والتدقيق المالي؟",
      qEn: "What is the key difference between bookkeeping and statutory auditing?",
      aAr: "مسك الدفاتر يركز على التسجيل اليومي للمعاملات المالية، والقيود المحاسبية، ومطابقة الحسابات البنكية، وإعداد موازين المراجعة الدورية. أما المراجعة والتدقيق القانوني فهي عملية فحص وتحقق مستقلة ومحايدة لتلك القوائم للتأكد من عدالتها وخلوها من الأخطاء الجوهرية ومطابقتها لمعايير المحاسبة الدولية (IFRS).",
      aEn: "Bookkeeping focuses on day-to-day transaction recording, journal entries, bank reconciliations, and periodic trial balances. Statutory auditing, on the other hand, is an independent, objective evaluation of these financial statements to verify fairness, compliance with IFRS, and absence of material misstatements.",
    },
    {
      qAr: "كيف تسهم يسير في حماية منشأتي من الغرامات الزكوية والضريبية؟",
      qEn: "How does Yseer protect my business from Zakat and Tax penalties?",
      aAr: "نقوم بإجراء فحص ومطابقة شاملة لكافة الفواتير والمستندات قبل رفع الإقرارات لضمان سلامة العمليات المحاسبية، مع الالتزام الصارم بالمواعيد النظامية المحددة من هيئة الزكاة والضريبة والجمارك (ZATCA)، وتقديم المشورة الوقائية لتجنب أي فروقات فحص أو غرامات تأخير أو تعديل.",
      aEn: "We conduct a thorough pre-audit reconciliation of invoices and records before submission to ensure complete tax accuracy. By strictly adhering to ZATCA deadlines and providing proactive advisory, we help prevent late-filing fines, inspection variances, and unexpected assessments.",
    },
    {
      qAr: "هل تقدم يسير الدعم لمرحلة الربط والتكامل في الفوترة الإلكترونية (ZATCA)؟",
      qEn: "Do you support ZATCA E-Invoicing Phase 2 (Integration & Linking)?",
      aAr: "نعم، نقدم استشارات متخصصة لمراجعة مدى جاهزية الأنظمة والبرامج المحاسبية لدى المنشأة للربط المباشر مع منصة 'فاتورة' التابعة للهيئة، والتحقق من استيفاء المتطلبات الفنية والضريبية وقوالب الفواتير (XML/CSID) وتدريب فريقك المالي لضمان استمرارية الأعمال دون عوائق.",
      aEn: "Yes, we provide specialized advisory to assess your accounting software's readiness for direct API integration with ZATCA's FATOORA platform, verifying technical compliance, XML/CSID specifications, and training your financial team for smooth, uninterrupted operations.",
    },
    {
      qAr: "هل تقدم يسير خدماتها في كافة مدن ومناطق المملكة أم في القصيم فقط؟",
      qEn: "Does Yseer serve clients across all Saudi regions or only Al Qassim?",
      aAr: "مقرنا الرئيسي في القصيم (بريدة)، ولكننا نخدم منشآت وشركات في جميع مناطق ومدن المملكة، بما في ذلك الرياض، جدة، الدمام، والمدينة المنورة. نعتمد منظومة عمل رقمية آمنة تتيح التواصل ومشاركة المستندات بسلاسة مع إمكانية الزيارات الميدانية عند الحاجة.",
      aEn: "While our headquarters is in Al Qassim (Buraydah), we proudly serve businesses across the entire Kingdom, including Riyadh, Jeddah, Dammam, and Madinah, via secure digital cloud collaboration, complemented by on-site field visits whenever required.",
    },
    {
      qAr: "كيف يمكننا بدء التعاقد أو الحصول على استشارة وعرض سعر مخصص؟",
      qEn: "How can we get started or request a tailored consultation and quote?",
      aAr: "بكل بساطة يمكنك الضغط على زر 'اطلب عرض سعر' أو التواصل معنا مباشرة عبر الواتساب أو الهاتف (920031899). سيتواصل معك أحد مستشارينا الماليين لفهم حجم ونشاط منشأتك بدقة وتقديم خطة عمل وعرض سعر مخصص يلبي احتياجك خلال يوم عمل واحد.",
      aEn: "Simply click 'Request a Quote' or contact us directly via WhatsApp or phone (920031899). One of our senior advisors will connect with you to review your company's scope and provide a tailored proposal and transparent quotation within one business day.",
    },
  ]

  function toggleItem(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq" aria-label={tx(language, "الأسئلة الشائعة", "Frequently Asked Questions")}>
      <div className="container">
        <div className="faq-header-wrap">
          <span className="eyebrow">
            <i /> {tx(language, "الأسئلة الشائعة", "Frequently Asked Questions")}
          </span>
          <h2 className="section-title-clean">
            {tx(language, "إجابات واضحة لقرارات واثقة", "Clear Answers for Confident Decisions")}
          </h2>
          <p className="faq-subtitle-text">
            {tx(
              language,
              "إليك إجابات أبرز الأسئلة المتكررة حول الخدمات المحاسبية والمراجعة والامتثال الزكوي والضريبي في المملكة.",
              "Here are answers to common questions regarding accounting, auditing, and Zakat/tax compliance in Saudi Arabia."
            )}
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.qAr}
                className={`faq-item-card ${isOpen ? "is-expanded" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    {tx(language, faq.qAr, faq.qEn)}
                  </span>
                  <span className={`faq-icon-arrow ${isOpen ? "is-open" : ""}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{tx(language, faq.aAr, faq.aEn)}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Strip under FAQ */}
        <div className="faq-bottom-cta">
          <div className="faq-bottom-cta-text">
            <h4>{tx(language, "هل لديك استفسار محدد حول منشأتك؟", "Have a specific question about your business?")}</h4>
            <p>{tx(language, "فريقنا المتخصص من المحاسبين والمستشارين متاح للإجابة على جميع تساؤلاتك بدقة وسرية.", "Our specialized team of CPAs and advisors is ready to answer all your inquiries with precision and confidentiality.")}</p>
          </div>
          <div className="faq-bottom-cta-buttons">
            <a
              href="https://wa.me/966537177706"
              target="_blank"
              rel="noreferrer"
              className="btn-faq-whatsapp"
            >
              <span>{tx(language, "تحدث مع مستشار عبر واتساب", "Chat with Advisor on WhatsApp")}</span>
              <OfficialWhatsAppIcon size={20} />
            </a>
            <Link
              href={localizedHref("/تواصل-معنا", language)}
              className="btn-faq-contact"
            >
              <span>{tx(language, "طلب استشارة مجانية", "Request Free Consultation")}</span>
              {language === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Us Section matching Screenshot 2
export function ContactSection() {
  const { language } = useLanguage()
  const isAr = language === "ar"
  const [selectedService, setSelectedService] = useState("التأسيس المالي")
  const [formSent, setFormSent] = useState(false)
  const [formError, setFormError] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const firstName = String(form.get("firstName") || "").trim()
    const lastName = String(form.get("lastName") || "").trim()
    const phone = String(form.get("phone") || "").trim()
    const email = String(form.get("email") || "").trim()
    const company = String(form.get("company") || "").trim()
    const service = String(form.get("service") || selectedService || "التأسيس المالي").trim()
    const details = String(form.get("details") || "").trim()

    if (!firstName || !phone || !details) {
      setFormError(tx(language, "فضلاً أكمل الحقول الأساسية المطلوبة.", "Please fill in the required fields."))
      return
    }

    const fullName = `${firstName} ${lastName}`.trim()
    const subject = encodeURIComponent(`طلب عرض سعر من ${fullName}`)
    const body = encodeURIComponent(
      `الاسم: ${fullName}\nالهاتف: ${phone}\nالبريد: ${email || "غير مذكور"}\nالشركة: ${company || "غير مذكور"}\nالخدمة: ${service || "التأسيس المالي"}\n\nالتفاصيل:\n${details}`
    )

    window.location.href = `mailto:info@yseercpa.sa?subject=${subject}&body=${body}`
    setFormSent(true)
    setFormError("")
  }

  return (
    <section className="contact-modern-section" id="contact">
      <div className="container">
        <h2 className="section-title-clean text-center mb-10">{tx(language, "تواصل معنا", "Contact Us")}</h2>

        <div className="contact-split-grid">
          {/* Quote Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} noValidate className="form-clean">
              <div className="form-two-col">
                <div className="form-field">
                  <input
                    name="firstName"
                    required
                    placeholder={tx(language, "الإسم الأول", "First Name")}
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="lastName"
                    placeholder={tx(language, "اسم العائلة", "Family Name")}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-two-col">
                <div className="form-field">
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder={tx(language, "رقم الهاتف", "Phone Number")}
                    autoComplete="tel"
                    dir="ltr"
                    className="text-start"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="email"
                    type="email"
                    placeholder={tx(language, "البريد الإلكتروني", "Email Address")}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-two-col">
                <div className="form-field">
                  <input
                    name="company"
                    placeholder={tx(language, "اسم الشركة", "Company Name")}
                  />
                </div>
                <div className="form-field">
                  <CustomServiceSelect value={selectedService} onChange={setSelectedService} />
                </div>
              </div>

              <div className="form-field">
                <textarea
                  name="details"
                  rows={4}
                  required
                  placeholder={tx(language, "تفاصيل الطلب", "Request Details")}
                />
              </div>

              {formError && <p className="form-error-alert">{formError}</p>}
              {formSent && (
                <p className="form-success-alert">
                  <Check size={16} /> {tx(language, "تم إعداد رسالتك بنجاح. أرسلها عبر تطبيق البريد.", "Message draft ready. Send it via your mail app.")}
                </p>
              )}

              <button type="submit" className="btn-form-submit">
                {tx(language, "أرسل الطلب", "Submit Request")}
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="contact-details-box">
            <h3 className="contact-quote-title">{tx(language, "لطلب عرض سعر", "Request a Quote")}</h3>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-icon-bubble">
                  <MapPin size={18} />
                </span>
                <span className="contact-info-text">{tx(language, "القصيم - بريدة", "Al Qassim - Buraydah")}</span>
              </div>

              <a href="tel:920031899" className="contact-info-item hover:opacity-80 transition-opacity">
                <span className="contact-icon-bubble">
                  <Phone size={18} />
                </span>
                <span className="contact-info-text font-semibold" dir="ltr">
                  920031899
                </span>
              </a>

              <a
                href="https://wa.me/966537177706"
                target="_blank"
                rel="noreferrer"
                className="contact-info-item hover:opacity-80 transition-opacity"
              >
                <span className="contact-icon-bubble bg-[#25D366]/10 text-[#25D366]">
                  <OfficialWhatsAppIcon size={20} />
                </span>
                <span className="contact-info-text font-semibold" dir="ltr">
                  +966 53 717 7706
                </span>
              </a>

              <a href="mailto:info@yseercpa.sa" className="contact-info-item hover:opacity-80 transition-opacity">
                <span className="contact-icon-bubble">
                  <Mail size={18} />
                </span>
                <span className="contact-info-text">info@yseercpa.sa</span>
              </a>

              <div className="contact-info-item">
                <span className="contact-icon-bubble">
                  <Clock3 size={18} />
                </span>
                <span className="contact-info-text">
                  {tx(language, "الاحد - الخميس . 8:00 ص - 4:00 م", "Sunday - Thursday · 8:00 AM - 4:00 PM")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="contact-map-wrapper">
          <iframe
            title={tx(language, "موقع يسير للاستشارات المهنية - بريدة، القصيم", "Yseer Location Map")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114446.40251147553!2d43.91689255!3d26.3592472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1581e18bf9776f87%3A0x6a05e2d19e99fb63!2sBuraydah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716500000000!5m2!1sen!2ssa"
            width="100%"
            height="290"
            style={{ border: 0, borderRadius: "14px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

// Floating Official WhatsApp Button (shown on mobile & desktop in bottom corner)
export function FloatingChat() {
  const { language } = useLanguage()

  return (
    <div className="floating-whatsapp-container">
      <a
        href="https://wa.me/966537177706"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        aria-label={tx(language, "تواصل عبر واتساب", "Chat on WhatsApp")}
        title={tx(language, "تحدث معنا عبر واتساب", "Chat with us on WhatsApp")}
      >
        <div className="floating-whatsapp-icon-wrap">
          <OfficialWhatsAppIcon size={30} />
        </div>
        <span className="floating-whatsapp-label">
          {tx(language, "تواصل عبر واتساب", "Chat on WhatsApp")}
        </span>
      </a>
    </div>
  )
}

// Site Footer
export function SiteFooter() {
  const { language } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link
              className="brand brand-light"
              href={localizedHref("/", language)}
              aria-label={tx(language, "يسير للاستشارات المهنية", "Yseer Professional Consulting")}
            >
              <BrandLogo language={language} isFooter />
            </Link>
            <p>
              {tx(
                language,
                "نجاح أعمالك يبدأ من وضوح أرقامك. شريكك المهني لنمو مالي مستدام.",
                "Your business success begins with clear numbers. Your trusted partner for sustainable growth."
              )}
            </p>
            {/* Social media icons in footer */}
            <div className="footer-socials" aria-label={tx(language, "حسابات التواصل الاجتماعي", "Social Media Accounts")}>
              {socialLinks.map(({ label, labelEn, href, icon: IconComponent }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={tx(language, label, labelEn)}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                >
                  <IconComponent size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3>{tx(language, "روابط سريعة", "Quick links")}</h3>
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={localizedHref(item.href, language)}>
                {tx(language, item.label, item.labelEn)}
              </Link>
            ))}
          </div>

          <div className="footer-contact">
            <h3>{tx(language, "يسعدنا تواصلك", "Get in touch")}</h3>
            <a href="tel:920031899">
              <Phone size={17} /> 920031899
            </a>
            <a href="tel:+966537177706">
              <Phone size={17} /> +966 53 717 7706
            </a>
            <a href="mailto:info@yseercpa.sa">
              <Mail size={17} /> info@yseercpa.sa
            </a>
            <span>
              <MapPin size={17} /> {tx(language, "القصيم، بريدة", "Buraydah, Al Qassim")}
            </span>
          </div>

          <div className="footer-hours">
            <h3>{tx(language, "أوقات العمل", "Business hours")}</h3>
            <p>{tx(language, "الأحد – الخميس", "Sunday – Thursday")}</p>
            <p>{tx(language, "8:00 ص – 4:00 م", "8:00 AM – 4:00 PM")}</p>
            <Link
              className="footer-contact-cta"
              href={localizedHref("/تواصل-معنا", language)}
            >
              {tx(language, "اطلب عرض سعر", "Request a quote")}{" "}
              {language === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {tx(
              language,
              `© ${new Date().getFullYear()} يسير للاستشارات المهنية. جميع الحقوق محفوظة.`,
              `© ${new Date().getFullYear()} Yseer Professional Consulting. All rights reserved.`
            )}
          </span>
          <span>{tx(language, "نصنع وضوحًا ماليًا يدوم.", "Building lasting financial clarity.")}</span>
        </div>
      </div>
    </footer>
  )
}

// Reusable SectionHeading
export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <span className="eyebrow">
        <i /> {eyebrow}
      </span>
      <h2 className="section-heading-title">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

// Legacy ContactForm helper
export function ContactForm({ hiring = false }: { hiring?: boolean }) {
  const { language } = useLanguage()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const details = String(data.get("details") || "").trim()
    if (!name || !email || !details) {
      setError(tx(language, "فضلاً أكمل الحقول المطلوبة.", "Please complete all required fields."))
      return
    }
    const subject = encodeURIComponent(
      hiring
        ? tx(language, `طلب توظيف من ${name}`, `Career application from ${name}`)
        : tx(language, `طلب استشارة من ${name}`, `Consultation request from ${name}`)
    )
    const body = encodeURIComponent(
      language === "ar"
        ? `الاسم: ${name}\nالبريد: ${email}\nالهاتف: ${data.get("phone") || "غير مذكور"}\n${
            hiring ? "المسمى الوظيفي" : `الخدمة: ${data.get("service") || "غير محددة"}`
          }\n\n${details}`
        : `Name: ${name}\nEmail: ${email}\nPhone: ${data.get("phone") || "Not provided"}\n${
            hiring ? "Position" : "Service"
          }: ${data.get("service") || "Not specified"}\n\n${details}`
    )
    window.location.href = `mailto:info@yseercpa.sa?subject=${subject}&body=${body}`
    setSent(true)
    setError("")
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          {tx(language, "الاسم الكامل", "Full name")} <span>*</span>
          <input name="name" autoComplete="name" required placeholder={tx(language, "اكتب اسمك", "Enter your name")} />
        </label>
        <label>
          {tx(language, "البريد الإلكتروني", "Email address")} <span>*</span>
          <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
        </label>
        <label>
          {tx(language, "رقم الجوال", "Phone number")}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={tx(language, "05xxxxxxxx", "+966 5X XXX XXXX")}
            dir="ltr"
          />
        </label>
        {hiring ? (
          <label>
            {tx(language, "المسمى الوظيفي", "Position")}
            <input
              name="service"
              placeholder={tx(language, "المسمى الذي تتقدم إليه", "Role you are applying for")}
            />
          </label>
        ) : (
          <label>
            {tx(language, "الخدمة المطلوبة", "Service of interest")}
            <select name="service" defaultValue="">
              <option value="" disabled>
                {tx(language, "اختر الخدمة", "Select a service")}
              </option>
              {services.map((service) => (
                <option key={service.number}>{tx(language, service.title, service.titleEn)}</option>
              ))}
            </select>
            <ChevronDown size={17} className="select-chevron" />
          </label>
        )}
      </div>
      <label>
        {tx(language, "كيف نقدر نساعدك؟", "How can we help?")} <span>*</span>
        <textarea
          name="details"
          rows={4}
          required
          placeholder={
            hiring
              ? tx(language, "عرفنا عن خبراتك واهتماماتك...", "Tell us about your experience and interests...")
              : tx(language, "اكتب نبذة عن احتياجك أو استفسارك...", "Briefly describe your needs or question...")
          }
        />
      </label>
      <div className="form-bottom">
        <button className="button button-primary" type="submit">
          {hiring ? tx(language, "إرسال طلب التقديم", "Submit application") : tx(language, "إرسال طلبك", "Send your request")}
          {language === "ar" ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
        </button>
        <span>
          {tx(
            language,
            "لن نستخدم بياناتك إلا للتواصل بشأن طلبك.",
            "Your details will only be used to respond to your request."
          )}
        </span>
      </div>
      {error && (
        <p className="form-message form-error" role="alert">
          {error}
        </p>
      )}
      {sent && (
        <p className="form-message" role="status">
          <Check size={17} />{" "}
          {tx(
            language,
            "تم تجهيز رسالة بريدك. أرسلها من تطبيق البريد لإكمال الطلب.",
            "Your email draft is ready. Send it from your mail app to complete your request."
          )}
        </p>
      )}
    </form>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  const { language } = useLanguage()
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <span className="eyebrow">
          <i /> {eyebrow}
        </span>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-desc">{description}</p>
        <div className="breadcrumb">
          <Link href={localizedHref("/", language)}>{tx(language, "الرئيسية", "Home")}</Link>
          {language === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          <span>{eyebrow}</span>
        </div>
      </div>
      <div className="page-hero-orbit" aria-hidden="true">
        ي
      </div>
    </section>
  )
}

export function ContactStrip() {
  const { language } = useLanguage()
  return (
    <div className="contact-strip">
      <span>
        <Clock3 size={16} /> {tx(language, "نرد عليك خلال يوم عمل", "We respond within one business day")}
      </span>
      <a href="tel:920031899">
        <Phone size={16} /> 920031899
      </a>
    </div>
  )
}
