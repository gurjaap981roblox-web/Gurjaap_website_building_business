import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../data/content.ts';
import { Mail, Phone, ChevronUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Quick Action Bar (Bottom left/center, strictly non-intrusive) */}
      <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2">
        <a
          href={`mailto:${BRAND_CONFIG.email}`}
          aria-label="Email GURJAAP directly"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/30 text-white text-xs font-semibold glow-cyan-sm hover:border-[#00BFFF] hover:bg-[#152238] active:scale-95 transition-all shadow-lg"
        >
          <Mail className="w-4 h-4 text-[#00BFFF]" />
          <span className="hidden sm:inline">Email Us</span>
        </a>

        <a
          href={`tel:${BRAND_CONFIG.phone}`}
          aria-label="Call GURJAAP directly"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/30 text-white text-xs font-semibold glow-cyan-sm hover:border-[#00BFFF] hover:bg-[#152238] active:scale-95 transition-all shadow-lg"
        >
          <Phone className="w-4 h-4 text-[#38D9FF]" />
          <span className="hidden sm:inline">Call Us</span>
        </a>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 p-3 rounded-full bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/40 text-white hover:text-[#38D9FF] hover:border-[#00BFFF] glow-cyan-sm active:scale-95 transition-all shadow-xl"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
