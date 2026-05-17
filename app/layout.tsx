import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Fonts with proper configuration
const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap", // Add this for better performance
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap", // Add this for better performance
});

// Metadata
export const metadata: Metadata = {
  title: "AI | Bon",
  description:
    "IT Analytics & Development | Building data-driven systems and web solutions that blend design, function, and performance.",
  generator: "v0.app",
  keywords: [
    "AI",
    "Analytics",
    "Development",
    "Web Development",
    "Data Analytics",
    "Portfolio",
  ],
  authors: [{ name: "AI Bon" }],
  icons: {
    icon: "/photo-logo.png",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, -apple-system, sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Analytics only in production */}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}