import React from 'react';
import { SERVICES, ServiceItem } from '../data/content.ts';
import { Lightbulb, Laptop, Code, TrendingUp, Headphones, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#00BFFF]" />;
      case 'laptop':
        return <Laptop className="w-5 h-5 text-[#00BFFF]" />;
      case 'code':
        return <Code className="w-5 h-5 text-[#00BFFF]" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-[#00BFFF]" />;
      case 'headset':
        return <Headphones className="w-5 h-5 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/15">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00BFFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Capabilities & Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            WHAT WE BUILD
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            Everything you need to launch, operate and grow in the digital world.
          </p>
        </div>

        {/* 5 Service Cards Grid: 3 in top row, 2 in bottom row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-[#0D1424] rounded-2xl p-7 border border-[#00BFFF]/20 glow-border hover:bg-[#0F182C] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1020] border border-[#00BFFF]/30 flex items-center justify-center glow-cyan-sm group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#00BFFF] tracking-wider">
                    {service.number}
                  </span>
                </div>

                <div className="text-[11px] font-semibold tracking-wider text-[#38D9FF] uppercase mb-1.5">
                  {service.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-[#A7B1C2] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#A7B1C2]">
                      <Check className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService(service.title)}
                className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-[#0A1020] hover:bg-[#00BFFF]/15 border border-[#00BFFF]/25 text-xs font-semibold text-white hover:text-[#38D9FF] transition-colors group/btn"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom 2 Services in 2-column wide layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.slice(3, 5).map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-[#0D1424] rounded-2xl p-7 border border-[#00BFFF]/20 glow-border hover:bg-[#0F182C] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1020] border border-[#00BFFF]/30 flex items-center justify-center glow-cyan-sm group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#00BFFF] tracking-wider">
                    {service.number}
                  </span>
                </div>

                <div className="text-[11px] font-semibold tracking-wider text-[#38D9FF] uppercase mb-1.5">
                  {service.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-[#A7B1C2] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/5 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#A7B1C2]">
                      <Check className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService(service.title)}
                className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-[#0A1020] hover:bg-[#00BFFF]/15 border border-[#00BFFF]/25 text-xs font-semibold text-white hover:text-[#38D9FF] transition-colors group/btn"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
