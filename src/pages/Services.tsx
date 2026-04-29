import { Link } from "react-router";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trpc } from "@/providers/trpc";
import { Button } from "@/components/ui/button";
import {
  Beaker,
  CheckCircle2,
  Droplets,
  Microscope,
  Dna,
  FlaskConical,
  ArrowRight,
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

const categoryIcons: Record<string, React.ReactNode> = {
  blood: <Beaker size={32} color="#e5745a" />,
  urine: <Droplets size={32} color="#e5745a" />,
  health_package: <CheckCircle2 size={32} color="#1a9988" />,
  specialized: <Microscope size={32} color="#4f8298" />,
  hormonal: <FlaskConical size={32} color="#1a9988" />,
  genetic: <Dna size={32} color="#4f8298" />,
};

const categoryLabels: Record<string, string> = {
  blood: "Blood Tests",
  urine: "Urine Tests",
  health_package: "Health Packages",
  specialized: "Specialized Diagnostics",
  hormonal: "Hormonal Assays",
  genetic: "Genetic Testing",
};

const categoryImages: Record<string, string> = {
  blood: "/images/service-blood-tests.jpg",
  urine: "/images/service-urinalysis.jpg",
  health_package: "/images/service-health-screening.jpg",
  specialized: "/images/service-hormonal.jpg",
  hormonal: "/images/service-hormonal.jpg",
  genetic: "/images/service-genetic.jpg",
};

export default function Services() {
  const { data: tests } = trpc.test.listActive.useQuery();

  // Group tests by category
  const groupedTests = (tests ?? []).reduce(
    (acc, test) => {
      if (!acc[test.category]) acc[test.category] = [];
      acc[test.category].push(test);
      return acc;
    },
    {} as Record<string, NonNullable<typeof tests>>
  );

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

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
            Our Services
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
            Comprehensive laboratory testing services with state-of-the-art
            equipment and expert analysis. Browse our categories below.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div style={{ background: "#f4f2ef", padding: "4em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          {Object.entries(groupedTests).map(([category, categoryTests], idx) => (
            <ScrollSection key={category}>
              <div
                style={{
                  marginBottom: idx < Object.keys(groupedTests).length - 1 ? "4em" : 0,
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2em",
                    alignItems: "center",
                    marginBottom: "2em",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 12,
                      }}
                    >
                      {categoryIcons[category] ?? (
                        <Beaker size={32} color="#e5745a" />
                      )}
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          color: "#0c1426",
                        }}
                      >
                        {categoryLabels[category] ?? category}
                      </h2>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "#2c2c2c",
                        lineHeight: 1.7,
                      }}
                    >
                      {category === "blood" &&
                        "Our blood tests provide critical insights into your overall health, from routine screenings to specialized panels."}
                      {category === "urine" &&
                        "Comprehensive urine analysis for diagnostic and monitoring purposes, including culture and sensitivity testing."}
                      {category === "health_package" &&
                        "Bundled screening packages designed for comprehensive health assessment at great value."}
                      {category === "specialized" &&
                        "Advanced diagnostic tests for specific conditions including infectious diseases and vitamin deficiencies."}
                      {category === "hormonal" &&
                        "Endocrine function testing for thyroid, fertility, and reproductive health assessment."}
                      {category === "genetic" &&
                        "Cutting-edge genetic screening for carrier status and personalized health insights."}
                    </p>
                  </div>
                  <div
                    style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      height: 200,
                    }}
                  >
                    <img
                      src={categoryImages[category] ?? "/images/service-blood-tests.jpg"}
                      alt={categoryLabels[category] ?? category}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                {/* Tests Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "1em",
                  }}
                >
                  {categoryTests?.map((test) => (
                    <div
                      key={test.id}
                      style={{
                        background: "white",
                        borderRadius: 12,
                        padding: "1.25em",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        transition: "transform 300ms, box-shadow 300ms",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform =
                          "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 4px 16px rgba(0,0,0,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.04)";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 16,
                            color: "#0c1426",
                            marginBottom: 4,
                            textTransform: "none",
                          }}
                        >
                          {test.name}
                        </h4>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 13,
                            color: "#2c2c2c",
                            lineHeight: 1.5,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {test.description}
                        </p>
                      </div>
                      <div style={{ textAlign: "right", marginLeft: 12 }}>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 18,
                            color: "#e5745a",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {formatPrice(test.price)}
                        </p>
                        <a
                          href="https://www.qudoctor.com/book/oba-medical-diagnostics-services-ltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 12,
                            color: "#1a9988",
                            textDecoration: "none",
                            fontWeight: 600,
                          }}
                        >
                          Book →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#0c1426", padding: "4em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Need a Specific Test?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 24,
            }}
          >
            Contact us for custom testing packages and corporate health screenings.
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
                fontSize: 14,
                padding: "12px 28px",
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
