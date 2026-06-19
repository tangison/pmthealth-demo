import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pmthealth.example"),
  title: {
    default: "PMT Health Care Institution — Training Namibia's Nurses",
    template: "%s · PMT Health Care Institution",
  },
  description:
    "A Health Training Centre of Excellence producing Quality Nurses to improve the Health Care Delivery System of Namibia and the world. HPCNA-approved, NQA-accredited. Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6. Campuses in Windhoek, Rundu, and Ongwediva.",
  keywords: [
    "PMT Health Care Institution",
    "nursing school Namibia",
    "Enrolled Nursing and Midwifery Science",
    "NQF Level 6 nursing diploma",
    "HPCNA approved nursing school",
    "NQA accredited Namibia",
    "NSFAF nursing school",
    "Windhoek nursing school",
    "Rundu nursing school",
    "Ongwediva nursing school",
  ],
  authors: [{ name: "PMT Health Care Institution" }],
  creator: "PMT Health Care Institution",
  publisher: "PMT Health Care Institution",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PMT Health Care Institution",
    description:
      "Quality Nurses, improving Health Care Delivery in Namibia. HPCNA-approved, NQA-accredited. Diploma in Enrolled Nursing and Midwifery Science.",
    url: "https://pmthealth.example",
    siteName: "PMT Health Care Institution",
    type: "website",
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMT Health Care Institution",
    description:
      "Quality Nurses, improving Health Care Delivery in Namibia. HPCNA-approved, NQA-accredited.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
