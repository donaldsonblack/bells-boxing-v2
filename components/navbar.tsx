"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-bebas text-2xl md:text-3xl hover:opacity-80 transition-opacity">
            <span className="text-foreground">BELLS</span>{" "}
            <span className="text-primary">BOXING</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/schedule"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Schedule
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-bebas tracking-wider transition-all hover:scale-105"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
