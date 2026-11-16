// Re-mounted on every navigation: gives each page a soft fade-in (see .page-enter in globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter flex-1 flex flex-col">{children}</div>;
}
