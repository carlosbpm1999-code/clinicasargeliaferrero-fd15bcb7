import imgRadiologia from "@/assets/ortopantomografia.png";

export interface ServiceContentBlock {
  type: "paragraph" | "heading" | "list" | "highlight" | "cta";
  text?: string;
  items?: string[];
  label?: string;
  href?: string;
}

export interface ServiceSection {
  title: string;
  content: ServiceContentBlock[];
}

export interface Service {
  name: string;
  slug: string;
  image: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  sections?: ServiceSection[];
}

export const services: Service[] = [
  {
    name: "Radiología Digital",
    slug: "radiologia-digital",
    image: imgRadiologia,
    shortDesc: "Menor radiación, mayor fiabilidad diagnóstica.",
    description:
      "La radiología digital consiste en la adquisición de imágenes radiográficas a través de un captador electrónico que está conectado a un ordenador. La obtención de la imagen es prácticamente instantánea y nos permite manipularla en los diferentes programas informáticos que existen para mejorar la capacidad de diagnóstico.\n\nAdemás, este sistema, al ser el captador mucho más sensible que la película convencional, necesita menor tiempo de exposición y puede llegar a reducir la dosis de radiación hasta un 80%.",
    benefits: [
      "Reducción de hasta un 80% en la dosis de radiación",
      "Imágenes instantáneas de alta resolución",
      "Mayor capacidad de diagnóstico",
      "Tecnología de última generación",
    ],
    sections: [
      {
        title: "Nuestras tecnologías en radiodiagnóstico",
        content: [
          {
            type: "paragraph",
            text: "En nuestro centro disponemos de las últimas tecnologías en radiodiagnóstico para realizar:",
          },
          {
            type: "list",
            items: [
              "Ortopantomografía — Radiografía panorámica que permite visualizar ambas arcadas dentales, la articulación temporomandibular y las estructuras óseas adyacentes en una sola imagen.",
              "Telerradiografía lateral — Radiografía lateral del cráneo que permite evaluar las relaciones esqueléticas y dentales, fundamental para la planificación de tratamientos de ortodoncia.",
            ],
          },
        ],
      },
    ],
  },
];
