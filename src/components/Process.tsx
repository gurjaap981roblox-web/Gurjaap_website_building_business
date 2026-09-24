import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content.ts';
import { Search, Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-[#00BFFF]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#00BFFF]" />;
      case 2:
        return <Palette className="w-5 h-5 text-[#00BFFF]" />;
      case 3:
        return <Code2 className="w-5 h-5 text-[#00BFFF]" />;
      case 4:
        return <Rocket className="w-5 h-5 text-[#00BFFF]" />;
      default:
        return <Search className="w-5 h-5 text-[#00BFFF]" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
            Predictable Progression
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            HOW WE WORK
          </h2>
          <p className="text-lg text-[#A7B1C2] leading-relaxed">
            A structured, 5-stage collaboration model designed to remove uncertainty and ensure rapid progress.
          </p>
        </div>

        {/* Dynamic Progress Timeline Tracker */}
        <div className="relative mb-12">
          {/* Progress bar background line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#0D1424] -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#00BFFF] to-[#38D9FF] -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center md:items-start p-4 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#0D1424] border-[#00BFFF] glow-cyan-sm shadow-xl'
                      : 'bg-[#0A1020] border-white/5 hover:border-[#00BFFF]/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#00BFFF] text-[#05070D]'
                          : isPast
                          ? 'bg-[#008CFF]/20 text-[#38D9FF]'
                          : 'bg-[#0D1424] text-[#A7B1C2]'
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#00BFFF]">
                      {step.step}
                    </span>
                  </div>

                  <div className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-[#A7B1C2]'}`}>
                    {step.phase}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-[#0D1424] rounded-2xl border border-[#00BFFF]/25 p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0A1020] text-[#00BFFF] border border-[#00BFFF]/30">
                {PROCESS_STEPS[activeStep].step}
              </span>
              <span className="text-sm font-bold text-[#38D9FF] tracking-wider uppercase">
                {PROCESS_STEPS[activeStep].phase}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {PROCESS_STEPS[activeStep].headline}
            </h3>

            <p className="text-base text-[#A7B1C2] leading-relaxed">
              {PROCESS_STEPS[activeStep].detail}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onStartProject}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00BFFF] to-[#008CFF] hover:from-[#38D9FF] hover:to-[#00BFFF] rounded-lg glow-cyan-sm transition-all"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
