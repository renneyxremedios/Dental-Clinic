/**
 * Central site configuration. Edit values here to update every page.
 * Replace placeholder data with real clinic information before going live.
 */
export const site = {
  name: "Bright Smile Dental",
  shortName: "Bright Smile",
  tagline: "Advanced dental care for the whole family.",
  description:
    "Bright Smile Dental offers gentle, modern dentistry in a welcoming environment. Book cleanings, implants, whitening, orthodontics, and emergency care online.",
  url: "https://example.com",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@clinic.dental",
  emailHref: "mailto:hello@clinic.dental",
  address: {
    line1: "123 Dental Street",
    line2: "City, State 12345",
  },
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday",  time: "9:00 AM – 2:00 PM" },
    { day: "Sunday",    time: "Closed" },
  ],
  social: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter:   "https://twitter.com/",
  },
  map: {
    lat: 40.7128,
    lng: -74.0060,
    zoom: 15,
  },
  formspreeId: "xyzabcde",
} as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "sparkles" | "shield" | "sun" | "crown" | "tooth" | "smile" | "align" | "alert";
};

export const services: Service[] = [
  { slug: "cleaning",    title: "Professional Cleaning",   icon: "sparkles", description: "Gentle scaling and polishing to remove plaque, tartar, and surface stains." },
  { slug: "implants",    title: "Dental Implants",         icon: "shield",   description: "Permanent, natural-looking tooth replacements that restore full function." },
  { slug: "whitening",   title: "Teeth Whitening",         icon: "sun",      description: "In-office and take-home whitening for a noticeably brighter, confident smile." },
  { slug: "crowns",      title: "Crowns & Bridges",        icon: "crown",    description: "Custom-crafted restorations that protect damaged teeth and fill gaps." },
  { slug: "root-canal",  title: "Root Canal Therapy",      icon: "tooth",    description: "Painless, modern endodontic treatment to save infected teeth." },
  { slug: "veneers",     title: "Porcelain Veneers",       icon: "smile",    description: "Ultra-thin shells designed to create a flawless, camera-ready smile." },
  { slug: "braces",      title: "Braces & Aligners",       icon: "align",    description: "Straighten your teeth with traditional braces or clear aligner therapy." },
  { slug: "emergency",   title: "Emergency Dentistry",     icon: "alert",    description: "Same-day care for toothaches, broken teeth, and urgent dental needs." },
];

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  photo: string;
};

export const doctors: Doctor[] = [
  {
    slug: "sarah-smith",
    name: "Dr. Sarah Smith",
    specialty: "General Dentist",
    bio: "Gentle, thorough care for patients of all ages. Focus on preventive dentistry and long-term oral health.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=faces&q=80",
  },
  {
    slug: "james-lee",
    name: "Dr. James Lee",
    specialty: "Orthodontist",
    bio: "Specialist in braces and clear aligners. Dedicated to creating healthy, perfectly aligned smiles.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop&crop=faces&q=80",
  },
  {
    slug: "anna-chen",
    name: "Dr. Anna Chen",
    specialty: "Pediatric Dentist",
    bio: "Making dental visits fun and fear-free for children. Gentle, patient, and great with kids.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop&crop=faces&q=80",
  },
  {
    slug: "michael-ross",
    name: "Dr. Michael Ross",
    specialty: "Oral Surgeon",
    bio: "Board-certified oral surgeon with expertise in implants, extractions, and reconstructive procedures.",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop&crop=faces&q=80",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The best dental experience I've ever had. The team is professional, friendly, and truly cares about your comfort.",
    author: "Maria G.",
    role: "Patient since 2021",
  },
  {
    quote: "Dr. Smith explained every step of my implant procedure. The results exceeded my expectations. Highly recommend!",
    author: "James P.",
    role: "Implant patient",
  },
  {
    quote: "My kids actually look forward to going to the dentist now. Dr. Chen is a miracle worker with children.",
    author: "Aisha K.",
    role: "Parent",
  },
];

export const stats = [
  { value: "20+",   label: "Years of experience" },
  { value: "5,000+", label: "Happy patients" },
  { value: "12",    label: "Certified specialists" },
  { value: "4.9★",  label: "Average patient rating" },
];

export const values = [
  { title: "Compassion",  description: "We treat every patient like family, with empathy and respect.", icon: "heart" },
  { title: "Excellence",  description: "Evidence-based care, continuous learning, and meticulous results.", icon: "award" },
  { title: "Innovation",  description: "State-of-the-art technology for faster, more comfortable treatment.", icon: "zap" },
  { title: "Trust",       description: "Transparent pricing, honest advice, and no surprises.", icon: "shield-check" },
];
