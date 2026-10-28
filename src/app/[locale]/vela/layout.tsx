import { notFound } from 'next/navigation';
import { FEATURE_VELA_ENABLED } from '@/lib/features';

export default function VelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!FEATURE_VELA_ENABLED) {
    notFound();
  }

  return <>{children}</>;
}
