import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onContactClick }) => {
  return (
    <section className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/20 overflow-hidden">
      {/* Animated cyan radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00BFFF]/20 via-[#008CFF]/25 to-[#38D9FF]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00BFFF] mb-3">
          HAVE AN IDEA?
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6">
          LET'S BUILD IT.
        </h2>

        <p className="text-lg sm:text-xl text-[#A7B1C2] max-w-2xl mx-auto mb-10 leading-relaxed">
          Your next big step could start with one conversation. Let's turn your vision into something real.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#00BFFF] via-[#008CFF] to-[#00BFFF] bg-size-200 hover:bg-pos-100 rounded-lg glow-cyan-md hover:glow-cyan-lg active:scale-95 transition-all duration-300 shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium text-white bg-[#0D1424] hover:bg-[#152238] border border-[#00BFFF]/30 hover:border-[#00BFFF]/60 rounded-lg active:scale-95 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-[#00BFFF]" />
            <span>Contact GURJAAP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
