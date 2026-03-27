/**Project page
 * Es el componente encargado de mostrar los proyectos del portfolio.
 * Características:
 * -Renderiza la trancisión entre páginas
 * -Muestra el contenedor principal
 * -Organiza y lista los proyectos dinamicamente
 */

import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import AvatarProjects from "@/components/avatar-projects"
import PortfolioBox from "@/components/portfolio-box"
import { dataProjects } from "@/data"


const Projects = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="flex">
                    <AvatarProjects />
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Proyectos 
                            <span className="font-bold text-secondary"> realizados</span>
                        </h1>
                        <div className="relative z-10 grid sm:grid-cols-1 max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">

                            {dataProjects.map((data) => (
                                <PortfolioBox key={data.id} data={data}/>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </>
    )
}

export default Projects