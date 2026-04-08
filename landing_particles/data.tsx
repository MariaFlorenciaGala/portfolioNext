
/*data.tsx 
Archivo centralizado de datos estáticos para el portfolio
Contiene:
-Redes sociales
-Items de navegación
-Información de la página "sobre mi"
-Proyectos
-Experiencia 


Sapara la lógica de la UI de los datos para mejorar la mantenibilidad , reutilización y escalabilidad.
*/
import { HomeIcon, UserRound, Send, Braces } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export const aboutMe = {
    description: "Hola!!, soy Florencia, Desarrolladora Full-Stack. Continúo formándome de manera constante en el mundo del desarrollo de software. Mi camino hacia la tecnología comenzó a partir de una sólida base en creatividad y comunicación, desarrollada durante mis años de experiencia en marketing .Hoy enfoco mi perfil en el desarrollo de software, combinando mis conocimientos técnicos con una mirada centrada en el usuario. Me interesa crear soluciones funcionales, pero también visualmente atractivas.Me apasiona aprender, crecer y formar parte de proyectos innovadores. Construyamos algo increíble juntos!!.",
}

//Redes sociales - 
//Cada objeto representa una red social, el ícono y el link de acceso
export const socialNetworks = [
    {
        id: 1,
        logo: <FaLinkedinIn size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/mariflor",
    },
    {
        id: 2,
        logo: <FaGithub size={30} strokeWidth={1} />,
        src: "https://github.com/MariaFlorenciaGala",
    },
    {
        id: 3,
        logo: <CgMail size={35} strokeWidth={0} />,
        src: "https:mariaflorenciagala@gmail.com",
    },

];

//Items de la barra de navegación -
//Define las rutas de la navbar 
export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Mis proyectos",
        icon: <Braces size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 3,
        title: "Sobre mi",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 4,
        title: "Contacto ",
        icon: <Send size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];


export const dataProjects = [
    {
        id: 1,
        title: "Portfolio",
        image:"/work-1.jpeg",
        description:"Creación de portfolio personal con ",
        features: [
            "Arquitectura limpia",
            "Componentización",
            "Manejo óptimo de datos",
            "Utilización de Frame motion + NPM particles.",
            "UI estructurada"
            ],
        technologies:[
            {
                name: "Next.js",
                icon:"/next.png",
            },
                        {
                name: "Tailwind",
                icon:"/tailwindcss.svg",
            },

        ],
        date_end: "30/03/2026",
        urlGitHub: "",
        urlDemo:"",
    },    
    {
        id: 2,
        title: "Datos Quini",
        image:"/work-2.jpeg",
        description:"Extractor de datos depágina de Quini 6 , actualiza a la fecha, crea una base de datos para prubas con IA",
        features: [
            "Arquitectura limpia",
            "Componentización",
            "Manejo óptimo de datos",
            "Utilización de Frame motion + NPM particles.",
            "UI estructurada"
            ],
        technologies:[
            {
                name: "Python",
                icon:"",
            },
                        {
                name: "Otro",
                icon:"",
            },

        ],
        date_end: "30/03/2025",
        urlGitHub: "",
        urlDemo:"",
    }, 
    {
        id: 3,
        title: "Gato",
        image:"/work-3.jpeg",
        subtitle: "",
        description:"Extractor de datos depágina de Quini 6 , actualiza a la fecha, crea una base de datos para prubas con IA",
        features: [
            "",
            "Python",
            ""
            ],
        technologies:[
            {
                name: "Python",
                icon:"",
            },
                        {
                name: "Otro",
                icon:"",
            },

        ],
        date_end: "30/03/2025",
        urlGitHub: "",
        urlDemo:"",
    }, 
    {
        id: 4,
        title: "Otro gato",
        image:"/work-4.jpeg",
        subtitle: "",
        description:"Extractor de datos depágina de Quini 6 , actualiza a la fecha, crea una base de datos para prubas con IA",
        features: [
            "",
            "Python",
            ""
            ],
        technologies:[
            {
                name: "Python",
                icon:"",
            },
                        {
                name: "Otro",
                icon:"",
            },

        ],
        date_end: "30/03/2025",
        urlGitHub: "",
        urlDemo:"",
    }, 
]


export const dataCertificate = [
    {
        id: 1,
        title: "Técnico Universitario en Tecnologías de Programación",
        subtitle:"Universidad Provincial del Sudoeste - 2026",
        image: "/image-1.jpg",
    },
    {
        id: 2,
        title: "IA y automatización de flujos de trabajo ",
        subtitle:"Universidad Nacional de Córdoba - 2026",
        image: "/image-2.jpg",
    },
    {
        id: 3,
        title: "Full-Stack Software Developer",
        subtitle:"Bootcamp - 2024",
        image: "/image-3.jpg",
    },
    {
        id: 4,
        title: "Introducción al Desarrollo Web I y II",
        subtitle:"Google Actívate - 2021",
        image: "/image-4.jpg",
    },
    {
        id: 5,
        title: "Ciberseguridad en el Trabajo",
        subtitle:"Google Actívate - 2021",
        image: "/image-5.jpg",
    },
    {
        id: 6,
        title: "Desarrollo de Apps Móviles",
        subtitle:"Google Actívate - 2021",
        image: "/image-6.jpg",
    },
    {
        id: 7,
        title: "Digitaliza tu Negocio con Google My Business y YouTube",
        subtitle:"Google Actívate - 2021",
        image: "/image-7.jpg",
    },
    {
        id: 8,
        title: "Fotografía",
        subtitle:"Instituto Kandinsky - 2016",
        image: "/image-8.jpg",
    },
    {
        id: 9,
        title: "Técnico en Administración de Empresas",
        subtitle:"System Sypial - 2005",
        image: "/image-9.jpg",
    },

];

//Metadatos para mejorar el layout
export const seoData = {
    title: "👩‍💻Maria Florencia Gala | Portfolio",
    description: "Desarrolladora web especializada en React, Next.js y diseño moderno",
    keywords: ["React", "Next.js", "Frontend", "Portfolio"],
};
