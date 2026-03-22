import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(0.2 0.05 45)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold font-serif"
              style={{
                backgroundColor: "oklch(0.72 0.1 70)",
                color: "oklch(0.2 0.05 45)",
              }}
            >
              SK
            </div>
            <div className="hidden sm:block">
              <p
                className="text-sm font-bold tracking-[0.2em] uppercase leading-none"
                style={{
                  color: "oklch(0.72 0.1 70)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Shree Kanth
              </p>
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "oklch(0.75 0.02 68)" }}
              >
                Fine Indian Cuisine
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm tracking-wide transition-colors duration-200 hover:opacity-80 font-body"
                style={{ color: "oklch(0.9 0.01 68)" }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => scrollToSection("#reservations")}
              className="px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 hover:shadow-gold"
              style={{
                backgroundColor: "oklch(0.72 0.1 70)",
                color: "oklch(0.18 0.04 45)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              data-ocid="nav.primary_button"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ color: "oklch(0.9 0.01 68)" }}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(0.22 0.05 45)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 text-sm tracking-wide border-b"
                  style={{
                    color: "oklch(0.9 0.01 68)",
                    borderColor: "oklch(0.32 0.06 45)",
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection("#reservations")}
                className="mt-2 py-2.5 rounded-sm text-sm font-semibold tracking-wide"
                style={{
                  backgroundColor: "oklch(0.72 0.1 70)",
                  color: "oklch(0.18 0.04 45)",
                }}
                data-ocid="nav.primary_button"
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
