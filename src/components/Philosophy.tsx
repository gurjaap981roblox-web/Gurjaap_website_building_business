import React from 'react';
import { PHILOSOPHY_CARDS } from '../data/content.ts';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0A1020] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Operating Ethos
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            BUSINESS PHILOSOPHY
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            The guiding principles that dictate how we build, advise, and execute for every business partner.
          </p>
        </div>

        {/* 5 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHILOSOPHY_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className={`bg-[#0D1424] rounded-2xl p-8 border border-[#00BFFF]/20 glow-border hover:bg-[#0F182C] transition-all duration-300 flex flex-col justify-between ${
                idx === 3 ? 'lg:col-span-1' : idx === 4 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#00BFFF]">
                    {card.number}
                  </span>
                  <span className="text-xs text-[#A7B1C2] font-medium">
                    {card.summary}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-sm text-[#A7B1C2] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider text-[#38D9FF] uppercase">
                  Pillar {card.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
