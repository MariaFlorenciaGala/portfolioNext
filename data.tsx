
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
        src: "mailto:mariaflorenciagala8@gmail.com",
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


//Categorías de proyectos -
//Se usan para los filtros de la página de proyectos
export const projectCategories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Sitios web" },
    { id: "automation", label: "Automatización e IA" },
    { id: "apps", label: "Aplicaciones" },
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number]["id"], "all">;

export const dataProjects: {
    id: number;
    title: string;
    category: ProjectCategory;
    image: string;
    description: string;
    features: string[];
    technologies: { name: string; icon: string }[];
    date_end: string;
    urlGitHub?: string;
    urlDemo?: string;
    urlDownload?: string;
}[] = [
    {
        id: 1,
        title: "Liga De Clubes",
        category: "apps",
        image:"/work-3.jpg",
        description:"Aplicación para gestionar información de ligas de clubes, trabajo práctico de C#.",
        features: [
            "Gestión de información de ligas de clubes con interfáz intuitiva",
            "Funcionalidades de búsqueda, filtrado de datos, informes y estadísticas",
            "Importación de datos desde archivos externos",
            "Arquitectura MVP/Capas(Models, Services, Forms, Controls separados)",
            ],
        technologies:[
            {
                name: "C#",
                icon:"/csharp.svg",
            },
            {
                name: ".NET Framework 4.8 ",
                icon:"/dotnet.svg",
            },
        ],
        date_end: "28/06/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/LigaDeClubes",
        urlDemo: "",
        urlDownload: "/LigaDeClubes.zip",
    }, 
    {
        id: 2,
        title: "Comentarios automáticos",
        category: "automation",
        image:"/work-4.jpg",
        description:"Sistema 'automatizador' de comentarios de Youtube que clasifica cada comentario y le responde. Como base de datos lo conecté a supabase y con chatGPT como genio clasificador de comentarios.",
        features: [
            "Evalua el tipo de comentario",
            "Responde automáticamnete",
            "Conexión a supabase como base de datos",
            "Utiliza chatGPT para clasificar y generar la respuesta",
            ],
        technologies:[
            {
                name: "N8N",
                icon:"/n8n.svg",
            },
            {
                name: "Supabase",
                icon:"/supabase.svg",
            },
            {
                name: "ChatGPT-API",
                icon:"/chatgpt.svg",
            },
        ],
        date_end: "28/12/2025",
        urlDemo: "",
        urlDownload: "",
    }, 
    {
        id: 3,
        title: "ObraPro",
        category: "web",
        image:"/work-2.jpeg",
        description:"Sitio web de una sola página para ObraPro, empresa de servicios especializados con cobertura en Córdoba, Argentina.",
        features: [
            "Grilla de 7 servicios con animaciones al hacer scroll",
            "Sección educativa sobre tecnología Cool Roof",
            "Zonas de cobertura en Córdoba",
            "CTA final + botón flotante de WhatsApp",
            ],
        technologies:[
            {
                name: "HTML5",
                icon:"/html5.svg",
            },
            {
                name: "CSS3",
                icon:"/css3.svg",
            },
            {
                name: "JavaScript (ES6+)",
                icon:"/javascript.svg",
            },
        ],
        date_end: "28/04/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/obraPro.git",
        urlDemo:"https://obraprocba.netlify.app/",
    }, 
        {
        id: 4,
        title: "Abogada Paulina Calvo",
        category: "web",
        image:"/work-5.jpg",
        description:"Landing page destinada a captacion de clientes online, simple y con colores que transmiten profesionalismo y cercanía.",
        features: [
            "Formulario de contacto corto",
            "Todos los botones con mensaje para contacto por el anuncio",
            "Tiene siete servicios: divorcio, cuota alimentaria, cuidado de los hijos, sucesiones, unión convivencial, convenios y redacción de documentos",
            ],
        technologies:[
            {
                name: "HTML5",
                icon:"/html5.svg",
            },
            {
                name: "CSS3",
                icon:"/css3.svg",
            },
            {
                name: "JavaScript (ES6+)",
                icon:"/javascript.svg",
            },
        ],
        date_end: "19/09/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/PaulinaCalvoAbogada.git",
        urlDemo:"www.abogadacalvo.creciendoonline.com.ar",
    }, 
     {
        id: 5,
        title: "Patricia Batalla",
        category: "web",
        image:"/work-6.jpg",
        description:"Landing page destinada a captacion de clientes online, simple y con colores que transmiten profesionalismo y cercanía.",
        features: [
            "Descripcion de servicios",
            "Contacto directo a Whatsapp",
            ],
        technologies:[
            {
                name: "HTML5",
                icon:"/html5.svg",
            },
            {
                name: "CSS3",
                icon:"/css3.svg",
            },
            {
                name: "JavaScript (ES6+)",
                icon:"/javascript.svg",
            },
        ],
        date_end: "25/09/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/patriciaBatalla",
        urlDemo:"https://patriciabatalla-depilacion.creciendoonline.com.ar/",
    },    
       {
        id: 6,
        title: "Creciendo Online",
        category: "web",
        image:"/work-7.jpg",
        description:"Landing page de servicios de landings, Google Ads y automatizaciones para emprendimientos en Argentina.",
        features: [
            "Anuncio de Google en vivo: el visitante escribe su rubro y su ciudad y ve una vista previa de cómo se vería su anuncio.",
            "WhatsApp en toda la página: cada botón abre un chat con un mensaje ya escrito según la sección desde donde se hizo clic.",
            "Consulta de hosting: el visitante elige dominio y tipo de web, recibe una recomendación y la consulta queda armada para enviar.",
            "Planes con precios claros: pago inicial, mantenimiento mensual e inversión sugerida en Google Ads para cada plan.",
            
            ],
        technologies:[
            {
                name: "HTML5",
                icon:"/html5.svg",
            },
            {
                name: "CSS3",
                icon:"/css3.svg",
            },
            {
                name: "JavaScript (ES6+)",
                icon:"/javascript.svg",
            },
        ],
        date_end: "5/10/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/CreciendoOnline.git",
        urlDemo:"https://creciendoonline.com.ar/",
    },    
         {
        id: 8,
        title: "MarketsPlus",
        category: "web",
        image: "/work-8.jpg",
        description: "Landing page de MarketsPlus, la app de gestión que desarrollé para kioscos, almacenes y comercios de barrio: ventas, stock, caja, fiado y empleados desde el celular. Presenta el producto y su modelo de membresía.",
        features: [
            "Portada con las funciones de la app en etiquetas con íconos de colores y marca PRO en las exclusivas del plan pago.",
            "Precios con selector mensual/anual: cambia montos, períodos y el ahorro anual sin recargar la página.",
            "Botones de descarga configurables: Google Play, APK y app web se muestran solo cuando tienen enlace cargado.",
            "Animaciones al hacer scroll y contadores animados, con el contenido visible aunque falle JavaScript y respeto por 'reducir movimiento'.",
            "Páginas legales completas: términos, privacidad, botón de arrepentimiento y botón de baja según la Ley 24.240.",
            "Diseño responsive con menú móvil accesible, y código separado en HTML, CSS y JavaScript sin dependencias externas.",
        ],
        technologies: [
            {
                name: "HTML5",
                icon: "/html5.svg",
            },
            {
                name: "CSS3",
                icon: "/css3.svg",
            },
            {
                name: "JavaScript (ES6+)",
                icon: "/javascript.svg",
            },
        ],
        date_end: "6/10/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/webMarketsPlus.git",
        urlDemo: "https://marketsplus.com.ar/",
    },

    {
        id: 7,
        title: "Portfolio",
        category: "apps",
        image:"/work-1.jpg",
        description:"Creación de portfolio personal con Next.js, agregué animacion de partículas y busqué una estética atractiva visualmente.",
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
            {
                name: "TypeScript",
                icon:"/typescript.svg",
            },

        ],
        date_end: "30/03/2026",
        urlGitHub: "https://github.com/MariaFlorenciaGala/portfolioNext.git",
        urlDemo:"https://mariaflorenciagala.netlify.app/",
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
