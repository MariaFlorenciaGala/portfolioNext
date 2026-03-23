import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import Image from "next/image"

const Contact = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <Image src="/avatar-works.png" width={250} height={250} alt="Image avatar" />
            </ContainerPage>
        </>
    )
}

export default Contact