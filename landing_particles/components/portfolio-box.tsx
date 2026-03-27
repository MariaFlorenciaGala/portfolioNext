"use client"
/**PortfolioBox component
 * Encargado de mostrar cada proyecto de manera individual
 * Características:
 * Muestra título, imagen , tecnologías , características y provee enlaces 
 * Mantiene una estructura visual
 */
import Image from "next/image";
import Link from "next/link";

import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";


interface Technology {
  name: string;
  icon: string;
}

interface PortfolioBoxProps {
    data: {
        id:number,
        title: string,
        image: string,
        description: string,
        features:string [],
        technologies: Technology [],
        date_end: string,
        urlGitHub:string,
        urlDemo: string,
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const {data} = props
    const { id, title, image, description, features, technologies, urlGitHub, urlDemo } = data
    return (
        <div key={id} className="p-4 border border-teal-400 rounded-xl flex flex-col justify-between h-full ">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image src={image} alt="Image proyect" width={200} height={200} className="w-full md:w-200px rounded-2xl h-auto" />
            <p className="mt-3 text-sm text-gray-300">{description}</p>
            <div className="mt-4">
                <h4 className="font-semibold">Features:</h4>
                <ul className="list-disc list-inside text-sm">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <Swiper
                    breakpoints={{
                        320:{
                            slidesPerView:1,
                            spaceBetween:15,
                        }
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination, FreeMode]}
                    className="h-380px md:h-300px w-270px md:w-550px"
                >
                    {technologies.map((technology, index) => (
                            <SwiperSlide key={index}>
                                <Image src={technology.icon} alt="Icono de tecnología" width={200} height={200} className="mx-auto rounded-full" />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className="flex justify-around gap-5 mt-5"> 
                <Link href={urlGitHub} target="_blank" className="p-2  transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
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