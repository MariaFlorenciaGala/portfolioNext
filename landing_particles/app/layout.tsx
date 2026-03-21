/*Layout principal de la aplicación
-Define la estructura base de HTML
-Configura los metadatos globales 
-Aplica la tipografía global
-Incluye componentes que persisten como el navbar
-Renderiza los contenidos dinámicosde cada página
*/
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/navbar";

import "./globals.css";

//Fuente global 
const urbanist = Urbanist({subsets: ['latin']});

//Metadatos globales para el SEO
export const metadata: Metadata = {
  title: "👩‍💻Maria Florencia Gala",
  description: "Portfolio por Maria Florencia Gala",
};

export default function RootLayout({
  children,
}: Readonly<{
  //Contenido dinámico que renderiza cada página dentro del layout
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        {/*Barra de navegación que queda fija*/}
        <Navbar />
        {/**Render de las páginas 'hijas' */}
        {children}
      </body>
    </html>
  );
}
