/** AbautMe component
 * Muestra la información personal y pretende hacer un acercamiento más humano
 * Características:
 * Muestra la imagen real
 * Muestra la descripción desde la base de datos
 * Mantiene una estructura responsive
 */
import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import ImageAboutMe from "@/components/image-about-me"
import { aboutMe } from "@/data"

const AboutMe = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-4xl mb-4">
                    Sobre <span className="font-bold text-secondary">mí</span>
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <ImageAboutMe/>
                    <div className="flex flex-col px-4 py-6 md:p-10 max-w-md">
                        <p className="text-center mx-auto mb-2 text-sm md:text-base md:mx-0 md:mb-8">
                            {aboutMe.description}
                        </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                    </div>
                    </div>
                </div>
            </ContainerPage>
        </>
    );
}

export default AboutMe

