export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  iconName: 'lightbulb' | 'laptop' | 'code' | 'trending-up' | 'headset';
  description: string;
  features: string[];
  ctaText: string;
  badge: string;
}

export interface SolutionStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'E-Commerce' | 'Startup' | 'Business' | 'Dashboard' | 'Mobile App' | 'AI Solution';
  shortDesc: string;
  fullDesc: string;
  image: string;
  metrics: string;
  features: string[];
  techStack: string[];
  isDemo: true;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BRAND_CONFIG = {
  name: 'GURJAAP',
  subBrand: 'BUSINESS SOLUTIONS',
  tagline: 'BUILD • GROW • SUCCEED',
  supportingMessage: 'Your Business, Our Priority',
  philosophy: 'Your Idea. Our Mission.',
  positioning: 'Turning Ideas Into Real Businesses',
  closingStatement: "More Than a Website — It's Your Future",
  email: 'gurjaap981roblox@gmail.com',
  phone: '8968505367',
  formattedPhone: '+91 89685 05367',
  foundedYear: '2026',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-planning',
    number: '01',
    title: 'Business Ideas & Planning',
    iconName: 'lightbulb',
    description: 'Turn your idea into a structured business concept with clear goals, positioning and execution strategy.',
    features: [
      'Idea validation & feasibility analysis',
      'Structured business planning roadmap',
      'Strategic market & audience positioning',
      'Go-to-market execution blueprint',
      'Sustainable growth planning model'
    ],
    ctaText: 'Explore Service',
    badge: 'Ideation & Strategy'
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Website & Digital Solutions',
    iconName: 'laptop',
    description: 'Build a powerful online presence with modern, responsive and conversion-focused websites.',
    features: [
      'Custom corporate & brand websites',
      'High-converting landing pages',
      'E-commerce platforms & product storefronts',
      'Dynamic web applications & portals',
      'Responsive design across all devices'
    ],
    ctaText: 'Build My Website',
    badge: 'Web Architecture'
  },
  {
    id: 'software-engineering',
    number: '03',
    title: 'App & Software Development',
    iconName: 'code',
    description: 'Transform your business requirements into modern software experiences and custom digital tools.',
    features: [
      'Interactive web applications',
      'Internal business workflow tools',
      'Process automation & integrations',
      'Real-time analytics dashboards',
      'Tailored custom software architecture'
    ],
    ctaText: 'Build My Product',
    badge: 'Custom Engineering'
  },
  {
    id: 'marketing-growth',
    number: '04',
    title: 'Marketing & Growth Strategy',
    iconName: 'trending-up',
    description: 'Reach more people, build your brand and create sustainable growth strategies tailored to your market.',
    features: [
      'Data-driven digital marketing strategy',
      'Distinctive brand positioning & identity',
      'Lead generation & conversion funnels',
      'Customer acquisition & retention systems',
      'Continuous online visibility enhancement'
    ],
    ctaText: 'Grow My Business',
    badge: 'Growth Engine'
  },
  {
    id: 'support-consultation',
    number: '05',
    title: 'Support & Consultation',
    iconName: 'headset',
    description: 'Get practical guidance and dedicated support as you build, launch, and scale your venture.',
    features: [
      'One-on-one business consultation',
      'Technical architecture guidance',
      'Strategic digital roadmapping',
      'Growth & operational planning',
      'Ongoing technical maintenance & support'
    ],
    ctaText: 'Talk To Us',
    badge: 'Advisory & Care'
  }
];

export const SOLUTION_STEPS: SolutionStep[] = [
  {
    step: '01',
    title: 'IDEA',
    headline: 'You bring the idea.',
    description: 'Every great venture begins as a spark. We listen to your vision, understand your ambitions, and evaluate the problem you aim to solve.',
    deliverables: ['Vision workshop', 'Core objective framing', 'Target audience mapping']
  },
  {
    step: '02',
    title: 'STRATEGY',
    headline: 'We structure the opportunity.',
    description: 'We turn raw concepts into an actionable blueprint with rigorous research, competitive positioning, and technical architecture.',
    deliverables: ['Market positioning', 'Technical feasibility', 'System roadmap']
  },
  {
    step: '03',
    title: 'DESIGN',
    headline: 'We create the digital experience.',
    description: 'Crafting intuitive, memorable user interfaces and brand aesthetics that resonate deeply with customers and drive engagement.',
    deliverables: ['Wireframing & prototypes', 'UI/UX design systems', 'Responsive layouts']
  },
  {
    step: '04',
    title: 'BUILD',
    headline: 'We turn the concept into a working product.',
    description: 'Our engineering team develops fast, scalable, and secure digital software using modern industry-standard frameworks.',
    deliverables: ['Frontend engineering', 'Backend architecture', 'Quality assurance testing']
  },
  {
    step: '05',
    title: 'LAUNCH',
    headline: 'We help you take it to market.',
    description: 'Smooth deployment to production environments with end-to-end configuration, SEO optimization, and launch checklist execution.',
    deliverables: ['Cloud deployment', 'Search engine optimization', 'Go-live monitoring']
  },
  {
    step: '06',
    title: 'GROW',
    headline: 'We help you improve and scale.',
    description: 'Building is just the first milestone. We collaborate continuously to analyze user feedback, enhance capabilities, and scale your revenue.',
    deliverables: ['Performance optimization', 'Feature iteration', 'Ongoing partnership']
  }
];

