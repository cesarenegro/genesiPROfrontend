import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { FEATURE_VELA_ENABLED, FEATURE_VELA_UNDER_DEVELOPMENT } from '@/lib/features';

export default function VelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!FEATURE_VELA_ENABLED) {
    notFound();
  }

  if (FEATURE_VELA_UNDER_DEVELOPMENT) {
    return (
      <section className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 py-24 text-center bg-background">
        <div className="max-w-lg mx-auto space-y-6 border border-border p-12 bg-muted/20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            VELA Section
          </span>
          <h1 className="text-3xl md:text-4xl font-light tracking-widest uppercase">
            UNDER DEVELOPMENT
          </h1>
          <div className="w-12 h-px bg-border mx-auto" />
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            This section is currently under development and temporarily unavailable.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-foreground text-background text-xs font-medium uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return <>{children}</>;
}
