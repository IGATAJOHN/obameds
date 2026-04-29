import { useState } from "react";
import { trpc } from "@/providers/trpc";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Search,
  FlaskConical,
  Clock,
  MapPin,
  Home,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const categories = [
  { value: "all", label: "All Tests" },
  { value: "blood", label: "Blood Tests" },
  { value: "urine", label: "Urine Tests" },
  { value: "health_package", label: "Health Packages" },
  { value: "specialized", label: "Specialized" },
  { value: "hormonal", label: "Hormonal" },
  { value: "genetic", label: "Genetic" },
];

export default function Book() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [formStep, setFormStep] = useState<"catalog" | "form" | "success">(
    "catalog"
  );

  // Form state
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [serviceType, setServiceType] = useState<"lab_visit" | "home_collection">(
    "lab_visit"
  );
  const [address, setAddress] = useState("");

  const { data: tests } = trpc.test.listActive.useQuery();
  const createBooking = trpc.booking.create.useMutation({
    onSuccess: () => {
      toast.success("Booking Confirmed! We'll contact you shortly.");
      setFormStep("success");
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setPreferredDate("");
      setAddress("");
      setSelectedTest(null);
    },
    onError: () => {
      toast.error("Failed to submit booking. Please try again.");
    },
  });

  const filteredTests = (tests ?? []).filter((test) => {
    const matchesCategory =
      selectedCategory === "all" || test.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedTestData = tests?.find((t) => t.id === selectedTest);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !preferredDate) {
      toast.error("Please fill in all required fields.");
      return;
    }
    createBooking.mutate({
      fullName,
      phoneNumber,
      email: email || undefined,
      testId: selectedTest ?? undefined,
      preferredDate,
      serviceType,
      address: serviceType === "home_collection" ? address : undefined,
    });
  };

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

  if (formStep === "success") {
    return (
      <div style={{ paddingTop: 72, minHeight: "100vh", background: "white" }}>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            padding: "6em 2em",
            textAlign: "center",
          }}
        >
          <CheckCircle2 size={64} color="#1a9988" style={{ marginBottom: 24 }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 32,
              color: "#0c1426",
              marginBottom: 16,
            }}
          >
            Booking Confirmed!
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#2c2c2c",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Thank you for booking with Oba-Meds. Our team will contact you
            shortly to confirm your appointment details.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Button
              onClick={() => setFormStep("catalog")}
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
              Book Another Test
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72, minHeight: "100vh", background: "#f4f2ef" }}>
      {/* Header */}
      <div style={{ background: "#0c1426", padding: "4em 0 3em" }}>
        <div
          style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "white",
              marginBottom: 12,
            }}
          >
            Book a Test
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 600,
            }}
          >
            Browse our test catalog and book your appointment online in minutes.
          </p>
        </div>
      </div>

      {formStep === "catalog" ? (
        /* Test Catalog */
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "3em 2.22em" }}>
          {/* Search and Filter */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: "2em",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                flex: 1,
                minWidth: 280,
              }}
            >
              <Search
                size={18}
                color="#c2c2c2"
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                type="text"
                placeholder="Search tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 42px",
                  borderRadius: 8,
                  border: "1px solid #e0e0e0",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  outline: "none",
                  background: "white",
                }}
              />
            </div>
            <div style={{ position: "relative", minWidth: 200 }}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 36px 12px 16px",
                  borderRadius: 8,
                  border: "1px solid #e0e0e0",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  outline: "none",
                  background: "white",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                color="#2c2c2c"
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Test Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5em",
            }}
          >
            {filteredTests.map((test) => (
              <div
                key={test.id}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "1.5em",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "transform 300ms, box-shadow 300ms",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 10,
                    }}
                  >
                    <FlaskConical size={20} color="#1a9988" />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#1a9988",
                      }}
                    >
                      {test.category.replace("_", " ")}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      color: "#0c1426",
                      marginBottom: 8,
                      textTransform: "none",
                    }}
                  >
                    {test.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#2c2c2c",
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    {test.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    <Clock size={14} color="#4f8298" />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "#4f8298",
                      }}
                    >
                      {test.turnaroundTime}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: "#e5745a",
                    }}
                  >
                    {formatPrice(test.price)}
                  </span>
                  <Button
                    onClick={() => {
                      setSelectedTest(test.id);
                      setFormStep("form");
                    }}
                    style={{
                      background: "#0c1426",
                      color: "white",
                      borderRadius: 8,
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontSize: 13,
                      padding: "10px 20px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 300ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = "#1a9988";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = "#0c1426";
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div style={{ textAlign: "center", padding: "4em 0" }}>
              <FlaskConical size={48} color="#c2c2c2" style={{ marginBottom: 16 }} />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "#c2c2c2",
                }}
              >
                No tests found matching your criteria.
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Booking Form */
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "3em 2.22em" }}>
          <button
            onClick={() => setFormStep("catalog")}
            style={{
              background: "none",
              border: "none",
              color: "#1a9988",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              cursor: "pointer",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← Back to catalog
          </button>

          <div
            style={{
              background: "white",
              borderRadius: 16,
              padding: "2.5em",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {selectedTestData && (
              <div
                style={{
                  background: "#f4f2ef",
                  borderRadius: 12,
                  padding: "1.25em",
                  marginBottom: "2em",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "#2c2c2c",
                      marginBottom: 4,
                    }}
                  >
                    Selected Test
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      color: "#0c1426",
                      textTransform: "none",
                    }}
                  >
                    {selectedTestData.name}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    color: "#e5745a",
                  }}
                >
                  {formatPrice(selectedTestData.price)}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: 20 }}>
                <div>
                  <Label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2c2c2c",
                      marginBottom: 6,
                      display: "block",
                    }}
                  >
                    Full Name *
                  </Label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: "1px solid #e0e0e0",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <Label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#2c2c2c",
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+234 ..."
                      required
                      style={{
                        padding: "12px 16px",
                        borderRadius: 8,
                        border: "1px solid #e0e0e0",
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                      }}
                    />
                  </div>
                  <div>
                    <Label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#2c2c2c",
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={{
                        padding: "12px 16px",
                        borderRadius: 8,
                        border: "1px solid #e0e0e0",
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2c2c2c",
                      marginBottom: 6,
                      display: "block",
                    }}
                  >
                    Preferred Date *
                  </Label>
                  <Input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: "1px solid #e0e0e0",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                    }}
                  />
                </div>

                <div>
                  <Label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2c2c2c",
                      marginBottom: 12,
                      display: "block",
                    }}
                  >
                    Service Type *
                  </Label>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      type="button"
                      onClick={() => setServiceType("lab_visit")}
                      style={{
                        flex: 1,
                        padding: "16px",
                        borderRadius: 12,
                        border:
                          serviceType === "lab_visit"
                            ? "2px solid #1a9988"
                            : "2px solid #e0e0e0",
                        background:
                          serviceType === "lab_visit" ? "#1a998810" : "white",
                        cursor: "pointer",
                        transition: "all 300ms",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <MapPin
                        size={24}
                        color={
                          serviceType === "lab_visit" ? "#1a9988" : "#c2c2c2"
                        }
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 14,
                          color:
                            serviceType === "lab_visit"
                              ? "#1a9988"
                              : "#2c2c2c",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Visit Lab
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType("home_collection")}
                      style={{
                        flex: 1,
                        padding: "16px",
                        borderRadius: 12,
                        border:
                          serviceType === "home_collection"
                            ? "2px solid #1a9988"
                            : "2px solid #e0e0e0",
                        background:
                          serviceType === "home_collection"
                            ? "#1a998810"
                            : "white",
                        cursor: "pointer",
                        transition: "all 300ms",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Home
                        size={24}
                        color={
                          serviceType === "home_collection"
                            ? "#1a9988"
                            : "#c2c2c2"
                        }
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 14,
                          color:
                            serviceType === "home_collection"
                              ? "#1a9988"
                              : "#2c2c2c",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Home Collection
                      </span>
                    </button>
                  </div>
                </div>

                {serviceType === "home_collection" && (
                  <div>
                    <Label
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#2c2c2c",
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      Address *
                    </Label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your full address"
                      required={serviceType === "home_collection"}
                      rows={3}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 8,
                        border: "1px solid #e0e0e0",
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={createBooking.isPending}
                  style={{
                    background: "#e5745a",
                    color: "white",
                    borderRadius: 8,
                    fontFamily: "var(--font-display)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: 16,
                    padding: "14px 32px",
                    border: "none",
                    cursor: "pointer",
                    marginTop: 8,
                    opacity: createBooking.isPending ? 0.7 : 1,
                  }}
                >
                  {createBooking.isPending
                    ? "Submitting..."
                    : "Confirm Booking"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
