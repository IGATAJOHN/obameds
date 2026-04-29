import { Link } from "react-router";
import { FlaskConical, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#0c1426", padding: "5em 0 2em" }}>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 2.22em",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3em",
            marginBottom: "3em",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
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
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 14,
                lineHeight: 1.6,
                fontFamily: "var(--font-body)",
              }}
            >
              Your trusted partner in medical diagnostics. Accurate results,
              fast turnaround, and compassionate care.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                color: "white",
                marginBottom: 20,
                letterSpacing: "0.06em",
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Phone size={16} color="#1a9988" />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  +234 801 234 5678
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={16} color="#1a9988" />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  info@obameds.ng
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <MapPin size={16} color="#1a9988" style={{ marginTop: 2 }} />
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  Plot 42, Lugbe Expressway,<br />
                  Abuja, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                color: "white",
                marginBottom: 20,
                letterSpacing: "0.06em",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Book a Test", href: "https://www.qudoctor.com/book/oba-medical-diagnostics-services-ltd" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                link.href.startsWith("http") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 14,
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      transition: "color 300ms",
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="link-underline"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 14,
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      transition: "color 300ms",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                color: "white",
                marginBottom: 20,
                letterSpacing: "0.06em",
              }}
            >
              Legal
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Privacy Policy", "Terms of Service"].map((label) => (
                <span
                  key={label}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "color 300ms",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "2em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              fontFamily: "var(--font-body)",
            }}
          >
            &copy; 2025 Oba-Meds Laboratory. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 300ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#e5745a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)";
                }}
              >
                <Icon size={16} color="white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
