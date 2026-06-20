/*
  Centralized site content + metadata for PMT Health Care Institution.
  All pages pull from this file so updates require touching one place.

  NOTE: This is a speculative pitch demo by Tangison Studio. The institution
  does not yet have a live site. Facts below are sourced from the institution's
  public Facebook page and audit notes — do not invent additional facts.
*/

export const site = {
  name: "PMT Health Care Institution",
  shortName: "PMT",
  tagline: "Quality Nurses, improving Health Care Delivery.",
  mission:
    "A Health Training Centre of Excellence producing Quality Nurses to improve the Health Care Delivery System of Namibia and the world.",
  founded: 2019,
  director: "Sister (SR) Rutendo T. Zvidza",
  namedFor: "Priscilla Monica Tendo",
  email: "hello@pmt-healthcare.org", // from crawled site
  social: {
    facebook: "https://www.facebook.com/pmthealthcareinstitution",
    instagram: "https://www.instagram.com/pmthealthcareinstitution",
    facebookFollowers: "~24,800",
    instagramFollowers: "~1,450",
  },
} as const;

export const accreditation = {
  hpcna: {
    name: "Health Professions Council of Namibia",
    shortName: "HPCNA",
    approvedOn: "10 September 2021",
    whatItMeans:
      "HPCNA approval means the institution is legally registered to train health professionals in Namibia. Graduates are eligible to register with HPCNA and practise.",
  },
  nqa: {
    name: "Namibia Qualifications Authority",
    shortName: "NQA",
    whatItMeans:
      "NQA accreditation means the qualification meets the national standard at the stated NQF level and is recognised on the Namibian Qualifications Framework.",
  },
} as const;

export const programme = {
  name: "Diploma in Enrolled Nursing and Midwifery Science",
  nqfLevel: 6,
  // The institution has not published full programme structure publicly.
  // Entry requirements + duration blocks are intentionally left as labelled
  // placeholders on the Programmes page so the institution can confirm them
  // before this demo goes live.
  entryRequirementsConfirmed: false,
  durationConfirmed: false,
} as const;

// Additional programmes listed on the institution's existing site (47.kesug.com).
// CONFLICT FLAG: The original demo brief specified only the Diploma above. The
// crawled site lists 6 programmes total. The additional 5 are surfaced here
// clearly marked as "verify current availability" — they are not the primary
// offer of this demo build, but the institution does publish them.
export const additionalProgrammes: { name: string; summary: string }[] = [
  {
    name: "Counseling Services",
    summary:
      "Equipping students with skills to provide community support and mental health services.",
  },
  {
    name: "Occupational Health and Safety",
    summary:
      "Training professionals to ensure workplace safety and promote health in occupational settings.",
  },
  {
    name: "Health Caregiver",
    summary:
      "Equipping students for compassionate care with practical skills for elderly and disabled.",
  },
  {
    name: "Pharmacy Sales Assistant",
    summary:
      "Preparing students for pharmacy support with medication dispensing and customer service skills.",
  },
  {
    name: "Community Health",
    summary:
      "Training students for public health with education, outreach, and disease prevention skills.",
  },
];

export type Campus = {
  slug: string;
  city: string;
  phone: string;
  landline?: string;
  address?: string;
  mapQuery?: string;
};

