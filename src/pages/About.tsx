import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldAlert,
  Landmark,
  Globe,
  Leaf,
  Users,
  Target,
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

const services = [
  {
    icon: <ShieldAlert size={28} color="#1a9988" />,
    title: "Cyber & Technical Security Services",
    description:
      "We provide specialized services for Science and Technology Security. Our focus includes Cybersecurity for critical infrastructure and the rigorous auditing of AI systems, ensuring that Nigeria’s digital frontier remains a secure platform for innovation.",
  },
  {
    icon: <Landmark size={28} color="#e5745a" />,
    title: "Economic & Financial Integrity Services",
    description:
      "We deliver the frameworks required to enhance Financial Security and Economic Security. By offering services that neutralize illicit financial flows and organized crime, we help foster an environment where prosperity and investment can thrive.",
  },
  {
    icon: <Globe size={28} color="#4f8298" />,
    title: "Trade & Border Facilitation Services",
    description:
      "We design the systems that underpin Border Security. Our services focus on the technological enablement of secure trade corridors, ensuring that borders function as efficient gateways for global commerce while mitigating transnational threats.",
  },
  {
    icon: <Leaf size={28} color="#1a9988" />,
    title: "Resource & Food Sustainability Services",
    description:
      "Utilizing Geospatial Intelligence (GEOINT), we provide high-level monitoring for Food Security, Resource Security, and Ecological Security. We help our partners protect agricultural hubs and mineral extraction sites through advanced data modeling and risk assessment.",
  },
  {
    icon: <Users size={28} color="#e5745a" />,
    title: "Societal & Human Stability Services",
    description:
      "We provide the intellectual and data-rich frameworks necessary to enhance Human Security and Societal Security. Our services focus on strengthening institutional integrity and safeguarding Cultural Security, ensuring the long-term resilience of the social fabric.",
  },
];

export default function About() {
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
            About Intelligensys & Strategies
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 700,
              lineHeight: 1.7,
            }}
          >
            Intelligensys & Strategies is a high-performance technology and strategic services firm. We provide the advanced intelligence frameworks and data-driven systems required to support Nigeria’s strategic objectives and economic stability.
          </p>
        </div>
      </div>

      {/* Mission */}
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
                    color: "#1a9988",
                    marginBottom: 16,
                    display: "block",
                  }}
                >
                  Our Legacy
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    color: "#09090b",
                    lineHeight: 1.2,
                    marginBottom: "0.8em",
                  }}
                >
                  Established in 2006
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                    marginBottom: "1.2em",
                  }}
                >
                  Established in 2006 as Quorum Technologies, we have built a legacy of transforming complex security variables into actionable strategic services. We enable our partners to navigate the multi-dimensional challenges of the modern era with precision and technical confidence.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                    marginBottom: "1.2em",
                  }}
                >
                  We serve as a specialized partner to government institutions and private-sector leaders, offering the technical clarity required to protect assets, stabilize environments, and facilitate growth.
                </p>
              </div>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src="/images/about-team.jpg"
                  alt="Intelligensys & Strategies Team"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* The Intelligensys Advantage */}
      <section style={{ background: "#f4f2ef", padding: "5em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ScrollSection>
              <div
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "3em",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                  maxWidth: 800,
                  textAlign: "center",
                }}
              >
                <Target size={40} color="#1a9988" style={{ marginBottom: 20 }} />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "#09090b",
                    marginBottom: 16,
                  }}
                >
                  The Intelligensys Advantage
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.8,
                  }}
                >
                  We don’t just analyze the landscape; we provide the specialized services to master it. By fusing Data Science with National Security Strategy, Intelligensys & Strategies serves as a technical vanguard, empowering our partners to achieve multi-dimensional stability and long-term success.
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "white", padding: "5em 0" }}>
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
                  color: "#1a9988",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                What We Do
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#09090b",
                }}
              >
                Our Service Dimensions
              </h2>
            </div>
          </ScrollSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2em",
            }}
          >
            {services.map((service, i) => (
              <ScrollSection key={i}>
                <div
                  style={{
                    background: "#f4f2ef",
                    borderRadius: 16,
                    padding: "2em",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      color: "#09090b",
                      marginBottom: 12,
                    }}
                  >
                    {service.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#2c2c2c",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
