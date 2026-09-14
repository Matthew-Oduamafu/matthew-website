export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/60 backdrop-blur-sm relative z-10 py-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          &copy; {new Date().getFullYear()} Matthew Emmanuel Oduamafu &middot; Accra, Ghana
        </p>
      </div>
    </footer>
  );
}
