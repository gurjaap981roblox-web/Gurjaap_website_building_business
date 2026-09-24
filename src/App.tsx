/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Solutions } from './components/Solutions.tsx';
import { WhyGurjaap } from './components/WhyGurjaap.tsx';
import { Stats } from './components/Stats.tsx';
import { About } from './components/About.tsx';
import { Philosophy } from './components/Philosophy.tsx';
import { Process } from './components/Process.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { BusinessCategories } from './components/BusinessCategories.tsx';
import { Pricing } from './components/Pricing.tsx';
import { CTASection } from './components/CTASection.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { AiAssistant } from './components/AiAssistant.tsx';

export default function App() {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForForm(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-white flex flex-col font-sans selection:bg-[#00BFFF]/30 selection:text-[#38D9FF]">
      {/* Sticky Top Navigation */}
      <Navbar onStartProject={() => scrollToContact()} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Services Section: WHAT WE BUILD */}
        <Services onSelectService={(serviceTitle) => scrollToContact(serviceTitle)} />

        {/* 3. Solutions Section: FROM IDEA TO EXECUTION */}
        <Solutions onStartProject={() => scrollToContact('Idea to Execution Project')} />

        {/* 4. Why GURJAAP */}
        <WhyGurjaap />

        {/* 5. Statistics Strip */}
        <Stats />

        {/* 6. About Section: THE VISION BEHIND GURJAAP */}
        <About />

        {/* 7. Business Philosophy */}
        <Philosophy />

        {/* 8. Process Section: HOW WE WORK */}
        <Process onStartProject={() => scrollToContact('Discovery & Planning')} />

        {/* 9. Portfolio / Projects */}
        <Portfolio onRequestQuoteWithProject={(projectName) => scrollToContact(`Similar to ${projectName}`)} />

        {/* 10. E-Commerce / Business Solutions: YOUR BUSINESS. DIGITALLY. */}
        <BusinessCategories onSelectSolution={(solutionTitle) => scrollToContact(solutionTitle)} />

        {/* 11. Pricing: SIMPLE. FLEXIBLE. CLEAR. */}
        <Pricing onSelectPlan={(planName) => scrollToContact(`${planName} Tier`)} />

        {/* 12. Full-Width CTA: HAVE AN IDEA? LET'S BUILD IT. */}
        <CTASection
          onStartProject={() => scrollToContact()}
          onContactClick={() => scrollToContact()}
        />

        {/* 13. FAQ Section */}
        <FAQ />

        {/* 14. Contact Section */}
        <Contact initialService={selectedServiceForForm} />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Direct Contact Floating Actions */}
      <FloatingActions />

      {/* Interactive AI Assistant Demo */}
      <AiAssistant />
    </div>
  );
}
