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
                <div className="flex justify-center ">
                    <ImageAboutMe/>
                    <div className="flex flex-col p-10 max-w-md sm:grid-cols-1">
                        <p className="text-center mx-auto mb-2 text-sm md:text-sm/6 md:mx-0 md:mb-8">
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

