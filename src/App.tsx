import { useEffect, useState, type ComponentType } from 'react';
import {
  Menu, Mail, Phone, ArrowRight, ArrowUpRight, GraduationCap, Rocket,
  Cpu, CircuitBoard, Server, Calendar, MapPin, ExternalLink,
  Gauge, Wrench, Award, Building2, Sprout, Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';

/* ------------------------------------------------------------------ *
 *  SITE DATA
 *  Everything below drives the page. To add a project, a role, or a
 *  qualification, add an object to the matching array — no JSX edits.
 * ------------------------------------------------------------------ */

const VERDIQ_URL = 'https://verdiq-preview.netlify.app/';
const GITHUB_URL = 'https://github.com/Matthew-Oduamafu';
const LINKEDIN_URL = 'https://www.linkedin.com/in/matthew-oduamafu/';

type Icon = ComponentType<{ className?: string }>;
type AccentKey = 'blue' | 'emerald' | 'amber' | 'violet' | 'sky';

/** Static class strings so Tailwind can see every variant at build time. */
const accents: Record<AccentKey, {
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

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Verdiq', href: '#verdiq' },
  { label: 'Contact', href: '#contact' },
];

const disciplines: {
  icon: Icon; accent: AccentKey; title: string; body: string; stack: string[];
}[] = [
  {
    icon: CircuitBoard,
    accent: 'emerald',
    title: 'Hardware & PCB Design',
    body:
      'Schematic capture and multi-layer board layout in KiCad — power paths, battery charging and protection, signal integrity, and design-for-manufacture against real fab constraints.',
    stack: ['KiCad', '4-Layer PCB', 'Li-Po / BMS', 'DFM & DRC'],
  },
  {
    icon: Cpu,
    accent: 'blue',
    title: 'Embedded & Firmware',
    body:
      'Bare-metal and HAL firmware on STM32 and ESP32 — DMA-driven peripherals, RTOS task design, sensor drivers, and machine learning small enough to run on the microcontroller itself.',
    stack: ['STM32 / ESP32', 'FreeRTOS', 'I²C · SPI · UART', 'TinyML'],
  },
  {
    icon: Server,
    accent: 'violet',
    title: 'Software & Cloud Architecture',
    body:
      'Four years building production backends in C#/.NET, Java and Python — service boundaries, caching and messaging, and APIs that hold up at over 100,000 requests a day.',
    stack: ['.NET · Spring Boot', 'Redis · Kafka', 'PostgreSQL', 'AWS · Azure · GCP'],
  },
  {
    icon: Rocket,
    accent: 'amber',
    title: 'Research & Venture Building',
    body:
      'MSc research in embedded intelligence, and founding Verdiq — turning engineering into a manufacturable product, a supply chain, and a business that reaches the farmers it was designed for.',
    stack: ['MSc Mechatronics', 'Edge AI', 'Product Strategy', 'Manufacturing'],
  },
];

/* --- To showcase a new repo, copy one block and edit the fields. --- */
const projects: {
  title: string; domain: string; blurb: string; repo: string;
  language: string; tags: string[]; icon: Icon; accent: AccentKey;
}[] = [
  {
    title: 'BME280 / BMP280 Driver',
    domain: 'Firmware',
    blurb:
      'A reusable, HAL-friendly I²C driver for Bosch environmental sensors. Handle-based API, configurable oversampling and IIR filtering, altitude computation, and no dependencies beyond two files you drop into an STM32 project.',
    repo: 'https://github.com/Matthew-Oduamafu/bme280_bmp280_sensor_driver',
    language: 'C',
    tags: ['STM32 HAL', 'I²C', 'Sensor Driver', 'Portable'],
    icon: Gauge,
    accent: 'blue',
  },
  {
    title: 'ESP32 IoT Board',
    domain: 'Hardware',
    blurb:
      'A 4-layer IoT board designed from scratch in KiCad around the ESP32-C3-WROOM: BME280 environmental sensing, a microphone, MCP73871 Li-Po charging and USB-C. Schematics, layout and 3D renders are all in the repo.',
    repo: 'https://github.com/Matthew-Oduamafu/ESP32-IoT-Project',
    language: 'KiCad',
    tags: ['ESP32-C3', '4-Layer PCB', 'USB-C', 'Battery Charging'],
    icon: CircuitBoard,
    accent: 'emerald',
  },
  {
    title: 'Web.ControllerApi.Template',
    domain: 'Backend',
    blurb:
      'An opinionated ASP.NET Core API template that removes the first day of boilerplate — service registration, EF Core context, the repository pattern, standardised responses and centralised error handling, wired up and ready.',
    repo: 'https://github.com/Matthew-Oduamafu/Web.ControllerApi.Template',
    language: 'C#',
    tags: ['ASP.NET Core', 'EF Core', 'Repository Pattern', 'Project Template'],
    icon: Server,
    accent: 'violet',
  },
  {
    title: 'STM32 SVD Downloader',
    domain: 'Developer Tooling',
    blurb:
      'A VS Code extension that fetches the right STM32 System View Description file by part number or family and wires it into your launch configuration — so peripheral registers are readable the next time you attach a debugger.',
    repo: 'https://github.com/Matthew-Oduamafu/stm32-svd-downloader',
    language: 'JavaScript',
    tags: ['VS Code Extension', 'SVD', 'Debugging', 'ARM Cortex-M'],
    icon: Wrench,
    accent: 'amber',
  },
];

const experience = [
  {
    period: '2025 — Present',
    location: 'Accra, Ghana',
    role: 'Founder & CEO',
    org: 'Verdiq Ltd',
    current: true,
    summary:
      'Leading a hardware venture end to end — product definition, electronics and firmware architecture, supplier and manufacturing strategy, and fundraising. Verdiq designs and builds battery- and solar-powered agricultural equipment for small-scale African farmers.',
  },
  {
    period: 'Oct 2024 — Aug 2025',
    location: 'La Rioja, Spain (Remote)',
    role: 'Java Software Engineer',
    org: 'Bosonit',
    summary:
      'Extended the Appolow low-code platform with a modular cloud-storage layer spanning S3, Azure Blob and Google Cloud Storage, and integrated third-party authentication through Keycloak. Designed the abstraction so new providers could be added without touching platform code.',
  },
  {
    period: 'May 2024 — Aug 2025',
    location: 'Accra, Ghana',
    role: 'Software Engineer II',
    org: 'Turntabl Ghana Ltd',
    summary:
      'Contributed to FINOS open-source projects — Perspective and FDC3 — advancing interoperability standards for financial services. Worked across Rust, Java and C# on data visualisation and standards tooling.',
  },
  {
    period: 'Jun 2023 — May 2024',
    location: 'Accra, Ghana',
    role: 'Software Engineer',
    org: 'Hubtel Ltd',
    summary:
      'Scaled e-commerce APIs past 100,000 requests a day and cut response times by 25% with a Redis caching layer. Built company-wide .NET SDKs that removed roughly 40% of duplicated integration code, and mentored four junior engineers.',
  },
  {
    period: 'Sep 2022 — May 2023',
    location: 'Accra, Ghana',
    role: 'Software Developer',
    org: 'Innorik Ghana Ltd',
    summary:
      'Worked in a ten-person team on a US-based ERP platform in C# and .NET, applying N-tier separation and SOLID principles to improve reliability and make the codebase easier to extend.',
  },
];

const education = [
  {
    period: '2025 — Present',
    location: 'Berekuso, Ghana',
    degree: 'MSc Mechatronics Engineering',
    school: 'Ashesi University',
    summary:
      'Research at the intersection of embedded systems and machine learning — TinyML on resource-constrained microcontrollers, sensor instrumentation, and real-time control. Verdiq prototypes are developed alongside the coursework.',
    highlights: ['TinyML & Edge AI', 'Embedded Instrumentation', 'Robotics & Control'],
  },
  {
    period: '2018 — 2022',
    location: 'Kumasi, Ghana',
    degree: 'BSc Biomedical Engineering',
    school: 'KNUST',
    summary:
      'A grounding in analog electronics, instrumentation and signal processing that still underpins the hardware work today.',
    highlights: ['First Class Honours', "2× Provost's Award for Excellence"],
  },
];

const skills = [
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg' },
  { name: 'MATLAB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg' },
  { name: 'Simulink', logo: 'custom-simulink' },
  { name: 'Machine Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'CMake', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg' },
  { name: 'Makefile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
  { name: 'KiCad', logo: 'https://cdn.simpleicons.org/kicad' },
  { name: 'EasyEDA', logo: 'https://cdn.simpleicons.org/easyeda/00A4E4' },
  { name: 'Fusion 360', logo: 'https://cdn.simpleicons.org/autodesk/FF8200' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Elasticsearch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg' },
  { name: 'Kibana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg' },
  { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
];

/* ------------------------------------------------------------------ *
 *  PAGE
 * ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow, title, blurb, tone = 'primary',
}: { eyebrow: string; title: string; blurb: string; tone?: 'primary' | 'emerald' }) {
  const toneClass =
    tone === 'emerald'
      ? 'border-emerald-500/30 text-emerald-600 bg-emerald-500/5'
      : 'border-primary/30 text-primary bg-primary/5';
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <Badge variant="outline" className={`${toneClass} px-4 py-1.5 uppercase font-bold tracking-wider text-xs`}>
        {eyebrow}
      </Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance">{title}</h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{blurb}</p>
    </div>
  );
}

function TimelineCard({
  period, location, title, subtitle, summary, chips, current,
}: {
  period: string; location: string; title: string; subtitle: string;
  summary: string; chips?: string[]; current?: boolean;
}) {
  return (
    <li className="relative group">
      <span
        className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 transition-colors duration-300 z-10 ${
          current ? 'border-emerald-500' : 'border-primary group-hover:border-emerald-500'
        }`}
      />
      {current && (
        <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-emerald-500/40 animate-ping z-0" />
      )}
      <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-emerald-500/[0.015] border border-border/50 hover:border-primary/40 hover:shadow-md transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="font-extrabold text-primary flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {period}
          </span>
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {location}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h3>
          {current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current
            </span>
          )}
        </div>
        <h4 className="text-sm font-semibold text-muted-foreground">{subtitle}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{summary}</p>
        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground ring-1 ring-border/60"
              >
                <Award className="h-3 w-3 text-amber-500" /> {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Site is designed light-only for now.
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const renderLogo = (logo: string) => {
    if (logo === 'custom-simulink') {
      return (
        <svg className="w-5 h-5 text-[#E05B2B] shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="8" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
          <rect x="16" y="8" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 9L16 12L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return <img src={logo} alt="" loading="lazy" decoding="async" className="w-5 h-5 object-contain shrink-0" />;
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      {/* Ambient background */}
      <div className="floating-shapes z-0 pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="shape w-[300px] h-[300px] bg-primary rounded-full absolute top-[10%] left-[10%] opacity-[0.04] blur-3xl animate-float-slow" />
        <div className="shape w-[250px] h-[250px] bg-emerald-500 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] absolute top-[60%] right-[10%] opacity-[0.04] blur-3xl animate-float-medium" />
        <div className="shape w-[280px] h-[280px] bg-amber-500 rounded-[63%_37%_54%_46%/_55%_48%_52%_45%] absolute bottom-[10%] left-[30%] opacity-[0.03] blur-3xl animate-float-slow" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="relative group flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-[0.2em] text-primary uppercase">Matthew</span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">Oduamafu</span>
            <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-gradient-to-r from-primary to-transparent transition-all duration-300 group-hover:w-full" />
          </a>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="rounded-xl px-5 font-bold gap-2 shadow-sm shadow-primary/20"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="hover:bg-primary/10" aria-label="Open menu" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-border bg-background">
                <SheetTitle className="text-left font-black tracking-widest text-primary uppercase border-b border-border pb-4 mb-6">
                  Matthew
                </SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
                <nav className="flex flex-col gap-5" aria-label="Mobile">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/40"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="main" className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-28 sm:space-y-32">

        {/* ---------------------------------------------------------- HERO */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">
            <div className="lg:col-span-7 space-y-7 animate-slide-in-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to research collaboration, consulting & investor conversations
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08] text-balance">
                I build systems that run from{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                  silicon to cloud
                </span>
              </h1>

              <p className="text-base sm:text-lg font-semibold text-muted-foreground border-l-4 border-emerald-500 pl-4 leading-relaxed">
                MSc Mechatronics Researcher · Software &amp; Hardware Engineer
                <br className="hidden sm:block" />
                <span className="sm:hidden"> · </span>Founder &amp; CEO, Verdiq Ltd
              </p>

              <p className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl leading-relaxed text-pretty">
                I&rsquo;m Matthew Oduamafu. I design the boards, write the firmware that runs on them,
                and build the backend services they talk to. Four years shipping production software
                across e-commerce and enterprise systems, now aimed at embedded intelligence &mdash; as
                an MSc Mechatronics researcher at Ashesi University, and as founder of a hardware
                company building for African farmers.
              </p>

              <dl className="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg pt-2">
                <div className="space-y-1">
                  <dd className="text-3xl sm:text-4xl font-extrabold text-primary">4+</dd>
                  <dt className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Years in production</dt>
                </div>
                <div className="space-y-1">
                  <dd className="text-3xl sm:text-4xl font-extrabold text-emerald-500">100K+</dd>
                  <dt className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Daily API requests</dt>
                </div>
                <div className="space-y-1">
                  <dd className="text-3xl sm:text-4xl font-extrabold text-amber-500">{projects.length}</dd>
                  <dt className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Open-source projects</dt>
                </div>
              </dl>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button render={<a href="#projects" />} size="lg" className="rounded-xl px-8 font-bold gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Button>
                <Button render={<a href={VERDIQ_URL} target="_blank" rel="noopener noreferrer" />} variant="outline" size="lg" className="rounded-xl px-8 font-bold border-border/80 hover:bg-muted gap-2">
                  Visit Verdiq <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Portrait */}
            <div className="lg:col-span-5 flex justify-center relative animate-slide-in-right">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[30px]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-emerald-500 rounded-[34px] opacity-20 blur-xl animate-pulse-slow -z-10" aria-hidden="true" />
                <div className="w-full h-full rounded-[30px] overflow-hidden border-2 border-border shadow-2xl relative z-10 bg-muted">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/matthew-portrait.webp 420w, /img/matthew-portrait@2x.webp 840w"
                      sizes="(min-width: 1024px) 420px, 85vw"
                    />
                    <img
                      src="/img/matthew-portrait.jpg"
                      srcSet="/img/matthew-portrait.jpg 420w, /img/matthew-portrait@2x.jpg 840w"
                      sizes="(min-width: 1024px) 420px, 85vw"
                      width={840}
                      height={1050}
                      alt="Portrait of Matthew Oduamafu"
                      fetchPriority="high"
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </picture>
                </div>

                <div className="absolute -top-4 -right-4 bg-card border border-border shadow-xl rounded-2xl p-4 max-w-[210px] flex items-start gap-3 animate-float-slow z-20">
                  <span className="bg-primary/10 text-primary p-2 rounded-xl">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Currently pursuing</span>
                    <span className="block text-sm font-bold text-primary">MSc Mechatronics</span>
                  </span>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card border border-border shadow-xl rounded-2xl p-4 max-w-[210px] flex items-start gap-3 animate-float-medium z-20">
                  <span className="bg-emerald-500/10 text-emerald-500 p-2 rounded-xl">
                    <Rocket className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Founder &amp; CEO</span>
                    <span className="block text-sm font-bold text-emerald-500">Verdiq Ltd</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills marquee */}
          <div className="w-full pt-8 border-t border-border/40 space-y-4">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
              Tools &amp; technologies I work with
            </h2>
            <div className="relative w-full overflow-hidden py-1.5">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="animate-marquee flex gap-6 items-center">
                {[...skills, ...skills].map((skill, index) => (
                  <div
                    key={`skill-${index}`}
                    aria-hidden={index >= skills.length}
                    className="flex items-center gap-3 px-5 py-2.5 bg-card/40 backdrop-blur-sm hover:bg-card border border-border/40 hover:border-primary/30 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-default shrink-0"
                  >
                    {renderLogo(skill.logo)}
                    <span className="font-bold text-sm tracking-wide text-foreground/85">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- ABOUT */}
        <section id="about" className="scroll-mt-28 space-y-12">
          <SectionHeading
            eyebrow="What I Do"
            tone="emerald"
            title="From Board Bring-Up to Production Backend"
            blurb="Most engineers pick a side of the hardware–software line. I work across it — the PCB, the firmware on it, and the cloud it reports to."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {disciplines.map(({ icon: DisciplineIcon, accent, title, body, stack }) => {
              const a = accents[accent];
              return (
                <Card
                  key={title}
                  className={`group/card relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm ring-1 ring-border/70 ${a.ring} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
                >
                  <span className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${a.bar} to-transparent`} aria-hidden="true" />
                  <CardHeader className="space-y-4">
                    <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${a.icon}`}>
                      <DisciplineIcon className="h-5 w-5" />
                    </span>
                    <CardTitle className={`text-lg font-bold tracking-tight transition-colors ${a.title}`}>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm text-pretty">{body}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {stack.map((item) => (
                        <li key={item} className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${a.chip}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ------------------------------------------------------ PROJECTS */}
        <section id="projects" className="scroll-mt-28 space-y-12">
          <SectionHeading
            eyebrow="Open Source"
            title="Selected Projects"
            blurb="Drivers, boards and tooling I've built and published. A running selection — more lands here as it ships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, domain, blurb, repo, language, tags, icon: ProjectIcon, accent }) => {
              const a = accents[accent];
              return (
                <Card
                  key={title}
                  className={`group/card relative overflow-hidden rounded-2xl bg-card ring-1 ring-border/70 ${a.ring} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                >
                  <span className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${a.bar} to-transparent`} aria-hidden="true" />
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${a.icon}`}>
                        <ProjectIcon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground ring-1 ring-border/60">
                        {domain}
                      </span>
                    </div>
                    <CardTitle className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${a.title}`}>
                      {title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm text-pretty">{blurb}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <li key={tag} className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${a.chip}`}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="justify-between gap-3">
                    <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <span className={`h-2.5 w-2.5 rounded-full ${a.dot}`} aria-hidden="true" />
                      {language}
                    </span>
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground/80 hover:text-primary transition-colors"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.3c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.19 10.19 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                      </svg>
                      View repository
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 text-center">
            <p className="text-sm text-muted-foreground">
              More projects are on the way as they reach a state worth sharing.
            </p>
            <Button
              render={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />}
              variant="outline"
              size="lg"
              className="rounded-xl px-6 font-bold gap-2 border-border/80 hover:bg-muted"
            >
              All repositories on GitHub <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* ---------------------------------------------------- EXPERIENCE */}
        <section id="experience" className="scroll-mt-28 space-y-12">
          <SectionHeading
            eyebrow="Experience"
            title="Professional Journey"
            blurb="Enterprise backends, open-source standards work, and now building a hardware company from the ground up."
          />
          <ol className="relative border-l-2 border-border/80 pl-6 sm:pl-10 space-y-10 max-w-4xl mx-auto">
            {experience.map((item) => (
              <TimelineCard
                key={`${item.org}-${item.period}`}
                period={item.period}
                location={item.location}
                title={item.role}
                subtitle={item.org}
                summary={item.summary}
                current={item.current}
              />
            ))}
          </ol>
        </section>

        {/* ----------------------------------------------------- EDUCATION */}
        <section id="education" className="scroll-mt-28 space-y-12">
          <SectionHeading
            eyebrow="Education"
            tone="emerald"
            title="Academic Foundation"
            blurb="Biomedical engineering gave me the analog and instrumentation grounding; mechatronics is where it meets control, robotics and embedded intelligence."
          />
          <ol className="relative border-l-2 border-border/80 pl-6 sm:pl-10 space-y-10 max-w-4xl mx-auto">
            {education.map((item) => (
              <TimelineCard
                key={item.degree}
                period={item.period}
                location={item.location}
                title={item.degree}
                subtitle={item.school}
                summary={item.summary}
                chips={item.highlights}
              />
            ))}
          </ol>
        </section>

        {/* -------------------------------------------------------- VERDIQ */}
        <section
          id="verdiq"
          className="scroll-mt-28 border border-border/50 bg-gradient-to-br from-primary/[0.03] via-background to-emerald-500/[0.04] rounded-[30px] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-primary/[0.04] to-transparent opacity-70 pointer-events-none -z-10" aria-hidden="true" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 bg-emerald-500/5 px-4 py-1.5 uppercase font-bold tracking-wider text-xs mx-auto">
              The Venture
            </Badge>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
              VERDIQ
            </h2>

            <p className="text-lg sm:text-xl font-bold text-muted-foreground italic">
              &ldquo;Smart Tools for Smarter Farming&rdquo;
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              Verdiq designs and manufactures battery- and solar-powered agricultural equipment
              for small-scale African farmers &mdash; built around off-grid power, local
              repairability, and pricing that works for young farmers. I lead the company as
              Founder &amp; CEO, setting product direction, architecting the electronics and
              firmware, and building the manufacturing and go-to-market path from Accra.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed text-pretty">
              Every product starts with field research in Ghana. The engineering spans power
              electronics and battery management, embedded control, IoT connectivity and the cloud
              services behind it &mdash; the same silicon-to-cloud span as the rest of my work,
              pointed at a single industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-10">
            {[
              { icon: Building2, label: 'My role', value: 'Founder & CEO' },
              { icon: Layers, label: 'Engineering', value: 'Hardware · Firmware · Cloud' },
              { icon: Sprout, label: 'Based in', value: 'Accra, Ghana' },
            ].map(({ icon: TileIcon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-border/60 bg-background/80 px-5 py-5 text-center space-y-2 shadow-sm"
              >
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <TileIcon className="h-4 w-4" />
                </span>
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="text-sm font-bold text-foreground">{value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 pt-10">
            <Button
              render={<a href={VERDIQ_URL} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="rounded-xl px-8 h-11 text-base font-bold gap-2 shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-primary to-emerald-500 hover:opacity-90"
            >
              Visit the Verdiq site <ExternalLink className="h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground">
              Products, specifications and availability live on the Verdiq site.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------- CONTACT */}
        <section id="contact" className="scroll-mt-28 py-14 px-6 sm:px-12 bg-muted/40 border border-border/60 rounded-[30px] space-y-10">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's Build Something Worth Shipping"
            blurb="Open to research collaborations, embedded and backend consulting, and conversations with investors and partners building for African markets."
          />

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {[
              { href: 'mailto:matthew.oduamafu@ashesi.edu.gh', icon: Mail, label: 'matthew.oduamafu@ashesi.edu.gh' },
              { href: 'mailto:matthewoduamafu@gmail.com', icon: Mail, label: 'matthewoduamafu@gmail.com' },
              { href: 'tel:+233552235521', icon: Phone, label: '+233 55 223 5521' },
            ].map(({ href, icon: ContactIcon, label }) => (
              <a
                key={href}
                href={href}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 font-medium group hover:-translate-y-1 text-sm text-center"
              >
                <ContactIcon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-6 border-t border-border/50 max-w-md mx-auto">
            <Button render={<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" />} variant="outline" size="lg" className="rounded-full px-6 gap-2 border-border/80 hover:bg-background font-bold">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 9h3v11H4V9Zm5 0h2.88v1.5h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2 3.61 4.6V20h-3v-5.27c0-1.26-.02-2.88-1.75-2.88-1.76 0-2.03 1.38-2.03 2.79V20H9V9Z" />
              </svg>
              LinkedIn
            </Button>
            <Button render={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />} variant="outline" size="lg" className="rounded-full px-6 gap-2 border-border/80 hover:bg-background font-bold">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.3c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.19 10.19 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
              </svg>
              GitHub
            </Button>
          </div>
        </section>
      </main>

      {/* -------------------------------------------------------- FOOTER */}
      <footer className="border-t border-border/40 bg-card/60 backdrop-blur-sm relative z-10 py-8 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Matthew Emmanuel Oduamafu &middot; Accra, Ghana
          </p>
          <p className="text-xs text-muted-foreground/80">
            Built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  );
}
