import { useState } from 'react';
import { Download, Menu, Star, X } from 'lucide-react';
import { APK_DOWNLOAD_URL, ModalSection } from './constants/links';
import { PaymentLogos } from './components/PaymentLogos';
import { InfoModal } from './components/InfoModal';

function CrownMark({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="erenaCrownGold" x1="2" y1="2" x2="34" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE17D" />
          <stop offset="50%" stopColor="#E6A825" />
          <stop offset="100%" stopColor="#B87708" />
        </linearGradient>
      </defs>
      <path
        d="M3 8.5L10.5 15L18 4L25.5 15L33 8.5L29.5 23.5H6.5L3 8.5Z"
        fill="url(#erenaCrownGold)"
        stroke="#9A6105"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <rect x="6.5" y="24" width="23" height="2.8" rx="1.4" fill="#B87708" />
      <circle cx="3" cy="7.5" r="2" fill="#FFE17D" />
      <circle cx="18" cy="3" r="2.2" fill="#FFE17D" />
      <circle cx="33" cy="7.5" r="2" fill="#FFE17D" />
    </svg>
  );
}

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

function ImageWithFallback({ src, alt, className = '', fallbackTitle }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full min-h-[140px] flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FBF6E8] to-[#EFE2C1] border border-[#DFC996] p-4 text-center">
        <span className="font-display font-bold text-sm text-[#4A381D]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalSection>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = (section: ModalSection) => {
    setMobileMenuOpen(false);
    setActiveModal(section);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F8F9FB] text-[#2C2214] overflow-x-hidden">
      {/* Subtle Geometric Gold Backdrop Lines */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full opacity-35"
          preserveAspectRatio="none"
          viewBox="0 0 1440 1600"
          fill="none"
        >
          <path d="M-120 260L460 -80" stroke="#D4B56A" strokeWidth="1.2" />
          <path d="M-80 620L640 160" stroke="#D4B56A" strokeWidth="1" />
          <path d="M920 -60L1540 340" stroke="#D4B56A" strokeWidth="1.2" />
          <path d="M780 180L1560 720" stroke="#D4B56A" strokeWidth="1" />
          <path d="M-120 1120L520 740" stroke="#D4B56A" strokeWidth="1" />
          <path d="M880 780L1560 1240" stroke="#D4B56A" strokeWidth="1.2" />
          <path d="M-80 1540L580 1160" stroke="#D4B56A" strokeWidth="1.2" />
          <path d="M860 1200L1540 1620" stroke="#D4B56A" strokeWidth="1" />
        </svg>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[560px] h-[340px] rounded-full bg-[#F5C55B]/15 blur-3xl" />
      </div>

      {/* Main Centered Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-3 sm:pt-5 pb-10">
        {/* Top Navigation Bar */}
        <header className="relative">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/95 border border-[#E5D3A8] shadow-[0_8px_28px_rgba(88,66,24,0.08)] backdrop-blur-sm">
            {/* Brand Zone */}
            <a
              href="#top"
              className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69500] rounded-lg"
            >
              <CrownMark className="w-7 h-6 sm:w-8 sm:h-7 shrink-0" />
              <span className="font-display font-extrabold text-base sm:text-lg md:text-xl tracking-wide text-[#3D2D17]">
                ERENA ESPORTS
              </span>
            </a>

            {/* Desktop Nav Buttons (matching mockup) */}
            <nav className="hidden sm:flex items-center gap-2.5 md:gap-3" aria-label="Main navigation">
              <button
                type="button"
                onClick={() => openModal('about')}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#46351C] bg-gradient-to-b from-[#FCF8EC] to-[#EFE1BD] border border-[#D4B876] shadow-[0_2px_6px_rgba(146,112,38,0.12)] hover:brightness-97 transition whitespace-nowrap shrink-0 cursor-pointer"
              >
                ABOUT US
              </button>
              <button
                type="button"
                onClick={() => openModal('leaderboard')}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#46351C] bg-gradient-to-b from-[#FCF8EC] to-[#EFE1BD] border border-[#D4B876] shadow-[0_2px_6px_rgba(146,112,38,0.12)] hover:brightness-97 transition whitespace-nowrap shrink-0 cursor-pointer"
              >
                LEADERBOARD
              </button>
              <button
                type="button"
                onClick={() => openModal('support')}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#46351C] bg-gradient-to-b from-[#FCF8EC] to-[#EFE1BD] border border-[#D4B876] shadow-[0_2px_6px_rgba(146,112,38,0.12)] hover:brightness-97 transition whitespace-nowrap shrink-0 cursor-pointer"
              >
                SUPPORT
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF4E3] border border-[#D8BE82] text-[#433118] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <nav
              aria-label="Mobile navigation"
              className="sm:hidden mt-2 p-2 rounded-2xl bg-white border border-[#E5D3A8] shadow-[0_12px_28px_rgba(68,51,22,0.12)] flex flex-col gap-1.5"
            >
              <button
                type="button"
                onClick={() => openModal('about')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#433118] hover:bg-[#FAF4E3] transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => openModal('leaderboard')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#433118] hover:bg-[#FAF4E3] transition-colors cursor-pointer"
              >
                Leaderboard
              </button>
              <button
                type="button"
                onClick={() => openModal('support')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#433118] hover:bg-[#FAF4E3] transition-colors cursor-pointer"
              >
                Support
              </button>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main id="top" className="mt-4 sm:mt-6 space-y-5 sm:space-y-6">
          {/* Hero Showcase Banner */}
          <section aria-label="Welcome to Erena Esports" className="flex justify-center">
            <div className="relative w-full max-w-[680px]">
              <ImageWithFallback
                src="/assets/erena/hero-banner.webp"
                alt="Welcome to Erena Esports — Competitive Gaming Arena"
                fallbackTitle="WELCOME TO ERENA ESPORTS"
                className="w-full h-auto block select-none rounded-2xl"
              />
            </div>
          </section>

          {/* Highlighted Download Bar #1 + Social Proof */}
          <section
            aria-label="Download Erena Esports APK"
            className="mx-auto max-w-[760px] rounded-[26px] bg-white/95 border border-[#DFC996] p-3 sm:p-4 shadow-[0_12px_34px_rgba(146,112,38,0.12)]"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              {/* Highlighted Primary Download Button #1 */}
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-cta-highlight flex-1 min-h-[54px] px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2.5 text-white font-display font-extrabold text-base sm:text-lg tracking-wider uppercase whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB732]/60"
              >
                <Download className="w-5 h-5 stroke-[2.6]" aria-hidden="true" />
                <span>DOWNLOAD NOW</span>
              </a>

              {/* Stats Pair */}
              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-3 shrink-0">
                <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-2 rounded-2xl bg-[#FCFBF7] border border-[#E2CE9F] min-w-[120px]">
                  <span className="font-display font-extrabold text-xl sm:text-2xl leading-tight text-[#2C2214] tabular-nums">
                    20K+
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider text-[#5A4933] uppercase">
                    DOWNLOADS
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-2 rounded-2xl bg-[#FCFBF7] border border-[#E2CE9F] min-w-[120px]">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-extrabold text-xl sm:text-2xl leading-tight text-[#2C2214] tabular-nums">
                      4.9
                    </span>
                    <Star
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F5A623] text-[#E58E00]"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#5A4933] uppercase">
                    RATING
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Feature Cards Grid */}
          <section aria-label="Featured Game Modes" className="mx-auto max-w-[760px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {/* Card 1: Free & Paid Free Fire Tournaments */}
              <article className="relative flex flex-col items-center justify-between text-center rounded-[24px] bg-gradient-to-b from-[#FFFFFF] to-[#FCF9F1] border border-[#D8BF84] ring-1 ring-inset ring-[#E9D8AE] p-5 shadow-[0_14px_30px_-10px_rgba(166,126,42,0.22)]">
                <p className="font-display font-bold text-xs tracking-wider text-[#3D2E1A] uppercase mb-2">
                  FREE &amp; PAID
                </p>
                <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center my-1">
                  <ImageWithFallback
                    src="/assets/erena/card-freefire.webp"
                    alt="Gold trophy, rifles, and supply crate for Free Fire tournaments"
                    fallbackTitle="Free Fire Tournaments"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-display font-semibold text-xs tracking-wide text-[#3D2E1A] uppercase">
                    FREE &amp; PAID
                  </p>
                  <h2 className="font-display font-extrabold text-lg leading-tight text-[#2C2214] uppercase mt-0.5">
                    FREE FIRE
                  </h2>
                  <p className="font-display font-bold text-sm tracking-wide text-[#2C2214] uppercase">
                    TOURNAMENTS
                  </p>
                </div>
              </article>

              {/* Card 2: Free Erena Ludo */}
              <article className="relative flex flex-col items-center justify-between text-center rounded-[24px] bg-gradient-to-b from-[#FFFFFF] to-[#FCF9F1] border border-[#D8BF84] ring-1 ring-inset ring-[#E9D8AE] p-5 shadow-[0_14px_30px_-10px_rgba(166,126,42,0.22)]">
                <p className="font-display font-bold text-xs tracking-wider text-[#3D2E1A] uppercase mb-2">
                  FREE
                </p>
                <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center my-1">
                  <ImageWithFallback
                    src="/assets/erena/card-ludo.webp"
                    alt="Ludo board with colorful tokens and white dice"
                    fallbackTitle="Free Erena Ludo"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-display font-semibold text-xs tracking-wide text-[#3D2E1A] uppercase">
                    FREE
                  </p>
                  <h2 className="font-display font-extrabold text-lg leading-tight text-[#2C2214] uppercase mt-0.5">
                    ERENA
                  </h2>
                  <p className="font-display font-extrabold text-lg leading-tight text-[#2C2214] uppercase">
                    LUDO
                  </p>
                </div>
              </article>

              {/* Card 3: Predict & Earn */}
              <article className="relative flex flex-col items-center justify-between text-center rounded-[24px] bg-gradient-to-b from-[#FFFFFF] to-[#FCF9F1] border border-[#D8BF84] ring-1 ring-inset ring-[#E9D8AE] p-5 shadow-[0_14px_30px_-10px_rgba(166,126,42,0.22)]">
                <div className="h-4 sm:h-5" aria-hidden="true" />
                <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center my-1">
                  <ImageWithFallback
                    src="/assets/erena/card-predict.webp"
                    alt="Rupee gold coins and leather wallet with rising green arrow"
                    fallbackTitle="Predict & Earn"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="font-display font-extrabold text-lg leading-tight text-[#2C2214] uppercase">
                    PREDICT
                  </h2>
                  <p className="font-display font-extrabold text-lg leading-tight text-[#2C2214] uppercase">
                    &amp; EARN
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* Highlighted Download Bar #2 (Bottom Conversion Section) */}
          <section
            aria-label="Direct APK Download"
            className="mx-auto max-w-[760px] rounded-[24px] bg-gradient-to-r from-[#FFFDF7] via-[#FFF8E6] to-[#FFFDF7] border border-[#DFC996] px-5 py-4 sm:px-6 sm:py-5 shadow-[0_10px_28px_rgba(166,126,42,0.14)]"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h2 className="font-display font-extrabold text-base sm:text-lg text-[#2C2214] tracking-tight">
                  Start Playing Today — Free Android APK
                </h2>
                <p className="text-xs sm:text-sm text-[#5E4D36] mt-0.5">
                  Instant direct download · Fast UPI withdrawals
                </p>
              </div>

              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-cta-highlight w-full sm:w-auto min-h-[50px] px-7 py-3 rounded-full inline-flex items-center justify-center gap-2.5 text-white font-display font-extrabold text-sm sm:text-base tracking-wider uppercase whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFB732]/60"
              >
                <Download className="w-5 h-5 stroke-[2.6]" aria-hidden="true" />
                <span>DOWNLOAD NOW</span>
              </a>
            </div>
          </section>

          {/* Payment Partners Strip */}
          <section
            aria-label="Payment Partners"
            className="mx-auto max-w-[760px] rounded-2xl bg-white/95 border border-[#ECE2CC] px-5 py-4 shadow-[0_8px_24px_rgba(68,51,22,0.06)]"
          >
            <PaymentLogos />
          </section>
        </main>

        {/* Minimal Footer */}
        <footer className="mt-7 pt-2 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wide text-[#4A3B28]">
            <button
              type="button"
              onClick={() => openModal('about')}
              className="hover:text-[#B87708] transition-colors uppercase cursor-pointer"
            >
              ABOUT US
            </button>
            <span aria-hidden="true" className="text-[#B89D68]">
              •
            </span>
            <button
              type="button"
              onClick={() => openModal('refer')}
              className="hover:text-[#B87708] transition-colors uppercase cursor-pointer"
            >
              REFER &amp; EARN
            </button>
            <span aria-hidden="true" className="text-[#B89D68]">
              •
            </span>
            <button
              type="button"
              onClick={() => openModal('help')}
              className="hover:text-[#B87708] transition-colors uppercase cursor-pointer"
            >
              HELP
            </button>
          </div>
        </footer>
      </div>

      {/* Interactive Modal for Header & Footer Links */}
      <InfoModal section={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
