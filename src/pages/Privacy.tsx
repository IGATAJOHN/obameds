import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Scale, FileText, Lock } from "lucide-react";

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

export default function Privacy() {
  const sections = [
    {
      icon: <FileText size={24} color="#1a9988" />,
      title: "1. Scope of Services",
      content: (
        <>
          Intelligensys & Strategies ("the Firm") provides technical frameworks, strategic intelligence, and data-driven services across the 11 Dimensions of Security. By accessing our website or engaging our services, you ("the Client" or "the User") agree to these terms.
          <ul style={{ marginTop: "1em", paddingLeft: "1.5em", listStyleType: "disc" }}>
            <li>The Firm operates as a Strategic Architecture Provider.</li>
            <li>We do not provide kinetic security operations, law enforcement services, or legal advice.</li>
            <li>All services are provided on a "best-efforts" basis, utilizing the most current data science and strategic modeling available.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Scale size={24} color="#e5745a" />,
      title: "2. Intellectual Property & Usage Rights",
      content: (
        <>
          <p><strong>Proprietary Frameworks:</strong> All strategic models, the "Architecture of Resilience" framework, and the methodologies related to the 11 security dimensions are the exclusive intellectual property of the Firm.</p>
          <p style={{ marginTop: "1em" }}><strong>Limited License:</strong> Clients are granted a non-transferable, non-exclusive license to use the Strategic Briefs and reports provided during an engagement for their internal institutional purposes only.</p>
          <p style={{ marginTop: "1em" }}><strong>Restrictions:</strong> Users may not reproduce, reverse-engineer, or redistribute our strategic frameworks without express written consent.</p>
        </>
      ),
    },
    {
      icon: <Lock size={24} color="#4f8298" />,
      title: "3. Data Privacy & Confidentiality",
      content: (
        <>
          As a firm specialized in National and Economic Security, we maintain the highest standards of data integrity.
          <ul style={{ marginTop: "1em", paddingLeft: "1.5em", listStyleType: "disc" }}>
            <li><strong>Data Collection:</strong> We collect only the information necessary to provide our services. This includes contact details and organizational data provided during consultations.</li>
            <li><strong>Strategic Data:</strong> Any data provided by the Client for the purpose of strategic modeling remains the property of the Client. The Firm acts as a Data Processor for this information.</li>
            <li><strong>Confidentiality:</strong> We maintain strict confidentiality protocols. We do not sell, trade, or share Client data with third parties unless required by the laws of the Federal Republic of Nigeria or with explicit Client authorization.</li>
            <li><strong>Technical Safeguards:</strong> We employ advanced Science and Technology Security protocols to protect our internal databases and client communications from unauthorized access.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <ShieldCheck size={24} color="#1a9988" />,
      title: "4. Limitation of Liability",
      content: (
        <>
          <p><strong>Strategic Nature:</strong> Our services provide foresight and frameworks. Decisions made based on our strategic intelligence are the sole responsibility of the Client or the respective government institution.</p>
          <p style={{ marginTop: "1em" }}><strong>External Variables:</strong> The Firm is not liable for outcomes resulting from unforeseen geopolitical shifts, ecological events, or technical disruptions beyond our direct control.</p>
        </>
      ),
    },
    {
      icon: <Scale size={24} color="#e5745a" />,
      title: "5. Professional Conduct & Ethics",
      content: (
        <>
          <p><strong>Independence:</strong> The Firm maintains its independence to provide objective, data-driven intelligence.</p>
          <p style={{ marginTop: "1em" }}><strong>Institutional Integrity:</strong> We operate in strict alignment with the laws of the Federal Republic of Nigeria and adhere to global ethical standards in data science and national security consulting.</p>
        </>
      ),
    },
    {
      icon: <FileText size={24} color="#4f8298" />,
      title: "6. Governance & Jurisdiction",
      content: (
        <p>These terms and any disputes arising from them shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
      ),
    },
    {
      icon: <FileText size={24} color="#1a9988" />,
      title: "7. Contact & Inquiries",
      content: (
        <p>For inquiries regarding this Legal Framework or to request a Strategic Briefing, please contact our Legal & Compliance department via the official contact portal at <a href="https://www.intelligensys.org" style={{ color: "#1a9988", textDecoration: "none", fontWeight: 600 }}>www.intelligensys.org</a>.</p>
      ),
    },
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
            Legal Framework
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
            Terms of Service & Privacy Policy
            <br />
            <span style={{ fontSize: 14, opacity: 0.8 }}>Effective Date: May 5, 2026</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: "white", padding: "6em 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2.22em" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4em" }}>
            {sections.map((section, i) => (
              <ScrollSection key={i}>
                <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "#f4f2ef",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        color: "#09090b",
                        marginBottom: "0.8em",
                      }}
                    >
                      {section.title}
                    </h2>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        color: "#2c2c2c",
                        lineHeight: 1.8,
                      }}
                    >
                      {section.content}
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
