import { Link } from "react-router";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Briefcase,
  Globe,
  Map,
  Users,
  ArrowRight,
  CheckCircle2,
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

const serviceDimensions = [
  {
    icon: <ShieldCheck size={40} color="#1a9988" />,
    title: "Cyber & Technical Security Services",
    tag: "Science & Technology Security",
    description:
      "We provide specialized services for Science and Technology Security. Our focus includes Cybersecurity for critical infrastructure and the rigorous auditing of AI systems, ensuring that Nigeria's digital frontier remains a secure platform for innovation.",
    capabilities: [
      "Critical infrastructure cybersecurity",
      "AI systems auditing & assurance",
      "Digital threat intelligence",
      "Technology risk assessment",
    ],
    color: "#1a9988",
  },
  {
    icon: <Briefcase size={40} color="#e5745a" />,
    title: "Economic & Financial Integrity Services",
    tag: "Financial & Economic Security",
    description:
      "We deliver the frameworks required to enhance Financial Security and Economic Security. By offering services that neutralize illicit financial flows and organized crime, we help foster an environment where prosperity and investment can thrive.",
    capabilities: [
      "Illicit financial flow neutralization",
      "Organized crime disruption frameworks",
      "Investment environment stabilization",
      "Economic security assessments",
    ],
    color: "#e5745a",
  },
  {
    icon: <Globe size={40} color="#4f8298" />,
    title: "Trade & Border Facilitation Services",
    tag: "Border Security",
    description:
      "We design the systems that underpin Border Security. Our services focus on the technological enablement of secure trade corridors, ensuring that borders function as efficient gateways for global commerce while mitigating transnational threats.",
    capabilities: [
      "Secure trade corridor design",
      "Border technology enablement",
      "Transnational threat mitigation",
      "Cross-border commerce facilitation",
    ],
    color: "#4f8298",
  },
  {
    icon: <Map size={40} color="#1a9988" />,
    title: "Resource & Food Sustainability Services",
    tag: "GEOINT · Food · Resource · Ecological Security",
    description:
      "Utilizing Geospatial Intelligence (GEOINT), we provide high-level monitoring for Food Security, Resource Security, and Ecological Security. We help our partners protect agricultural hubs and mineral extraction sites through advanced data modeling and risk assessment.",
    capabilities: [
      "Geospatial intelligence (GEOINT) monitoring",
      "Agricultural hub protection",
      "Mineral site risk assessment",
      "Ecological security data modeling",
    ],
    color: "#1a9988",
  },
  {
    icon: <Users size={40} color="#e5745a" />,
    title: "Societal & Human Stability Services",
    tag: "Human · Societal · Cultural Security",
    description:
      "We provide the intellectual and data-rich frameworks necessary to enhance Human Security and Societal Security. Our services focus on strengthening institutional integrity and safeguarding Cultural Security, ensuring the long-term resilience of the social fabric.",
    capabilities: [
      "Institutional integrity strengthening",
      "Cultural security safeguarding",
      "Social fabric resilience frameworks",
      "Human security data analysis",
    ],
    color: "#e5745a",
  },
];

export default function Services() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <div style={{ background: "#0c1426", padding: "5em 0 4em" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1a9988",
              display: "block",
              marginBottom: 16,
            }}
          >
            Our Service Dimensions
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "white",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Multi-Dimensional Stability Solutions
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 680,
              lineHeight: 1.7,
            }}
          >
            We deliver advanced intelligence frameworks across five strategic
            dimensions, empowering government institutions and private-sector
            leaders to navigate the modern era with precision.
          </p>
        </div>
      </div>

      {/* Service Dimensions */}
      <div style={{ background: "#f4f2ef", padding: "5em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4em" }}>
            {serviceDimensions.map((service, idx) => (
              <ScrollSection key={idx}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "3em",
                    alignItems: "start",
                    background: "white",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    style={{
                      padding: "3em",
                      borderLeft: `6px solid ${service.color}`,
                    }}
                  >
                    <div style={{ marginBottom: 20 }}>{service.icon}</div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: service.color,
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      {service.tag}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                        color: "#0c1426",
                        lineHeight: 1.2,
                        marginBottom: "1em",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "#2c2c2c",
                        lineHeight: 1.75,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div
                    style={{
                      padding: "3em",
                      background: "#f4f2ef",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 16,
                        color: "#0c1426",
                        marginBottom: "1.2em",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Key Capabilities
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                      }}
                    >
                      {service.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 12,
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            color={service.color}
                            style={{ marginTop: 2, flexShrink: 0 }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 15,
                              color: "#2c2c2c",
                              lineHeight: 1.5,
                            }}
                          >
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#0c1426", padding: "5em 0" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 2.22em",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Ready to Engage a Strategic Partner?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Contact us to discuss how Intelligensys & Strategies can support
            your objectives across any of our service dimensions.
          </p>
          <Link to="/contact">
            <Button
              style={{
                background: "#e5745a",
                color: "white",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 15,
                padding: "14px 36px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
