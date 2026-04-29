import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Clock,
  Shield,
  Microscope,
  Heart,
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

const values = [
  {
    icon: <Shield size={28} color="#1a9988" />,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our operations, ensuring honest and transparent service delivery.",
  },
  {
    icon: <Microscope size={28} color="#e5745a" />,
    title: "Precision",
    description:
      "Accuracy is at the core of everything we do. Our advanced equipment and meticulous processes ensure reliable results.",
  },
  {
    icon: <Heart size={28} color="#4f8298" />,
    title: "Compassion",
    description:
      "We understand that medical testing can be stressful. Our team provides caring, patient-centered service.",
  },
  {
    icon: <Clock size={28} color="#1a9988" />,
    title: "Efficiency",
    description:
      "We respect your time. Fast turnaround times without compromising on quality or accuracy.",
  },
];

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <div style={{ background: "#0c1426", padding: "5em 0 4em" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            About Oba-Meds
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
            Leading the future of medical diagnostics in Nigeria with
            cutting-edge technology and compassionate care.
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
                  Our Story
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    color: "#0c1426",
                    lineHeight: 1.2,
                    marginBottom: "0.8em",
                  }}
                >
                  Committed to Your Health Since 2015
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
                  Oba-Meds Laboratory was founded with a singular mission: to make
                  high-quality medical diagnostics accessible to every Nigerian. What
                  started as a small diagnostic center in Abuja has grown into one of
                  the most trusted laboratory networks in the country.
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
                  Our state-of-the-art facilities are equipped with the latest
                  diagnostic technology, operated by a team of highly qualified
                  pathologists, laboratory scientists, and healthcare professionals
                  dedicated to delivering accurate results with compassion.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                  }}
                >
                  We believe that early detection and accurate diagnosis are the
                  cornerstones of effective healthcare. That's why we continuously
                  invest in the latest technology and training to ensure our patients
                  receive the best possible care.
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
                  alt="Oba-Meds Laboratory Team"
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

      {/* Mission & Vision */}
      <section style={{ background: "#f4f2ef", padding: "5em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3em",
            }}
          >
            <ScrollSection>
              <div
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "2.5em",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "#0c1426",
                    marginBottom: 16,
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                  }}
                >
                  To provide accurate, reliable, and timely diagnostic services that
                  empower healthcare providers and patients to make informed decisions
                  about their health. We are committed to excellence, innovation, and
                  compassionate care in everything we do.
                </p>
              </div>
            </ScrollSection>
            <ScrollSection>
              <div
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "2.5em",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "#0c1426",
                    marginBottom: 16,
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "#2c2c2c",
                    lineHeight: 1.7,
                  }}
                >
                  To become the leading diagnostic laboratory network in Africa,
                  recognized for our unwavering commitment to quality, innovation, and
                  patient-centered care. We envision a future where every individual has
                  access to world-class diagnostic services.
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Values */}
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
                What Drives Us
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#0c1426",
                }}
              >
                Our Core Values
              </h2>
            </div>
          </ScrollSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5em",
            }}
          >
            {values.map((value, i) => (
              <ScrollSection key={i}>
                <div
                  style={{
                    background: "#f4f2ef",
                    borderRadius: 16,
                    padding: "2em",
                    textAlign: "center",
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
                      margin: "0 auto 16px",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      color: "#0c1426",
                      marginBottom: 8,
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#2c2c2c",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
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
