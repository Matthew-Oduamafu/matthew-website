'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Menu, X, Mail, Phone, ArrowRight, GraduationCap, Rocket, 
  Cpu, Laptop, Briefcase, Calendar, MapPin, 
  Droplet, Sprout, Wind, Hammer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Force light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Verdiq', href: '#verdiq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 antialiased selection:bg-primary selection:text-white">
      {/* Background Shapes */}
      <div className="floating-shapes z-0 pointer-events-none fixed inset-0 overflow-hidden">
        <div className="shape w-[300px] h-[300px] bg-primary rounded-full absolute top-[10%] left-[10%] opacity-[0.04] dark:opacity-[0.07] blur-3xl animate-float-slow" />
        <div className="shape w-[250px] h-[250px] bg-emerald-500 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] absolute top-[60%] right-[10%] opacity-[0.04] dark:opacity-[0.06] blur-3xl animate-float-medium" />
        <div className="shape w-[280px] h-[280px] bg-amber-500 rounded-[63%_37%_54%_46%/_55%_48%_52%_45%] absolute bottom-[10%] left-[30%] opacity-[0.03] dark:opacity-[0.05] blur-3xl animate-float-slow" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="relative group text-xl font-extrabold tracking-widest text-primary hover:text-primary/95 uppercase">
            MATTHEW
            <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-gradient-to-r from-primary to-transparent transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="hover:bg-primary/10" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-border bg-background">
                <SheetTitle className="text-left font-black tracking-widest text-primary uppercase border-b border-border pb-4 mb-6">
                  MATTHEW
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu
                </SheetDescription>
                <nav className="flex flex-col gap-6">
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-32">
        
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 animate-slide-in-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Building the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                  Future of Agriculture
                </span>{' '}
                Through Technology
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium border-l-4 border-emerald-500 pl-4">
                MSc Mechatronics Engineer | Software Architect | Agritech CEO
              </p>
              <p className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl leading-relaxed">
                I'm Matthew Oduamafu, bridging cutting-edge robotics and software engineering to solve real-world agricultural challenges across Africa.
                Currently pursuing my MSc in Mechatronics at Ashesi University while developing Verdiq Ltd's AI-powered farming solutions.
              </p>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md pt-4">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary">4+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Years in SE</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500">10K+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Farmers by 2028</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">6</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Smart Products</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button render={<a href="#verdiq" />} size="lg" className="rounded-xl px-8 font-bold gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300">
                  Explore Verdiq <ArrowRight className="h-4 w-4" />
                </Button>
                <Button render={<a href="#contact" />} variant="outline" size="lg" className="rounded-xl px-8 font-bold border-border/80 hover:bg-muted">
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5 flex justify-center relative animate-slide-in-right">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[30px] overflow-visible">
                {/* Background Gradient Pulse */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-emerald-500 rounded-[34px] opacity-20 blur-xl animate-pulse-slow -z-10" />
                
                {/* Portrait Wrapper */}
                <div className="w-full h-full rounded-[30px] overflow-hidden border-2 border-border shadow-2xl relative z-10 bg-muted">
                  <Image 
                    src="/img/IMG_2561 copy.JPG" 
                    alt="Matthew Oduamafu" 
                    fill 
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -top-4 -right-4 bg-card border border-border shadow-xl rounded-2xl p-4 max-w-[200px] flex items-start gap-3 animate-float-slow z-20">
                  <div className="bg-primary/10 text-primary p-2 rounded-xl text-lg font-bold">🎓</div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Currently Pursuing</div>
                    <div className="text-sm font-bold text-primary">MSc Mechatronics</div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-card border border-border shadow-xl rounded-2xl p-4 max-w-[200px] flex items-start gap-3 animate-float-medium z-20">
                  <div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-xl text-lg font-bold">🚀</div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Founder & CEO</div>
                    <div className="text-sm font-bold text-emerald-500">Verdiq Ltd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Skills Section */}
        <section id="about" className="scroll-mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 bg-emerald-500/5 px-4 py-1.5 uppercase font-bold tracking-wider text-xs">
              What I Do
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Multidisciplinary Expertise</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Where robotics meets software, and technology meets real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-border/60 bg-card/40 backdrop-blur-sm relative overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent" />
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold">
                  🤖
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-primary">Mechatronics Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Pursuing MSc at Ashesi University with focus on AI-driven embedded systems, autonomous robotics, and precision agriculture.
                  Expertise in STM32 microcontrollers, NVIDIA Jetson AI platforms, IoT sensor networks, and real-time control systems for agricultural automation.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-border/60 bg-card/40 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-transparent" />
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl font-bold">
                  💻
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-emerald-500">Software Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  4+ years building enterprise-scale systems with Java, C#, and Python. Deep expertise in cloud-native architectures (AWS, Azure, GCP), microservices design,
                  API development handling 100K+ daily requests, and real-time data processing. Contributed to major open-source projects under FINOS.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-border/60 bg-card/40 backdrop-blur-sm relative overflow-hidden group hover:border-amber-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 to-transparent" />
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-2xl font-bold">
                  🚀
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-amber-500">Tech Entrepreneurship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Founder & CEO of Verdiq Ltd, pioneering intelligent farming equipment across West Africa.
                  Leading product development from concept to deployment, securing funding, building strategic partnerships,
                  and driving our mission to make Africa self-sufficient in agricultural technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="scroll-mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 uppercase font-bold tracking-wider text-xs">
              Experience
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Professional Journey</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Building systems that scale, from startups to enterprise
            </p>
          </div>

          <div className="relative border-l-2 border-border/80 pl-6 sm:pl-10 space-y-12 max-w-4xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:border-emerald-500 transition-colors duration-300 z-10" />
              
              <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.01] border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-extrabold text-primary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> Oct 2024 - Aug 2025
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> La Rioja, Spain (Remote)
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Java Software Engineer</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">Bosonit</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enhanced Appolow low-code platform with modular cloud storage (S3, Azure, GCP) and implemented third-party authentication via Keycloak. Developed extensible architecture enabling future integrations.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:border-emerald-500 transition-colors duration-300 z-10" />
              
              <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.01] border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-extrabold text-primary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> May 2024 - Aug 2025
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Accra, Ghana
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Software Engineer II</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">Turntabl Ghana Ltd</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Contributed to FINOS open-source projects (Perspective, FDC3) for financial services interoperability. Worked with Rust, Java, and C# to enhance data visualization and standards.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:border-emerald-500 transition-colors duration-300 z-10" />
              
              <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.01] border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-extrabold text-primary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> Jun 2023 - May 2024
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Accra, Ghana
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Software Engineer</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">Hubtel Ltd</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scaled e-commerce APIs to 100K+ requests/day, reduced response times 25% with Redis caching. Built company-wide .NET SDKs reducing redundant code by 40%. Mentored 4 junior engineers.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:border-emerald-500 transition-colors duration-300 z-10" />
              
              <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.01] border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-extrabold text-primary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> Sep 2022 - May 2023
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Accra, Ghana
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Software Developer</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">Innorik Ghana Ltd</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Collaborated with 10-member team enhancing US-based ERP system using C# and .NET. Applied N-TIER and SOLID principles to improve software reliability and scalability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 bg-emerald-500/5 px-4 py-1.5 uppercase font-bold tracking-wider text-xs">
              Education
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Academic Foundation</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining mechatronics and biomedical engineering to build intelligent hardware solutions
            </p>
          </div>

          <div className="relative border-l-2 border-border/80 pl-6 sm:pl-10 space-y-12 max-w-4xl mx-auto">
            {/* Education Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:border-emerald-500 transition-colors duration-300 z-10" />
              
              <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.01] border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-extrabold text-primary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> 2025 - Present
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Berekusu, Ghana
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">MSc Mechatronics Engineering</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">Ashesi University</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Specializing in AI-driven embedded systems, IoT integration, and robotics for agricultural applications. Developing Verdiq's product prototypes as part of research work.
                </p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary group-hover:border-emerald-500 transition-colors duration-300 z-10" />
              
              <div className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.01] border border-border/40 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-extrabold text-primary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> 2018 - 2022
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Kumasi, Ghana
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">BSc Biomedical Engineering</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">KNUST</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  First Class Honors · 2x Provost's Award for Excellence in Engineering (2018/2019, 2019/2020)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verdiq Section */}
        <section id="verdiq" className="scroll-mt-28 border border-border/40 bg-gradient-to-br from-primary/[0.02] to-emerald-500/[0.02] rounded-[30px] p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative rotating effect background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-primary/[0.03] to-transparent opacity-60 pointer-events-none -z-10" />

          <div className="space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
                VERDIQ
              </h2>
              <p className="text-lg sm:text-xl font-bold text-muted-foreground italic">
                &ldquo;Smart Tools for Smarter Farming&rdquo;
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Ghana-based agritech startup revolutionizing African agriculture with AI, IoT, and embedded systems.
                Our mission: make Africa self-sufficient in sustainable agricultural technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lg rounded-2xl">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">2026-28</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Development Roadmap</div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lg rounded-2xl">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">$100M</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Market Size by 2030</div>
                </CardContent>
              </Card>
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lg rounded-2xl">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">10K+</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Target Farmers by 2028</div>
                </CardContent>
              </Card>
            </div>

            {/* Product Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-center text-primary pt-6">
              Product Ecosystem
            </h3>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Product 1 */}
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-sm rounded-2xl flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit bg-primary/10 hover:bg-primary/20 text-primary border-none text-xs gap-1.5 py-1 px-3">
                    <Droplet className="h-3.5 w-3.5" /> Applied Power
                  </Badge>
                  <CardTitle className="text-lg font-bold">Battery-Powered Sprayer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Ergonomic, rechargeable sprayer eliminating manual pumping with adjustable nozzles for precise fertilizer and pesticide application.
                  </p>
                </CardContent>
              </Card>

              {/* Product 2 */}
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-sm rounded-2xl flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-none text-xs gap-1.5 py-1 px-3">
                    <Sprout className="h-3.5 w-3.5" /> High Efficiency
                  </Badge>
                  <CardTitle className="text-lg font-bold">Hand-Held Weeder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Lightweight battery-powered rotary blade system that's faster, less physically demanding, and reduces herbicide dependence.
                  </p>
                </CardContent>
              </Card>

              {/* Product 3 */}
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-sm rounded-2xl flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border-none text-xs gap-1.5 py-1 px-3">
                    <Wind className="h-3.5 w-3.5" /> Eco-Alternative
                  </Badge>
                  <CardTitle className="text-lg font-bold">Battery Mist Blower</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Eco-friendly, silent alternative to fuel-powered blowers for efficient pesticide and nutrient application.
                  </p>
                </CardContent>
              </Card>

              {/* Product 4 */}
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-sm rounded-2xl flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border-none text-xs gap-1.5 py-1 px-3">
                    <Hammer className="h-3.5 w-3.5" /> Multi-Use
                  </Badge>
                  <CardTitle className="text-lg font-bold">Multi-Function Soil Tool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    3-in-1 tool for plowing, mixing, and aeration that saves time, reduces effort, and improves yield consistency.
                  </p>
                </CardContent>
              </Card>

              {/* Product 5 */}
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-sm rounded-2xl flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border-none text-xs gap-1.5 py-1 px-3">
                    <Cpu className="h-3.5 w-3.5" /> AI Precision
                  </Badge>
                  <CardTitle className="text-lg font-bold">AI Laser Weeding Machine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    NVIDIA Jetson-powered computer vision system that detects and targets weeds with laser precision, eliminating herbicide use entirely.
                  </p>
                </CardContent>
              </Card>

              {/* Product 6 */}
              <Card className="border-border bg-background hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-sm rounded-2xl flex flex-col justify-between">
                <CardHeader className="space-y-2">
                  <Badge className="w-fit bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-none text-xs gap-1.5 py-1 px-3">
                    <Droplet className="h-3.5 w-3.5" /> Smart IoT
                  </Badge>
                  <CardTitle className="text-lg font-bold">Smart Irrigation System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    IoT-based system using STM32 sensors to automate watering based on real-time soil moisture, temperature, and weather data.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-28 py-16 px-6 sm:px-12 bg-muted/30 border border-border/60 rounded-[30px] space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 uppercase font-bold tracking-wider text-xs">
              Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Let's Build Something Amazing</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to collaborations, investments, and innovative partnerships
            </p>
          </div>

          {/* Actionable contact channels */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:matthew.oduamafu@ashesi.edu.gh"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 font-medium group hover:-translate-y-1 text-sm sm:text-base text-center"
            >
              <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              <span>matthew.oduamafu@ashesi.edu.gh</span>
            </a>
            
            <a
              href="mailto:matthewoduamafu@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 font-medium group hover:-translate-y-1 text-sm sm:text-base text-center"
            >
              <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              <span>matthewoduamafu@gmail.com</span>
            </a>

            <a
              href="tel:+233552235521"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 font-medium group hover:-translate-y-1 text-sm sm:text-base text-center"
            >
              <Phone className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              <span>+233 55 223 5521</span>
            </a>
          </div>

          {/* Social icons links */}
          <div className="flex justify-center items-center gap-6 pt-4 border-t border-border/40 max-w-md mx-auto">
            <Button render={<a href="https://www.linkedin.com/in/matthew-oduamafu/" target="_blank" rel="noopener noreferrer" />} variant="outline" className="rounded-full px-6 gap-2 border-border/80 hover:bg-muted font-bold">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" role="img" focusable="false">
                <path d="M5.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 9h3v11H4V9Zm5 0h2.88v1.5h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2 3.61 4.6V20h-3v-5.27c0-1.26-.02-2.88-1.75-2.88-1.76 0-2.03 1.38-2.03 2.79V20H9V9Z"/>
              </svg>
              LinkedIn
            </Button>
            <Button render={<a href="https://github.com/Matthew-Oduamafu" target="_blank" rel="noopener noreferrer" />} variant="outline" className="rounded-full px-6 gap-2 border-border/80 hover:bg-muted font-bold">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" role="img" focusable="false">
                <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.3c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.19 10.19 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/>
              </svg>
              GitHub
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/60 backdrop-blur-sm relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; 2025 Matthew Emmanuel Oduamafu. Engineering the future, one innovation at a time.
          </p>
          <p className="text-xs text-muted-foreground/80">
            Built with Next.js, React, TypeScript, Tailwind CSS, and Shadcn UI.
          </p>
        </div>
      </footer>
    </div>
  );
}
