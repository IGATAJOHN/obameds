import { getDb } from "../server/queries/connection";
import { tests, testimonials, settings } from "./schema";

async function seed() {
  const db = getDb();
  console.log("Seeding database...");

  // Seed tests
  const existingTests = await db.select().from(tests);
  if (existingTests.length === 0) {
    await db.insert(tests).values([
      {
        name: "Complete Blood Count (CBC)",
        category: "blood",
        description:
          "A comprehensive blood test that evaluates overall health and detects disorders such as anemia, infection, and leukemia.",
        price: "8500.00",
        turnaroundTime: "24 hours",
        isActive: true,
      },
      {
        name: "Lipid Profile",
        category: "blood",
        description:
          "Measures cholesterol levels including HDL, LDL, and triglycerides to assess cardiovascular risk.",
        price: "12000.00",
        turnaroundTime: "24 hours",
        isActive: true,
      },
      {
        name: "Blood Glucose (Fasting)",
        category: "blood",
        description:
          "Measures blood sugar levels after fasting to screen for diabetes and monitor glucose control.",
        price: "5500.00",
        turnaroundTime: "Same day",
        isActive: true,
      },
      {
        name: "Liver Function Test",
        category: "blood",
        description:
          "Assesses liver health by measuring enzymes, proteins, and bilirubin in the blood.",
        price: "15000.00",
        turnaroundTime: "24 hours",
        isActive: true,
      },
      {
        name: "Kidney Function Test",
        category: "blood",
        description:
          "Evaluates kidney function through creatinine, BUN, and electrolyte measurements.",
        price: "14000.00",
        turnaroundTime: "24 hours",
        isActive: true,
      },
      {
        name: "Thyroid Function Test (T3, T4, TSH)",
        category: "hormonal",
        description:
          "Comprehensive thyroid panel to diagnose hypothyroidism, hyperthyroidism, and monitor treatment.",
        price: "18000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "Urinalysis (Complete)",
        category: "urine",
        description:
          "Full urine analysis including physical, chemical, and microscopic examination for urinary tract and kidney conditions.",
        price: "6500.00",
        turnaroundTime: "Same day",
        isActive: true,
      },
      {
        name: "Urine Culture & Sensitivity",
        category: "urine",
        description:
          "Identifies bacteria causing urinary tract infections and determines effective antibiotics.",
        price: "11000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "Executive Health Package",
        category: "health_package",
        description:
          "Comprehensive wellness screening including CBC, lipid profile, liver & kidney function, glucose, urinalysis, and ECG.",
        price: "55000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "Women's Wellness Package",
        category: "health_package",
        description:
          "Tailored screening for women including hormonal profile, CBC, vitamin D, thyroid, and pap smear.",
        price: "48000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "Men's Health Package",
        category: "health_package",
        description:
          "Comprehensive men's health screening including PSA, testosterone, CBC, lipid profile, and liver function.",
        price: "45000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "HIV Screening (Rapid)",
        category: "specialized",
        description:
          "Confidential HIV antibody test with same-day results and pre/post-test counseling.",
        price: "3500.00",
        turnaroundTime: "Same day",
        isActive: true,
      },
      {
        name: "Hepatitis B & C Screening",
        category: "specialized",
        description:
          "Detects Hepatitis B surface antigen and Hepatitis C antibodies for early detection.",
        price: "9000.00",
        turnaroundTime: "24 hours",
        isActive: true,
      },
      {
        name: "Malaria Parasite Test",
        category: "specialized",
        description:
          "Rapid diagnostic test and microscopic examination for malaria parasites.",
        price: "4000.00",
        turnaroundTime: "Same day",
        isActive: true,
      },
      {
        name: "Fertility Hormone Panel",
        category: "hormonal",
        description:
          "Comprehensive fertility assessment including FSH, LH, prolactin, estradiol, and progesterone.",
        price: "25000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "Vitamin D & B12 Panel",
        category: "specialized",
        description:
          "Measures essential vitamin levels to detect deficiencies affecting energy, immunity, and bone health.",
        price: "16000.00",
        turnaroundTime: "48 hours",
        isActive: true,
      },
      {
        name: "Genetic Carrier Screening",
        category: "genetic",
        description:
          "Screens for common genetic conditions including sickle cell trait, thalassemia, and cystic fibrosis.",
        price: "75000.00",
        turnaroundTime: "7-14 days",
        isActive: true,
      },
      {
        name: "COVID-19 PCR Test",
        category: "specialized",
        description:
          "Gold-standard PCR test for COVID-19 detection with high accuracy.",
        price: "25000.00",
        turnaroundTime: "24 hours",
        isActive: true,
      },
    ]);
    console.log("Seeded 18 tests");
  } else {
    console.log("Tests already seeded");
  }

  // Seed testimonials
  const existingTestimonials = await db.select().from(testimonials);
  if (existingTestimonials.length === 0) {
    await db.insert(testimonials).values([
      {
        name: "Chinedu O.",
        location: "Lagos",
        quote:
          "Oba-Meds made getting my blood work done so easy. The home collection service is a game-changer! The nurse was professional and I got my results the next day.",
        rating: 5,
        isActive: true,
      },
      {
        name: "Amaka N.",
        location: "Abuja",
        quote:
          "Quick results and professional staff. I recommend them to all my friends and family. Their online booking system is seamless too!",
        rating: 5,
        isActive: true,
      },
      {
        name: "Tunde K.",
        location: "Port Harcourt",
        quote:
          "Their online booking system is seamless. I booked my test in under 2 minutes. The lab is clean and the staff are very courteous.",
        rating: 5,
        isActive: true,
      },
      {
        name: "Fatima A.",
        location: "Kano",
        quote:
          "I was worried about accuracy but Oba-Meds delivered precise results. Their doctors explained everything clearly. Highly recommended!",
        rating: 5,
        isActive: true,
      },
      {
        name: "Emeka J.",
        location: "Enugu",
        quote:
          "The executive health package was thorough and well worth the price. I now have a clear picture of my health status.",
        rating: 4,
        isActive: true,
      },
      {
        name: "Ngozi M.",
        location: "Lagos",
        quote:
          "As a busy professional, the home sample collection service saves me so much time. Professional, fast, and reliable every single time.",
        rating: 5,
        isActive: true,
      },
    ]);
    console.log("Seeded 6 testimonials");
  } else {
    console.log("Testimonials already seeded");
  }

  // Seed settings
  const existingSettings = await db.select().from(settings);
  if (existingSettings.length === 0) {
    await db.insert(settings).values([
      {
        key: "phone",
        value: "+234 801 234 5678",
      },
      {
        key: "email",
        value: "info@obameds.ng",
      },
      {
        key: "whatsapp",
        value: "+234 801 234 5678",
      },
      {
        key: "address_lugbe",
        value:
          "Plot 42, Lugbe Expressway, Federal Housing Estate, Lugbe, Abuja",
      },
      {
        key: "address_jabi",
        value: "Suite 15, Jabi Lake Mall, Jabi District, Abuja",
      },
      {
        key: "working_hours",
        value: "Mon - Sat: 7:00 AM - 6:00 PM",
      },
      {
        key: "company_name",
        value: "Oba-Meds Laboratory",
      },
      {
        key: "company_tagline",
        value: "Accurate Diagnostics for Better Health",
      },
    ]);
    console.log("Seeded 8 settings");
  } else {
    console.log("Settings already seeded");
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
