import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbaseWidget from "@/components/shared/ChatbaseWidget";
import PageLoader from "@/components/shared/PageLoader";
import CustomCursor from "@/components/shared/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-serif-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E3A8A",
};

export const metadata: Metadata = {
  title: "NestWise Group | Elite AI-Powered Property Co-Hosting in Seattle & Bellevue",
  description:
    "Maximize earning. Erase effort. Seattle's premier AI-powered luxury property co-hosting across Airbnb, VRBO, and Booking.com for a single 22% flat fee with zero long-term lock-ins.",
  keywords: [
    "Seattle property co-hosting",
    "Bellevue luxury Airbnb management",
    "short-term rental management Seattle",
    "AI property management",
    "NestWise Group",
    "luxury vacation rental co-host",
    "Medina vacation rental co-hosting",
  ],
  authors: [{ name: "NestWise Group LLC" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFAF5] text-[#1F2937] font-sans selection:bg-[#B8860B]/20 selection:text-[#1E3A8A]">
        <PageLoader />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbaseWidget />
      </body>
    </html>
  );
}
