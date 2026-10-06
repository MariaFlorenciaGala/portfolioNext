/**Project page
 * Es el componente encargado de mostrar los proyectos del portfolio.
 * Características:
 * -Renderiza la trancisión entre páginas
 * -Muestra el contenedor principal
 * -Organiza los proyectos por categoría con filtros (ProjectsFilter)
 */

import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import ProjectsFilter from "@/components/projects-filter"

const Projects = () => {
    return(
        <>
            <TransitionPage />

            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-4xl mb-8">
                    Proyectos <span className="font-bold text-secondary">realizados</span>
                </h1>
                <ProjectsFilter />
            </ContainerPage>
        </>
    )
}

export default Projects