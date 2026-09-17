"use client";

/**
 * TrustedBrandsSection — portable copy of the "Brands I've Worked With" marquee.
 *
 * Self-contained: needs React and nothing else. No Tailwind, no framer-motion,
 * no next/image, no config. Drop the file in and render <TrustedBrandsSection />.
 *
 * Logos are hotlinked from pujan.me, which serves them with
 * `access-control-allow-origin: *` and a one-year immutable cache. To self-host
 * instead, copy the files and change LOGO_BASE to your own path.
 *
 * Theming: colours read your site's CSS variables when they exist and fall back
 * to sensible defaults when they don't. Dark mode follows a `.dark` class or
 * `[data-theme="dark"]` on an ancestor (what Tailwind and next-themes both set),
 * and otherwise follows the OS setting.
 */

import { useId } from "react";

const LOGO_BASE = "https://pujan.me/brands";

type Brand = {
  name: string;
  file: string;
  /** Logo is dark-on-transparent, so invert it in dark mode. */
  hasBlack?: boolean;
  /** Pre-made light-on-transparent variant, used instead of inverting. */
  darkFile?: string;
  /** Nudge an individual mark up when its proportions read small at the shared box. */
  scale?: number;
};

const brands: Brand[] = [
  { name: "Usha", file: "usha.png" },
  { name: "Mir Group", file: "mir-group.svg" },
  { name: "Concord Real Estate", file: "concord.svg" },
  { name: "Anwar Landmark", file: "anwar-landmark.svg", hasBlack: true },
  { name: "PFEC Global", file: "pfec.webp" },
  { name: "Greendelta Insurance", file: "greendelta.png", darkFile: "greendelta-dark.png" },
  { name: "United Hospital", file: "united-hospital.png", hasBlack: true },
  { name: "Ventura Properties", file: "ventura.png" },
  { name: "Cubic", file: "cubic.png" },
  { name: "JCX", file: "jcx.png" },
  { name: "GMQ Global", file: "gmq.png", hasBlack: true },
  { name: "Skillup Education", file: "skillup.png", hasBlack: true },
  { name: "Union Limited", file: "union-limited.png" },
  { name: "RITZ", file: "ritz.png" },
  { name: "Banglalink", file: "banglalink.png", hasBlack: true },
  { name: "Rangs eMart", file: "rangs-emart.png", hasBlack: true },
  { name: "Haier", file: "haier.webp" },
  { name: "Truck Lagbe", file: "truck-lagbe.png", darkFile: "truck-lagbe-dark.png" },
  { name: "Shomvob", file: "shomvob.png", hasBlack: true },
  { name: "Nova Care", file: "nova-care.png" },
  { name: "Nilas Property", file: "nilas-property.png" },
  { name: "Norman", file: "norman.png", hasBlack: true },
  { name: "Accousource", file: "accousource.png" },
  { name: "Tripbooking", file: "tripbooking.png" },
  { name: "Citymash", file: "citymash.png" },
  { name: "Dr. Lubna Mariam", file: "dr-lubna-mariam.png" },
  { name: "Dubai Buggy Adventure", file: "dubai-buggy.png" },
  { name: "Juteque", file: "juteque.png" },
  { name: "KHL", file: "khl.png" },
  { name: "Little Squify", file: "little-squify.png" },
  { name: "Lazeez Bazar", file: "lazeez-bazar.png" },
  { name: "Meteors", file: "meteors.png" },
  { name: "Seraphic", file: "seraphic.png" },
  { name: "Shaggy Bedding", file: "shaggy-bedding.png", darkFile: "shaggy-bedding-dark.png" },
  { name: "Vape Dream Hub", file: "vape-dream-hub.png", hasBlack: true },
  { name: "All Basic Care", file: "all-basic-care.png" },
  { name: "Khanakber", file: "khanakber.png" },
  { name: "Welkin Aviation", file: "welkin-aviation.png" },
  { name: "Shanta Holdings", file: "shanta-holdings.webp", hasBlack: true, scale: 1.5 },
  { name: "NuMi Aesthetics", file: "numi-aesthetics.webp", hasBlack: true, scale: 1.25 },];

/** Card and animation geometry, all in one place. */
const CARD_W = 151;
const CARD_H = 84;
const BOX = 80; // logo box as a % of the card, before per-brand scale
const DURATION = 35; // seconds for one full loop

const third = Math.ceil(brands.length / 3);
const rows: [Brand[], boolean][] = [
  [brands.slice(0, third), false],
  [brands.slice(third, third * 2), true],
  [brands.slice(third * 2), false],
];

function css(scope: string) {
  return `
.${scope} { max-width: 72rem; margin: 0 auto; padding: 4rem 1.5rem; }
.${scope} .pbm-head { text-align: center; margin-bottom: 3rem; }
.${scope} .pbm-eyebrow {
  font-size: .875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: .1em; margin: 0 0 .5rem;
  color: hsl(var(--primary, 262.1 83.3% 57.8%));
}
.${scope} .pbm-title {
  font-size: 1.5rem; font-weight: 800; letter-spacing: -.02em; margin: 0;
  color: hsl(var(--foreground, 240 10% 3.9%));
}
@media (min-width: 768px) { .${scope} .pbm-title { font-size: 1.875rem; } }

.${scope} .pbm-rows { display: flex; flex-direction: column; gap: .75rem; }
.${scope} .pbm-row { overflow: hidden; }
.${scope} .pbm-track {
  display: flex; width: max-content;
  animation: pbm-scroll ${DURATION}s linear infinite;
}
.${scope} .pbm-track[data-reverse="true"] { animation-name: pbm-scroll-reverse; }
.${scope} .pbm-row:hover .pbm-track { animation-play-state: paused; }

.${scope} .pbm-card {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  width: ${CARD_W}px; height: ${CARD_H}px; padding: .75rem; margin: 0 .5rem;
  border-radius: 0.375rem; border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  transition: border-color .2s ease, transform .2s ease;
}
.${scope} .pbm-card:hover {
  border-color: rgba(108, 93, 250, 0.5);
  transform: scale(1.04);
}
.${scope} .pbm-logo { object-fit: contain; transition: filter .3s ease; }
.${scope} .pbm-dark-only { display: none; }

/* Dark mode: explicit marker on an ancestor. */
.dark .${scope} .pbm-has-black,
[data-theme="dark"] .${scope} .pbm-has-black { filter: invert(1) hue-rotate(180deg); }
.dark .${scope} .pbm-dark-only,
[data-theme="dark"] .${scope} .pbm-dark-only { display: block; }
.dark .${scope} .pbm-light-only,
[data-theme="dark"] .${scope} .pbm-light-only { display: none; }

/* Light mode: visible border on light backgrounds */
[data-theme="light"] .${scope} .pbm-card {
  border-color: rgba(108, 93, 250, 0.2);
}

/* Dark mode: OS setting, only when the page has not declared itself light. */
@media (prefers-color-scheme: dark) {
  :root:not(.light):not([data-theme="light"]) .${scope} .pbm-has-black {
    filter: invert(1) hue-rotate(180deg);
  }
  :root:not(.light):not([data-theme="light"]) .${scope} .pbm-dark-only { display: block; }
  :root:not(.light):not([data-theme="light"]) .${scope} .pbm-light-only { display: none; }
}

@keyframes pbm-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes pbm-scroll-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
@media (prefers-reduced-motion: reduce) {
  .${scope} .pbm-track { animation: none; }
  .${scope} .pbm-row { overflow-x: auto; }
}
`;
}

function Logo({ brand, variant }: { brand: Brand; variant?: "light" | "dark" }) {
  const size = `${BOX * (brand.scale ?? 1)}%`;
  const file = variant === "dark" ? brand.darkFile! : brand.file;
  const cls = [
    "pbm-logo",
    variant === "dark" ? "pbm-dark-only" : "",
    variant === "light" ? "pbm-light-only" : "",
    !variant && brand.hasBlack ? "pbm-has-black" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src={`${LOGO_BASE}/${file}`}
      alt={brand.name}
      width={123}
      height={62}
      loading="lazy"
      decoding="async"
      className={cls}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

function Card({ brand }: { brand: Brand }) {
  return (
    <div className="pbm-card" title={brand.name}>
      {brand.darkFile ? (
        <>
          <Logo brand={brand} variant="light" />
          <Logo brand={brand} variant="dark" />
        </>
      ) : (
        <Logo brand={brand} />
      )}
    </div>
  );
}

export function TrustedBrandsSection() {
  // Scoped class keeps the styles from colliding with anything on the host page.
  const scope = `pbm-${useId().replace(/:/g, "")}`;

  return (
    <section className={scope} aria-label="Brands I have worked with">
      <style dangerouslySetInnerHTML={{ __html: css(scope) }} />

      <div className="section-title text-center" style={{ marginBottom: '3rem' }}>
        <h6>trusted by</h6>
        <h2 className="hero_title">Worldwide <span>Valuable Clients</span></h2>
      </div>

      <div className="pbm-rows">
        {rows.map(([items, reverse], r) => (
          <div className="pbm-row" key={r}>
            {/* The list is doubled so the -50% translate loops seamlessly. */}
            <div className="pbm-track" data-reverse={String(reverse)}>
              {[...items, ...items].map((brand, i) => (
                <Card key={`${brand.name}-${i}`} brand={brand} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBrandsSection;
