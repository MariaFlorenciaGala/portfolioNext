"use client"

import Image from "next/image";
import Link from "next/link";

interface Technology {
    name: string;
    icon: string;
}

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        description: string,
        features: string[],
        technologies: Technology[],
        date_end: string,
        urlGitHub: string,
        urlDemo: string,
    }
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
    const { id, title, image, description, features, technologies, urlGitHub, urlDemo } = data

    const visibleFeatures = features.filter(f => f.trim()).slice(0, 3)
    const techWithIcons = technologies.filter(t => t.icon)

    return (
        <div
            key={id}
            className="group relative overflow-hidden rounded-xl h-[300px] bg-[#0d0d1a] border border-white/20 hover:border-secondary/50 transition-colors duration-200 cursor-pointer"
        >
            {/* Imagen de fondo — siempre visible en desktop */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-top"
            />

            {/* Overlay: siempre visible en mobile, slide-up en hover en desktop */}
            <div className="absolute inset-0 bg-[#1f1934]/95 flex flex-col gap-3 p-5 transition-transform duration-300 ease-out translate-y-0 md:translate-y-full md:group-hover:translate-y-0">

                <h3 className="text-lg font-bold">{title}</h3>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">{description}</p>

                {visibleFeatures.length > 0 && (
                    <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 flex-1">
                        {visibleFeatures.map((f, i) => (
                            <li key={i} className="truncate">{f}</li>
                        ))}
                    </ul>
                )}

                {techWithIcons.length > 0 && (
                    <div className="flex items-center gap-3 flex-wrap">
                        {techWithIcons.map((tech, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <Image src={tech.icon} alt={tech.name} width={22} height={22} className="rounded" />
                                <span className="text-xs text-gray-400">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex gap-3 mt-auto">
                    <Link
                        href={urlGitHub || "#"}
                        target={urlGitHub ? "_blank" : "_self"}
                        onClick={e => { if (!urlGitHub) e.preventDefault() }}
                        className="flex-1 text-center py-2 text-xs font-medium rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={urlDemo || "#"}
                        target={urlDemo ? "_blank" : "_self"}
                        onClick={e => { if (!urlDemo) e.preventDefault() }}
                        className="flex-1 text-center py-2 text-xs font-medium rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                        Demo
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBox
