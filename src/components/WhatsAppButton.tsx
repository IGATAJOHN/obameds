import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "2348012345678";
  const message = encodeURIComponent(
    "Hello Oba-Meds! I'd like to book a medical test."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        zIndex: 90,
        cursor: "pointer",
        transition: "transform 300ms, box-shadow 300ms",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 6px 30px rgba(37, 211, 102, 0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(37, 211, 102, 0.4)";
      }}
    >
      <MessageCircle size={28} color="white" fill="white" />
    </a>
  );
}
