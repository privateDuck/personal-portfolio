'use client';

import { useState } from 'react';
import { navLinks } from '@/config/portfolio-data';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Full-screen background blur overlay on mobile when menu is open. I think */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-bg/80 backdrop-blur-md z-[90] md:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-4 flex items-center justify-between border-b border-border bg-bg/92 backdrop-blur-[10px]">
        <a href="#hero" className="font-sans font-bold text-[1.1rem] tracking-[0.04em] uppercase text-text no-underline">
          privateDuck<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-2 no-underline text-[13.5px] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-3 hover:text-text transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-[10px] border-b border-border px-6 py-4 flex flex-col gap-4 md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-2 no-underline text-[12.5px] tracking-[0.1em] uppercase transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
