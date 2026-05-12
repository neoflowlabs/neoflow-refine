export type Project = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  videoUrl?: string;
  longDesc?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "whatsapp-booking-automation",
    tag: "Automation",
    title: "WhatsApp Booking Automation",
    desc: "Automated booking flows over WhatsApp — confirmations, reminders, and rescheduling without a human in the loop.",
    chips: ["WhatsApp API", "Automation"],
    videoUrl: "/videos/whatsapp-booking-automation.mp4",
    longDesc:
      "An end-to-end WhatsApp bot that takes bookings, sends confirmations, handles reminders, and lets customers reschedule — all without staff intervention.",
  },
  {
    slug: "clinic-management-system",
    tag: "Healthcare",
    title: "Clinic Management System",
    desc: "Patient records, appointments, prescriptions, and billing built for small-to-mid clinics.",
    chips: ["EHR-lite", "Scheduling"],
    videoUrl: "/videos/clinic-management-system.mp4",
    longDesc:
      "A full clinic operations suite — patient records, appointment scheduling, prescriptions, and billing — designed for the day-to-day workflow of a busy practice.",
  },
  {
    slug: "automated-booking-website",
    tag: "Web & Booking",
    title: "Automated Booking System with Website",
    desc: "Custom website paired with an end-to-end booking engine and an owner dashboard for full visibility.",
    chips: ["Website", "Booking", "Dashboard"],
    videoUrl: "/videos/automated-booking-website.mp4",
    longDesc:
      "A branded website with an integrated booking engine and an owner dashboard — bookings, customers, and revenue all in one place.",
  },
  {
    slug: "pos-system",
    tag: "Retail & F&B",
    title: "POS System",
    desc: "Point-of-sale built for real counters — fast checkout, kitchen display routing, modifiers, and sales analytics.",
    chips: ["POS", "KDS", "Analytics"],
    longDesc:
      "A counter-grade POS with kitchen display routing, modifiers, split bills, and live sales analytics for owners.",
  },
  {
    slug: "learning-management-system",
    tag: "Education",
    title: "Learning Management Systems",
    desc: "Course delivery, quizzes, and progress tracking for institutes scaling their teaching online.",
    chips: ["LMS", "Assessments"],
    longDesc:
      "A course platform for institutes — lessons, quizzes, assessments, and progress tracking for every student.",
  },
];

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);