import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"


import { dataWorkExperience } from "@/data"
import AvatarWorkExperience from "@/components/avatar-work-experience"
const Projects = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Mi experiencia <span className="font-bold text-secondary">laboral</span></h1>
                <AvatarWorkExperience />
                <div className="flex flex-col justify-center divide-y divide-slate-200">
                    <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
                        <div className="-my-6">
                            {dataWorkExperience.map((data) => (
                                <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                                    <div>
                                    <div className="flex gap-4 mb-3">
                                        <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold">Desde</span>
                                            <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 text-emerald-600 bg-emerald-100 rounded-full">{data.from}</time>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold">Hasta</span>
                                            <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 text-emerald-600 bg-emerald-100 rounded-full">{data.to}</time>
                                        </div>

                                    </div>
                                    </div>
                                    <div className="text-xl font-bold text-gray-400">{data.subtitle}</div>
                                    <div className="text-slate-400">{data.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </>
    )
}

export default Projects