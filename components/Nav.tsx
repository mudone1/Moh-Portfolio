"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav({ flameHero = false }: { flameHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navClass = scrolled ? "nav is-scrolled" : flameHero ? "nav on-flame" : "nav";

  return (
    <>
      <header className={navClass}>
        <div className="nav__inner">
          <Link href="/#top" className="nav__name">
            <span className="dot" aria-hidden="true" />
            Bidemi Abdulwahab
          </Link>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/#contact" className="btn btn--primary nav__cta">
            Let&rsquo;s Talk <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>

          <button
            className="nav__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <div className="mobile-menu__footer">
          <Link href="/#contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            Let&rsquo;s Talk →
          </Link>
        </div>
      </div>
    </>
  );
}
