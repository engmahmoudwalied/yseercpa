import React from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

// 1. التأسيس المالي - Document with currency bill and rising bar chart
export function IconFinancialSetup({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer folder / doc */}
      <rect x="6" y="8" width="36" height="32" rx="4" />
      {/* Bill in center */}
      <rect x="12" y="14" width="24" height="12" rx="2" strokeDasharray="1 0" />
      <circle cx="24" cy="20" r="2.5" fill="currentColor" fillOpacity="0.2" />
      {/* Rising mini bar chart in corner */}
      <path d="M12 34v-4M18 34v-7M24 34v-5M30 34v-8M36 34v-11" />
      <path d="M11 29l7-3 6 2 8-5 5 2" strokeWidth="1.8" />
    </svg>
  )
}

// 2. الزكاة والضريبة - Stacked coins with percent sign and tax currency
export function IconZakatTax({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Top coin with percent */}
      <circle cx="28" cy="18" r="11" />
      <path d="M25 15l6 6" />
      <circle cx="24.5" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="31.5" cy="20.5" r="1.5" fill="currentColor" />
      {/* Bottom coin offset */}
      <path d="M19 25.5a11 11 0 1 1 5.5 8.5" />
      <circle cx="18" cy="33" r="8" />
      <path d="M18 29v8M15 31.5h6" />
    </svg>
  )
}

// 3. مسك دفاتر - Ledger / notebook with pen and trendline
export function IconBookkeeping({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ledger binder */}
      <rect x="8" y="10" width="32" height="28" rx="3" />
      <line x1="8" y1="18" x2="40" y2="18" />
      {/* Trendline / entries inside */}
      <path d="M15 28l5-5 5 4 8-7" />
      {/* Pen floating on right */}
      <path d="M37 7l4 4-12 12-4 1 1-4 11-13z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

// 4. المراجعة والتدقيق - Document with magnifying glass
export function IconAuditAssurance({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Document */}
      <path d="M12 40h20a2 2 0 0 0 2-2V16l-8-8H12a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2z" />
      <path d="M26 8v8h8" />
      {/* Document text lines */}
      <line x1="16" y1="22" x2="26" y2="22" />
      <line x1="16" y1="28" x2="22" y2="28" />
      {/* Prominent magnifying glass */}
      <circle cx="31" cy="33" r="6" fill="currentColor" fillOpacity="0.1" />
      <line x1="35.5" y1="37.5" x2="42" y2="44" strokeWidth="3" />
    </svg>
  )
}

// 5. التحليل المالي - Ascending vertical bars with upward curving arrow
export function IconFinancialAnalysis({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Base line */}
      <line x1="8" y1="40" x2="40" y2="40" />
      {/* 3 Rising bars */}
      <rect x="12" y="26" width="6" height="14" rx="1.5" />
      <rect x="22" y="20" width="6" height="20" rx="1.5" />
      <rect x="32" y="13" width="6" height="27" rx="1.5" />
      {/* Growth arrow sweeping up */}
      <path d="M11 22c5-7 14-11 27-11" strokeWidth="2.5" />
      <path d="M34 11h4v4" strokeWidth="2.5" strokeLinejoin="miter" />
    </svg>
  )
}

// 6. الإشراف المحاسبي - Professional at desk with supervisory gears above
export function IconAccountingSupervision({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Person head and body */}
      <circle cx="20" cy="27" r="4.5" />
      <path d="M12 40v-3a6 6 0 0 1 12 0v3" />
      {/* Computer / desk */}
      <path d="M26 34h12M32 34v6M28 40h8" />
      <rect x="28" y="25" width="10" height="7" rx="1" />
      {/* Supervisory gear above */}
      <circle cx="34" cy="14" r="3.5" />
      <path d="M34 8v2M34 18v2M28 14h2M38 14h2M29.5 9.5l1.5 1.5M37 17l1.5 1.5M29.5 18.5l1.5-1.5M37 11l1.5-1.5" />
    </svg>
  )
}

// 7. الحوكمة - Legal Gavel / Mallet with sound block
export function IconGovernance({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Gavel head angled */}
      <path d="M15 15l6-6 6 6-6 6z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 12l6-6M21 21l6-6" strokeWidth="3" />
      {/* Gavel handle */}
      <path d="M21 21l15 15" strokeWidth="3" />
      {/* Sound block base */}
      <rect x="8" y="38" width="16" height="4" rx="2" />
    </svg>
  )
}

// 8. الدعم الإداري - Customer support / consultant with headset
export function IconAdminSupport({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Head */}
      <circle cx="24" cy="22" r="7" />
      {/* Headset arc */}
      <path d="M15 23a9 9 0 0 1 18 0" strokeWidth="2.5" />
      {/* Earphones */}
      <rect x="13" y="21" width="3" height="6" rx="1.5" fill="currentColor" />
      <rect x="32" y="21" width="3" height="6" rx="1.5" fill="currentColor" />
      {/* Microphone curve to mouth */}
      <path d="M33 26v4a4 4 0 0 1-4 4h-2" />
      <circle cx="26" cy="34" r="1.5" fill="currentColor" />
      {/* Shoulders */}
      <path d="M12 42v-2a8 8 0 0 1 16 0v2M28 40a8 8 0 0 1 8 2" />
    </svg>
  )
}

