/**
 * Introduction component
 * Sección principal del portfolio
 * - Muestra el avatar con una frase con animación
 * - Genera impacto, llama la atención
 * - Guiar al usuario hacia acciones principales (ver proyectos / contacto)
 * 
 * Características:
 * - Uso de next/image para optimizar la imagen
 * - Animación del texto con react type animation
 *
 */
'use client'

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return(
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center p-6 py-20 md:py-0 md:grid-cols-2 w-auto h-full">
                <Image src="/home-1.png" priority width={270} height={270} alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> Si puedes pensarlo,
                    <br />
                    <TypeAnimation
                        sequence={[
                            "puedes programarlo",
                            1000,
                            "puedes optimizarlo",
                            1000,
                            "puedes implementarlo",
                            1000,
                            "puedes desarrollarlo",
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className='block font-bold text-secondary' 
                        aria-live="polite"
                    />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como <strong>Técnica Universitaria en Tecnologías de Programación</strong> me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduction;
