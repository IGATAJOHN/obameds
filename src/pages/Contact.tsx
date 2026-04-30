import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you as soon as possible.");
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const contactInfo = [
    {
      icon: <Phone size={20} color="#1a9988" />,
      label: "Phone",
      value: "+234 801 234 5678",
      href: "tel:+2348012345678",
    },
    {
      icon: <Mail size={20} color="#1a9988" />,
      label: "Email",
      value: "info@intelligensys.ng",
      href: "mailto:info@intelligensys.ng",
    },
    {
      icon: <MapPin size={20} color="#1a9988" />,
      label: "Address",
      value: "Plot 42, Lugbe Expressway, Abuja",
      href: "#",
    },
    {
      icon: <Clock size={20} color="#1a9988" />,
      label: "Working Hours",
      value: "Mon - Sat: 7:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  const locations = [
    {
      name: "Lugbe Branch",
      address: "Plot 42, Lugbe Expressway, Federal Housing Estate, Lugbe, Abuja",
      phone: "+234 801 234 5678",
    },
    {
      name: "Jabi Branch",
      address: "Suite 15, Jabi Lake Mall, Jabi District, Abuja",
      phone: "+234 801 234 5679",
    },
  ];

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
            Contact Us
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
            Have questions? We're here to help. Reach out to us through any of
            the channels below.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section style={{ background: "white", padding: "4em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "4em",
              }}
            >
              {/* Contact Form */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "#0c1426",
                    marginBottom: "1.5em",
                  }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                        Full Name *
                      </Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          fontSize: 14,
                        }}
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
                        Email *
                      </Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          fontSize: 14,
                        }}
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
                        Phone
                      </Label>
                      <Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 ..."
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          fontSize: 14,
                        }}
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
                        Subject
                      </Label>
                      <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="How can we help?"
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          fontSize: 14,
                        }}
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
                        Message *
                      </Label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message..."
                        rows={5}
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
                    <Button
                      type="submit"
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      <Send size={16} />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "#0c1426",
                    marginBottom: "1.5em",
                  }}
                >
                  Get in Touch
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {contactInfo.map((info, i) => (
                    <a
                      key={i}
                      href={info.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: "#f4f2ef",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 12,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "#2c2c2c",
                            marginBottom: 2,
                          }}
                        >
                          {info.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 15,
                            color: "#0c1426",
                          }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/2348012345678?text=Hello%20Intelligensys!%20I%20would%20like%20to%20discuss%20a%20partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 32,
                    padding: "14px 24px",
                    background: "#25D366",
                    color: "white",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    transition: "opacity 300ms",
                  }}
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Locations */}
      <section style={{ background: "#f4f2ef", padding: "4em 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2.22em" }}>
          <ScrollSection>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#0c1426",
                marginBottom: "1.5em",
                textAlign: "center",
              }}
            >
              Our Locations
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2em",
              }}
            >
              {locations.map((loc, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "2em",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <MapPin size={20} color="#e5745a" />
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                        color: "#0c1426",
                      }}
                    >
                      {loc.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#2c2c2c",
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {loc.address}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#1a9988",
                      fontWeight: 600,
                    }}
                  >
                    {loc.phone}
                  </p>
                </div>
              ))}
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Map Embed */}
      <section style={{ height: 400, background: "#e0e0e0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d7.3956!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjguNCJOIDfCsDIzJzQ0LjIiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Intelligensys Headquarters"
        />
      </section>
    </div>
  );
}
