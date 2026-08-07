import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 py-10 mt-auto">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Genesi Premium Website. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/trade" className="hover:text-foreground transition-colors font-medium text-primary">Trade & B2B</Link>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
