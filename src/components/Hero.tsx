import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, TrendingUp, CheckCircle2, Globe, Laptop } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#008CFF]/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00BFFF]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #00BFFF 1px, transparent 1px), linear-gradient(to bottom, #00BFFF 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean, unboxed kicker without generic pill enclosures */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-4">
              <span>GURJAAP Business Solutions</span>
              <span aria-hidden="true" className="text-[#38D9FF]/40">·</span>
              <span className="text-[#A7B1C2]">Your Business, Our Priority</span>
            </div>

            {/* Primary dominant headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              BUILD <span className="text-[#00BFFF]">·</span> GROW <span className="text-[#00BFFF]">·</span> SUCCEED
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#38D9FF] mb-5 tracking-tight">
              Turn Your Ideas Into Real Businesses.
            </h2>

            {/* Body */}
            <p className="text-[#A7B1C2] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Smart, modern and innovative business solutions designed to help entrepreneurs, startups and businesses build their digital presence, launch products and grow with confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00BFFF] via-[#008CFF] to-[#00BFFF] bg-size-200 hover:bg-pos-100 rounded-lg glow-cyan-md hover:glow-cyan-lg active:scale-[0.98] transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#0D1424] hover:bg-[#152238] border border-[#00BFFF]/30 hover:border-[#00BFFF]/60 rounded-lg active:scale-[0.98] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#00BFFF]" />
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="pt-6 border-t border-[#00BFFF]/15 w-full">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#A7B1C2]">
                <span className="text-white font-semibold">Ideas</span>
                <span className="text-[#00BFFF]">→</span>
                <span className="text-white font-semibold">Strategy</span>
                <span className="text-[#00BFFF]">→</span>
                <span className="text-white font-semibold">Action</span>
                <span className="text-[#00BFFF]">→</span>
                <span className="text-[#38D9FF] font-bold">Success</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Floating UI Status Indicators */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glowing backframe border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00BFFF]/40 to-[#008CFF]/20 rounded-2xl blur-lg opacity-60" />

              {/* Main Visual Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#00BFFF]/30 bg-[#0D1424] aspect-[16/11] sm:aspect-[16/10] shadow-2xl">
                <img
                  src="/src/assets/images/hero_workspace_tech_1790254847659.jpg"
                  alt="Futuristic technology workspace with laptops and digital business dashboards"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    imgLoaded ? 'opacity-95' : 'opacity-0'
                  }`}
                />

                {/* Styled CSS/SVG fallback container if image is loading */}
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1020] via-[#0D1424] to-[#05070D] flex flex-col items-center justify-center p-6 text-center">
                    <Laptop className="w-12 h-12 text-[#00BFFF] mb-3 animate-pulse" />
                    <span className="text-sm font-semibold text-white">GURJAAP Digital Workspace</span>
                    <span className="text-xs text-[#A7B1C2] mt-1">High-performance digital solutions</span>
                  </div>
                )}

                {/* Dark gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating UI Indicator Card 1: "Growth +42%" (Top Right) */}
              <div className="absolute -top-4 -right-3 sm:-right-6 bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/40 rounded-xl p-3 shadow-xl glow-cyan-sm animate-float-gentle z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00BFFF]/15 border border-[#00BFFF]/30 flex items-center justify-center text-[#38D9FF]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-[#A7B1C2] tracking-wider">Performance</div>
                  <div className="text-sm font-bold text-white tabular-nums">Growth +42%</div>
                </div>
              </div>

              {/* Floating UI Indicator Card 2: "Website Launched" (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/40 rounded-xl p-3 shadow-xl glow-cyan-sm animate-float-delayed z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-[#A7B1C2] tracking-wider">Milestone</div>
                  <div className="text-sm font-bold text-white">Website Launched</div>
                </div>
              </div>

              {/* Floating UI Indicator Card 3: "Global Reach" (Mid Right) */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/40 rounded-xl p-2.5 shadow-xl glow-cyan-sm animate-float-gentle z-20 items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center text-[#38D9FF]">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-semibold text-white">Global Reach</div>
              </div>

              {/* Floating UI Indicator Card 4: "New Business" (Top Left) */}
              <div className="hidden sm:flex absolute -top-5 left-8 bg-[#0D1424]/90 backdrop-blur-md border border-[#00BFFF]/30 rounded-xl py-1.5 px-3 shadow-md text-xs font-medium text-[#38D9FF] items-center gap-1.5 z-20">
                <Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />
                <span>New Business Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
