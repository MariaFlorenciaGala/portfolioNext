import MotionTransition from "./transition-component"
import Image from "next/image";

const AvatarProjects = () => {
    return(
        <MotionTransition position="bottom">
            <Image src="/avatar-2.png" width={180} height={180} alt="Image avatar" />
        </MotionTransition>
    )
}

export default AvatarProjects;