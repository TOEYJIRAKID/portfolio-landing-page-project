import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Inter, Calistoga, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"], });
const orbitron = Orbitron({subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "700"], });

export const metadata: Metadata = {
  title: "TOEYJIRA | Portfolio",
  description: "Welcome to My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, orbitron.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}