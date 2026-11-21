import { INSTAGRAM_URL, LINKEDIN_URL } from '@/lib/contact';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z" />
    </svg>
  );
}

/** Instagram + LinkedIn icon links. `labels` shows the network name next to each icon. */
export default function SocialLinks({
  className = '',
  iconClass = 'w-5 h-5',
  labels = false,
  vertical = false,
}: {
  className?: string;
  iconClass?: string;
  labels?: boolean;
  vertical?: boolean;
}) {
  const link = 'inline-flex items-center gap-3 min-h-[44px] min-w-[44px] lg:min-h-0 lg:min-w-0 opacity-80 hover:opacity-100 active:scale-[0.95] transition-[opacity,transform] duration-150 ease-[var(--ease-out)]';
  return (
    <span className={`${vertical ? 'flex flex-col items-start gap-3' : 'inline-flex items-center gap-5'} ${className}`}>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={link}>
        <InstagramIcon className={iconClass} />
        {labels && <span>Instagram</span>}
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={link}>
        <LinkedInIcon className={iconClass} />
        {labels && <span>LinkedIn</span>}
      </a>
    </span>
  );
}
