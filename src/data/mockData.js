// Mock data for KlarityIQ website

export const navigationLinks = [
  { name: 'Product', path: '/product' },
  { name: 'Company', path: '/company' },
  // { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contact' }
];

export const heroData = {
  title: 'Solar Farm Intelligence',
  subtitle: 'Powered by Advanced Analytics',
  description: 'Transform your solar farm operations with real-time variance dashboards, predictive analytics, and intelligent forecasting for maximum performance and ROI.',
  ctaText: 'Get Started',
  secondaryCtaText: 'Watch Demo',
  heroImage: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzYxMzM1MTYxfDA&ixlib=rb-4.1.0&q=85'
};

export const features = [
  {
    title: 'Variance Dashboards',
    description: 'Real-time performance monitoring with P50/8760 design forecast comparisons. Track output at system, string, inverter, or module levels with instant variance detection.',
    icon: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzM1MTc3fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    title: 'Predictive Analytics',
    description: 'AI-driven forecasting based on weather patterns, historical data, and system conditions. Optimize operations and schedule proactive maintenance.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzM1MTc3fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    title: 'Operations Support',
    description: 'Integrated O&M workflows with automated ticketing, warranty management, and dispatch tracking. Reduce downtime with instant fault notifications.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtb25pdG9yaW5nJTIwc3lzdGVtc3xlbnwwfHx8fDE3NjEzMzUxODJ8MA&ixlib=rb-4.1.0&q=85'
  },
  {
    title: 'Financial Reporting',
    description: 'Comprehensive financial insights with automated compliance reporting. Track performance variances and make data-driven investment decisions.',
    icon: 'DollarSign',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzYxMzM1MTc3fDA&ixlib=rb-4.1.0&q=85'
  }
];

export const productFeatures = [
  {
    category: 'Real-Time Monitoring',
    title: 'Live Performance Tracking',
    description: 'Monitor your solar farm operations in real-time with 5-minute interval data feeds. Track performance at every level from individual modules to entire systems.',
    features: [
      'System, string, inverter & module-level monitoring',
      '5-minute interval data resolution',
      'Live output tracking vs. design forecasts',
      'Instant underperformance detection'
    ]
  },
  {
    category: 'Smart Analytics',
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning algorithms to predict issues before they impact production. Our AI analyzes patterns across weather, performance, and operational data.',
    features: [
      'Predictive maintenance scheduling',
      'Weather-based generation forecasting',
      'Anomaly detection algorithms',
      'Performance optimization recommendations'
    ]
  },
  {
    category: 'Operational Excellence',
    title: 'Streamlined Workflows',
    description: 'Manage your entire O&M operation from a single platform. Automate workflows, track service tickets, and coordinate teams efficiently.',
    features: [
      'Automated ticket generation',
      'Warranty & compliance tracking',
      'Dispatch management system',
      'Mobile app for field teams'
    ]
  },
  {
    category: 'Financial Intelligence',
    title: 'Performance & ROI Analytics',
    description: 'Get complete visibility into financial performance with detailed variance analysis and automated reporting for stakeholders.',
    features: [
      'Real-time ROI calculations',
      'Variance impact analysis',
      'Automated compliance reports',
      'Customizable financial dashboards'
    ]
  }
];

