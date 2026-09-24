import React, { useState } from 'react';
import { SOLUTION_STEPS } from '../data/content.ts';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

interface SolutionsProps {
  onStartProject: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onStartProject }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="solutions" className="py-24 relative bg-[#0A1020] border-t border-[#00BFFF]/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#008CFF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Execution Lifecycle
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            FROM IDEA TO EXECUTION
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            A proven, transparent methodology designed to bridge the gap between initial thought and market impact.
          </p>
        </div>

        {/* Interactive Step Switcher & Connected Stepper */}
        <div className="relative mb-12">
          {/* Subtle connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[2px] bg-gradient-to-r from-[#00BFFF]/20 via-[#00BFFF]/50 to-[#008CFF]/20 z-0" />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {SOLUTION_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center p-4 rounded-xl text-center transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#0D1424] border-[#00BFFF] glow-cyan-md shadow-lg scale-105'
                      : 'bg-[#0D1424]/60 border-[#00BFFF]/15 hover:border-[#00BFFF]/40 hover:bg-[#0D1424]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-mono mb-2 transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#00BFFF] to-[#008CFF] text-white shadow-md'
                        : 'bg-[#0A1020] text-[#A7B1C2] border border-[#00BFFF]/20'
                    }`}
                  >
                    {step.step}
                  </div>
                  <span className={`text-xs font-bold tracking-wider uppercase ${isSelected ? 'text-[#38D9FF]' : 'text-white'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="bg-[#0D1424] border border-[#00BFFF]/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00BFFF]/10 to-transparent pointer-events-none rounded-bl-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-[#00BFFF] px-2.5 py-1 rounded bg-[#0A1020] border border-[#00BFFF]/30">
                  PHASE {SOLUTION_STEPS[activeStepIndex].step}
                </span>
                <span className="text-sm font-semibold tracking-wider text-[#A7B1C2] uppercase">
                  {SOLUTION_STEPS[activeStepIndex].title}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {SOLUTION_STEPS[activeStepIndex].headline}
              </h3>

              <p className="text-base text-[#A7B1C2] leading-relaxed mb-6">
                {SOLUTION_STEPS[activeStepIndex].description}
              </p>

              <div>
                <div className="text-xs font-semibold text-[#38D9FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00BFFF]" />
                  <span>Key Deliverables</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {SOLUTION_STEPS[activeStepIndex].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-medium text-white bg-[#0A1020] border border-[#00BFFF]/20 rounded-lg px-3 py-1.5 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center pt-6 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-8">
              <div className="text-xs text-[#A7B1C2] mb-4 text-center lg:text-right">
                Ready to initiate this phase for your venture?
              </div>
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#00BFFF] to-[#008CFF] hover:from-[#38D9FF] hover:to-[#00BFFF] rounded-lg glow-cyan-sm transition-all shadow-md active:scale-95"
              >
                <span>Initiate Step {SOLUTION_STEPS[activeStepIndex].step}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
