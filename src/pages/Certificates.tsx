import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { accents } from '@/lib/accents';
import {
  certificates, certGroups, certIssuers, certAccentOf, verifyUrl, type CertGroup,
} from '@/data/certificates';

const thumb = (id: string) => `/certificates/thumb/${id}.webp`;
const full = (id: string) => `/certificates/full/${id}.webp`;

export default function Certificates() {
  const [filter, setFilter] = useState<CertGroup | 'All'>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = 'Certifications | Matthew Oduamafu';
    return () => { document.title = previous; };
  }, []);

  const shown = certificates.filter((c) => filter === 'All' || c.group === filter);
  const active = openIndex === null ? null : shown[openIndex];

  const step = useCallback(
    (d: number) => setOpenIndex((i) => (i === null ? null : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, step]);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <header className="mt-8 max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance">
            Courses and certifications
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Completed coursework from Udemy and Coursera &mdash; embedded systems, hardware, backend
            engineering and machine learning. Click any certificate to view it, or verify it with
            the issuer.
          </p>
        </header>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { v: String(certificates.length), l: 'Certificates' },
            { v: String(certGroups.length), l: 'Disciplines' },
            { v: String(certIssuers.length), l: 'Providers' },
            { v: '2021–26', l: 'Spanning' },
          ].map(({ v, l }) => (
            <div key={l} className="rounded-2xl bg-muted/50 ring-1 ring-border/60 px-4 py-4 text-center">
              <dd className="text-2xl sm:text-3xl font-extrabold text-primary">{v}</dd>
              <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground leading-tight">{l}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter certificates by discipline">
          {([{ key: 'All' as const, Icon: null }, ...certGroups.map((g) => ({ key: g.key, Icon: g.icon }))]).map(
            ({ key, Icon }) => {
              const count = key === 'All' ? certificates.length : certificates.filter((c) => c.group === key).length;
              const on = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => { setFilter(key); setOpenIndex(null); }}
                  aria-pressed={on}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-200 ring-1 ${
                    on
                      ? 'bg-primary text-white ring-primary shadow-sm'
                      : 'bg-card text-muted-foreground ring-border/70 hover:text-foreground hover:ring-primary/40'
                  }`}
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  {key} <span className="opacity-70">{count}</span>
                </button>
              );
            },
          )}
        </div>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {shown.map((c, i) => {
            const a = accents[certAccentOf(c.group)];
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className={`group/cert flex h-full w-full flex-col overflow-hidden rounded-2xl bg-card text-left ring-1 ring-border/70 ${a.ring} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className="block overflow-hidden border-b border-border/50 bg-muted/40">
                    <img
                      src={thumb(c.id)}
                      alt={`Certificate of completion: ${c.title}`}
                      width={460}
                      height={342}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-500 group-hover/cert:scale-[1.03]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-4">
                    <span className={`text-sm font-bold leading-snug text-foreground transition-colors ${a.title}`}>
                      {c.title}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.instructor}</span>
                    <span className="mt-auto pt-3 flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                      {c.date}
                      {c.hours ? (
                        <span className={`rounded px-1.5 py-0.5 ${a.chip}`}>{c.hours} h</span>
                      ) : (
                        <span className={`rounded px-1.5 py-0.5 ${a.chip}`}>{c.issuer}</span>
                      )}
                      <span className="ml-auto inline-flex items-center gap-1 font-bold group-hover/cert:text-primary transition-colors">
                        View
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {certificates.length} certificates, issued by {certIssuers.join(' and ')}.
        </p>
      </main>

      <SiteFooter />

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {shown.length > 1 && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-5 flex items-center justify-center gap-4 sm:inset-x-3 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous certificate"
                className="pointer-events-auto rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next certificate"
                className="pointer-events-auto rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          <figure
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl mb-16 sm:mb-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={full(active.id)}
              alt={`Certificate of completion: ${active.title}`}
              className="w-full bg-muted object-contain"
            />
            <figcaption className="flex flex-col gap-3 border-t border-border/60 p-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="min-w-0">
                <span className="block text-sm font-bold text-foreground">{active.title}</span>
                <span className="block text-xs text-muted-foreground">
                  {active.instructor} &middot; {active.date}
                  {active.hours ? ` · ${active.hours} h` : ''} &middot; {active.issuer}
                </span>
              </span>
              <a
                href={verifyUrl(active)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white hover:bg-primary/90 transition-colors"
              >
                Verify on {active.issuer} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
