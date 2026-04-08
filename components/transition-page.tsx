"use client"

/**TransitionPage component
 * Componente encargado de renderizar una animación de transición entre páginas utilizando framer motion
 * 
 * Características:
 * - Utiliza AnimatePresence para controlar animaciones de entrada y salida
 * - Aplica una animación de "barrido" horizontal sobre la pantalla
 * - Mejora la experiencia visual al navegar entre rutas
 */
import {transitionVariablePage } from "@/utils/motion-transition"
import { AnimatePresence, motion  } from "motion/react"


const TransitionPage = () => {
    return (
        //AnimatePresence permite animar componentes cuando se montan y se desmontan del DOM
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    //capa fija que cubre toda la pantalla y se utiliza para generar el efecto de transición
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-indigo-800" 
                    //Variantes de animación definidas externamente
                    variants={transitionVariablePage}
                    //Estados de la animación
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    //Configuración de la transición global
                    transition={{
                        delay:0.2, 
                        duration:0.6, 
                        ease:"easeInOut"
                    }}
                >
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionPage;