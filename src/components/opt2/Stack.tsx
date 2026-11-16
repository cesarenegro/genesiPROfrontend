import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { Link } from '@/i18n/routing';

/*
 * Sticky "curtain" sections (Minotti-like): every <Panel> pins to the viewport and the
 * next <Panel>/<Cover> slides over it. Elements are numbered by `i` inside one <Stack>;
 * element i names its view timeline --stk-i and its photo dims while --stk-(i+1) enters.
 */

const name = (i: number) => `--stk-${i}`;
const vars = (o: Record<string, string>) => o as CSSProperties;

export function Stack({ count, children, className = '' }: { count: number; children: ReactNode; className?: string }) {
  const scope = Array.from({ length: count }, (_, i) => name(i)).join(', ');
  return (
    <div className={`stack ${className}`} style={vars({ '--scope': scope })}>
      {children}
    </div>
  );
}

type PanelProps = {
  i: number;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text?: string;
  cta?: { href: string; label: string };
  /** First panel of the page: sits under the fixed header, loads with priority. */
  hero?: boolean;
  scrollLabel?: string;
  align?: 'bottom-left' | 'center';
  position?: string;
  children?: ReactNode;
};

export function Panel({ i, image, alt, eyebrow, title, text, cta, hero, scrollLabel, align = 'bottom-left', position = 'center', children }: PanelProps) {
  const Heading = hero ? 'h1' : 'h2';
  const centered = align === 'center';
  return (
    <section
      className={`stack-panel bg-black text-white ${hero ? 'under-header' : ''}`}
      style={vars({ '--self': name(i), '--by': name(i + 1) })}
      {...(hero ? { 'data-hero': '' } : {})}
    >
      <div className="stack-media absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority={hero}
          sizes="100vw"
          quality={85}
          className={`object-cover ${hero ? 'hero-settle' : ''}`}
          style={{ objectPosition: position }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />

      <div
        className={`relative h-full flex flex-col px-6 lg:px-16 pb-20 lg:pb-24 ${
          centered ? 'items-center justify-center text-center' : 'justify-end'
        }`}
      >
        <div className={`max-w-3xl ${hero ? "rise-in" : ""}`}>
          {eyebrow && <p className="text-[11px] uppercase tracking-[0.3em] text-white/75 mb-5">{eyebrow}</p>}
          <Heading className="text-4xl sm:text-5xl lg:text-7xl font-extralight leading-[1.05] tracking-tight">{title}</Heading>
          {text && <p className="mt-6 text-base lg:text-lg text-white/80 font-light leading-relaxed max-w-xl">{text}</p>}
          {cta && (
            <Link
              href={cta.href}
              className="group mt-10 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] border-b border-white/60 pb-2 hover:border-white transition-colors"
            >
              {cta.label}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </Link>
          )}
          {children}
        </div>
      </div>

      {hero && scrollLabel && (
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70">
          <span>{scrollLabel}</span>
          <span className="block w-px h-10 bg-white/70 scroll-cue" />
        </div>
      )}
    </section>
  );
}

export function Cover({ i, children, className = '' }: { i: number; children: ReactNode; className?: string }) {
  return (
    <div className={`stack-cover ${className}`} style={vars({ '--self': name(i) })}>
      {children}
    </div>
  );
}

/** Small uppercase label used above section titles. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5 ${className}`}>{children}</p>;
}

/** Minotti-like text link with arrow. */
export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] border-b pb-2 transition-colors ${
        light ? 'border-white/60 hover:border-white' : 'border-foreground/40 hover:border-foreground'
      }`}
    >
      {children}
      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
    </Link>
  );
}
