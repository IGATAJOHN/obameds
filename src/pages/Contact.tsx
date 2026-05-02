import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

function ScrollSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 600ms ease-out, transform 600ms ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={20} color="#1a9988" />,
      label: "Phone",
      value: "+234 803 330 4891",
      href: "tel:+2348033304891",
    },
    {
      icon: <Mail size={20} color="#1a9988" />,
      label: "Email",
      value: "mail@intelligensys.org",
      href: "mailto:mail@intelligensys.org",
    },
    {
      icon: <MapPin size={20} color="#1a9988" />,
      label: "Address",
      value: "No 11 Ado-Ekiti Cl, Municipal, Abuja 900001, FCT",
      href: "#",
    },
    {
      icon: <Clock size={20} color="#1a9988" />,
      label: "Working Hours",
      value: "Mon - Sat: 7:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  const locations = [
    {
      name: "Headquarters",
      address: "No 11 Ado-Ekiti Cl, Municipal, Abuja 900001, Federal Capital Territory",
      phone: "+234 803 330 4891",
    }
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <div style={{ background: "#09090b", padding: "5em 0 4em" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Have questions? We're here to help. Reach out to us through any of
            the channels below.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section style={{ background: "white", padding: "4em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                maxWidth: 600,
                margin: "0 auto",
                gap: "4em",
              }}
            >
              {/* Contact Info */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "#09090b",
                    marginBottom: "1.5em",
                  }}
                >
                  Get in Touch
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {contactInfo.map((info, i) => (
                    <a
                      key={i}
                      href={info.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: "#f4f2ef",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 12,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "#2c2c2c",
                            marginBottom: 2,
                          }}
                        >
                          {info.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 15,
                            color: "#09090b",
                          }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/2348033304891?text=Hello%20Intelligensys!%20I%20would%20like%20to%20discuss%20a%20partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 32,
                    padding: "14px 24px",
                    background: "#25D366",
                    color: "white",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    transition: "opacity 300ms",
                  }}
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Locations */}
      <section style={{ background: "#f4f2ef", padding: "4em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#09090b",
                marginBottom: "1.5em",
                textAlign: "center",
              }}
            >
              Our Locations
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2em",
              }}
            >
              {locations.map((loc, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "2em",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <MapPin size={20} color="#e5745a" />
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                        color: "#09090b",
                      }}
                    >
                      {loc.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#2c2c2c",
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {loc.address}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#1a9988",
                      fontWeight: 600,
                    }}
                  >
                    {loc.phone}
                  </p>
                </div>
              ))}
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Map Embed */}
      <section style={{ height: 400, background: "#e0e0e0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d7.3956!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjguNCJOIDfCsDIzJzQ0LjIiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Intelligensys Headquarters"
        />
      </section>
    </div>
  );
}
