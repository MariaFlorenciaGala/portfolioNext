"use client"

/*CoverParticles renderiza un fondo animado de tipo partículas utilizando la librería tsparticles
*Características
-Inicializa el motor de partículas al montar el componente
-Usa una versión optimizada para mejorar el rendimiento(slim)
-Muestra las partículas solo cando el motor está listo
-Soporta interacciones con el usuario como el hover y el click
*/

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const CoverParticles = () => {
    //Estado que indica si el motor de partículas ya fué inicializado y evita renderizar el componente antes de que esté listo.
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        //Inicializa el engine de tsparticles 
        //Se carga la versión slim para mejorar la performance
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            //Una vez que el motor está listo, habilita el renderizado
            setInit(true);
        });
    }, []);

    return (
        //Render condicional que solo mostrará las partículas cuando el engine está inicializado.
        init && 
        <div className="w-0px">
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 120,
                    //Acá va la iteractividad con el usuario
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    //Configuración visual y de comportamiento de las partículas
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    //Mejora la visualización en pantallas retina
                    detectRetina: true,
                }}
            />            
        </div>
    );
};
export default CoverParticles;