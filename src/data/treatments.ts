import imgImplantologia3D from "@/assets/implantologia-guiada-3d.jpg";
import imgOdontopediatria from "@/assets/odontopediatria.jpg";
import imgDamon from "@/assets/ortodoncia-damon.jpg";
import imgOrtodonciaInfantil from "@/assets/ortodoncia-infantil.jpg";
import imgSpark from "@/assets/ortodoncia-spark.jpg";
import imgPeriodoncia from "@/assets/periodoncia.jpg";
import imgProtesis from "@/assets/protesis.jpg";
import imgBlanqueamiento from "@/assets/blanqueamiento.jpg";
import imgEstetica from "@/assets/estetica-dental.jpg";
import imgImplantes from "@/assets/implantes-dentales.jpg";

export interface Treatment {
  name: string;
  slug: string;
  image: string;
  shortDesc: string;
  description: string;
  benefits: string[];
}

export const treatments: Treatment[] = [
  {
    name: "Implantes Dentales",
    slug: "implantes-dentales",
    image: imgImplantes,
    shortDesc: "Solución permanente para la pérdida de piezas dentales.",
    description:
      "Los implantes dentales son raíces artificiales de titanio que se integran en el hueso maxilar para soportar coronas, puentes o prótesis. Ofrecen una solución duradera y estéticamente natural, devolviendo la funcionalidad completa a su sonrisa. En nuestra clínica utilizamos técnicas avanzadas de cirugía mínimamente invasiva para garantizar la máxima comodidad durante el proceso.",
    benefits: [
      "Aspecto y función idénticos a dientes naturales",
      "Preservan el hueso maxilar",
      "Duración de por vida con el cuidado adecuado",
      "Sin necesidad de dañar dientes adyacentes",
    ],
  },
  {
    name: "Implantología Guiada 3D",
    slug: "implantologia-guiada-3d",
    image: imgImplantologia3D,
    shortDesc: "Precisión milimétrica con tecnología de última generación.",
    description:
      "La implantología guiada por ordenador permite planificar la intervención de forma virtual antes de realizarla, utilizando escáneres 3D y software de última generación. Esto se traduce en una cirugía más rápida, precisa y con una recuperación más confortable para el paciente.",
    benefits: [
      "Cirugía mínimamente invasiva",
      "Mayor precisión en la colocación",
      "Menor tiempo de intervención",
      "Recuperación más rápida",
    ],
  },
  {
    name: "Ortodoncia Damon®",
    slug: "ortodoncia-damon",
    image: imgDamon,
    shortDesc: "Sistema de brackets autoligables para un tratamiento más rápido.",
    description:
      "El sistema Damon® utiliza brackets autoligables que reducen la fricción, permitiendo que los dientes se muevan de forma más libre y cómoda. Esto significa menos visitas, tratamientos más cortos y resultados excepcionales con menor molestia.",
    benefits: [
      "Menos visitas al ortodoncista",
      "Tratamiento más rápido",
      "Menor presión y molestia",
      "Resultados estéticos superiores",
    ],
  },
  {
    name: "Ortodoncia Spark®",
    slug: "ortodoncia-spark",
    image: imgSpark,
    shortDesc: "Alineadores transparentes de alta precisión.",
    description:
      "Spark® es un sistema de alineadores transparentes que ofrece una alternativa estética a los brackets tradicionales. Fabricados con el material TruGEN™, son más cómodos, más transparentes y más resistentes a las manchas que otros alineadores del mercado.",
    benefits: [
      "Prácticamente invisibles",
      "Removibles para comer y cepillarse",
      "Materiales de última generación",
      "Tratamiento personalizado con escáner digital",
    ],
  },
  {
    name: "Ortodoncia Infantil",
    slug: "ortodoncia-infantil",
    image: imgOrtodonciaInfantil,
    shortDesc: "Corrección temprana para un desarrollo dental óptimo.",
    description:
      "La ortodoncia infantil o interceptiva permite detectar y corregir problemas de alineación y mordida en etapas tempranas del desarrollo. Intervenir a tiempo puede simplificar tratamientos futuros y garantizar un crecimiento dental saludable.",
    benefits: [
      "Detección precoz de problemas",
      "Guía del crecimiento mandibular",
      "Prevención de tratamientos complejos",
      "Mejora de la autoestima del niño",
    ],
  },
  {
    name: "Odontopediatría",
    slug: "odontopediatria",
    image: imgOdontopediatria,
    shortDesc: "Cuidado dental especializado para los más pequeños.",
    description:
      "Nuestra área de odontopediatría está dedicada a la salud bucal de bebés, niños y adolescentes. Creamos un ambiente amigable y de confianza para que la visita al dentista sea una experiencia positiva desde la infancia.",
    benefits: [
      "Ambiente adaptado para niños",
      "Prevención desde edades tempranas",
      "Tratamientos especializados pediátricos",
      "Educación en higiene dental",
    ],
  },
  {
    name: "Periodoncia",
    slug: "periodoncia",
    image: imgPeriodoncia,
    shortDesc: "Tratamiento y prevención de enfermedades de las encías.",
    description:
      "La periodoncia se centra en la prevención, diagnóstico y tratamiento de enfermedades que afectan a las encías y al hueso que soporta los dientes. Tratamos gingivitis, periodontitis y realizamos cirugías periodontales para preservar la salud de sus encías.",
    benefits: [
      "Prevención de la pérdida dental",
      "Tratamiento de encías inflamadas o sangrantes",
      "Regeneración de tejidos dañados",
      "Mantenimiento periodontal personalizado",
    ],
  },
  {
    name: "Estética Dental",
    slug: "estetica-dental",
    image: imgEstetica,
    shortDesc: "Mejora la apariencia de tu sonrisa con técnicas avanzadas.",
    description:
      "Nuestros tratamientos de estética dental incluyen carillas de porcelana, composite dental, diseño de sonrisa digital y contorneado estético. Cada tratamiento se personaliza para lograr una sonrisa armoniosa y natural acorde con los rasgos faciales del paciente.",
    benefits: [
      "Sonrisa natural y armoniosa",
      "Carillas de última generación",
      "Diseño digital personalizado",
      "Resultados inmediatos y duraderos",
    ],
  },
  {
    name: "Blanqueamiento",
    slug: "blanqueamiento",
    image: imgBlanqueamiento,
    shortDesc: "Recupera el blanco natural de tus dientes de forma segura.",
    description:
      "Ofrecemos blanqueamiento dental profesional tanto en clínica como ambulatorio, utilizando geles de alta concentración y tecnología LED para obtener resultados visibles desde la primera sesión, de forma segura y sin dañar el esmalte.",
    benefits: [
      "Resultados visibles desde la primera sesión",
      "Procedimiento seguro y controlado",
      "Sin daño al esmalte dental",
      "Opciones en clínica y domiciliarias",
    ],
  },
  {
    name: "Prótesis",
    slug: "protesis",
    image: imgProtesis,
    shortDesc: "Prótesis fijas y removibles para recuperar tu sonrisa.",
    description:
      "Diseñamos y fabricamos prótesis dentales personalizadas — fijas, removibles y sobre implantes — utilizando materiales de última generación para garantizar comodidad, funcionalidad y un aspecto completamente natural.",
    benefits: [
      "Materiales biocompatibles de alta calidad",
      "Diseño personalizado y estético",
      "Restauración funcional completa",
      "Opciones fijas y removibles",
    ],
  },
];
