import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

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

const faqs = [
  {
    question: "What is Intelligensys & Strategies?",
    answer:
      "Intelligensys & Strategies is a high-performance technology and strategic services firm established in 2006 as Quorum Technologies. We provide advanced intelligence frameworks and data-driven systems required to support Nigeria's strategic objectives and economic stability, serving government institutions and private-sector leaders.",
  },
  {
    question: "Who are your primary clients?",
    answer:
      "We serve government institutions, security agencies, and private-sector leaders who require specialized technical clarity. Our partners span across critical infrastructure operators, financial regulators, trade bodies, and institutions focused on national and economic security.",
  },
  {
    question: "What are your five service dimensions?",
    answer:
      "Our five service dimensions are: (1) Cyber & Technical Security Services — covering cybersecurity for critical infrastructure and AI auditing; (2) Economic & Financial Integrity Services — neutralizing illicit financial flows; (3) Trade & Border Facilitation Services — enabling secure trade corridors; (4) Resource & Food Sustainability Services — GEOINT-powered monitoring; and (5) Societal & Human Stability Services — strengthening institutional integrity and cultural security.",
  },
  {
    question: "How does Intelligensys approach Cybersecurity?",
    answer:
      "We focus on Science and Technology Security, providing cybersecurity frameworks for critical national infrastructure and conducting rigorous audits of AI systems. Our goal is to ensure Nigeria's digital frontier remains a secure platform for innovation by identifying vulnerabilities before they become threats.",
  },
  {
    question: "What is Geospatial Intelligence (GEOINT) and how do you use it?",
    answer:
      "Geospatial Intelligence (GEOINT) is the analysis and visual representation of security-relevant activities on the Earth's surface. We leverage GEOINT to provide high-level monitoring for Food Security, Resource Security, and Ecological Security — helping our partners protect agricultural hubs and mineral extraction sites through advanced data modeling and risk assessment.",
  },
  {
    question: "How do you support Economic and Financial Security?",
    answer:
      "We deliver specialized frameworks designed to neutralize illicit financial flows and disrupt organized crime networks. By helping to create environments of financial integrity, we foster conditions where legitimate investment and prosperity can thrive — supporting both regulatory bodies and private institutions.",
  },
  {
    question: "What is the 'Intelligensys Advantage'?",
    answer:
      "The Intelligensys Advantage is our core philosophy: we don't just analyze the landscape — we provide the specialized services to master it. By fusing Data Science with National Security Strategy, we serve as a technical vanguard, empowering partners to achieve multi-dimensional stability and long-term success rather than reactive, single-point solutions.",
  },
  {
    question: "How was Intelligensys & Strategies founded?",
    answer:
      "Intelligensys & Strategies was established in 2006 as Quorum Technologies. Over nearly two decades, we have built a legacy of transforming complex security variables into actionable strategic services, evolving our capabilities to meet the multi-dimensional challenges of the modern era.",
  },
  {
    question: "How do I initiate a partnership with Intelligensys?",
    answer:
      "You can reach us through the Contact page on our website, via email at info@intelligensys.ng, or through WhatsApp. Our team will engage you to understand your strategic objectives and propose a tailored service framework aligned to your specific needs.",
  },
  {
    question: "Is Intelligensys focused solely on Nigeria?",
    answer:
      "While our primary mandate is to support Nigeria's strategic objectives and economic stability, our intelligence frameworks — particularly in Trade & Border Facilitation and Geospatial Intelligence — have regional and transnational dimensions, addressing cross-border threats and global commerce networks that affect Nigeria's security landscape.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25em 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 17,
            color: "#09090b",
            textTransform: "none",
            paddingRight: 16,
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          color="#1a9988"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 300ms",
            flexShrink: 0,
          }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease-out",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "#2c2c2c",
            lineHeight: 1.7,
            paddingBottom: "1.25em",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Frequently Asked Questions
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
            Find answers to common questions about our firm, our service dimensions,
            and how to engage us as a strategic partner.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <section style={{ background: "white", padding: "4em 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ScrollSection>
        </div>
      </section>
    </div>
  );
}
