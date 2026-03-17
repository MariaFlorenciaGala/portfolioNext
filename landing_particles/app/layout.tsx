import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({subsets: ['latin']});

export const metadata: Metadata = {
  title: "👩‍💻Maria Florencia Gala",
  description: "Landing page made by Maria Florencia Gala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  );
}
