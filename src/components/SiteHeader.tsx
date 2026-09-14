import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { navLinks } from '@/data/site';

const hrefOf = (l: { hash?: string; to?: string }) => l.to ?? `/#${l.hash}`;

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="relative group flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-[0.2em] text-primary uppercase">Matthew</span>
          <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">Oduamafu</span>
          <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-gradient-to-r from-primary to-transparent transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={hrefOf(link)}
              className="text-[13px] font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors relative py-2 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button render={<Link to="/#contact" />} size="lg" className="rounded-xl px-5 font-bold gap-2 shadow-sm shadow-primary/20">
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
                  <Link
                    key={link.label}
                    to={hrefOf(link)}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/40"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
