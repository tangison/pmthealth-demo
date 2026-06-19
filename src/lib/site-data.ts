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

export type Campus = {
  slug: string;
  city: string;
  phone: string;
  address?: string;
  mapQuery?: string;
};

export const campuses: Campus[] = [
  {
    slug: "windhoek",
    city: "Windhoek",
    phone: "081 342 1056",
    address: "No. 12, Sauerbruch Street, Windhoek West",
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
    src: "/images/gallery/graduation-01.jpg",
    alt: "Graduating nursing class in ceremonial attire, Mecure Hotel Windhoek.",
    caption: "Graduation ceremony — Windhoek",
    span: "wide",
  },
  {
    src: "/images/gallery/ceremony-01.jpg",
    alt: "Oath-taking ceremony the day before graduation.",
    caption: "The oath — the night before",
  },
  {
    src: "/images/gallery/campus-windhoek-01.jpg",
    alt: "PMT Windhoek campus on Sauerbruch Street, Windhoek West.",
    caption: "Windhoek campus",
  },
  {
    src: "/images/gallery/graduation-02.jpg",
    alt: "Graduate receiving diploma on stage.",
    caption: "Crossing the stage",
    span: "tall",
  },
  {
    src: "/images/gallery/classroom-01.jpg",
    alt: "Nursing students in a classroom session.",
    caption: "In the classroom",
  },
  {
    src: "/images/gallery/ceremony-02.jpg",
    alt: "Students reciting the nursing oath in unison.",
    caption: "Reciting the oath",
    span: "wide",
  },
  {
    src: "/images/gallery/campus-rundu-01.jpg",
    alt: "PMT Rundu campus, north-eastern Namibia.",
    caption: "Rundu campus",
  },
  {
    src: "/images/gallery/campus-ongwediva-01.jpg",
    alt: "PMT Ongwediva campus, northern Namibia.",
    caption: "Ongwediva campus",
  },
  {
    src: "/images/gallery/graduation-03.jpg",
    alt: "Group portrait of graduating nurses.",
    caption: "Class portrait",
  },
  {
    src: "/images/gallery/classroom-02.jpg",
    alt: "Practical skills demonstration in the training lab.",
    caption: "Skills lab",
  },
  {
    src: "/images/gallery/graduation-04.jpg",
    alt: "Family celebrating with a graduate after the ceremony.",
    caption: "With family",
    span: "wide",
  },
  {
    src: "/images/gallery/ceremony-03.jpg",
    alt: "Candle lighting during the oath ceremony.",
    caption: "Candle ceremony",
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
