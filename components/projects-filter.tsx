"use client"
/*
ProjectsFilter component
Muestra los proyectos agrupados por categoría mediante filtros (pestañas).

Características:
-Pestañas para filtrar por categoría, con la cantidad de proyectos de cada una
-Las categorías sin proyectos no se muestran
-Animación de reacomodo de las cards al cambiar de filtro (motion)
 */
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import PortfolioBox from "@/components/portfolio-box"
import { dataProjects, projectCategories } from "@/data"

type FilterId = (typeof projectCategories)[number]["id"]

const ProjectsFilter = () => {
    const [activeFilter, setActiveFilter] = useState<FilterId>("all")

    const countFor = (id: FilterId) =>
        id === "all" ? dataProjects.length : dataProjects.filter(p => p.category === id).length

    const visibleCategories = projectCategories.filter(c => countFor(c.id) > 0)

    const filteredProjects = activeFilter === "all"
        ? dataProjects
        : dataProjects.filter(p => p.category === activeFilter)

    return (
        <>
            {/* Filtros */}
            <div
                role="tablist"
                aria-label="Filtrar proyectos por categoría"
                className="flex flex-wrap justify-center gap-2 mb-8"
            >
                {visibleCategories.map(({ id, label }) => {
                    const isActive = activeFilter === id
                    return (
                        <button
                            key={id}
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActiveFilter(id)}
                            className={`relative px-4 py-2 text-sm rounded-full border transition-colors duration-200 cursor-pointer ${
                                isActive
                                    ? "border-secondary text-white"
                                    : "border-white/20 text-gray-300 hover:border-secondary/50 hover:text-white"
                            }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="active-filter"
                                    className="absolute inset-0 rounded-full bg-secondary/80"
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                />
                            )}
                            <span className="relative z-10">
                                {label}
                                <span className={`ml-1.5 text-xs ${isActive ? "text-white/80" : "text-gray-500"}`}>
                                    {countFor(id)}
                                </span>
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Grilla de proyectos */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((data) => (
                        <motion.div
                            key={data.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                        >
                            <PortfolioBox data={data} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default ProjectsFilter
