import MotionTransition from "./transition-component"
import Image from "next/image";

const AvatarContact = () => {
    return(
        <MotionTransition position="bottom">
            <Image src="/avatar-works.png" width={350} height={350} alt="Image avatar" />
        </MotionTransition>
    )
}

export default AvatarContact