import { useEffect } from 'react';
import { Download, Trophy, ShieldCheck, Gift, HelpCircle, X } from 'lucide-react';
import { APK_DOWNLOAD_URL, ModalSection, TOP_PLAYERS } from '../constants/links';

interface InfoModalProps {
  section: ModalSection;
  onClose: () => void;
}

export function InfoModal({ section, onClose }: InfoModalProps) {
  useEffect(() => {
    if (!section) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [section, onClose]);

  if (!section) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white border border-[#D8C292] shadow-[0_24px_60px_rgba(35,24,10,0.22)] p-6 text-[#2C2214]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#EFE4CA]">
          <div className="flex items-center gap-2.5">
            {section === 'about' && <ShieldCheck className="w-5 h-5 text-[#D98200]" />}
            {section === 'leaderboard' && <Trophy className="w-5 h-5 text-[#D98200]" />}
            {section === 'support' && <HelpCircle className="w-5 h-5 text-[#D98200]" />}
            {section === 'refer' && <Gift className="w-5 h-5 text-[#D98200]" />}
            {section === 'help' && <HelpCircle className="w-5 h-5 text-[#D98200]" />}
            <h2 id="modal-title" className="font-display font-bold text-lg tracking-tight">
              {section === 'about' && 'About Erena Esports'}
              {section === 'leaderboard' && 'Weekly Leaderboard'}
              {section === 'support' && 'Player Support'}
              {section === 'refer' && 'Refer & Earn'}
              {section === 'help' && 'APK Install Guide'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#6B5A42] hover:bg-[#FAF5E9] hover:text-[#2C2214] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 text-sm leading-relaxed text-[#4E3F2C] space-y-3">
          {section === 'about' && (
            <>
              <p>
                Erena Esports is a mobile gaming arena built for competitive Indian players. Join
                daily Free Fire custom rooms, play free Erena Ludo matches, and test your game sense
                in Predict &amp; Earn.
              </p>
              <p>
                Withdraw your winnings directly via UPI, Google Pay, PhonePe, or Paytm with instant
                settlement.
              </p>
            </>
          )}

          {section === 'leaderboard' && (
            <div className="space-y-2">
              <p className="text-xs text-[#6B5A42]">
                Top tournament earners across solo, squad, and Ludo rooms this week:
              </p>
              <div className="divide-y divide-[#F3E9D2] rounded-xl border border-[#EADAB5] overflow-hidden">
                {TOP_PLAYERS.map((item) => (
                  <div
                    key={item.rank}
                    className="flex items-center justify-between px-3.5 py-2.5 bg-[#FFFEFB]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-display font-bold text-sm text-[#B87A00] tabular-nums w-5">
                        #{item.rank}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#2C2214] truncate">{item.player}</p>
                        <p className="text-xs text-[#78664E]">{item.game}</p>
                      </div>
                    </div>
                    <span className="font-display font-bold text-sm text-[#1E7E34] tabular-nums shrink-0">
                      {item.winnings}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section === 'support' && (
            <>
              <p>
                Need help with tournament room IDs, wallet deposits, or UPI withdrawals? Our support
                team responds inside the Erena Esports app under the Help Desk tab.
              </p>
              <p className="text-xs text-[#6B5A42]">
                Tip: Always download the latest APK directly from this official page to avoid room
                sync issues.
              </p>
            </>
          )}

          {section === 'refer' && (
            <>
              <p>
                Share your referral code inside the Erena Esports app with your squad. Every time a
                friend joins and completes their first match, you receive instant bonus coins in your
                wallet.
              </p>
            </>
          )}

          {section === 'help' && (
            <ol className="list-decimal pl-5 space-y-2">
              <li>Tap any highlighted Download Now button to open the official APK download.</li>
              <li>Open the downloaded Erena Esports APK file from your browser notifications.</li>
              <li>Allow &ldquo;Install from this source&rdquo; if prompted by Android and tap Install.</li>
              <li>Launch the app, register your profile, and enter your first tournament.</li>
            </ol>
          )}
        </div>

        <div className="pt-3 border-t border-[#EFE4CA] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#5E4D36] hover:bg-[#FAF5E9] transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-cta-highlight inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold tracking-wide text-white uppercase whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
}