// Stats strip icons from Screenshot 1:
export function IconStatsReports({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}

export function IconStatsClients({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}

export function IconStatsSectors({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="6" height="6" x="9" y="3" rx="1"/>
      <path d="m12 9v4"/>
      <path d="M5 13h14"/>
      <path d="m5 13v3"/>
      <path d="m19 13v3"/>
      <rect width="6" height="6" x="2" y="16" rx="1"/>
      <rect width="6" height="6" x="16" y="16" rx="1"/>
    </svg>
  )
}

export function IconStatsVisits({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

export function IconStatsDecisions({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <path d="m12 6 3 6-3 6-3-6z"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  )
}

export function IconStatsDevelopment({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      <circle cx="12" cy="12" r="4"/>
    </svg>
  )
}

// Brand graphic: Interlocking Diamonds (from Screenshot 1 Hero)
export function YseerEmblemGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`yseer-emblem-wrap ${className}`}>
      <svg
        viewBox="0 0 340 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="yseer-emblem-svg"
      >
        <defs>
          <linearGradient id="emblemGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00b7a6" />
            <stop offset="100%" stopColor="#023632" />
          </linearGradient>
          <linearGradient id="emblemGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#00a899" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow / background layered shape */}
        <path
          d="M170 30 L260 120 L170 210 L80 120 Z"
          fill="#00a899"
          fillOpacity="0.08"
          transform="translate(25, -5)"
        />

        {/* Left Teal Rhombus Diamond */}
        <rect
          x="75"
          y="65"
          width="110"
          height="110"
          rx="22"
          transform="rotate(45 130 120)"
          fill="url(#emblemGrad2)"
          className="emblem-diamond-left"
        />

        {/* Right Interlocking Rhombus Diamond */}
        <rect
          x="155"
          y="65"
          width="110"
          height="110"
          rx="22"
          transform="rotate(45 210 120)"
          fill="url(#emblemGrad1)"
          className="emblem-diamond-right"
        />

        {/* Clean central intersecting highlight wave */}
        <path
          d="M150 78 C 170 95, 175 145, 195 162"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />
      </svg>
    </div>
  )
}


// Partner Logo 1: LAMSH NORAH
export function LogoLamshNorah({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor">
        {/* Elegant geometric N monogram with profile silhouette */}
        <path
          d="M16 46V14l18 28V14"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 14c8 4 12 12 10 22-2 10-10 12-14 12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="38" cy="22" r="2" fill="currentColor" />
      </svg>
      <span className="font-bold text-[13px] tracking-[0.2em] mt-1 uppercase text-[#183b39] dark:text-white">
        LAMSH NORAH
      </span>
    </div>
  )
}

// Partner Logo 2: أولاد عبد الجليل يوسف الطبطبائي
export function LogoAlTabtabaei({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Geometric Islamic / corporate seal */}
        <rect x="8" y="8" width="32" height="32" rx="4" strokeWidth="2" />
        <rect x="14" y="14" width="20" height="20" rx="2" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
      <span className="font-semibold text-[11px] leading-tight mt-1 text-[#183b39] dark:text-white max-w-[150px]">
        أولاد عبد الجليل يوسف الطبطبائي
      </span>
    </div>
  )
}

// Saudi profile silhouette with aura for About section (Screenshot 1)
export function SaudiProfileGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 380" fill="none" className="w-full h-full object-cover">
        <defs>
          <radialGradient id="glowCircle" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#00b7a6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#023632" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Teal aura sphere */}
        <circle cx="140" cy="180" r="130" fill="url(#glowCircle)" />
        <circle cx="140" cy="180" r="100" stroke="#00b7a6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 6" />

        {/* Silhouette of man in ghutra / shemagh */}
        <g fill="#183b39" fillOpacity="0.85">
          {/* Ghutra drape & agal top */}
          <path d="M125 105 c10-15 35-25 65-15 c25 8 45 30 55 60 c10 30 15 80 15 140 c0 30-10 60-25 80 L90 370 c0-40 5-80 15-120 c-5-15-10-30-5-50 c5-20 15-40 25-55 Z" />
          {/* Agal rings */}
          <path d="M135 115 c20-8 55-8 75 0" stroke="#000" strokeWidth="7" strokeLinecap="round" />
          <path d="M137 125 c18-7 50-7 70 0" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          {/* Face profile outline */}
          <path d="M130 145 c-5 12-7 22-12 28 c-3 4-8 6-9 10 c-1 4 2 8 6 9 c3 1 7 2 8 5 c2 7-1 14 3 19 c4 5 11 6 16 8 c20 8 30 25 35 50" stroke="#00b7a6" strokeWidth="1.5" strokeOpacity="0.4" />
        </g>
      </svg>
    </div>
  )
}


// Official WhatsApp Vector Icon
export function OfficialWhatsAppIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.002 2C8.28 2 2 8.275 2 15.992c0 2.65.74 5.21 2.146 7.425L2.34 30.015l6.786-1.78a13.92 13.92 0 0 0 6.876 1.802h.006c7.72 0 14-6.275 14-13.993 0-3.74-1.454-7.252-4.1-9.897C23.262 3.498 19.746 2 16.002 2zm8.17 19.98c-.34.957-1.71 1.76-2.38 1.884-.63.115-1.44.164-4.24-.997-3.57-1.478-5.88-5.116-6.06-5.353-.18-.236-1.45-1.928-1.45-3.677 0-1.75.91-2.61 1.23-2.966.32-.355.7-.444.93-.444.24 0 .47.002.68.012.22.01.52-.084.81.614.3.71 1.03 2.508 1.12 2.69.09.183.15.4.03.636-.12.237-.18.385-.36.593-.18.207-.37.46-.53.62-.18.176-.37.37-.16.726.21.355.93 1.536 2 2.488 1.38 1.226 2.54 1.608 2.9 1.785.36.177.57.148.78-.09.21-.236.9-.1.05 1.14-1.38.24-.28.48-.236.81-.118.33.118 2.08.98 2.44 1.157.36.178.6.266.69.414.09.148.09.858-.25 1.815z" />
    </svg>
  )
}
