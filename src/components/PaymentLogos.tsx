export function PaymentLogos() {
  return (
    <div
      className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 py-1"
      aria-label="Supported payment methods"
    >
      {/* UPI */}
      <div className="flex items-center justify-center gap-1 select-none" aria-label="UPI">
        <span className="font-display font-extrabold italic text-xl sm:text-2xl tracking-tight text-[#5F6368]">
          UPI
        </span>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 4L14 12L5 20V4Z" fill="#EA7B24" />
          <path d="M11 4L20 12L11 20V4Z" fill="#0B8043" />
        </svg>
      </div>

      {/* Google Pay */}
      <div className="flex items-center justify-center gap-1.5 select-none" aria-label="Google Pay">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="font-display font-semibold text-xl sm:text-2xl tracking-tight text-[#5F6368]">
          Pay
        </span>
      </div>

      {/* PhonePe */}
      <div className="flex items-center justify-center gap-2 select-none" aria-label="PhonePe">
        <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5F259F] text-white font-bold text-sm">
          पे
        </span>
        <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#5F259F]">
          PhonePe
        </span>
      </div>

      {/* Paytm */}
      <div className="flex items-center justify-center select-none" aria-label="Paytm">
        <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">
          <span className="text-[#002970]">Pay</span>
          <span className="text-[#00BAF2]">tm</span>
        </span>
      </div>
    </div>
  );
}
