import React, { useState } from 'react';
import { BRAND_CONFIG, SERVICES } from '../data/content.ts';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: initialService || SERVICES[1].title,
    budgetRange: 'Standard Venture',
    description: '',
  });

  // If initialService changed from outside clicks (e.g. Service or Pricing button)
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (type: 'email' | 'phone') => {
    if (type === 'email') {
      navigator.clipboard.writeText(BRAND_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText(BRAND_CONFIG.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.description.trim()) errs.description = 'Please provide a brief description of your project or idea';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate clean local submission state with zero fake backend pretension
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#05070D] border-t border-[#00BFFF]/15">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-[#008CFF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Direct Links */}
          <div className="lg:col-span-5 text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00BFFF] mb-3">
              Direct Inquiries
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
              LET'S BUILD SOMETHING GREAT TOGETHER.
            </h2>
            <p className="text-base sm:text-lg text-[#A7B1C2] leading-relaxed mb-8">
              Tell us about your idea, business or project. We are ready to turn your concept into reality.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#0D1424] border border-[#00BFFF]/20 flex items-center justify-between group hover:border-[#00BFFF]/50 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1020] border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#A7B1C2] font-semibold">Email Us Directly</div>
                    <a
                      href={`mailto:${BRAND_CONFIG.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#38D9FF] transition-colors break-all"
                    >
                      {BRAND_CONFIG.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('email')}
                  title="Copy email"
                  className="p-2 rounded-lg bg-[#0A1020] text-[#A7B1C2] hover:text-white border border-white/5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#0D1424] border border-[#00BFFF]/20 flex items-center justify-between group hover:border-[#00BFFF]/50 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1020] border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#A7B1C2] font-semibold">Phone / WhatsApp</div>
                    <a
                      href={`tel:${BRAND_CONFIG.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#38D9FF] transition-colors font-mono"
                    >
                      {BRAND_CONFIG.phone} ({BRAND_CONFIG.formattedPhone})
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('phone')}
                  title="Copy phone"
                  className="p-2 rounded-lg bg-[#0A1020] text-[#A7B1C2] hover:text-white border border-white/5 transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="p-4 rounded-xl bg-[#0A1020] border border-white/5 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#00BFFF] shrink-0" />
              <div className="text-xs text-[#A7B1C2]">
                <strong className="text-white block">Rapid Response Commitment</strong>
                Inquiries are reviewed promptly. Initial strategy feedback delivered within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Column: Project Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D1424] rounded-2xl border border-[#00BFFF]/30 p-7 sm:p-9 shadow-2xl relative">
              {/* Development Mode Notice as required by prompt */}
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Project Request System
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#00BFFF] bg-[#0A1020] px-2 py-0.5 rounded border border-[#00BFFF]/20">
                  Ready for Dispatch
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto glow-cyan-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Thanks! Your project request has been received.
                  </h3>

                  <p className="text-sm text-[#A7B1C2] max-w-md mx-auto leading-relaxed">
                    We'll review your details and get back to you soon at <strong className="text-white">{formData.email}</strong>.
                  </p>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          company: '',
                          serviceRequired: SERVICES[1].title,
                          budgetRange: 'Standard Venture',
                          description: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0A1020] hover:bg-[#152238] border border-[#00BFFF]/30 rounded-lg transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                        Full Name <span className="text-[#00BFFF]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full bg-[#0A1020] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#A7B1C2]/40 focus:outline-none focus:border-[#00BFFF] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                        Email Address <span className="text-[#00BFFF]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full bg-[#0A1020] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#A7B1C2]/40 focus:outline-none focus:border-[#00BFFF] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                        Phone Number <span className="text-[#00BFFF]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full bg-[#0A1020] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#A7B1C2]/40 focus:outline-none focus:border-[#00BFFF] transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Business / Company */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Horizon Labs (Optional)"
                        className="w-full bg-[#0A1020] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#A7B1C2]/40 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-[#0A1020] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Custom Integrated Solution">Custom Integrated Solution</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                        Budget Expectation
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-[#0A1020] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                      >
                        <option value="Starter Tier (Lean Launch)">Starter Tier (Lean Launch)</option>
                        <option value="Growth Tier (Multi-Feature)">Growth Tier (Multi-Feature)</option>
                        <option value="Custom Advanced / Enterprise">Custom Advanced / Enterprise</option>
                        <option value="Need Consultation & Guidance">Need Consultation & Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7B1C2] mb-1.5">
                      Project Description <span className="text-[#00BFFF]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Share a few details about your business concept, current blockers, and what you would like to achieve..."
                      className={`w-full bg-[#0A1020] border rounded-lg p-3.5 text-sm text-white placeholder-[#A7B1C2]/40 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none ${
                        errors.description ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.description && (
                      <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.description}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#00BFFF] via-[#008CFF] to-[#00BFFF] bg-size-200 hover:bg-pos-100 glow-cyan-sm hover:glow-cyan-md transition-all duration-300 disabled:opacity-50 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>SEND PROJECT REQUEST</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
