import React from 'react';
import { PRICING_PLANS } from '../data/content.ts';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#0A1020] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Value & Engagement
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            SIMPLE. FLEXIBLE. CLEAR.
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            Transparent engagement tiers designed to provide exactly what you need at your current stage of growth.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-[#0D1424] border-[#00BFFF] glow-cyan-md shadow-2xl scale-[1.02]'
                  : 'bg-[#0D1424]/70 border-[#00BFFF]/20 glow-border hover:bg-[#0D1424]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00BFFF] to-[#008CFF] text-[#05070D] font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-mono text-[#00BFFF] font-semibold uppercase tracking-wider">
                    Custom Quote
                  </span>
                </div>

                <div className="text-xs font-medium text-[#38D9FF] mb-2">
                  {plan.subtitle}
                </div>

                <p className="text-sm text-[#A7B1C2] leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="p-3 rounded-lg bg-[#0A1020] border border-white/5 text-xs text-[#A7B1C2] mb-6">
                  <strong className="text-white block mb-1">Best suited for:</strong>
                  {plan.bestFor}
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Deliverables & Inclusions:
                  </div>
                  {plan.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A7B1C2]">
                      <Check className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-98 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#00BFFF] to-[#008CFF] text-white hover:from-[#38D9FF] hover:to-[#00BFFF] glow-cyan-sm shadow-md'
                    : 'bg-[#0A1020] text-white hover:bg-[#00BFFF]/15 border border-[#00BFFF]/30'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Honest Transparency Note */}
        <div className="p-5 rounded-xl bg-[#0D1424] border border-[#00BFFF]/20 max-w-2xl mx-auto flex items-center justify-center gap-3 text-center">
          <HelpCircle className="w-5 h-5 text-[#00BFFF] shrink-0" />
          <span className="text-xs sm:text-sm text-[#A7B1C2]">
            Every business is different. <strong className="text-white">Contact us for a transparent, tailor-made custom quote</strong> with no hidden fees.
          </span>
        </div>
      </div>
    </section>
  );
};
