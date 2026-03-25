import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import AvatarProjects from "@/components/avatar-projects"


const Projects = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <AvatarProjects />
            </ContainerPage>
        </>
    )
}

export default Projects