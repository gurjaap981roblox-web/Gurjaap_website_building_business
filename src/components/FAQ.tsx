import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content.ts';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0A1020] border-t border-[#00BFFF]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Clarity & Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            Everything you need to know about partnering with GURJAAP Business Solutions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#00BFFF]/20 bg-[#0D1424] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-[#0A1020] border border-[#00BFFF]/20 flex items-center justify-center shrink-0 text-[#00BFFF] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00BFFF] text-[#05070D]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#A7B1C2] leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
