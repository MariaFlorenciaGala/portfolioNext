"use client"

/*
Navbar component es una barra de navegación fija en la parte inferior de la pantalla. Renderiza los items dinámicamente(itemsNavbar) definidos en el archivo de datos (data.tsx)

*Características

-Navegación con Link(Next.js)
-Detección de ruta activa
-Estilos dinámicos según ruta 
*/

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";

const Navbar = () =>{
    //Obtiene la ruta actual de la aplicación, además lo utilicé para resaltar el ítem activo (icono) en la navbar
    const router = usePathname()

    return (
        <div className="fixed z-40 flex-col items-center justify-center w-full mt-auto h-max bottom-10 ">
            <nav>
                <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                {/*Itera sobre los elementos de navegación definidos y los renderiza como un botón clickeable */}
                        {itemsNavbar.map((item) => (
                            /*Aplica estilos dinámicos como el hover (al pasar el mouse) y el activo(resalta al coincidir con la ruta actual)*/
                            <div key={item.id} className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router == item.link && 'bg-secondary'}`}>                                
                            <Link href={item.link}>{item.icon}</Link>
                            </div>
                    ))}
                </div>

            </nav>
        </div>
    )
}

export default Navbar;