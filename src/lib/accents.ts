import type { ComponentType } from 'react';

export type Icon = ComponentType<{ className?: string }>;
export type AccentKey = 'blue' | 'emerald' | 'amber' | 'violet' | 'sky';

/** Static class strings so Tailwind can see every variant at build time. */
export const accents: Record<AccentKey, {
  icon: string; bar: string; ring: string; dot: string; chip: string; title: string;
}> = {
  blue: {
    icon: 'bg-blue-500/10 text-blue-600',
    bar: 'from-blue-500/80',
    ring: 'hover:ring-blue-500/40',
    dot: 'bg-blue-500',
    chip: 'bg-blue-500/[0.07] text-blue-700 ring-1 ring-blue-500/15',
    title: 'group-hover/card:text-blue-600',
  },
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-600',
    bar: 'from-emerald-500/80',
    ring: 'hover:ring-emerald-500/40',
    dot: 'bg-emerald-500',
    chip: 'bg-emerald-500/[0.07] text-emerald-700 ring-1 ring-emerald-500/15',
    title: 'group-hover/card:text-emerald-600',
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-600',
    bar: 'from-amber-500/80',
    ring: 'hover:ring-amber-500/40',
    dot: 'bg-amber-500',
    chip: 'bg-amber-500/[0.07] text-amber-700 ring-1 ring-amber-500/15',
    title: 'group-hover/card:text-amber-600',
  },
  violet: {
    icon: 'bg-violet-500/10 text-violet-600',
    bar: 'from-violet-500/80',
    ring: 'hover:ring-violet-500/40',
    dot: 'bg-violet-500',
    chip: 'bg-violet-500/[0.07] text-violet-700 ring-1 ring-violet-500/15',
    title: 'group-hover/card:text-violet-600',
  },
  sky: {
    icon: 'bg-sky-500/10 text-sky-600',
    bar: 'from-sky-500/80',
    ring: 'hover:ring-sky-500/40',
    dot: 'bg-sky-500',
    chip: 'bg-sky-500/[0.07] text-sky-700 ring-1 ring-sky-500/15',
    title: 'group-hover/card:text-sky-600',
  },
};

