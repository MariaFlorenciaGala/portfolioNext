import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/navbar";

import "./globals.css";

const urbanist = Urbanist({subsets: ['latin']});

export const metadata: Metadata = {
  title: "👩‍💻Maria Florencia Gala",
  description: "Portfolio por Maria Florencia Gala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
