import MotionTransition from "./transition-component"
import Image from "next/image";

const AvatarContact = () => {
    return(
        <MotionTransition position="bottom">
            <Image src="/services.png" width={350} height={350} alt="Image avatar" />
        </MotionTransition>
    )
}

export default AvatarContact