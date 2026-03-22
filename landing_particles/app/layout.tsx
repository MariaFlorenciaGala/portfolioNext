/*Layout principal de la aplicación

-Define la estructura base de HTML
-Aplica la tipografía global
-Incluye componentes que persisten como el navbar
-Renderiza los contenidos dinámicosde cada página.
-Configura los metadatos globales 
*/
import { Urbanist } from "next/font/google";
import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Header from "@/components/header";

import { seoData } from "@/data";

import "./globals.css";

//Fuente global 
const urbanist = Urbanist({subsets: ['latin']});

export const metadata: Metadata = seoData;

export default function RootLayout({
  children,
}: Readonly<{
  //Contenido dinámico que renderiza cada página dentro del layout
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/*Barra de navegación que queda fija*/}
        <Navbar />
        <Header />
        {/**Render de las páginas 'hijas' */}
        {children}
      </body>
    </html>
  );
}