export const WHY_GURJAAP = [
  {
    title: 'SMART IDEAS',
    description: 'Practical thinking focused on real-world business outcomes, avoiding unnecessary complexity and wasted capital.'
  },
  {
    title: 'MODERN SOLUTIONS',
    description: "Cutting-edge technology and design systems built specifically for today's high-speed, demanding digital world."
  },
  {
    title: 'CLIENT FOCUSED',
    description: "Solutions engineered around the client's actual objectives, timelines, and business model requirements."
  },
  {
    title: 'TRUSTED & SECURE',
    description: 'Professional engineering standards with strict data security, code integrity, and privacy built in from day one.'
  },
  {
    title: 'GLOBAL VISION',
    description: 'Build locally. Think globally. Solutions engineered to scale seamlessly across international markets.'
  },
  {
    title: 'LONG-TERM PARTNERSHIP',
    description: 'We prioritize enduring relationships and joint growth over brief, one-off vendor transactions.'
  }
];

export const PHILOSOPHY_CARDS = [
  {
    number: '01',
    title: 'THINK BIG',
    summary: 'Expand your perspective.',
    description: "Don't limit the idea before exploring its true potential. We encourage bold aspirations backed by realistic execution."
  },
  {
    number: '02',
    title: 'START SMART',
    summary: 'Resource efficiency first.',
    description: 'Build intelligently instead of wasting resources. Validate early, prioritize high-impact capabilities, and iterate fast.'
  },
  {
    number: '03',
    title: 'BUILD BETTER',
    summary: 'Craftsmanship matters.',
    description: 'Focus relentlessly on quality, usability, reliability, and speed. A well-built solution compounds in value over time.'
  },
  {
    number: '04',
    title: 'GROW CONSISTENTLY',
    summary: 'Long-term compounding.',
    description: 'Long-term sustainable progress always beats short-term hype. We build systems that perform day in, day out.'
  },
  {
    number: '05',
    title: 'CREATE IMPACT',
    summary: 'Real problem solving.',
    description: 'Build things that actually solve real problems for real customers. True value creates genuine business resilience.'
  }
];

