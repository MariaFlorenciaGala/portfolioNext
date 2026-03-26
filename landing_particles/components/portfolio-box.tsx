/**PortfolioBox component
 * Encargado de mostrar cada proyecto de manera individual
 * Características:
 * Muestra título, imagen y provee enlaces
 * Mantiene una estructura visual
 */
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id:number,
        title: string,
        image: string,
        subtitle: string,
        description: string,
        date_end: Date,
        urlGitHub:string,
        urlDemo: string,
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const {data} = props
    const { title, image, urlGitHub, urlDemo } = data
    return (
        <div className="p-4 border border-teal-40 rounded-xl">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image src={image} alt="Image proyect" width={200} height={200} className="w-full md:w-200px rounded-2xl h-auto" />
            <div className="flex gap-5 mt-5"> 
                <Link href={urlGitHub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                    GitHub
                </Link>
                <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary">
                    Demo
                </Link>

            </div>
            
        </div>

    )
}

export default PortfolioBox