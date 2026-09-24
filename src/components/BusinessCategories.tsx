import React from 'react';
import { BUSINESS_SOLUTIONS } from '../data/content.ts';
import { ShoppingBag, Package, Wrench, Globe, Check, ArrowRight } from 'lucide-react';

interface BusinessCategoriesProps {
  onSelectSolution: (title: string) => void;
}

export const BusinessCategories: React.FC<BusinessCategoriesProps> = ({ onSelectSolution }) => {
  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'ecommerce':
        return <ShoppingBag className="w-6 h-6 text-[#00BFFF]" />;
      case 'digital-products':
        return <Package className="w-6 h-6 text-[#00BFFF]" />;
      case 'custom-solutions':
        return <Wrench className="w-6 h-6 text-[#00BFFF]" />;
      case 'online-presence':
        return <Globe className="w-6 h-6 text-[#00BFFF]" />;
      default:
        return <Globe className="w-6 h-6 text-[#00BFFF]" />;
    }
  };

  return (
    <section className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Digital Transformation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            YOUR BUSINESS. DIGITALLY.
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            Tailored digital frameworks configured around the exact revenue model of your enterprise.
          </p>
        </div>

        {/* 4 Solution Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0D1424] rounded-2xl p-7 border border-[#00BFFF]/20 glow-border hover:bg-[#0F182C] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0A1020] border border-[#00BFFF]/30 flex items-center justify-center glow-cyan-sm mb-5 group-hover:scale-105 transition-transform">
                  {getSolutionIcon(item.id)}
                </div>

                <div className="text-sm font-bold text-[#38D9FF] tracking-wider uppercase mb-1">
                  {item.title}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.tagline}
                </h3>

                <p className="text-xs text-[#A7B1C2] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                  {item.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#A7B1C2]">
                      <Check className="w-3.5 h-3.5 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectSolution(item.title)}
                className="w-full inline-flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#0A1020] hover:bg-[#00BFFF]/15 border border-[#00BFFF]/25 text-xs font-semibold text-white hover:text-[#38D9FF] transition-colors"
              >
                <span>Inquire Category</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
