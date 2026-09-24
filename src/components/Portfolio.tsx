import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/content.ts';
import { ArrowRight, Eye, Layers } from 'lucide-react';
import { ProjectModal } from './ProjectModal.tsx';

interface PortfolioProps {
  onRequestQuoteWithProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestQuoteWithProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'E-Commerce', 'Dashboard', 'Mobile App', 'Startup', 'Business', 'AI Solution'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#0A1020] border-t border-[#00BFFF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
              Concept Showcases
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              SELECTED PROJECTS
            </h2>
            <p className="text-base sm:text-lg text-[#A7B1C2] leading-relaxed">
              Explore our demonstration portfolio representing standard-setting UI/UX design, fluid interactions, and conversion architecture.
            </p>
          </div>

          {/* Explicit demo disclosure notice */}
          <div className="mt-4 md:mt-0 px-3.5 py-1.5 rounded-lg bg-[#0D1424] border border-[#00BFFF]/20 text-[11px] font-mono text-[#38D9FF] flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
            <span>ALL ENTRIES MARKED AS DEMO CONCEPTS</span>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#00BFFF] to-[#008CFF] text-white glow-cyan-sm shadow-md'
                  : 'bg-[#0D1424] text-[#A7B1C2] hover:text-white border border-[#00BFFF]/15 hover:border-[#00BFFF]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0D1424] rounded-2xl border border-[#00BFFF]/20 glow-border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#05070D]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-80" />

                  {/* Demo Badge */}
                  <div className="absolute top-3 left-3 bg-[#05070D]/85 backdrop-blur-md border border-[#00BFFF]/40 text-[10px] font-mono font-bold text-[#00BFFF] px-2.5 py-1 rounded">
                    DEMO PROJECT
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-[#0A1020]/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white px-2 py-0.5 rounded">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38D9FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#A7B1C2] leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-[#A7B1C2] bg-[#0A1020] px-2 py-0.5 rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-lg bg-[#0A1020] hover:bg-[#00BFFF]/15 border border-[#00BFFF]/25 text-xs font-semibold text-white hover:text-[#38D9FF] transition-colors group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-[#00BFFF]" />
                    <span>View Project</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectProjectForQuote={onRequestQuoteWithProject}
      />
    </section>
  );
};
