import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import Image from "next/image"

const Projects = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Mi trayectoria <span className="font-bold text-secondary">profesional</span></h1>
                <Image src="/avatar-1.png" width={250} height={250} className="flex" alt="Image avatar" />
                
            </ContainerPage>
        </>
    )
}

export default Projects