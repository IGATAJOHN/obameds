import { Link } from "react-router";
import { DNAHelix } from "@/components/DNAHelix";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldCheck,
  Briefcase,
  Globe,
  Map,
  Users,
  Award,
  ChevronDown,
  Star,
  Quote,
  Target,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/providers/trpc";

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

export default function Home() {
  const { data: testimonials } = trpc.testimonial.list.useQuery();

  const services = [
    {
      icon: <ShieldCheck size={32} color="#e5745a" />,
      title: "Cyber & Technical Security",
      description:
        "Specialized services for Science and Technology Security, including Cybersecurity for critical infrastructure and rigorous auditing of AI systems.",
    },
    {
      icon: <Briefcase size={32} color="#1a9988" />,
      title: "Economic & Financial Integrity",
      description:
        "Frameworks to enhance Financial and Economic Security, neutralizing illicit financial flows and organized crime so prosperity and investment can thrive.",
    },
    {
      icon: <Globe size={32} color="#4f8298" />,
      title: "Trade & Border Facilitation",
      description: "Technological enablement of secure trade corridors, ensuring borders function as efficient gateways for global commerce while mitigating transnational threats.",
    },
    {
      icon: <Map size={32} color="#e5745a" />,
      title: "Resource & Food Sustainability",
      description:
        "Geospatial Intelligence (GEOINT) providing high-level monitoring for Food, Resource, and Ecological Security through advanced data modeling.",
    },
    {
      icon: <Users size={32} color="#1a9988" />,
      title: "Societal & Human Stability",
      description:
        "Intellectual and data-rich frameworks to enhance Human and Societal Security, strengthening institutional integrity and safeguarding Cultural Security.",
    },
  ];

  const whyChoose = [
    {
      number: "01",
      icon: <Target size={24} color="#1a9988" />,
      title: "Precision & Clarity",
      description: "Transforming complex security variables into actionable strategic services.",
    },
    {
      number: "02",
      icon: <Activity size={24} color="#1a9988" />,
      title: "Data-Driven Systems",
      description: "Advanced intelligence frameworks supporting strategic objectives and stability.",
    },
    {
      number: "03",
      icon: <ShieldCheck size={24} color="#1a9988" />,
      title: "Technical Vanguard",
      description: "Fusing Data Science with National Security Strategy for our partners.",
    },
    {
      number: "04",
      icon: <Award size={24} color="#1a9988" />,
      title: "Legacy of Excellence",
      description: "Established in 2006, serving government and private-sector leaders.",
    },
  ];

  const stats = [
    { value: "2006", label: "Established" },
    { value: "100+", label: "Strategic Partners" },
    { value: "360°", label: "Security Frameworks" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at center, #18181b 0%, #09090b 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DNAHelix />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: 800,
            padding: "0 2em",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              marginBottom: "0.4em",
              textShadow: "0 2px 40px rgba(0,0,0,0.6)",
              textWrap: "balance",
            }}
          >
            Intelligensys & Strategies
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              marginBottom: "2em",
              maxWidth: 600,
              margin: "0 auto 2em",
            }}
          >
            A high-performance technology and strategic services firm providing advanced intelligence frameworks and data-driven systems.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1em",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >

            <Link to="/services">
              <Button
                variant="outline"
                style={{
                  background: "transparent",
                  color: "white",
                  borderRadius: 50,
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: 15,
                  padding: "14px 36px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "all 300ms",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background =
                    "rgba(255,255,255,0.1)";
                  (e.target as HTMLElement).style.borderColor = "white";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.4)";
                }}
              >
                View Dimensions
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            animation: "float 2s ease-in-out infinite",
          }}
        >
          <ChevronDown size={28} color="rgba(255,255,255,0.5)" />
        </div>
      </section>

      {/* Introduction */}
      <section style={{ background: "white", padding: "6em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "4em",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#2c2c2c",
                    marginBottom: 16,
                    display: "block",
                  }}
                >
                  About Us
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    color: "#09090b",
                    lineHeight: 1.2,
                    marginBottom: "0.5em",
                  }}
                >
                  Technical Clarity for Strategic Growth
                </h2>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                    marginBottom: "1.5em",
                  }}
                >
                  We provide the advanced intelligence frameworks and data-driven systems required to support Nigeria’s strategic objectives and economic stability. We serve as a specialized partner to government institutions and private-sector leaders, offering the technical clarity required to protect assets, stabilize environments, and facilitate growth.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                    marginBottom: "1.5em",
                  }}
                >
                  Established in 2006 as Quorum Technologies, we have built a legacy of transforming complex security variables into actionable strategic services. We enable our partners to navigate the multi-dimensional challenges of the modern era with precision and technical confidence.
                </p>

                <Link to="/about">
                  <Button
                    style={{
                      background: "#1a9988",
                      color: "white",
                      borderRadius: 8,
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontSize: 14,
                      padding: "12px 28px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 300ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = "#09090b";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = "#1a9988";
                    }}
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ background: "#f4f2ef", padding: "6em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div style={{ textAlign: "center", marginBottom: "3em" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#2c2c2c",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                Our Service Dimensions
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#09090b",
                }}
              >
                Multi-Dimensional Stability Solutions
              </h2>
            </div>
          </ScrollSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5em",
            }}
          >
            {services.map((service, i) => (
              <ScrollSection key={i}>
                <div
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "2em",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "transform 300ms, box-shadow 300ms",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 30px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{ marginBottom: 16 }}>{service.icon}</div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      color: "#09090b",
                      marginBottom: 8,
                    }}
                  >
                    {service.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#2c2c2c",
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#1a9988",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Learn More →
                  </Link>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: "#09090b", padding: "6em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div style={{ textAlign: "center", marginBottom: "3em" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                The Intelligensys Advantage
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "white",
                  marginBottom: "0.5em",
                }}
              >
                Mastering the Landscape
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: 800,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                We don’t just analyze the landscape; we provide the specialized services to master it. By fusing Data Science with National Security Strategy, Intelligensys & Strategies serves as a technical vanguard, empowering our partners to achieve multi-dimensional stability and long-term success.
              </p>
            </div>
          </ScrollSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5em",
              marginTop: "3em",
            }}
          >
            {whyChoose.map((item, i) => (
              <ScrollSection key={i}>
                <div className="glass-card" style={{ padding: "2em", height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 36,
                        color: "#1a9988",
                        lineHeight: 1,
                      }}
                    >
                      {item.number}
                    </span>
                    {item.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      color: "white",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "white", padding: "6em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div style={{ textAlign: "center", marginBottom: "3em" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#2c2c2c",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                Testimonials
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#09090b",
                }}
              >
                Trusted by Leaders
              </h2>
            </div>
          </ScrollSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5em",
            }}
          >
            {(testimonials ?? []).slice(0, 3).map((item, i) => (
              <ScrollSection key={i}>
                <div
                  style={{
                    background: "#f4f2ef",
                    borderRadius: 16,
                    padding: "2em",
                    position: "relative",
                  }}
                >
                  <Quote
                    size={32}
                    color="#1a9988"
                    style={{ marginBottom: 12, opacity: 0.5 }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#2c2c2c",
                      lineHeight: 1.7,
                      marginBottom: 20,
                      fontStyle: "italic",
                    }}
                  >
                    {item.quote}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 15,
                          color: "#09090b",
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          color: "#2c2c2c",
                        }}
                      >
                        {item.location}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      {Array.from({ length: item.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          color="#e5745a"
                          fill="#e5745a"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>





      {/* CTA Banner */}
      <section style={{ background: "#1a9988", padding: "5em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "white",
                  marginBottom: "0.5em",
                }}
              >
                Ready to Secure Your Future?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 18,
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "1.5em",
                }}
              >
                Contact us for advanced intelligence frameworks and data-driven stability solutions.
              </p>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    background: "#e5745a",
                    color: "white",
                    borderRadius: 50,
                    fontFamily: "var(--font-display)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: 16,
                    padding: "16px 40px",
                    border: "none",
                    cursor: "pointer",
                    transition: "transform 300ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
}
