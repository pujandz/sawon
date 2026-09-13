export const SITE_CONFIG = {
  name: 'Sawon Saha',
  title: 'Sawon Saha – SEO Specialist in Bangladesh',
  description:
    'Sawon Saha is a certified SEO specialist in Bangladesh helping businesses grow organic traffic, rank higher on Google, and generate qualified leads through data-driven SEO strategies.',
  url: 'https://sawonsaha.com',
  ogImage: 'https://sawonsaha.com/og-image.jpg',
  twitterHandle: '@sawonsaha_seo',
  email: 'hello@sawonsaha.com',
  phone: '+880 1700-000000',
  location: 'Dhaka, Bangladesh',
  locale: 'en_US',
  author: {
    name: 'Sawon Saha',
    jobTitle: 'SEO Specialist',
    sameAs: [
      'https://linkedin.com/in/sawonsaha',
      'https://twitter.com/sawonsaha_seo',
      'https://facebook.com/sawonsaha.seo',
    ],
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'technical-seo',
    icon: '⚙️',
    title: 'Technical SEO',
    shortDesc: 'Fix crawl errors, improve site speed, and ensure flawless indexability.',
    description:
      'A technically sound website is the foundation of every successful SEO campaign. I audit and fix Core Web Vitals, crawl errors, structured data, XML sitemaps, canonical tags, and mobile usability issues so search engines can access and rank your content effectively.',
    features: [
      'Core Web Vitals optimization',
      'Crawl error resolution',
      'XML sitemap & robots.txt',
      'Schema markup implementation',
      'Mobile-first optimization',
      'Page speed improvements',
    ],
  },
  {
    id: 'on-page-seo',
    icon: '📄',
    title: 'On-Page SEO',
    shortDesc: 'Optimize every page element to rank higher and convert more visitors.',
    description:
      'I optimize title tags, meta descriptions, headings, internal linking, content structure, and keyword targeting to ensure each page is primed for the right search queries and satisfies user intent.',
    features: [
      'Keyword research & mapping',
      'Title tag & meta optimization',
      'Content structure & headings',
      'Internal linking strategy',
      'Image alt text & compression',
      'URL structure optimization',
    ],
  },
  {
    id: 'link-building',
    icon: '🔗',
    title: 'Link Building',
    shortDesc: 'Earn high-quality backlinks that boost domain authority and rankings.',
    description:
      'I build white-hat, editorial backlinks from authoritative and topically relevant websites. My link acquisition strategies include digital PR, guest posting, broken link reclamation, and HARO outreach.',
    features: [
      'Competitor backlink analysis',
      'High-authority guest posting',
      'Digital PR campaigns',
      'Broken link reclamation',
      'HARO outreach',
      'Toxic link disavowal',
    ],
  },
  {
    id: 'local-seo',
    icon: '📍',
    title: 'Local SEO',
    shortDesc: 'Dominate local search results and Google Maps in Bangladesh and beyond.',
    description:
      'I help local businesses appear in the Local Pack and Google Maps by optimizing Google Business Profile, building local citations, managing reviews, and creating geo-targeted content.',
    features: [
      'Google Business Profile optimization',
      'Local keyword targeting',
      'Citation building & cleanup',
      'Review generation strategy',
      'Local schema markup',
      'Geo-targeted landing pages',
    ],
  },
  {
    id: 'keyword-research',
    icon: '🔍',
    title: 'Keyword Research',
    shortDesc: 'Uncover high-value keywords your ideal customers are actually searching.',
    description:
      'I use tools like Ahrefs, SEMrush, and Google Search Console to identify high-opportunity keywords aligned with your business goals, mapped across the full buyer journey.',
    features: [
      'Search volume & difficulty analysis',
      'Buyer intent mapping',
      'Competitor gap analysis',
      'Long-tail keyword discovery',
      'Topic cluster planning',
      'Search trend analysis',
    ],
  },
  {
    id: 'seo-audit',
    icon: '🧪',
    title: 'SEO Audit',
    shortDesc: 'Get a comprehensive roadmap to fix what\'s holding your rankings back.',
    description:
      'I deliver a thorough 200+ point SEO audit covering technical health, on-page factors, off-page signals, content gaps, and competitor analysis — with a prioritized action plan.',
    features: [
      '200+ point technical check',
      'Content quality analysis',
      'Backlink profile audit',
      'Competitor benchmarking',
      'Core Web Vitals report',
      'Prioritized action roadmap',
    ],
  },
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: 'x', label: 'Avg. Traffic Growth' },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    client: 'E-Commerce Brand',
    industry: 'Online Retail',
    challenge: 'Organic traffic had dropped 40% after a Google algorithm update.',
    solution: 'Full technical audit, content pruning, E-E-A-T improvements, and high-authority link building.',
    results: [
      { metric: 'Organic Traffic', change: '+320%', period: '8 months' },
      { metric: 'Keyword Rankings (Top 10)', change: '+180 keywords', period: '' },
      { metric: 'Monthly Revenue from SEO', change: '+$45,000', period: '' },
    ],
    tags: ['E-Commerce SEO', 'Technical SEO', 'Link Building'],
  },
  {
    id: 2,
    client: 'SaaS Company',
    industry: 'Software',
    challenge: 'Brand-new website with zero domain authority competing in a crowded niche.',
    solution: 'Topic cluster strategy, programmatic SEO, digital PR, and conversion-focused landing pages.',
    results: [
      { metric: 'Domain Authority', change: '0 → 42', period: '12 months' },
      { metric: 'Organic Sign-ups', change: '+890%', period: '12 months' },
      { metric: 'Featured Snippets Won', change: '34', period: '' },
    ],
    tags: ['SaaS SEO', 'Content Strategy', 'Digital PR'],
  },
  {
    id: 3,
    client: 'Local Service Business',
    industry: 'Home Services',
    challenge: 'Invisible in local search; competitors dominating Google Maps.',
    solution: 'Google Business Profile optimization, local citation building, review strategy, and local content.',
    results: [
      { metric: 'Google Maps Ranking', change: 'Page 3 → #1', period: '3 months' },
      { metric: 'Phone Calls from GMB', change: '+560%', period: '' },
      { metric: 'Local Keyword Rankings', change: '+94 keywords', period: '' },
    ],
    tags: ['Local SEO', 'Google Business Profile', 'Citation Building'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'CEO, TechVenture BD',
    image: '/testimonials/rahul.jpg',
    rating: 5,
    text: 'Sawon transformed our online presence. Within 6 months, our organic traffic tripled and we started ranking #1 for our most competitive keywords. His data-driven approach and transparent reporting made all the difference.',
  },
  {
    id: 2,
    name: 'Nadia Rahman',
    role: 'Marketing Manager, ShopBD',
    image: '/testimonials/nadia.jpg',
    rating: 5,
    text: 'We hired Sawon after struggling with declining rankings for two years. His technical SEO audit uncovered issues we never knew existed. Six months later, we\'re at our highest organic revenue ever.',
  },
  {
    id: 3,
    name: 'James Thornton',
    role: 'Founder, GrowthSaaS',
    image: '/testimonials/james.jpg',
    rating: 5,
    text: 'Exceptional SEO work! Sawon built our entire content strategy from scratch. We went from zero to 50,000 monthly organic visitors in under a year. Highly recommended for any serious SEO investment.',
  },
  {
    id: 4,
    name: 'Fatima Khan',
    role: 'E-commerce Director, FashionHub',
    image: '/testimonials/fatima.jpg',
    rating: 5,
    text: 'Sawon\'s link building campaigns are genuine white-hat quality. Every backlink came from relevant, authoritative sites. Our Domain Rating jumped from 12 to 51, and rankings followed naturally.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is SEO and why does my business need it?',
    answer:
      'SEO (Search Engine Optimization) is the process of improving your website\'s visibility in organic (unpaid) search engine results. Businesses need SEO because over 90% of online experiences begin with a search engine. Ranking higher on Google drives consistent, high-intent traffic without ongoing ad spend — making it the highest ROI digital marketing channel in the long run.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'Most SEO campaigns show meaningful results within 3–6 months, with significant growth typically appearing by month 6–12. Timeline varies based on your website\'s current authority, competition level, and how aggressively you invest. Technical fixes can impact rankings within weeks, while content and link building strategies compound over time.',
  },
  {
    question: 'What is the difference between SEO and paid ads (PPC)?',
    answer:
      'SEO drives organic (free) traffic that compounds over time, while PPC (Pay-Per-Click) ads deliver instant but paid traffic that stops when you stop paying. SEO takes longer to show results but has a far higher long-term ROI. Most businesses benefit from using both — SEO for sustainable growth and PPC for immediate results and testing.',
  },
  {
    question: 'How do you measure SEO success?',
    answer:
      'I track a comprehensive set of KPIs including organic traffic growth, keyword ranking improvements, domain authority, click-through rates (CTR), conversion rate from organic traffic, and ultimately revenue attributed to SEO. Monthly reporting with Google Analytics 4, Google Search Console, and Ahrefs data is included in all my packages.',
  },
  {
    question: 'Do you work with businesses outside Bangladesh?',
    answer:
      'Yes. While I\'m based in Dhaka, Bangladesh, I work with clients worldwide — including the US, UK, Canada, Australia, and the UAE. All collaboration is handled remotely via Zoom, Slack, and email, with flexible scheduling to accommodate different time zones.',
  },
  {
    question: 'What industries do you specialize in for SEO?',
    answer:
      'I have deep experience in e-commerce, SaaS, local services, real estate, healthcare, legal, and B2B sectors. Each industry has unique SEO challenges — different buyer journeys, competition levels, and content requirements — and I tailor my strategies accordingly.',
  },
  {
    question: 'Will my rankings drop if I stop SEO?',
    answer:
      'Rankings earned through SEO are much more stable than paid ads, but they can decline over time if you stop publishing content, building links, and maintaining technical health — especially if competitors continue investing. Think of SEO as an ongoing investment, not a one-time project.',
  },
  {
    question: 'What is AEO (Answer Engine Optimization)?',
    answer:
      'AEO is the practice of optimizing content to appear as direct answers in AI-powered search engines (like Google\'s AI Overviews, Perplexity, and Bing Copilot) and voice search results. It involves structured data markup, FAQ sections, concise Q&A-formatted content, and entity optimization. As AI search grows, AEO is becoming as important as traditional SEO.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'I analyze your website, competitors, backlink profile, and target keywords to identify every opportunity and obstacle.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Based on findings, I build a custom SEO roadmap prioritized by impact and aligned with your business goals.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'I execute technical fixes, optimize on-page elements, create content, and launch link acquisition campaigns.',
  },
  {
    step: '04',
    title: 'Monitor & Report',
    description: 'Monthly reports track every KPI. I continuously refine tactics based on real performance data and algorithm updates.',
  },
];
