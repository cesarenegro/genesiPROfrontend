import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default async function Header() {
  const { userId } = await auth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="GENESI Logo" 
            width={120} 
            height={40} 
            className="object-contain h-10 w-auto" 
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/studio" className="hover:text-primary transition-colors">Studio</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/materials" className="hover:text-primary transition-colors">Materials</Link>
          
          <div className="w-px h-4 bg-border mx-2"></div>
          
          {/* Download Catalogue CTA */}
          <a 
            href="/docs/genesi-catalogue.pdf?v=2" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-[#5B9C94] text-white px-5 py-2 hover:bg-[#488079] transition-colors"
          >
            Open Catalogue
          </a>
          
          {/* Auth Block */}
          {!userId ? (
            <SignInButton mode="modal">
              <button className="text-sm font-medium bg-[#8A9A86] text-white px-5 py-2 hover:bg-[#788764] transition-colors">Trade Login</button>
            </SignInButton>
          ) : (
            <>
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors mr-2">Area Personale</Link>
              <UserButton />
            </>
          )}

          <LocaleSwitcher />
        </nav>
        
        {/* Mobile menu toggle could go here */}
        <div className="md:hidden flex items-center gap-4">
          {userId && (
            <UserButton />
          )}
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
