import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import Image from "next/image";

const AboutMe = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <Image src="/portfolio.png" width={250} height={250} className="flex" alt="Image avatar" />
                <p></p>
            </ContainerPage>
        </>
    );
}

export default AboutMe

