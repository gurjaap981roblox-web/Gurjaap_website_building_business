import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const steps = [
    { title: 'IDEA', desc: 'The initial concept and bold ambition' },
    { title: 'STRATEGY', desc: 'Architecture, validation and commercial roadmap' },
    { title: 'BUILD', desc: 'Modern software engineering and high-fidelity design' },
    { title: 'GROW', desc: 'Conversion optimization, distribution and scale' },
    { title: 'SUCCESS', desc: 'A durable, profitable and sustainable venture' },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
              Purpose & Conviction
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance">
              THE VISION BEHIND GURJAAP
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A7B1C2] leading-relaxed mb-8">
              <p>
                <strong className="text-white font-semibold">GURJAAP Business Solutions</strong> exists to help ambitious people transform ideas into meaningful digital businesses.
              </p>
              <p>
                We believe that great businesses begin with great ideas — but ideas need strategy, execution and technology to become reality.
              </p>
              <p>
                Our goal is to make modern digital solutions easier to understand, easier to access and easier to build.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00BFFF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Your Idea. Our Mission.</div>
                  <div className="text-xs text-[#A7B1C2] mt-0.5">We champion your venture as if it were our own.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38D9FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Turning Ideas Into Reality</div>
                  <div className="text-xs text-[#A7B1C2] mt-0.5">Tangible execution, avoiding theoretical fluff.</div>
                </div>
              </div>
            </div>

            {/* Closing Brand Statement Banner */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#00BFFF]/10 to-[#008CFF]/5 border border-[#00BFFF]/25 flex items-center gap-3">
              <div className="w-2 h-8 rounded-full bg-[#00BFFF]" />
              <div className="text-sm sm:text-base font-semibold text-white italic">
                “More Than a Website — It's Your Future.”
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Flow Visual (IDEA ↓ STRATEGY ↓ BUILD ↓ GROW ↓ SUCCESS) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0D1424] rounded-2xl p-7 border border-[#00BFFF]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00BFFF]/10 blur-3xl pointer-events-none" />

              <div className="text-center pb-4 border-b border-white/10 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00BFFF]">
                  Transformation Engine
                </span>
                <h3 className="text-base font-bold text-white mt-1">From Conception to Reality</h3>
              </div>

              <div className="flex flex-col items-center space-y-3">
                {steps.map((step, idx) => (
                  <React.Fragment key={step.title}>
                    <div className="w-full bg-[#0A1020] hover:bg-[#152238] border border-[#00BFFF]/25 rounded-xl p-3.5 transition-colors text-left flex items-center justify-between group">
                      <div>
                        <div className="text-xs font-mono text-[#00BFFF] font-bold">0{idx + 1}</div>
                        <div className="text-sm font-extrabold text-white tracking-wider group-hover:text-[#38D9FF] transition-colors">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-[#A7B1C2] mt-0.5">{step.desc}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#00BFFF] group-hover:scale-150 transition-transform" />
                    </div>

                    {idx < steps.length - 1 && (
                      <div className="flex items-center justify-center text-[#00BFFF] my-0.5">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