export const campuses: Campus[] = [
  {
    slug: "windhoek",
    city: "Windhoek",
    phone: "081 342 1056",
    landline: "+264 61 250 976", // from crawled site
    address: "No. 12, Sauerbruch Street, Windhoek West, 9000",
    mapQuery: "Sauerbruch Street, Windhoek West, Windhoek, Namibia",
  },
  {
    slug: "rundu",
    city: "Rundu",
    phone: "081 721 8099",
    // Full street address not published publicly — phone + city only.
  },
  {
    slug: "ongwediva",
    city: "Ongwediva",
    phone: "081 395 9524",
  },
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/campuses", label: "Campuses" },
  { href: "/accreditation", label: "Accreditation" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export type NewsItem = {
  slug: string;
  date: string;
  isoDate: string;
  category: "Announcement" | "Intake" | "Partnership" | "Funding" | "Ceremony";
  title: string;
  summary: string;
};

export const news: NewsItem[] = [
  {
    slug: "march-2026-intake",
    date: "Open now",
    isoDate: "2026-01-15",
    category: "Intake",
    title: "March 2026 intake — applications open",
    summary:
      "PMT is accepting applications for the March 2026 intake of the Diploma in Enrolled Nursing and Midwifery Science. Both NSFAF-funded and non-funded applicants are welcome. Contact your nearest campus to confirm the entrance test window.",
  },
  {
    slug: "2025-graduation",
    date: "2025",
    isoDate: "2025-11-20",
    category: "Ceremony",
    title: "Class of 2025 takes the oath",
    summary:
      "The day before graduation, students recited the nursing oath — the formal pledge that marks the transition from trainee to practitioner. The ceremony followed at Mecure Hotel, Windhoek, continuing the tradition set at the institute's first graduation of 50 nurses.",
  },
  {
    slug: "nsfaf-funding",
    date: "Ongoing",
    isoDate: "2025-08-01",
    category: "Funding",
    title: "NSFAF funding accepted",
    summary:
      "Eligible students can apply through the Namibia Students Financial Assistance Fund. PMT accepts both NSFAF-sponsored and self-funded applicants — the admissions team at each campus can walk you through either path.",
  },
  {
    slug: "icare-mou",
    date: "22 Aug 2023",
    isoDate: "2023-08-22",
    category: "Partnership",
    title: "Articulation MOU with I-Care Health Training Institute",
    summary:
      "PMT and I-Care Health Training Institute signed a memorandum of understanding on 22 August 2023 covering articulation and cross-crediting between the two institutions, opening additional pathways for nursing students.",
  },
];

/*
  Gallery image naming convention — document this so a future content owner
  can drop real photos into /public/images/gallery/ with zero code changes.

  Pattern: <category>-<sequence>.jpg
  Categories: graduation, campus-windhoek, campus-rundu, campus-ongwediva, ceremony, classroom

  Every image is rendered through <PlaceholderImage />, which falls back to a
  branded teal/ochre block when the file is missing — so the page never breaks
  while photos are still being collected.
*/
export const galleryImages: {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "default";
}[] = [
  {
    src: "/images/crawled/banner-students-classroom.jpg",
    alt: "Group of PMT students in blue uniforms preparing in a classroom.",
    caption: "In the classroom — Windhoek",
    span: "wide",
  },
  {
    src: "/images/crawled/students-classroom-01.jpg",
    alt: "Classroom full of PMT students at desks, bright room with projector.",
    caption: "Theory class",
  },
  {
    src: "/images/crawled/students-skills-lab.jpg",
    alt: "Four PMT students in teal uniforms, aprons, and masks in the skills lab.",
    caption: "Skills lab",
    span: "tall",
  },
  {
    src: "/images/crawled/students-practical-room.jpg",
    alt: "Group of PMT students in blue scrubs outside the Practical Room and Class 2.",
    caption: "Practical Room — campus",
    span: "wide",
  },
  {
    src: "/images/crawled/students-campus-building.jpg",
    alt: "Group of PMT students in blue uniforms in front of the PMT building.",
    caption: "PMT campus building",
  },
  {
    src: "/images/crawled/students-classroom-02.jpg",
    alt: "Group of PMT students in a classroom, smiling at camera, books open.",
    caption: "Class in session",
  },
  {
    src: "/images/crawled/students-ground-gathering.jpg",
    alt: "Group of PMT students in blue uniforms gathered together on the ground.",
    caption: "Campus life",
    span: "wide",
  },
  {
    src: "/images/crawled/photo-nurses-day.jpg",
    alt: "Two PMT nurses holding a Nurses Day frame in front of a Namibia Institute of Pathology backdrop.",
    caption: "Nurses Day",
  },
  {
    src: "/images/crawled/photo-safety-vests.jpg",
    alt: "PMT students in safety vests and blue pants holding blue hard hats in front of a white building.",
    caption: "OHS training",
  },
  {
    src: "/images/crawled/students-pastor.jpg",
    alt: "A woman in red and a man in red sitting side by side, smiling — campus ceremony.",
    caption: "Ceremony",
    span: "wide",
  },
];

// The "Pulse Line" timeline used on the homepage — Apply → Train → Oath → Graduate.
// Renders as the single deliberate use of the signature motif per the brand brief.
export const journey = [
  {
    step: "01",
    label: "Apply",
    description:
      "Submit your application to your nearest campus. NSFAF-funded and self-funded applicants follow separate paths — both are welcome.",
  },
  {
    step: "02",
    label: "Train",
    description:
      "Study toward the Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6 — classroom theory, skills lab, and clinical placement.",
  },
  {
    step: "03",
    label: "Oath",
    description:
      "The day before you graduate, you recite the nursing oath — a formal pledge to serve with skill and integrity. This is the heart of who we are.",
  },
  {
    step: "04",
    label: "Graduate",
    description:
      "Walk into practice as an enrolled nurse and midwife, registered with HPCNA, ready to serve Namibia's health system.",
  },
] as const;