export const PROCESS_STEPS = [
  {
    step: 'STEP 01',
    phase: 'DISCOVER',
    headline: 'Understand your idea, goals and challenges.',
    detail: 'We initiate deep discovery discussions to capture your venture requirements, analyze your industry landscape, and establish tangible metrics for project success.'
  },
  {
    step: 'STEP 02',
    phase: 'PLAN',
    headline: 'Create a practical execution strategy.',
    detail: 'We formulate detailed specifications, user journey maps, technology selections, and an iterative milestone schedule.'
  },
  {
    step: 'STEP 03',
    phase: 'DESIGN',
    headline: 'Build the visual and user experience.',
    detail: 'High-fidelity wireframes, interactive component prototypes, and dark-mode polished visuals engineered for optimal conversion.'
  },
  {
    step: 'STEP 04',
    phase: 'DEVELOP',
    headline: 'Turn the concept into a working solution.',
    detail: 'Robust, type-safe development using modern full-stack architectures, clean code discipline, and rigorous security standards.'
  },
  {
    step: 'STEP 05',
    phase: 'LAUNCH & GROW',
    headline: 'Launch, improve and scale.',
    detail: 'Complete production deployment, analytics configuration, team handover, and ongoing strategic iterations to maximize growth.'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'demo-ecommerce',
    title: 'Aura Luxe Storefront',
    category: 'E-Commerce',
    shortDesc: 'Modern dark-mode luxury retail e-commerce platform with fluid checkout.',
    fullDesc: 'A high-performance digital commerce platform engineered for high-value merchandise. Features instant catalog filtering, headless cart synchronization, mobile-optimized checkout, and conversion-centered visual storytelling.',
    image: '/src/assets/images/portfolio_ecommerce_preview_1790254903387.jpg',
    metrics: 'Conversion Optimized',
    features: ['Instant search & filtering', 'Secure checkout flow', 'Responsive product galleries', 'Inventory dashboard preview'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe Ready'],
    isDemo: true
  },
  {
    id: 'demo-saas-dashboard',
    title: 'Vanguard Analytics Suite',
    category: 'Dashboard',
    shortDesc: 'Executive business intelligence and growth tracking interface.',
    fullDesc: 'Comprehensive cloud management dashboard providing real-time revenue analytics, customer cohort tracking, and automated pipeline forecasting with electric cyan visual data charts.',
    image: '/src/assets/images/portfolio_saas_dashboard_1790254917904.jpg',
    metrics: 'Real-time Metrics',
    features: ['Live chart visualizations', 'Cohort retention tables', 'Role-based permissions UI', 'Automated report exports'],
    techStack: ['React', 'TypeScript', 'Analytics Engine', 'RESTful API Ready'],
    isDemo: true
  },
  {
    id: 'demo-mobile-app',
    title: 'Pulse Venture Mobile',
    category: 'Mobile App',
    shortDesc: 'Modern mobile application concept for on-the-go venture management.',
    fullDesc: 'Designed for ambitious entrepreneurs to track project deliverables, customer communications, and financial summaries directly from their smartphones with native tactile responsiveness.',
    image: '/src/assets/images/portfolio_mobile_app_1790254937201.jpg',
    metrics: 'Native Touch First',
    features: ['Haptic feedback triggers', 'Offline synchronization', 'Instant push alerts', 'Biometric auth design'],
    techStack: ['React Native / PWA', 'TypeScript', 'Secure Storage'],
    isDemo: true
  },
  {
    id: 'demo-startup-platform',
    title: 'Nexis Tech Platform',
    category: 'Startup',
    shortDesc: 'High-converting technology startup landing page and lead engine.',
    fullDesc: 'A compelling digital presence built for an emerging technology startup seeking market validation, investor engagement, and pre-launch customer waitlist signups.',
    image: '/src/assets/images/hero_workspace_tech_1790254847659.jpg',
    metrics: 'Investor Ready',
    features: ['Interactive product showcase', 'Waitlist capture engine', 'Executive pitch deck layout', 'SEO schema configured'],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Performance Tuned'],
    isDemo: true
  },
  {
    id: 'demo-corporate-business',
    title: 'Strata Global Partners',
    category: 'Business',
    shortDesc: 'Authoritative corporate website for advisory and consulting practices.',
    fullDesc: 'A dignified, high-trust corporate digital identity engineered to position senior management as authoritative market leaders with case studies and direct consultation booking.',
    image: '/src/assets/images/hero_workspace_tech_1790254847659.jpg',
    metrics: 'High Authority',
    features: ['Interactive service matrix', 'Case study library', 'Consultation calendar embed', 'Corporate compliance'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    isDemo: true
  },
  {
    id: 'demo-ai-solution',
    title: 'Cognitive Workflow AI',
    category: 'AI Solution',
    shortDesc: 'Intelligent business automation and natural language query concept.',
    fullDesc: 'Concept demonstration showing how custom enterprise workflows can integrate modern AI interfaces to summarize documents, route client inquiries, and generate instant business intelligence.',
    image: '/src/assets/images/portfolio_saas_dashboard_1790254917904.jpg',
    metrics: 'Next-Gen AI Concept',
    features: ['Natural language search', 'Document synthesis UI', 'Automated smart routing', 'Privacy-first architecture'],
    techStack: ['Gemini Ready', 'TypeScript', 'Streaming UI'],
    isDemo: true
  }
];

export const BUSINESS_SOLUTIONS = [
  {
    id: 'ecommerce',
    title: 'E-COMMERCE',
    tagline: 'Sell products online.',
    description: 'Custom e-commerce platforms engineered for seamless purchasing, lightning-fast product filtering, and integrated payments.',
    benefits: ['Frictionless checkout experience', 'Mobile-first shopping interface', 'Inventory & order management']
  },
  {
    id: 'digital-products',
    title: 'DIGITAL PRODUCTS',
    tagline: 'Build and distribute digital products.',
    description: 'Deliver digital downloads, subscription memberships, downloadable tools, and gated content with automated delivery.',
    benefits: ['Instant automated delivery', 'Subscription billing systems', 'Protected member access']
  },
  {
    id: 'custom-solutions',
    title: 'CUSTOM SOLUTIONS',
    tagline: 'Create tools designed around your business.',
    description: 'Bespoke web applications, internal operational dashboards, and automated tools configured around your exact workflow.',
    benefits: ['Eliminate repetitive manual work', 'Custom software architecture', 'Seamless third-party integrations']
  },
  {
    id: 'online-presence',
    title: 'ONLINE PRESENCE',
    tagline: 'Build a professional digital identity.',
    description: 'Stand out from competitors with an unmistakable high-end digital identity that builds trust with customers and investors.',
    benefits: ['High-converting landing pages', 'SEO & performance optimized', 'Distinctive visual branding']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    subtitle: 'For individuals and small businesses.',
    description: 'Perfect for getting started with a high-impact digital presence.',
    bestFor: 'Entrepreneurs, single founders, and boutique local businesses launching an idea.',
    deliverables: [
      'Modern responsive website (Up to 5 sections)',
      'Custom branding & typography alignment',
      'Mobile optimization for all viewports',
      'Contact form & direct communication links',
      'Core SEO setup & fast loading optimization',
      'Social media & domain connection support'
    ],
    ctaText: 'Get a Quote'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    subtitle: 'For businesses ready to expand.',
    description: 'Designed for businesses that want more reach, leads, and digital capabilities.',
    bestFor: 'Growing ventures and expanding teams scaling their operations and customer acquisition.',
    popular: true,
    deliverables: [
      'Comprehensive multi-page or extended digital platform',
      'Interactive product/service showcases & filters',
      'Advanced conversion lead capture funnels',
      'Custom animations & modern UI component interactions',
      'Search engine optimization (technical & on-page)',
      'CMS / dynamic content architecture integration',
      'Dedicated launch assistance & training'
    ],
    ctaText: 'Get a Quote'
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    subtitle: 'For advanced requirements.',
    description: 'Built around your specific business needs, software logic, and scale.',
    bestFor: 'Startups, organizations, or specialized ventures requiring custom web tools or software.',
    deliverables: [
      'Full-stack custom software or web application',
      'Tailored business dashboards & workflow automation',
      'E-commerce & custom payment gateway implementation',
      'Third-party API & database integrations',
      'Enterprise security & performance audits',
      'Priority ongoing consultation & technical support'
    ],
    ctaText: 'Talk To Us'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What does GURJAAP do?',
    answer: 'GURJAAP Business Solutions provides modern business, website, digital, software, growth and consultation solutions. We help entrepreneurs, startups, and established businesses transform ideas into complete, scalable digital realities.'
  },
  {
    question: 'Can you build a website for my business?',
    answer: 'Yes. We create modern, responsive, conversion-focused websites tailored specifically to your business requirements, whether you need a sleek landing page, corporate website, or e-commerce store.'
  },
  {
    question: 'Can you build custom software?',
    answer: 'Yes, custom software, interactive web applications, business dashboards, and workflow automation tools can be developed according to your specific project requirements.'
  },
  {
    question: 'How do I start?',
    answer: 'Simply contact GURJAAP and describe your idea, business or project. You can use our project request form, email us directly at gurjaap981roblox@gmail.com, or call us at 8968505367. We will discuss your goals and create a tailored roadmap.'
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes. Our startup-focused solutions cover every phase: idea validation, business planning, brand positioning, website creation, digital product development, and initial growth strategy.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes. Every business has unique needs. Custom requirements, specialized software integrations, and bespoke pricing arrangements are discussed through our direct consultation process.'
  }
];

export const STATS_ITEMS = [
  {
    value: '100%',
    label: 'Client Focus',
    sublabel: 'Dedicated to your actual business outcomes'
  },
  {
    value: '24/7',
    label: 'Digital Availability',
    sublabel: 'Global cloud platforms that never sleep'
  },
  {
    value: '∞',
    label: 'Growth Potential',
    sublabel: 'Scalable architecture without artificial limits'
  },
  {
    value: 'Global',
    label: 'Vision',
    sublabel: 'Engineered locally, built for international scale'
  }
];

export const AI_PRESET_RESPONSES: Record<string, string> = {
  website: "Absolutely. We build modern, responsive, conversion-centered websites tailored to your exact business goals. Whether you need a corporate presence, a high-converting landing page, or an e-commerce platform, we can craft it. What kind of business do you run?",
  software: "We engineer custom web apps, internal tools, analytics dashboards, and automated systems using modern TypeScript and cloud frameworks. Tell us about the manual tasks or workflows you would like to streamline.",
  idea: "Every great business begins with an idea! At GURJAAP, our philosophy is 'Your Idea. Our Mission.' We help you validate the concept, structure your business plan, design the user experience, and execute the technology.",
  pricing: "Every business is different, so we provide transparent, custom quotes based on your exact scope. We offer Starter, Growth, and Custom solutions. You can select your preferred tier or send a project request for an exact estimate.",
  contact: "You can reach Gurjaap directly at gurjaap981roblox@gmail.com or call +91 89685 05367. You can also fill out the project form right on this page!",
  default: "Thank you for reaching out to GURJAAP Business Solutions! We help ambitious founders and businesses build modern websites, custom software, and digital growth engines. How can we help you today?"
};
