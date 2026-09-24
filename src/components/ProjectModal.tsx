import React from 'react';
import { PortfolioProject } from '../data/content.ts';
import { X, Check, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onSelectProjectForQuote: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProjectForQuote,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05070D]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1424] border border-[#00BFFF]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0A1020]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#00BFFF] px-2.5 py-1 rounded bg-[#05070D] border border-[#00BFFF]/30">
              DEMO PROJECT
            </span>
            <span className="text-xs font-semibold text-[#A7B1C2] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-lg bg-[#05070D] text-[#A7B1C2] hover:text-white hover:border-[#00BFFF]/40 border border-transparent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Project Preview Image */}
          <div className="relative rounded-xl overflow-hidden border border-[#00BFFF]/20 aspect-video bg-[#05070D]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-[#05070D]/90 border border-[#00BFFF]/40 text-xs font-semibold text-[#38D9FF] px-3 py-1 rounded-md">
              {project.metrics}
            </div>
          </div>

          <div>
            <h3 id="modal-project-title" className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#A7B1C2] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38D9FF] mb-3">
              Key Capabilities & Engineering
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#A7B1C2] bg-[#0A1020] p-2.5 rounded-lg border border-white/5">
                  <Check className="w-4 h-4 text-[#00BFFF] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38D9FF] mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-white bg-[#0A1020] border border-[#00BFFF]/20 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-3.5 rounded-lg bg-[#0A1020] border border-[#00BFFF]/15 flex items-start gap-2.5 text-xs text-[#A7B1C2]">
            <ShieldCheck className="w-4 h-4 text-[#00BFFF] shrink-0 mt-0.5" />
            <span>
              This is a demonstration concept developed by GURJAAP to showcase UI/UX craftsmanship, engineering architecture, and responsiveness.
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#0A1020] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A7B1C2]">
            Want a tailored platform built like this?
          </div>
          <button
            onClick={() => {
              onSelectProjectForQuote(project.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00BFFF] to-[#008CFF] hover:from-[#38D9FF] hover:to-[#00BFFF] rounded-lg glow-cyan-sm transition-all"
          >
            <span>Request Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
