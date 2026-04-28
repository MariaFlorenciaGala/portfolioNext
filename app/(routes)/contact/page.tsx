"use client"

import { useState } from "react"
import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import { socialNetworks } from "@/data"
import Link from "next/link"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [sent, setSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        const mailto = `mailto:mariaflorenciagala8@gmail.com?subject=${encodeURIComponent(formData.subject || "Contacto desde portfolio")}&body=${encodeURIComponent(body)}`
        window.open(mailto)
        setSent(true)
    }

    const inputClass =
        "bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-secondary transition-colors w-full"

    return (
        <>
            <TransitionPage />
            <ContainerPage mt="mt-[92px] md:mt-[140px]">
                <h1 className="text-2xl leading-tight text-center md:text-4xl mb-4">
                    Conta<span className="font-bold text-secondary">ctame</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Mapa + datos de contacto */}
                    <div className="flex flex-col gap-3">
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-64.35%2C-31.52%2C-64.05%2C-31.30&layer=mapnik&marker=-31.4201%2C-64.1888"
                            className="w-full h-44 md:h-52 rounded-xl border border-white/20"
                            loading="lazy"
                            title="Córdoba Capital, Argentina"
                        />

                        <div className="flex flex-col gap-2">
                            {socialNetworks.map(({ id, logo, src }) => (
                                <Link
                                    key={id}
                                    href={src}
                                    target={id === 3 ? "_self" : "_blank"}
                                    className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors"
                                >
                                    <span className="shrink-0">{logo}</span>
                                    <span className="text-xs">
                                        {id === 1 && "LinkedIn — Maria Florencia Gala"}
                                        {id === 2 && "GitHub — MariaFlorenciaGala"}
                                        {id === 3 && "mariaflorenciagala8@gmail.com"}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Asunto"
                            value={formData.subject}
                            onChange={handleChange}
                            className={inputClass}
                        />
                        <textarea
                            name="message"
                            placeholder="Tu mensaje"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClass} resize-none`}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm bg-secondary rounded-xl font-semibold transition-all hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/30"
                        >
                            {sent ? "¡Abriendo tu cliente de email!" : "Enviar mensaje"}
                        </button>
                    </form>

                </div>
            </ContainerPage>
        </>
    )
}

export default Contact
