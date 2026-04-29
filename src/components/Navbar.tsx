import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, FlaskConical } from "lucide-react";
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
  const location = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        background: "rgba(12, 20, 38, 0.95)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
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
          padding: "0 2.22em",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#e5745a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlaskConical size={20} color="white" strokeWidth={2} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              color: "white",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Oba-Meds
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
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
                fontSize: 15,
                color:
                  location.pathname === link.href ? "#e5745a" : "white",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 300ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="https://www.qudoctor.com/book/oba-medical-diagnostics-services-ltd" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Button
              style={{
                background: "#e5745a",
                color: "white",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 14,
                padding: "10px 24px",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#2c2c2c";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#e5745a";
              }}
            >
              Book a Test
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {mobileOpen ? (
            <X size={28} color="white" />
          ) : (
            <Menu size={28} color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(12, 20, 38, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 99,
            padding: "2em 2.22em",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                color:
                  location.pathname === link.href ? "#e5745a" : "white",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://www.qudoctor.com/book/oba-medical-diagnostics-services-ltd" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none" }}>
            <Button
              style={{
                background: "#e5745a",
                color: "white",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 16,
                padding: "14px 32px",
                border: "none",
                cursor: "pointer",
                width: "100%",
                marginTop: 16,
              }}
            >
              Book a Test
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
