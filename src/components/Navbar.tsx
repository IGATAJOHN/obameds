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

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isDesktop;
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDesktop = useIsDesktop();

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close menu when switching to desktop
  useEffect(() => {
    if (isDesktop) setMobileOpen(false);
  }, [isDesktop]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = (!isDesktop && mobileOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, isDesktop]);

  return (
    <>
      {/* ── Navbar Bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 68,
          background: "rgba(9, 9, 11, 0.97)",
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
              }}
            >
              <Hexagon size={18} color="white" strokeWidth={2} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(13px, 3.5vw, 18px)",
                color: "white",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Intelligensys
            </span>
          </Link>

          {/* Desktop: nav links + CTA — only rendered on desktop */}
          {isDesktop && (
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
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
                    transition: "background 300ms",
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
          )}

          {/* Mobile: hamburger button — only rendered on mobile */}
          {!isDesktop && (
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "auto",
              }}
            >
              {mobileOpen ? (
                <X size={28} color="white" />
              ) : (
                <Menu size={28} color="white" />
              )}
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile Overlay (tap to close) — only when open on mobile ── */}
      {!isDesktop && mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 998,
          }}
        />
      )}

      {/* ── Mobile Drawer — only rendered on mobile ── */}
      {!isDesktop && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#09090b",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1.5rem 2.5rem",
            overflowY: "auto",
            // Slide in/out via transform
            transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 320ms cubic-bezier(0.4, 0, 0.2, 1)",
            // Visibility so keyboard & screen readers can't access when closed
            visibility: mobileOpen ? "visible" : "hidden",
          }}
        >
          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  color: location.pathname === link.href ? "#e5745a" : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "16px 0",
                  borderBottom:
                    i < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
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
                  minHeight: "auto",
                }}
              >
                Partner With Us
              </Button>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                textAlign: "center",
                marginTop: 24,
              }}
            >
              © 2026 Intelligensys & Strategies
            </p>
          </div>
        </div>
      )}
    </>
  );
}
