import React from 'react';
import { STATS_ITEMS } from '../data/content.ts';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#0A1020] border-y border-[#00BFFF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#00BFFF]/15">
          {STATS_ITEMS.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38D9FF] to-[#00BFFF] mb-2 font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#A7B1C2] max-w-[200px]">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
