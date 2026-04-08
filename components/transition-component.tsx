"use client"
/*
MotionTransitition component
Componente reutilizable para aplicar animaciones de entrada y salida a cualquier elemento utilizando Framer motion.

Características:
-Permite animaciones desde diferentes direcciones como bottom o right
-Encapsula la lógica de la animación (FadeIn)
-Soporta estilos personalizados mediante className
 */
import { fadeIn } from "@/utils/motion-transition"
import { motion } from "motion/react"

interface MotionTransitionProps {
    children:React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

const MotionTransition = (props: MotionTransitionProps) => {
    const {children, position, className} = props
    return (
          <motion.div 
            variants={fadeIn(position)} 
            initial = "hidden"
            animate = "visible"
            exit = "hidden"
            className={className}            
          >
            {children}
          </motion.div>
    )
}

export default MotionTransition;