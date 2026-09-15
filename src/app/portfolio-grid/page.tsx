'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PORTFOLIO_ITEMS } from '@/lib/constants';

const UP = 'https://server1.liushibd.com/wp-content/uploads/2025/11';

const CATEGORIES = ['all', 'E-Commerce SEO', 'SaaS SEO', 'Local SEO'];

const PROJECTS = [
  {
    title: 'E-Commerce SEO Recovery',
    slug: 'ecommerce-seo-recovery',
    cat: 'E-Commerce SEO',
    img: `${UP}/project-05-2.jpg`,
    result: '+320% organic traffic in 8 months',
  },
  {
    title: 'SaaS Brand Authority Building',
    slug: 'saas-brand-authority',
    cat: 'SaaS SEO',
    img: `${UP}/project-04-3.jpg`,
    result: 'DA 0 → 42 in 12 months',
  },
  {
    title: 'Local Service Business Maps Ranking',
    slug: 'local-service-maps-ranking',
    cat: 'Local SEO',
    img: `${UP}/project-03-2-1024x460.jpg`,
    result: 'Page 3 → #1 in Google Maps',
  },
  {
    title: 'Fintech Content Strategy',
    slug: 'fintech-content-strategy',
    cat: 'SaaS SEO',
    img: `${UP}/project-02-4.jpg`,
    result: '+890% organic sign-ups',
  },
  {
    title: 'Bangladesh Retail Chain Local SEO',
    slug: 'bangladesh-retail-local-seo',
    cat: 'Local SEO',
    img: `${UP}/project-01-4.jpg`,
    result: '+560% calls from Google Maps',
  },
  {
    title: 'Fashion E-Commerce Growth',
    slug: 'fashion-ecommerce-growth',
    cat: 'E-Commerce SEO',
    img: `${UP}/project-01-5-1024x460.jpg`,
    result: '+180 keywords in Top 10',
  },
];

export default function PortfolioGridPage() {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>SEO Case Studies &amp; Portfolio</h1>
        </div>
      </section>

      <section className="project-grid-section">
        <div className="container">
          <ul className="portfolio-filter d-flex gap-3">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  className={active === c ? 'active' : ''}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>

          <div className="project-box-items d-flex flex-wrap gap-4">
            {visible.map((p) => (
              <Link key={p.slug} href={`/works/${p.slug}`} className="project-item">
                <img src={p.img} alt={p.title} width={380} height={280} />
                <span className="project-cat">{p.cat}</span>
                <h3>{p.title}</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{p.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
