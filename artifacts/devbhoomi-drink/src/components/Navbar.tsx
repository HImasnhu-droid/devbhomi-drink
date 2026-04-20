import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Drinks", href: "#products" },
  { label: "Why Us", href: "#comparison" },
  { label: "Pahadi Punch", href: "#outlet" },
  { label: "Our Story", href: "#pride" },
  { label: "Founder", href: "#founder" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-green-100"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" data-testid="link-home">
            <img
              src="/logo.jpg"
              alt="Devbhoomi Drink"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-green-200 group-hover:ring-green-400 transition-all"
            />
            <span className="flex flex-col leading-none">
              <span
                className="font-devanagari font-black text-lg text-primary leading-tight italic"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                देवभूमि
              </span>
              <span
                className="text-sm text-accent leading-tight"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
              >
                drink
              </span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white drop-shadow"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#outlet"
              data-testid="button-find-near-you"
              className="ml-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-bold shadow hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
            >
              Find Near You
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100 flex flex-col px-6 py-6 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-foreground hover:text-primary transition-colors py-1"
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#outlet"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full bg-primary text-white font-bold shadow hover:bg-primary/90 transition-all"
            >
              Find Near You
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
