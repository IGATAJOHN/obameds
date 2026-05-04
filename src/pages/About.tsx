import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldAlert,
  Landmark,
  Globe,
  Leaf,
  Users,
  Target,
  Quote,
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
    title: "1. Cyber & Technical Security Services",
    description: (
      <>
        <strong>Focus: Science and Technology Security | Cybersecurity</strong>
        <br />
        We provide specialized services to secure the foundations of the digital economy. Our focus includes the rigorous auditing of critical infrastructure and autonomous systems, ensuring that Nigeria’s technological frontier remains resilient against asymmetric threats.
      </>
    ),
  },
  {
    icon: <Landmark size={28} color="#e5745a" />,
    title: "2. Economic & Financial Integrity Services",
    description: (
      <>
        <strong>Focus: Economic Security | Financial Security</strong>
        <br />
        We deliver the strategic frameworks required to enhance national fiscal health. By offering services that analyze and neutralize the drivers of illicit financial flows, we help foster an environment where national prosperity and international investment can thrive.
      </>
    ),
  },
  {
    icon: <Globe size={28} color="#4f8298" />,
    title: "3. Trade & Border Facilitation Services",
    description: (
      <>
        <strong>Focus: Border Security | Transnational Security</strong>
        <br />
        We design the systems that underpin secure trade. Our services focus on the technological enablement of secure trade corridors, ensuring that borders function as efficient gateways for global commerce while mitigating transnational threats.
      </>
    ),
  },
  {
    icon: <Leaf size={28} color="#1a9988" />,
    title: "4. Resource & Food Sustainability Services",
    description: (
      <>
        <strong>Focus: Food Security | Resource Security | Ecological Security</strong>
        <br />
        Utilizing Geospatial Intelligence (GEOINT), we provide high-level monitoring for agricultural hubs and mineral extraction sites. We help our partners protect the national production base through advanced data modeling and ecological risk assessment.
      </>
    ),
  },
  {
    icon: <Users size={28} color="#e5745a" />,
    title: "5. Societal & Human Stability Services",
    description: (
      <>
        <strong>Focus: Human Security | Societal Security | Cultural Security</strong>
        <br />
        We provide the intellectual and data-rich frameworks necessary to enhance the social contract. Our services focus on strengthening institutional integrity and safeguarding the social fabric, ensuring the long-term resilience of the Federation.
      </>
    ),
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
            About Us
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 800,
              lineHeight: 1.7,
            }}
          >
            Intelligensys & Strategies is a high-performance technology and strategic services firm. We provide the advanced intelligence frameworks and data-driven systems required to support Nigeria’s strategic objectives and economic stability. We serve as a specialized partner to government institutions and private-sector leaders, offering the technical clarity required to protect assets, stabilize environments, and facilitate growth.
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
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    color: "#09090b",
                    lineHeight: 1.2,
                    marginBottom: "0.8em",
                  }}
                >
                  Our Legacy
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
                  Established in 2006, we have built a legacy of transforming complex security variables into actionable strategic services. We enable our partners to navigate the multi-dimensional challenges of the modern era with precision and technical confidence.
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
                  src="/images/tech-security.png"
                  alt="Strategic Tech Architecture"
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
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "#2c2c2c",
                  maxWidth: 800,
                  margin: "1em auto 0",
                  lineHeight: 1.6,
                }}
              >
                We categorize our expertise into five operational pillars that encompass the 11 essential branches of modern security.
              </p>
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

      {/* CEO Statement */}
      <section style={{ background: "#f4f2ef", padding: "6em 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "4em",
                alignItems: "start",
                background: "white",
                borderRadius: 24,
                padding: "3em",
                boxShadow: "0 4px 30px rgba(0,0,0,0.03)",
              }}
            >
              <div>
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                    marginBottom: 20,
                  }}
                >
                  <img
                    src="/images/ceo.jpg"
                    alt="Umar Yakubu, Ph.D. - CEO"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: 8 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      color: "#09090b",
                      marginBottom: 4,
                    }}
                  >
                    Umar Yakubu, Ph.D.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#1a9988",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Chief Executive Officer
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "#666",
                    }}
                  >
                    Intelligensys & Strategies
                  </p>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <Quote
                  size={48}
                  color="#1a9988"
                  style={{
                    position: "absolute",
                    top: "-0.5em",
                    left: "-0.5em",
                    opacity: 0.1,
                  }}
                />
                <div style={{ marginBottom: "2em" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#1a9988",
                      marginBottom: 12,
                      display: "block",
                    }}
                  >
                    Perspective
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      color: "#09090b",
                    }}
                  >
                    CEO’S STATEMENT
                  </h2>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.8,
                  }}
                >
                  <p style={{ marginBottom: "1.2em" }}>
                    At Intelligensys & Strategies, we believe that the stability of a nation is no longer defined solely by its physical borders, but by the resilience of its interconnected systems.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    In an era where asymmetric threats can emerge from the digital frontier, the financial markets, or ecological shifts, traditional security models are no longer sufficient.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    Since our founding in 2006, we have transitioned from a technology-focused firm into a specialized vanguard for National Security Architecture.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    Our mission is clear: to provide the strategic frameworks and technical intelligence that empower both government institutions and private-sector leaders to navigate a multi-dimensional world with precision.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    We recognize that the private sector is the engine of Nigeria’s growth. However, growth requires certainty. Our work is centered on 11 Critical Dimensions, ranging from Science and Technology Security and Cybersecurity to Food, Resource, and Ecological Security.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    By addressing the Security-Development Nexus, we provide the private sector with the Risk Intelligence necessary to protect capital, secure supply chains, and stabilize the environments in which they operate.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    Whether we are architecting Trade and Border Facilitation systems to reduce the costs on logistics for exporters, or deploying Geospatial Intelligence to safeguard agricultural and mineral investments, our focus remains on Institutional Integrity and Economic Stability. We bridge the gap between national policy and corporate resilience, transforming complex security variables into manageable business strategies.
                  </p>
                  <p style={{ marginBottom: "1.2em" }}>
                    Nigeria stands at a pivotal moment. As the nation targets aggressive growth in the non-oil sector and a digital transformation of its economy, the need for a robust, multi-dimensional security doctrine has never been greater. Intelligensys & Strategies is proud to be the technical engine behind that doctrine, ensuring that while our social fabric remains protected, our private enterprises have the security framework required to compete globally.
                  </p>
                  <p style={{ marginBottom: "2em" }}>
                    We invite you to explore our architecture of resilience as we work together to secure the national interest and engineer a prosperous, stable, and investment-ready future for all.
                  </p>


                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
}
