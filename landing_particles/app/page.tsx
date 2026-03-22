/*Pages 
Funciona como home, es la página principal de la app
-Renderiza el layout
-Incluye los efectos visuales de las particles
-Sirve como punto de entrada para las diferentes secciones
*/
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page"

export default function Home() {
  return (
    <main>
      {/*Componente de transición entre páginas */}
      <TransitionPage />
      <div className="flex min-h-100vh h-full bg-no-repeat bg-gradient-cover">
        {/*Fondo animado de partículas */}
        <CoverParticles />
      </div>
    </main>
  );
}
