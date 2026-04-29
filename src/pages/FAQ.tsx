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
    question: "How do I book a test?",
    answer:
      "You can book a test online through our website by visiting the 'Book a Test' page. Simply browse our test catalog, select your preferred test, fill in your details, and choose between visiting our lab or home sample collection. You can also book via WhatsApp or by calling us directly.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Turnaround times vary by test type. Most routine blood tests are available within 24 hours. Specialized tests like hormonal assays and genetic testing may take 48 hours to 2 weeks. You'll receive an estimated turnaround time when booking your test.",
  },
  {
    question: "Do you offer home sample collection?",
    answer:
      "Yes! We offer home sample collection services across Abuja and select areas. Simply select 'Home Collection' when booking your test, and our trained phlebotomist will visit your location at your preferred time slot.",
  },
  {
    question: "How should I prepare for my blood test?",
    answer:
      "Preparation depends on the specific test. For fasting blood glucose and lipid profiles, you'll need to fast for 8-12 hours (water is allowed). For most other tests, no special preparation is needed. We'll provide detailed instructions when you book your test.",
  },
  {
    question: "Are your results accurate?",
    answer:
      "Absolutely. We use state-of-the-art equipment and follow strict quality control protocols. Our laboratory is fully accredited and our results are trusted by leading hospitals and healthcare providers across Nigeria.",
  },
  {
    question: "How do I receive my test results?",
    answer:
      "Your results will be sent to you via email and SMS. You can also access them through our patient portal. For sensitive results, we recommend scheduling a follow-up consultation with one of our doctors.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our laboratory is open Monday through Saturday from 7:00 AM to 6:00 PM. Home sample collection is available from 8:00 AM to 5:00 PM, Monday through Saturday.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we work with most major health insurance providers in Nigeria. Please bring your insurance card and a valid ID when visiting our lab. Contact us to confirm if your specific provider is covered.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule your appointment up to 24 hours before your scheduled time at no charge. Please contact us via phone or WhatsApp to make changes.",
  },
  {
    question: "Where are your lab locations?",
    answer:
      "We currently have two locations in Abuja: Plot 42, Lugbe Expressway, Federal Housing Estate, Lugbe, and Suite 15, Jabi Lake Mall, Jabi District. Both locations offer full diagnostic services.",
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
            color: "#0c1426",
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
            Find answers to common questions about our services, booking process,
            and test preparation.
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
