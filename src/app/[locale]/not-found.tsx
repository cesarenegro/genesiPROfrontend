import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center bg-background text-foreground">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 block">
        404 — Not Found
      </span>
      <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
        Pagina Non Trovata
      </h1>
      <p className="text-base md:text-lg text-muted-foreground font-light max-w-md mx-auto mb-10 leading-relaxed">
        La pagina richiesta non è disponibile o è stata rimossa.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-foreground text-background text-xs uppercase tracking-widest font-medium hover:bg-foreground/90 transition-colors"
      >
        Torna alla Homepage →
      </Link>
    </div>
  );
}
