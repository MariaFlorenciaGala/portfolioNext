import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import ImageAboutMe from "@/components/image-about-me"

const AboutMe = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <ImageAboutMe/>
                <p></p>
            </ContainerPage>
        </>
    );
}

export default AboutMe

