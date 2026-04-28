/*Pages 
Funciona como home, es la página principal de la app
-Renderiza el layout
-Incluye los efectos visuales de las particles
-Sirve como punto de entrada para las diferentes secciones
*/
import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page"

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