export const companyInfo = {
  mission: 'To empower solar farm operators with intelligent analytics that maximize performance, minimize downtime, and optimize financial returns.',
  vision: 'A future where every solar farm operates at peak efficiency through data-driven insights and predictive intelligence.',
  values: [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in solar analytics, leveraging cutting-edge AI and machine learning.',
      icon: 'Lightbulb'
    },
    {
      title: 'Transparency',
      description: 'We believe in complete visibility - from system performance to financial metrics, empowering informed decision-making.',
      icon: 'Eye'
    },
    {
      title: 'Reliability',
      description: 'Our platform is built for mission-critical operations with 99.9% uptime and enterprise-grade security.',
      icon: 'Shield'
    },
    {
      title: 'Partnership',
      description: 'We work alongside our clients as strategic partners, committed to their long-term success and operational excellence.',
      icon: 'Users'
    }
  ],
  stats: [
    { value: '500+', label: 'Solar Farms Monitored' },
    { value: '2.5 GW', label: 'Total Capacity Managed' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '15%', label: 'Avg. Efficiency Gain' }
  ],
  team: [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: '15+ years in renewable energy analytics and enterprise software',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Former lead engineer at top solar monitoring platform',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI & Analytics',
      bio: 'PhD in Machine Learning with focus on predictive maintenance',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
    },
    {
      name: 'James Park',
      role: 'VP of Operations',
      bio: '20+ years managing utility-scale solar installations',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
    }
  ]
};

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,499',
    period: '/month',
    description: 'Perfect for small to medium solar farms getting started with advanced analytics',
    features: [
      'Up to 50 MW capacity',
      'Real-time monitoring dashboard',
      'Basic variance analysis',
      'Email support',
      'Monthly performance reports',
      'Mobile app access',
      'API access (limited)'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$5,999',
    period: '/month',
    description: 'Comprehensive analytics and operations support for growing portfolios',
    features: [
      'Up to 200 MW capacity',
      'Advanced AI-powered analytics',
      'Predictive maintenance alerts',
      'Priority support (24/7)',
      'Custom reporting & dashboards',
      'Mobile app + field team tools',
      'Full API access',
      'O&M workflow automation',
      'Financial performance tracking'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for large-scale operations and multi-site portfolios',
    features: [
      'Unlimited capacity',
      'White-label platform option',
      'Custom AI model training',
      'Dedicated success manager',
      'On-premise deployment available',
      'Advanced security & compliance',
      'Custom integrations',
      'SLA guarantees',
      'Training & onboarding',
      'Multi-tenant architecture'
    ],
    popular: false
  }
];

export const testimonials = [
  {
    quote: 'KlarityIQ has transformed how we manage our 150 MW portfolio. The variance dashboards immediately identified underperforming assets, resulting in a 12% production increase.',
    author: 'David Martinez',
    role: 'Operations Director',
    company: 'SunPower Ventures'
  },
  {
    quote: 'The predictive analytics feature is a game-changer. We\'ve reduced unplanned downtime by 60% and maintenance costs by 35% in just six months.',
    author: 'Lisa Thompson',
    role: 'VP of Asset Management',
    company: 'GreenField Energy'
  },
  {
    quote: 'Finally, a platform that delivers real financial insights. The ROI tracking and variance analysis have made stakeholder reporting effortless.',
    author: 'Robert Chen',
    role: 'Chief Financial Officer',
    company: 'Horizon Solar Holdings'
  }
];

export const faqs = [
  {
    question: 'What types of solar farms does KlarityIQ support?',
    answer: 'KlarityIQ supports all utility-scale and commercial solar farms, from 1 MW to multi-gigawatt portfolios. We integrate with all major inverter brands including SolarEdge, Enphase, SMA, and Huawei.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most implementations are completed within 2-4 weeks. Our team handles all technical integration, data migration, and training to ensure a smooth transition.'
  },
  {
    question: 'Can KlarityIQ integrate with our existing systems?',
    answer: 'Yes! We offer comprehensive API access and pre-built integrations with major CRMs, SCADA systems, and asset management platforms. Custom integrations are available for Enterprise clients.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include dedicated support. Professional and Enterprise plans receive 24/7 priority support with guaranteed response times. Enterprise clients also get a dedicated success manager.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. KlarityIQ uses bank-level encryption, SOC 2 Type II compliance, and regular third-party security audits. Enterprise clients can opt for on-premise deployment for maximum control.'
  },
  {
    question: 'Do you offer a trial or demo?',
    answer: 'Yes! We provide personalized demos for all prospects. Contact our sales team to schedule a live demonstration with your actual data.'
  }
];

export const integrations = [
  { name: 'SolarEdge', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=SolarEdge' },
  { name: 'Enphase', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Enphase' },
  { name: 'SMA', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=SMA' },
  { name: 'Huawei', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Huawei' },
  { name: 'Fronius', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Fronius' },
  { name: 'ABB', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=ABB' }
];