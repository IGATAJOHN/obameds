import { useState } from "react";
import { useNavigate } from "react-router";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  FlaskConical,
  CalendarCheck,
  Settings,
  BarChart3,
  Plus,
  Edit3,
  Trash2,
  X,
  Search,
  LogOut,
  MessageSquare,
  Star,
} from "lucide-react";

type AdminTab = "dashboard" | "tests" | "bookings" | "testimonials" | "settings";

const categoryOptions = [
  { value: "blood", label: "Blood Tests" },
  { value: "urine", label: "Urine Tests" },
  { value: "health_package", label: "Health Packages" },
  { value: "specialized", label: "Specialized" },
  { value: "hormonal", label: "Hormonal" },
  { value: "genetic", label: "Genetic" },
];

const statusColors: Record<string, string> = {
  pending: "#e5745a",
  confirmed: "#1a9988",
  completed: "#4f8298",
  cancelled: "#a1364c",
};

export default function Admin() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal states
  const [showTestModal, setShowTestModal] = useState(false);
  const [editingTest, setEditingTest] = useState<number | null>(null);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<number | null>(null);

  // Form states
  const [testName, setTestName] = useState("");
  const [testCategory, setTestCategory] = useState("blood");
  const [testDescription, setTestDescription] = useState("");
  const [testPrice, setTestPrice] = useState("");
  const [testTurnaround, setTestTurnaround] = useState("");
  const [testActive, setTestActive] = useState(true);

  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialLocation, setTestimonialLocation] = useState("");
  const [testimonialQuote, setTestimonialQuote] = useState("");
  const [testimonialRating, setTestimonialRating] = useState(5);

  // Settings form
  const [settingsPhone, setSettingsPhone] = useState("+234 801 234 5678");
  const [settingsEmail, setSettingsEmail] = useState("info@obameds.ng");
  const [settingsWhatsApp, setSettingsWhatsApp] = useState("+234 801 234 5678");
  const [settingsHours, setSettingsHours] = useState("Mon - Sat: 7:00 AM - 6:00 PM");

  const utils = trpc.useUtils();
  const { data: allTests } = trpc.test.list.useQuery();
  const { data: allBookings } = trpc.booking.list.useQuery();
  const { data: bookingStats } = trpc.booking.stats.useQuery();
  const { data: allTestimonials } = trpc.testimonial.listAll.useQuery();

  const createTest = trpc.test.create.useMutation({
    onSuccess: () => {
      utils.test.list.invalidate();
      toast.success("Test created successfully!");
      closeTestModal();
    },
  });

  const updateTest = trpc.test.update.useMutation({
    onSuccess: () => {
      utils.test.list.invalidate();
      toast.success("Test updated successfully!");
      closeTestModal();
    },
  });

  const deleteTest = trpc.test.delete.useMutation({
    onSuccess: () => {
      utils.test.list.invalidate();
      toast.success("Test deleted!");
    },
  });

  const updateBookingStatus = trpc.booking.updateStatus.useMutation({
    onSuccess: () => {
      utils.booking.list.invalidate();
      utils.booking.stats.invalidate();
      toast.success("Booking status updated!");
    },
  });

  const createTestimonial = trpc.testimonial.create.useMutation({
    onSuccess: () => {
      utils.testimonial.listAll.invalidate();
      toast.success("Testimonial created!");
      closeTestimonialModal();
    },
  });

  const updateTestimonial = trpc.testimonial.update.useMutation({
    onSuccess: () => {
      utils.testimonial.listAll.invalidate();
      toast.success("Testimonial updated!");
      closeTestimonialModal();
    },
  });

  const deleteTestimonial = trpc.testimonial.delete.useMutation({
    onSuccess: () => {
      utils.testimonial.listAll.invalidate();
      toast.success("Testimonial deleted!");
    },
  });

  const updateSettings = trpc.settings.bulkUpdate.useMutation({
    onSuccess: () => {
      utils.settings.list.invalidate();
      toast.success("Settings saved!");
    },
  });

  // Redirect non-admin users
  if (user && user.role !== "admin") {
    navigate("/");
    return null;
  }

  const openTestModal = (test?: { id: number; name: string; category: string; description: string; price: string; turnaroundTime: string; isActive: boolean }) => {
    if (test) {
      setEditingTest(test.id);
      setTestName(test.name);
      setTestCategory(test.category);
      setTestDescription(test.description);
      setTestPrice(test.price);
      setTestTurnaround(test.turnaroundTime);
      setTestActive(test.isActive);
    } else {
      setEditingTest(null);
      setTestName("");
      setTestCategory("blood");
      setTestDescription("");
      setTestPrice("");
      setTestTurnaround("");
      setTestActive(true);
    }
    setShowTestModal(true);
  };

  const closeTestModal = () => {
    setShowTestModal(false);
    setEditingTest(null);
  };

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTest) {
      updateTest.mutate({
        id: editingTest,
        name: testName,
        category: testCategory as "blood" | "urine" | "health_package" | "specialized" | "hormonal" | "genetic",
        description: testDescription,
        price: testPrice,
        turnaroundTime: testTurnaround,
        isActive: testActive,
      });
    } else {
      createTest.mutate({
        name: testName,
        category: testCategory as "blood" | "urine" | "health_package" | "specialized" | "hormonal" | "genetic",
        description: testDescription,
        price: testPrice,
        turnaroundTime: testTurnaround,
        isActive: testActive,
      });
    }
  };

  const openTestimonialModal = (t?: { id: number; name: string; location: string; quote: string; rating: number }) => {
    if (t) {
      setEditingTestimonial(t.id);
      setTestimonialName(t.name);
      setTestimonialLocation(t.location);
      setTestimonialQuote(t.quote);
      setTestimonialRating(t.rating);
    } else {
      setEditingTestimonial(null);
      setTestimonialName("");
      setTestimonialLocation("");
      setTestimonialQuote("");
      setTestimonialRating(5);
    }
    setShowTestimonialModal(true);
  };

  const closeTestimonialModal = () => {
    setShowTestimonialModal(false);
    setEditingTestimonial(null);
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonial) {
      updateTestimonial.mutate({
        id: editingTestimonial,
        name: testimonialName,
        location: testimonialLocation,
        quote: testimonialQuote,
        rating: testimonialRating,
      });
    } else {
      createTestimonial.mutate({
        name: testimonialName,
        location: testimonialLocation,
        quote: testimonialQuote,
        rating: testimonialRating,
      });
    }
  };

  const handleSaveSettings = () => {
    updateSettings.mutate([
      { key: "phone", value: settingsPhone },
      { key: "email", value: settingsEmail },
      { key: "whatsapp", value: settingsWhatsApp },
      { key: "working_hours", value: settingsHours },
    ]);
  };

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

  const filteredTests = (allTests ?? []).filter(
    (t) =>
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBookings = (allBookings ?? []).filter(
    (b) =>
      !searchQuery ||
      b.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phoneNumber.includes(searchQuery)
  );

  const tabs: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart3 size={18} /> },
    { id: "tests", label: "Tests", icon: <FlaskConical size={18} /> },
    { id: "bookings", label: "Bookings", icon: <CalendarCheck size={18} /> },
    { id: "testimonials", label: "Testimonials", icon: <MessageSquare size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div style={{ paddingTop: 72, minHeight: "100vh", background: "#f4f2ef" }}>
      <div style={{ display: "flex", minHeight: "calc(100vh - 72px)" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 260,
            background: "#0c1426",
            padding: "2em 0",
            flexShrink: 0,
          }}
          className="hidden lg:block"
        >
          <div style={{ padding: "0 1.5em", marginBottom: "2em" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Admin Panel
            </p>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 1.5em",
                  background:
                    activeTab === tab.id
                      ? "rgba(26, 153, 136, 0.2)"
                      : "transparent",
                  color:
                    activeTab === tab.id ? "#1a9988" : "rgba(255,255,255,0.7)",
                  border: "none",
                  borderLeft:
                    activeTab === tab.id
                      ? "3px solid #1a9988"
                      : "3px solid transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 200ms",
                  textAlign: "left",
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
          <div style={{ padding: "2em 1.5em", marginTop: "auto" }}>
            <button
              onClick={() => logout()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,0.5)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: 13,
              }}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </aside>

        {/* Mobile Tab Select */}
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            background: "white",
            padding: "8px 16px",
            zIndex: 50,
            borderBottom: "1px solid #e0e0e0",
            overflowX: "auto",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: "none",
                  background: activeTab === tab.id ? "#0c1426" : "#f4f2ef",
                  color: activeTab === tab.id ? "white" : "#2c2c2c",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "2em",
            overflowY: "auto",
            marginTop: "48px",
          }}
          className="lg:mt-0"
        >
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  color: "#0c1426",
                  marginBottom: "1.5em",
                }}
              >
                Dashboard
              </h1>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1em",
                  marginBottom: "2em",
                }}
              >
                {[
                  {
                    label: "Total Bookings",
                    value: bookingStats?.total ?? 0,
                    color: "#0c1426",
                  },
                  {
                    label: "Pending",
                    value: bookingStats?.pending ?? 0,
                    color: "#e5745a",
                  },
                  {
                    label: "Confirmed",
                    value: bookingStats?.confirmed ?? 0,
                    color: "#1a9988",
                  },
                  {
                    label: "Completed",
                    value: bookingStats?.completed ?? 0,
                    color: "#4f8298",
                  },
                  {
                    label: "Total Tests",
                    value: allTests?.length ?? 0,
                    color: "#2c2c2c",
                  },
                  {
                    label: "Testimonials",
                    value: allTestimonials?.length ?? 0,
                    color: "#e5745a",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 12,
                      padding: "1.5em",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 32,
                        color: stat.color,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "#2c2c2c",
                        marginTop: 8,
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Bookings */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  color: "#0c1426",
                  marginBottom: "1em",
                }}
              >
                Recent Bookings
              </h2>
              <div
                style={{
                  background: "white",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f4f2ef" }}>
                      {["Name", "Phone", "Date", "Type", "Status"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              padding: "12px 16px",
                              textAlign: "left",
                              fontFamily: "var(--font-body)",
                              fontSize: 12,
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#2c2c2c",
                            }}
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {(allBookings ?? []).slice(0, 5).map((b) => (
                      <tr
                        key={b.id}
                        style={{ borderBottom: "1px solid #f0f0f0" }}
                      >
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 14,
                            color: "#0c1426",
                          }}
                        >
                          {b.fullName}
                        </td>
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 14,
                            color: "#2c2c2c",
                          }}
                        >
                          {b.phoneNumber}
                        </td>
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 14,
                            color: "#2c2c2c",
                          }}
                        >
                          {b.preferredDate}
                        </td>
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 13,
                            color: "#2c2c2c",
                          }}
                        >
                          {b.serviceType === "home_collection"
                            ? "Home"
                            : "Lab"}
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <span
                            style={{
                              padding: "4px 12px",
                              borderRadius: 20,
                              fontSize: 12,
                              fontWeight: 600,
                              fontFamily: "var(--font-body)",
                              background:
                                (statusColors[b.status] ?? "#ccc") + "20",
                              color: statusColors[b.status] ?? "#ccc",
                            }}
                          >
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {(allBookings ?? []).length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          style={{
                            padding: "2em",
                            textAlign: "center",
                            color: "#c2c2c2",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          No bookings yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tests */}
          {activeTab === "tests" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5em",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "#0c1426",
                  }}
                >
                  Test Catalog
                </h1>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ position: "relative" }}>
                    <Search
                      size={16}
                      color="#c2c2c2"
                      style={{
                        position: "absolute",
                        left: 10,
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
                        padding: "8px 12px 8px 32px",
                        borderRadius: 6,
                        border: "1px solid #e0e0e0",
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        outline: "none",
                        width: 200,
                      }}
                    />
                  </div>
                  <Button
                    onClick={() => openTestModal()}
                    style={{
                      background: "#1a9988",
                      color: "white",
                      borderRadius: 6,
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontSize: 13,
                      padding: "8px 16px",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Plus size={16} />
                    Add Test
                  </Button>
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f4f2ef" }}>
                      {["Name", "Category", "Price", "Turnaround", "Status", ""].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              padding: "12px 16px",
                              textAlign: "left",
                              fontFamily: "var(--font-body)",
                              fontSize: 12,
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#2c2c2c",
                            }}
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTests.map((test) => (
                      <tr
                        key={test.id}
                        style={{ borderBottom: "1px solid #f0f0f0" }}
                      >
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 14,
                            color: "#0c1426",
                            fontWeight: 500,
                          }}
                        >
                          {test.name}
                        </td>
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 13,
                            color: "#2c2c2c",
                          }}
                        >
                          {test.category}
                        </td>
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-display)",
                            fontSize: 15,
                            color: "#e5745a",
                          }}
                        >
                          {formatPrice(test.price)}
                        </td>
                        <td
                          style={{
                            padding: "12px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: 13,
                            color: "#2c2c2c",
                          }}
                        >
                          {test.turnaroundTime}
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <span
                            style={{
                              padding: "4px 12px",
                              borderRadius: 20,
                              fontSize: 11,
                              fontWeight: 600,
                              fontFamily: "var(--font-body)",
                              background: test.isActive
                                ? "#1a998820"
                                : "#a1364c20",
                              color: test.isActive ? "#1a9988" : "#a1364c",
                            }}
                          >
                            {test.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <div style={{ display: "flex", gap: 8 }}>
                            <button
                              onClick={() => openTestModal(test)}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 4,
                                color: "#4f8298",
                              }}
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              onClick={() => {
                                if (
                                  confirm(
                                    "Are you sure you want to delete this test?"
                                  )
                                ) {
                                  deleteTest.mutate({ id: test.id });
                                }
                              }}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 4,
                                color: "#a1364c",
                              }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Bookings */}
          {activeTab === "bookings" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5em",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "#0c1426",
                  }}
                >
                  Bookings
                </h1>
                <div style={{ position: "relative" }}>
                  <Search
                    size={16}
                    color="#c2c2c2"
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      padding: "8px 12px 8px 32px",
                      borderRadius: 6,
                      border: "1px solid #e0e0e0",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      outline: "none",
                      width: 220,
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: 700,
                    }}
                  >
                    <thead>
                      <tr style={{ background: "#f4f2ef" }}>
                        {[
                          "Name",
                          "Phone",
                          "Email",
                          "Date",
                          "Type",
                          "Status",
                          "",
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "12px 16px",
                              textAlign: "left",
                              fontFamily: "var(--font-body)",
                              fontSize: 12,
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#2c2c2c",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBookings.map((b) => (
                        <tr
                          key={b.id}
                          style={{ borderBottom: "1px solid #f0f0f0" }}
                        >
                          <td
                            style={{
                              padding: "12px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: 14,
                              color: "#0c1426",
                              fontWeight: 500,
                            }}
                          >
                            {b.fullName}
                          </td>
                          <td
                            style={{
                              padding: "12px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: 13,
                              color: "#2c2c2c",
                            }}
                          >
                            {b.phoneNumber}
                          </td>
                          <td
                            style={{
                              padding: "12px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: 13,
                              color: "#2c2c2c",
                            }}
                          >
                            {b.email ?? "—"}
                          </td>
                          <td
                            style={{
                              padding: "12px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: 13,
                              color: "#2c2c2c",
                            }}
                          >
                            {b.preferredDate}
                          </td>
                          <td
                            style={{
                              padding: "12px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: 12,
                              color: "#2c2c2c",
                            }}
                          >
                            {b.serviceType === "home_collection"
                              ? "Home"
                              : "Lab"}
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <select
                              value={b.status}
                              onChange={(e) =>
                                updateBookingStatus.mutate({
                                  id: b.id,
                                  status: e.target.value as typeof b.status,
                                })
                              }
                              style={{
                                padding: "4px 12px",
                                borderRadius: 20,
                                fontSize: 11,
                                fontWeight: 600,
                                fontFamily: "var(--font-body)",
                                border: "none",
                                background:
                                  (statusColors[b.status] ?? "#ccc") + "20",
                                color: statusColors[b.status] ?? "#ccc",
                                cursor: "pointer",
                              }}
                            >
                              {["pending", "confirmed", "completed", "cancelled"].map(
                                (s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                )
                              )}
                            </select>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            {b.address && (
                              <span
                                title={b.address}
                                style={{
                                  fontSize: 11,
                                  color: "#4f8298",
                                  cursor: "help",
                                }}
                              >
                                📍
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Testimonials */}
          {activeTab === "testimonials" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5em",
                }}
              >
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "#0c1426",
                  }}
                >
                  Testimonials
                </h1>
                <Button
                  onClick={() => openTestimonialModal()}
                  style={{
                    background: "#1a9988",
                    color: "white",
                    borderRadius: 6,
                    fontFamily: "var(--font-display)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontSize: 13,
                    padding: "8px 16px",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Plus size={16} />
                  Add Testimonial
                </Button>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1em",
                }}
              >
                {(allTestimonials ?? []).map((t) => (
                  <div
                    key={t.id}
                    style={{
                      background: "white",
                      borderRadius: 12,
                      padding: "1.5em",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 12,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 16,
                            color: "#0c1426",
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 13,
                            color: "#2c2c2c",
                          }}
                        >
                          {t.location}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button
                          onClick={() => openTestimonialModal(t)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#4f8298",
                          }}
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm("Delete this testimonial?")) {
                              deleteTestimonial.mutate({ id: t.id });
                            }
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#a1364c",
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "#2c2c2c",
                        lineHeight: 1.6,
                        marginBottom: 8,
                      }}
                    >
                      "{t.quote}"
                    </p>
                    <div style={{ display: "flex", gap: 4 }}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          color="#e5745a"
                          fill="#e5745a"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  color: "#0c1426",
                  marginBottom: "1.5em",
                }}
              >
                Settings
              </h1>
              <div
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: "2em",
                  maxWidth: 600,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div>
                    <Label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#2c2c2c",
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      Phone Number
                    </Label>
                    <Input
                      value={settingsPhone}
                      onChange={(e) => setSettingsPhone(e.target.value)}
                      style={{ padding: "10px 14px", fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <Label
                      style={{
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
                      value={settingsEmail}
                      onChange={(e) => setSettingsEmail(e.target.value)}
                      style={{ padding: "10px 14px", fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <Label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#2c2c2c",
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      WhatsApp Number
                    </Label>
                    <Input
                      value={settingsWhatsApp}
                      onChange={(e) => setSettingsWhatsApp(e.target.value)}
                      style={{ padding: "10px 14px", fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <Label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#2c2c2c",
                        marginBottom: 6,
                        display: "block",
                      }}
                    >
                      Working Hours
                    </Label>
                    <Input
                      value={settingsHours}
                      onChange={(e) => setSettingsHours(e.target.value)}
                      style={{ padding: "10px 14px", fontSize: 14 }}
                    />
                  </div>
                  <Button
                    onClick={handleSaveSettings}
                    disabled={updateSettings.isPending}
                    style={{
                      background: "#1a9988",
                      color: "white",
                      borderRadius: 6,
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontSize: 14,
                      padding: "12px 24px",
                      border: "none",
                      cursor: "pointer",
                      marginTop: 8,
                    }}
                  >
                    {updateSettings.isPending ? "Saving..." : "Save Settings"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Test Modal */}
      {showTestModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 16,
              padding: "2em",
              maxWidth: 500,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5em",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  color: "#0c1426",
                }}
              >
                {editingTest ? "Edit Test" : "Add New Test"}
              </h2>
              <button
                onClick={closeTestModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#2c2c2c",
                }}
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleTestSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Test Name *
                  </Label>
                  <Input
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    required
                    style={{ padding: "10px 14px", fontSize: 14 }}
                  />
                </div>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Category *
                  </Label>
                  <select
                    value={testCategory}
                    onChange={(e) => setTestCategory(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e0e0e0",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      outline: "none",
                    }}
                  >
                    {categoryOptions.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Description *
                  </Label>
                  <textarea
                    value={testDescription}
                    onChange={(e) => setTestDescription(e.target.value)}
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e0e0e0",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                      Price (NGN) *
                    </Label>
                    <Input
                      value={testPrice}
                      onChange={(e) => setTestPrice(e.target.value)}
                      placeholder="5000.00"
                      required
                      style={{ padding: "10px 14px", fontSize: 14 }}
                    />
                  </div>
                  <div>
                    <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                      Turnaround *
                    </Label>
                    <Input
                      value={testTurnaround}
                      onChange={(e) => setTestTurnaround(e.target.value)}
                      placeholder="24 hours"
                      required
                      style={{ padding: "10px 14px", fontSize: 14 }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="checkbox"
                    checked={testActive}
                    onChange={(e) => setTestActive(e.target.checked)}
                    id="testActive"
                  />
                  <Label htmlFor="testActive" style={{ fontSize: 13, margin: 0 }}>
                    Active
                  </Label>
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                  <Button
                    type="button"
                    onClick={closeTestModal}
                    variant="outline"
                    style={{ flex: 1, padding: "10px", fontSize: 14 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={createTest.isPending || updateTest.isPending}
                    style={{
                      flex: 1,
                      background: "#1a9988",
                      color: "white",
                      padding: "10px",
                      fontSize: 14,
                    }}
                  >
                    {createTest.isPending || updateTest.isPending
                      ? "Saving..."
                      : editingTest
                      ? "Update"
                      : "Create"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Testimonial Modal */}
      {showTestimonialModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 16,
              padding: "2em",
              maxWidth: 500,
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5em",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  color: "#0c1426",
                }}
              >
                {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
              </h2>
              <button
                onClick={closeTestimonialModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#2c2c2c",
                }}
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleTestimonialSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Name *
                  </Label>
                  <Input
                    value={testimonialName}
                    onChange={(e) => setTestimonialName(e.target.value)}
                    required
                    style={{ padding: "10px 14px", fontSize: 14 }}
                  />
                </div>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Location *
                  </Label>
                  <Input
                    value={testimonialLocation}
                    onChange={(e) => setTestimonialLocation(e.target.value)}
                    required
                    placeholder="e.g. Lagos"
                    style={{ padding: "10px 14px", fontSize: 14 }}
                  />
                </div>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Quote *
                  </Label>
                  <textarea
                    value={testimonialQuote}
                    onChange={(e) => setTestimonialQuote(e.target.value)}
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e0e0e0",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>
                <div>
                  <Label style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, display: "block" }}>
                    Rating
                  </Label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[1, 2, 3, 4, 5].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setTestimonialRating(r)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 4,
                        }}
                      >
                        <Star
                          size={24}
                          color={r <= testimonialRating ? "#e5745a" : "#e0e0e0"}
                          fill={r <= testimonialRating ? "#e5745a" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                  <Button
                    type="button"
                    onClick={closeTestimonialModal}
                    variant="outline"
                    style={{ flex: 1, padding: "10px", fontSize: 14 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={createTestimonial.isPending || updateTestimonial.isPending}
                    style={{
                      flex: 1,
                      background: "#1a9988",
                      color: "white",
                      padding: "10px",
                      fontSize: 14,
                    }}
                  >
                    {createTestimonial.isPending || updateTestimonial.isPending
                      ? "Saving..."
                      : editingTestimonial
                      ? "Update"
                      : "Create"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
