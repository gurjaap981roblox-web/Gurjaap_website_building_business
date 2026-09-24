import React, { useState, useEffect } from 'react';
import { CrownLogo } from './CrownLogo.tsx';
import { NAV_LINKS } from '../data/content.ts';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070D]/85 backdrop-blur-md border-b border-[#00BFFF]/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Emblem */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF] rounded-lg"
          >
            <CrownLogo size="md" />
          </a>

          {/* Zone 2: Desktop Navigation Links (Clean single-line text links) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs xl:text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:text-[#38D9FF] ${
                    isActive ? 'text-[#00BFFF]' : 'text-[#A7B1C2] hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00BFFF] to-[#008CFF] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#00BFFF] to-[#008CFF] rounded-lg hover:from-[#38D9FF] hover:to-[#00BFFF] transition-all duration-200 glow-cyan-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9FF] whitespace-nowrap"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-[#0D1424] border border-[#00BFFF]/20 text-[#A7B1C2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00BFFF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1020]/95 backdrop-blur-xl border-b border-[#00BFFF]/25 px-5 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-2.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#00BFFF]/15 text-[#38D9FF] border border-[#00BFFF]/30'
                      : 'text-[#A7B1C2] hover:bg-[#0D1424] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#00BFFF]/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-[#00BFFF] to-[#008CFF] rounded-lg shadow-md glow-cyan-sm active:scale-[0.99]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
