import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import Image from "next/image"

const Projects = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <Image src="/avatar-2.png" width={350} height={350} alt="Image avatar" />
            </ContainerPage>
        </>
    )
}

export default Projects