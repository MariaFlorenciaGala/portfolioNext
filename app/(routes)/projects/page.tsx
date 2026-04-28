/**Project page
 * Es el componente encargado de mostrar los proyectos del portfolio.
 * Características:
 * -Renderiza la trancisión entre páginas
 * -Muestra el contenedor principal
 * -Organiza y lista los proyectos dinamicamente
 */

import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import PortfolioBox from "@/components/portfolio-box"
import { dataProjects } from "@/data"

const Projects = () => {
    return(
        <>
            <TransitionPage />

<ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-4xl mb-8">
                    Proyectos <span className="font-bold text-secondary">realizados</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {dataProjects.map((data) => (
                        <PortfolioBox key={data.id} data={data}/>
                    ))}
                </div>
            </ContainerPage>
        </>
    )
}

export default Projects