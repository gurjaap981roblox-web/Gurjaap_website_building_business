import React from 'react';
import { WHY_GURJAAP } from '../data/content.ts';
import { Shield, Sparkles, Target, Lock, Globe, Handshake } from 'lucide-react';

export const WhyGurjaap: React.FC = () => {
  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-[#00BFFF]" />;
      case 1:
        return <Shield className="w-5 h-5 text-[#00BFFF]" />;
      case 2:
        return <Target className="w-5 h-5 text-[#00BFFF]" />;
      case 3:
        return <Lock className="w-5 h-5 text-[#00BFFF]" />;
      case 4:
        return <Globe className="w-5 h-5 text-[#00BFFF]" />;
      case 5:
        return <Handshake className="w-5 h-5 text-[#00BFFF]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00BFFF]" />;
    }
  };

  return (
    <section className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            The GURJAAP Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            WHY GURJAAP?
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            More than a service provider. A partner for your next big move.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_GURJAAP.map((item, index) => (
            <div
              key={item.title}
              className="group bg-[#0D1424] rounded-2xl p-7 border border-[#00BFFF]/20 glow-border hover:bg-[#0F182C] transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0A1020] border border-[#00BFFF]/30 flex items-center justify-center glow-cyan-sm mb-5 group-hover:scale-105 transition-transform">
                {getCardIcon(index)}
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#38D9FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#A7B1C2] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
