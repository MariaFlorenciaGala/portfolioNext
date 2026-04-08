import Image from "next/image"
import MotionTransition from "./transition-component"

const ImageAboutMe = () => {
    return (
        <div>
            <MotionTransition position="bottom">
                <Image src="/portfolio.png" width={250} height={250} className="flex" alt="Image avatar" />
            </MotionTransition>
        </div>

    )
}

export default ImageAboutMe