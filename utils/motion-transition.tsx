/**
 * MotionTransition component
 * 
 * Archivo que contiene variantes de animacion reutilizables para la pagina utilizando Framer motion
 * 
 * Objetivo:
 * -Centralizar aplicaciones
 * -Reutilizacion de lógica
 * -Mantener el código limpio y escalable
 */
import { Variants } from "motion"

/*Transición para cambio de página
* Genera un efecto barrido horizontal que cubre la pantalla durante la navegación entre rutas
*/
export const transitionVariablePage: Variants = {
    initial: {
        x: "100%",
        width:"100%"
    },
    animate: {
        x: "0%",
        width:"0%"
    },
    exit: {
        x: ["0%", "100%"],
        width:["0%", "100%"]
    },
}

/*Animación de entrada con efecto fade + desplazamiento
* Aplica una transición suave donde el elemento:
 -Aparece (opacity
 -Se desplaza desde una dirección específica)
*/
export const fadeIn = (position:string): Variants => {
    return {
        visible:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:1.4,
                delay:0.5,
                ease:[0.25,0.25,0.25,0.75]
            } as const,//asegura el tipado correcto
        },
        //Estado antes de aparecer
        hidden:{
            y:position == "bottom" ? -80 : 0,
            x:position == "right" ? 80 : 0,
            opacity:0,
            transition:{
                type:"tween",
                duration:1.4,
                delay:0.5,
                ease:[0.25,0.25,0.25,0.75]
            } as const,
        },

    }
}