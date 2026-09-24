import React from 'react';
import { CrownLogo } from './CrownLogo.tsx';
import { BRAND_CONFIG } from '../data/content.ts';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070D] border-t border-[#00BFFF]/20 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <CrownLogo size="lg" className="mb-4" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-sm text-[#A7B1C2] leading-relaxed max-w-sm mb-6">
              Smart, modern and innovative business solutions designed to help entrepreneurs, startups and businesses build their digital presence, launch products and grow with confidence.
            </p>
            <div className="text-xs text-[#A7B1C2] italic">
              "More Than a Website — It's Your Future"
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </div>
            <ul className="space-y-2.5 text-xs text-[#A7B1C2]">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#38D9FF] transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#38D9FF] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('process')} className="hover:text-[#38D9FF] transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#38D9FF] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs text-[#A7B1C2]">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#38D9FF] transition-colors">
                  Websites & Platforms
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#38D9FF] transition-colors">
                  Custom Software
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-[#38D9FF] transition-colors">
                  Business Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#38D9FF] transition-colors">
                  Growth Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Support
            </div>
            <ul className="space-y-2.5 text-xs text-[#A7B1C2]">
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-[#38D9FF] transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-[#38D9FF] transition-colors">
                  Custom Quotes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#38D9FF] transition-colors">
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Connect
            </div>
            <div className="space-y-3 text-xs text-[#A7B1C2]">
              <div>
                <span className="block text-[10px] text-white/50 mb-0.5">Email</span>
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="hover:text-[#38D9FF] transition-colors break-all"
                >
                  {BRAND_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="block text-[10px] text-white/50 mb-0.5">Direct Line</span>
                <a
                  href={`tel:${BRAND_CONFIG.phone}`}
                  className="hover:text-[#38D9FF] transition-colors font-mono"
                >
                  {BRAND_CONFIG.phone}
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-[10px] text-white/50 mb-1">Social Networks</span>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono text-[#A7B1C2] bg-[#0D1424] px-2 py-1 rounded border border-white/5">
                    LinkedIn
                  </span>
                  <span className="text-[10px] font-mono text-[#A7B1C2] bg-[#0D1424] px-2 py-1 rounded border border-white/5">
                    Twitter / X
                  </span>
                  <span className="text-[10px] font-mono text-[#A7B1C2] bg-[#0D1424] px-2 py-1 rounded border border-white/5">
                    GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B1C2]">
          <div>
            © {BRAND_CONFIG.foundedYear} {BRAND_CONFIG.name} Business Solutions. All rights reserved.
          </div>
          <div className="text-[#38D9FF] font-medium">
            Built for ideas. Designed for growth.
          </div>
        </div>
      </div>
    </footer>
  );
};
