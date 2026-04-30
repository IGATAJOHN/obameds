import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 68,
          background: "rgba(12, 20, 38, 0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          zIndex: 1000,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
          transition: "box-shadow 300ms",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.25rem",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#e5745a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Hexagon size={18} color="white" strokeWidth={2} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(14px, 3vw, 18px)",
                color: "white",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Intelligensys
            </span>
          </Link>

          {/* Desktop Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="link-underline"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  color: location.pathname === link.href ? "#e5745a" : "white",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 300ms",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  background: "#e5745a",
                  color: "white",
                  borderRadius: 8,
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: 13,
                  padding: "10px 22px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 300ms",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "#2c2c2c";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "#e5745a";
                }}
              >
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms",
              flexShrink: 0,
            }}
          >
            {mobileOpen ? (
              <X size={26} color="white" />
            ) : (
              <Menu size={26} color="white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed",
          top: 68,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#0c1426",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem 1.5rem 2rem",
          overflowY: "auto",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        className="lg:hidden"
      >
        {/* Nav Links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                color: location.pathname === link.href ? "#e5745a" : "rgba(255,255,255,0.9)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "14px 0",
                borderBottom: i < navLinks.length - 1
                  ? "1px solid rgba(255,255,255,0.07)"
                  : "none",
                display: "block",
                transition: "color 200ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div style={{ marginTop: "2rem" }}>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: "none", display: "block" }}
          >
            <Button
              style={{
                background: "#e5745a",
                color: "white",
                borderRadius: 10,
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 16,
                padding: "16px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Partner With Us
            </Button>
          </Link>

          {/* Footer info in mobile menu */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              textAlign: "center",
              marginTop: 24,
            }}
          >
            © 2026 Intelligensys & Strategies
          </p>
        </div>
      </div>
    </>
  );
}
