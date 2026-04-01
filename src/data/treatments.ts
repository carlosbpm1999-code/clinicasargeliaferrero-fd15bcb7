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
import imgRadiologia from "@/assets/ortopantomografia.png";
import imgClinicRx from "@/assets/clinic-rx.png";

export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "highlight" | "cta";
  text?: string;
  items?: string[];
  label?: string;
  href?: string;
}

export interface TreatmentSection {
  title: string;
  content: ContentBlock[];
}

export interface Treatment {
  name: string;
  slug: string;
  image: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  sections?: TreatmentSection[];
  isExternalLink?: boolean;
  externalHref?: string;
}

export const treatments: Treatment[] = [
  {
    name: "Implantes Dentales",
    slug: "implantes-dentales",
    image: imgImplantes,
    shortDesc: "Solución permanente para la pérdida de piezas dentales.",
    description:
      "Un implante dental es un elemento, generalmente de titanio, que sirve para sustituir la raíz de una pieza dental y que posteriormente nos servirá para poder colocar la corona (funda) que sustituye al diente.\n\nTras la observación en la radiografía y el TAC de la zona a tratar, y dependiendo de las características óseas, indicaciones médicas y hábitos del paciente, se puede hacer de 2 formas:",
    benefits: [
      "Aspecto y función idénticos a dientes naturales",
      "Preservan el hueso maxilar",
      "Duración de por vida con el cuidado adecuado",
      "Sin necesidad de dañar dientes adyacentes",
    ],
    sections: [
      {
        title: "Implantes dentales en 1 día",
        content: [
          {
            type: "paragraph",
            text: "Tras la anestesia, se procede a insertar el implante dental en la zona ósea tratada, dejándolo sumergido a nivel del hueso, por debajo de la encía.",
          },
          {
            type: "paragraph",
            text: "En esta misma cita, también se coloca el pilar provisional mientras realizamos la corona definitiva.",
          },
          {
            type: "highlight",
            text: "La cirugía de 1 fase o carga inmediata acorta el tiempo del tratamiento y es menos molesta.",
          },
        ],
      },
      {
        title: "Cirugía de 2 fases",
        content: [
          {
            type: "paragraph",
            text: "En la cirugía se procede de la misma forma: el implante dental se inserta a nivel de hueso (1ª fase). Pero esta vez, pasado un tiempo aproximado de 2 a 3 meses descubrimos la encía y comprobamos que la integración del implante en el hueso (osteointegración) es correcta.",
          },
          {
            type: "paragraph",
            text: "Si es así, se coloca un pilar provisional o poste de cicatrización para conformar la encía (2ª fase) y dejarla preparada para la colocación del pilar y corona definitivos.",
          },
        ],
      },
      {
        title: "Prótesis sobre implantes",
        content: [
          {
            type: "paragraph",
            text: "Tanto en piezas unitarias como en arcadas completas, estos elementos van fijados a los implantes. Hoy en día, es la solución más empleada y eficaz para resolver la ausencia de dientes.",
          },
          {
            type: "paragraph",
            text: "El material utilizado en la confección y acabado de estas prótesis varía desde el económico acrílico, el convencional cerámico con base de metal o el más estético con base de circonio y acabado cerámico.",
          },
        ],
      },
      {
        title: "¿Buscas lo mejor en implantes dentales?",
        content: [
          {
            type: "paragraph",
            text: "Nuestro centro también dispone de las herramientas necesarias para ofrecerte los implantes dentales de mayor calidad y exactitud en Mataró.",
          },
          {
            type: "cta",
            label: "Conoce la implantología guiada 3D",
            href: "/tratamientos/implantologia-guiada-3d",
          },
        ],
      },
    ],
  },
  {
    name: "Implantología Guiada 3D",
    slug: "implantologia-guiada-3d",
    image: imgImplantologia3D,
    shortDesc: "Precisión milimétrica con tecnología de última generación.",
    description:
      "La implantología guiada es un método de colocación de implantes mediante una férula o plantilla quirúrgica que previamente hemos diseñado a través de una imagen en 3D de su maxilar o mandíbula.",
    benefits: [
      "Cirugía mínimamente invasiva",
      "Mayor precisión en la colocación",
      "Menor tiempo de intervención",
      "Recuperación más rápida",
      "Posibilidad de carga inmediata",
    ],
    sections: [
      {
        title: "¿Cómo es el proceso?",
        content: [
          {
            type: "paragraph",
            text: "Es muy sencillo. En una primera visita, se toma una impresión de la zona dónde deberán colocarse los implantes y se confecciona una férula que ajustará perfectamente en su boca.",
          },
          {
            type: "paragraph",
            text: "Seguidamente se le hará un TAC con esta férula que convertiremos en una imagen tridimensional mediante un programa informático. Una vez hecho esto, podremos planificar con una elevada exactitud la situación, profundidad y ángulo de sus implantes. Tras la planificación, se confeccionará una plantilla quirúrgica que nos permitirá colocar los implantes exactamente en el sitio planificado.",
          },
          {
            type: "paragraph",
            text: "Nuestra clínica utiliza la tecnología de NobelClinician de Nobel Biocare™.",
          },
        ],
      },
      {
        title: "Ventajas de la implantología guiada 3D",
        content: [
          {
            type: "list",
            items: [
              "Rapidez — La plantilla quirúrgica facilita la colocación y disminuye el tiempo de la intervención proporcionando una menor fatiga para el paciente.",
              "Fiabilidad — La imagen 3D nos permite reducir al máximo el riesgo de invadir zonas delicadas al colocar los implantes.",
              "Reduce el tiempo de recuperación — Este tipo de técnica, al ser mínimamente invasiva, disminuye las molestias posteriores a la intervención y facilita la recuperación del paciente.",
              "Evita otras cirugías — En algunos casos en los que el paciente carece de hueso, este método proporciona la exactitud necesaria para colocar los implantes en zonas que, con las técnicas tradicionales, sería prácticamente imposible hacerlo sin recurrir al injerto de hueso.",
              "Carga inmediata — La planificación previa y la férula quirúrgica permiten confeccionar una prótesis provisional perfectamente adaptada que se puede colocar, si no existen contraindicaciones, el mismo día de la intervención.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ortodoncia Damon®",
    slug: "ortodoncia-damon",
    image: imgDamon,
    shortDesc: "Sistema de brackets autoligables para un tratamiento más rápido.",
    description:
      "La Ortodoncia es una especialidad de la Odontología que corrige la malposición de los dientes dando una nueva forma a la arcada, y por tanto, a la sonrisa.\n\nAdemás, al alinear los dientes hacia su posición ideal, no solo conseguimos una mejor estética, sino también menor desgaste dental, mejor masticación y alivio del bruxismo, y menor riesgo de enfermedad periodontal.",
    benefits: [
      "Resultados extraordinarios en sonrisa y cara",
      "Hasta 7 meses menos de tratamiento",
      "Menor número de visitas al ortodoncista",
      "En la mayoría de casos no necesita extracciones",
      "Mayor confort gracias a su diseño innovador",
      "Mayor facilidad para mantener limpia la ortodoncia",
    ],
    sections: [
      {
        title: "¿En qué se diferencia el sistema Damon®?",
        content: [
          {
            type: "paragraph",
            text: "En Clínica Dental Argelia Ferrero nos tomamos muy en serio los avances en nuestro campo. Por ello, ofrecemos a nuestros pacientes el sistema de ortodoncia Damon®, que ha dejado atrás a la ortodoncia convencional.",
          },
          {
            type: "paragraph",
            text: "Este sistema presenta brackets de autoligado de última generación que, como su nombre indica, no necesitan ningún tipo de ligadura (las típicas \"gomitas\" de los brackets) para ejercer su función. Es la técnica estrella de nuestro centro.",
          },
        ],
      },
      {
        title: "Ventajas del sistema Damon® sobre la ortodoncia convencional",
        content: [
          {
            type: "list",
            items: [
              "Resultados extraordinarios en sonrisa y cara — No solo alinea los dientes, sino que le da una mejor forma a la arcada (\"sonrisa amplia\" y mejor perfil).",
              "Menor tiempo de tratamiento — Hasta 7 meses menos en comparación con la ortodoncia convencional.",
              "Menor número de visitas — Los materiales que utilizamos actúan durante más tiempo, lo que se traduce en menos citas.",
              "Sin extracciones en la mayoría de casos — Con la ortodoncia convencional es habitual la extracción de premolares; con Damon® generalmente no es necesario.",
              "Mejora importante del confort — Gracias a su innovador diseño.",
              "Mayor facilidad de limpieza — Los brackets no llevan \"gomitas\" y tienen un mejor acabado.",
            ],
          },
        ],
      },
      {
        title: "¿A qué edad se coloca?",
        content: [
          {
            type: "paragraph",
            text: "Es muy importante visitar al ortodoncista, al menos, a los 6 años, edad en la que empiezan a caerse los dientes de leche y se van reemplazando por los definitivos, para asegurar que más adelante, a los 12 años, cuando erupcionen los segundos molares permanentes, todos los dientes encajen exactamente donde y como deben.",
          },
          {
            type: "paragraph",
            text: "En caso de ser necesario, lo más aconsejable es comenzar la ortodoncia alrededor de los 10 o 12 años.",
          },
        ],
      },
      {
        title: "Ortodoncia en adultos",
        content: [
          {
            type: "paragraph",
            text: "En el caso de los adultos, la ortodoncia va dirigida a corregir una maloclusión consolidada. Hoy en día, con la Ortodoncia Damon® tratamos con gran éxito las irregularidades en adultos.",
          },
          {
            type: "paragraph",
            text: "No existe razón alguna para que una persona adulta renuncie a plantearse la posibilidad de un tratamiento de ortodoncia en estos tiempos de avances e innovadoras técnicas dentales y con un entorno social que está dando gran importancia a la presencia personal.",
          },
        ],
      },
    ],
  },
  {
    name: "Ortodoncia Spark®",
    slug: "ortodoncia-spark",
    image: imgSpark,
    shortDesc: "Alineadores transparentes de alta precisión.",
    description:
      "En Clínica Dental Argelia Ferrero nos gusta estar al tanto de las últimas tendencias en Odontología. Cada vez se está extendiendo más la llamada \"ortodoncia invisible\", y en nuestro centro también llevamos a cabo este tratamiento innovador.",
    benefits: [
      "Prácticamente invisibles",
      "Removibles para comer y cepillarse",
      "Diseñados a medida para máxima comodidad",
      "Tratamiento personalizado con escáner digital",
    ],
    sections: [
      {
        title: "¿En qué consiste?",
        content: [
          {
            type: "paragraph",
            text: "Este tratamiento se basa en una serie de alineadores transparentes que se irán colocando progresivamente (cada 2 semanas) hasta conseguir la corrección y alineación dental deseada. Con esta técnica se pueden corregir muchos casos de malposición dental sin tener que recurrir a los brackets.",
          },
          {
            type: "paragraph",
            text: "Para valorar tu caso, realizaremos fotografías y posteriormente podrás ver en 3D cómo puede evolucionar tu boca hacia una sonrisa ideal. También podremos ofrecerte una estimación de la duración del caso. Ven a nuestro centro a informarte.",
          },
        ],
      },
      {
        title: "Ventajas de la ortodoncia invisible",
        content: [
          {
            type: "list",
            items: [
              "Estética — Con estos alineadores, notarás los resultados pero casi ni se notará lo que llevas puesto, ya que son transparentes.",
              "Removible — Pueden quitarse para comer y limpiarlos con mayor facilidad que la ortodoncia fija.",
              "Cómoda — Los alineadores están diseñados a medida para tu boca, se adaptan a ti.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ortodoncia Infantil",
    slug: "ortodoncia-infantil",
    image: imgOrtodonciaInfantil,
    shortDesc: "Corrección temprana para un desarrollo dental óptimo.",
    description:
      "Cuando hablamos de ortodoncia en nuestros pacientes más pequeños, nos referimos a todos los aparatos diseñados para corregir los malos hábitos que aparecen en edades tempranas y así redirigir el crecimiento óseo (de maxilar y mandíbula).\n\nLo que buscamos es modificar la posición de los dientes junto con el resto de estructuras implicadas durante el crecimiento, ya que es el mejor momento para actuar. De este modo, podremos prevenir o evitar ciertos problemas como la malposición o maloclusión, que pueden empezar a darse antes incluso del recambio de dientes.",
    benefits: [
      "Detección precoz de problemas",
      "Guía del crecimiento mandibular",
      "Prevención de tratamientos complejos",
      "Mejora de la autoestima del niño",
    ],
    sections: [
      {
        title: "Importancia de actuar a tiempo",
        content: [
          {
            type: "highlight",
            text: "Es muy importante saber que si no se actúa y se detiene a tiempo un desarrollo óseo incorrecto o no se corrigen algunos malos hábitos bucales, pueden llevar al niño a malposiciones severas (como el prognatismo mandibular) que incluso podrían requerir cirugía ortognática.",
          },
        ],
      },
      {
        title: "Aparatología en ortodoncia infantil",
        content: [
          {
            type: "paragraph",
            text: "Dependiendo de la edad del paciente y del problema que presente, existen muchos tipos de aparatos. En nuestro centro, personalizamos todos los tratamientos adaptándolos a las necesidades de cada niño/a.",
          },
          {
            type: "list",
            items: [
              "Ortodoncia preventiva — Se emplea cuando se aprecia que puede existir un problema más adelante. Consiste en aparatos removibles.",
              "Ortodoncia interceptiva — Se emplea en pacientes jóvenes con desarrollo craneofacial anormal y problemas de maloclusión. Suelen ser aparatos removibles, pero también hay fijos.",
              "Ortodoncia correctiva — Consiste en corregir las alteraciones maxilofaciales y dentales ya formadas. Se utilizan brackets u aparatos removibles.",
              "Ortodoncia funcional — Combina la ortodoncia interceptiva y la correctiva para corregir el crecimiento maxilofacial anómalo en pacientes en edad de desarrollo.",
            ],
          },
        ],
      },
      {
        title: "¿A qué edad se pueden empezar los tratamientos?",
        content: [
          {
            type: "paragraph",
            text: "La edad adecuada para tratar las maloclusiones varía según el problema y su gravedad. Por lo tanto, es aconsejable acudir a consulta tan pronto se descubra una anomalía.",
          },
          {
            type: "highlight",
            text: "La SEDO (Sociedad Española de Ortodoncia) recomienda que, se detecte o no un problema, se lleve a los niños a una revisión con el ortodoncista al menos a los 6 años.",
          },
        ],
      },
    ],
  },
  {
    name: "Odontopediatría",
    slug: "odontopediatria",
    image: imgOdontopediatria,
    shortDesc: "Cuidado dental especializado para los más pequeños.",
    description:
      "La Odontopediatría es la especialidad de la odontología que se ocupa de la prevención, control, corrección y restauración de los diversos problemas maxilofaciales que les pueden surgir a los más pequeños.\n\nSu finalidad es evitar que los niños padezcan problemas más graves en la edad adulta. Durante su infancia, padres o tutores, con la ayuda del dentista, son responsables de transmitir al pequeño unos correctos hábitos de higiene para asegurar un estado bucodental saludable en el futuro.\n\nEn nuestro centro, podrán comprobar desde el primer día el trato especial que les ofrecemos acorde con su edad: ¡no más miedo al dentista!",
    benefits: [
      "Ambiente adaptado para niños",
      "Prevención desde edades tempranas",
      "Tratamientos especializados pediátricos",
      "Educación en higiene dental",
    ],
    sections: [
      {
        title: "Primera visita al dentista",
        content: [
          {
            type: "paragraph",
            text: "Se recomienda que la primera revisión dental de los niños se produzca cuando se haya cumplido el primer año de vida.",
          },
          {
            type: "paragraph",
            text: "En esta visita, revisaremos el crecimiento maxilar y mandibular, controlaremos que la erupción de los dientes sea correcta y descartaremos la presencia de posibles patologías como la caries. Además, daremos a los padres la información y pautas necesarias para conseguir que sus hijos adquieran una salud oral apropiada.",
          },
          {
            type: "highlight",
            text: "La etapa de los 0 a los 3 años se considera de carácter preventivo. A partir de los 5-6 años, durante el periodo de recambio dental, es aconsejable hacer una revisión cada 6 meses.",
          },
        ],
      },
      {
        title: "Debes saber…",
        content: [
          {
            type: "list",
            items: [
              "Erupción de los dientes de leche — Los dientes suelen erupcionar a partir del sexto mes de vida y forman parte de la primera dentición, que acaba completándose aproximadamente a los 2 años y medio.",
              "Erupción de los dientes permanentes — El comienzo del recambio dentario se da a los 5 o 6 años, edad clave para aumentar la prevención e incorporar buenos hábitos.",
            ],
          },
          {
            type: "highlight",
            text: "Es muy importante que los niños acudan al dentista no solo para controlar la higiene y descartar patologías, sino para corroborar que el recambio de dientes sea correcto.",
          },
        ],
      },
    ],
  },
  {
    name: "Periodoncia",
    slug: "periodoncia",
    image: imgPeriodoncia,
    shortDesc: "La salud de tus encías es vital para la protección de los dientes.",
    description:
      "La Periodoncia es una especialidad odontológica que trata las enfermedades del tejido que sostiene a los dientes (periodonto) y a sus sustitutos (implantes).",
    benefits: [
      "Prevención de la pérdida dental",
      "Tratamiento de encías inflamadas o sangrantes",
      "Regeneración de tejidos dañados",
      "Mantenimiento periodontal personalizado",
    ],
    sections: [
      {
        title: "¿Qué enfermedades trata?",
        content: [
          {
            type: "list",
            items: [
              "Gingivitis — Consiste en una infección superficial que afecta solo a la encía. La inflamación y el sangrado son una clara señal de esta enfermedad.",
              "Periodontitis — Si la gingivitis no se trata y se mantiene mucho tiempo, puede comenzar la periodontitis (popularmente conocida como \"piorrea\"). Es una infección profunda que puede producir la pérdida del diente y afectar a la salud general, como el aumento del riesgo cardiovascular, de diabetes o partos prematuros.",
            ],
          },
        ],
      },
      {
        title: "Signos de alerta",
        content: [
          {
            type: "paragraph",
            text: "Acude a tu dentista si presentas alguno de los siguientes signos y/o síntomas:",
          },
          {
            type: "list",
            items: [
              "Retracción de las encías",
              "Sensibilidad dental",
              "Sangrado de las encías",
              "Halitosis o mal sabor de boca",
              "Movilidad dental",
            ],
          },
        ],
      },
      {
        title: "Tratamientos periodontales",
        content: [
          {
            type: "list",
            items: [
              "Profilaxis (higiene dental) — Se realiza cuando la placa forma cálculos (\"sarro\") que ya no podemos retirar con el cepillo dental en casa. Solo se puede tratar en consulta.",
              "Raspado y alisado radicular (RAR) — Cuando la placa y el sarro se han acumulado durante mucho tiempo y la profilaxis no es suficiente, se recurre al RAR para higienizar las zonas más profundas y evitar problemas mayores.",
              "Cirugía periodontal — Cuando la enfermedad está avanzada y las encías se retraen dejando al diente más expuesto, se recurre a la cirugía para llevar la encía a su posición inicial.",
            ],
          },
          {
            type: "highlight",
            text: "Recuerda: la visita regular a tu odontólogo, la higiene oral y un buen cepillado son las claves para mantener a raya esta enfermedad.",
          },
        ],
      },
    ],
  },
  {
    name: "Estética Dental",
    slug: "estetica-dental",
    image: imgEstetica,
    shortDesc: "La sonrisa perfecta a tu alcance.",
    description:
      "Consiste en combinar las diversas técnicas que tenemos a nuestra disposición — ortodoncia, cirugía, implantes, prótesis, etc. — para conseguir un resultado bucodental y facial armonioso.\n\nEn Clínica Dental Argelia Ferrero cada caso se estudia y planifica detenidamente para, seleccionando y empleando las técnicas necesarias, obtener la mejor solución para el paciente y así mejorar su sonrisa.",
    benefits: [
      "Sonrisa natural y armoniosa",
      "Carillas de última generación",
      "Diseño digital personalizado",
      "Resultados inmediatos y duraderos",
    ],
    sections: [
      {
        title: "Coronas de zirconio",
        content: [
          {
            type: "paragraph",
            text: "Las coronas o fundas de zirconio son la forma de rehabilitación protésica para nuevas sonrisas con la máxima estética dental, en comparación con las convencionales coronas metal-porcelana.",
          },
          {
            type: "paragraph",
            text: "También sirven para reemplazar antiguas coronas o puentes que por el paso del tiempo dejan ver la parte metálica, o para rehabilitar dientes desgastados o muy restaurados.",
          },
          {
            type: "highlight",
            text: "Ofrecen una estética excepcional, comodidad y funcionalidad, y son muy resistentes al desgaste.",
          },
        ],
      },
      {
        title: "Carillas dentales",
        content: [
          {
            type: "paragraph",
            text: "Las carillas son finas láminas que se adhieren a la cara externa del diente y se utilizan para corregir los defectos de las piezas dentales, dando así un aspecto natural al tiempo que proporcionan una mayor estética en la sonrisa.",
          },
          {
            type: "paragraph",
            text: "En nuestro centro en Mataró, disponemos de tecnología CAD-CAM para elaborar carillas dentales de disilicato de litio o porcelana de excelente estética y naturalidad, así como carillas de composite. En muchos casos, al ser las carillas de un grosor mínimo, no necesitamos ni tallar el diente.",
          },
        ],
      },
      {
        title: "Blanqueamiento dental",
        content: [
          {
            type: "paragraph",
            text: "El blanqueamiento dental es una técnica que se emplea para aclarar el color de los dientes y conseguir así una sonrisa más bonita. Empleamos esta técnica en dientes sanos que tan solo necesitan volver a brillar como antes, sin dañar el esmalte.",
          },
          {
            type: "cta",
            label: "Más información sobre blanqueamiento",
            href: "/tratamientos/blanqueamiento",
          },
        ],
      },
    ],
  },
  {
    name: "Blanqueamiento",
    slug: "blanqueamiento",
    image: imgBlanqueamiento,
    shortDesc: "Consigue hasta 4 tonos de aclarado de forma segura.",
    description:
      "El blanqueamiento dental es una técnica que se emplea para aclarar el color de los dientes y conseguir así una sonrisa más bonita.\n\nAdemás de los factores genéticos, con el paso del tiempo, los hábitos alimenticios y el tabaco contribuyen a oscurecer el tono de nuestras piezas.",
    benefits: [
      "Resultados visibles desde la primera sesión",
      "Procedimiento seguro y controlado",
      "Sin daño al esmalte dental",
      "Opciones en clínica, domiciliarias y mixtas",
    ],
    sections: [
      {
        title: "¿Daña al esmalte?",
        content: [
          {
            type: "highlight",
            text: "El blanqueamiento dental profesional no daña el esmalte ni perjudica a las encías. Tan solo existe, en algunos pacientes, cierta sensibilidad post-tratamiento que desaparece al poco tiempo.",
          },
        ],
      },
      {
        title: "¿Cómo se hace?",
        content: [
          {
            type: "paragraph",
            text: "Podemos corregir el tono de los dientes de 3 formas diferentes:",
          },
          {
            type: "list",
            items: [
              "En casa — Mediante unas férulas previamente confeccionadas y un producto blanqueador, puede realizar el tratamiento desde su casa siguiendo unas sencillas pautas.",
              "En clínica — Se utiliza una lámpara LED especial. Dependiendo del tono deseado y de la sensibilidad, se puede hacer en una o varias sesiones de 15 o 20 minutos.",
              "Mixta — Es la más habitual y la que da mejores resultados. Se combina la sesión en clínica con las férulas en casa durante 2 o 3 días.",
            ],
          },
        ],
      },
      {
        title: "¿Quita todas las manchas?",
        content: [
          {
            type: "paragraph",
            text: "Desafortunadamente no. El aclarado más efectivo se consigue con dientes que han amarilleado con el paso del tiempo. En piezas con colores más grisáceos o con problemas de tetraciclina, solo se podrán aclarar algunos tonos. En los casos que el aclarado sea imposible, existen otras soluciones como las carillas.",
          },
        ],
      },
      {
        title: "¿Cuánto dura?",
        content: [
          {
            type: "paragraph",
            text: "El tiempo mínimo es de un año aproximadamente, pero siguiendo las pautas recomendadas puede durar hasta 3 años. Después tan solo necesitarás \"recordatorios\" menos intensos del tratamiento para mantener el tono deseado.",
          },
          {
            type: "highlight",
            text: "Es importante remarcar que el blanqueamiento no sustituye a la limpieza bucal y es imprescindible tener las piezas dentales libres de sarro y una adecuada higiene bucodental.",
          },
        ],
      },
    ],
  },
  {
    name: "Prótesis",
    slug: "protesis",
    image: imgProtesis,
    shortDesc: "Funcionalidad y estética para recuperar tu sonrisa.",
    description:
      "Llamamos prótesis dental al conjunto de elementos que sustituyen o cubren las piezas vitales (dientes) que nos faltan o que están tan deterioradas que es imposible su restauración.",
    benefits: [
      "Materiales biocompatibles de alta calidad",
      "Diseño personalizado y estético",
      "Restauración funcional completa",
      "Opciones fijas, removibles y sobre implantes",
    ],
    sections: [
      {
        title: "Edentulismo: pérdida total o parcial de piezas dentales",
        content: [
          {
            type: "list",
            items: [
              "Prótesis completa convencional — Recurrimos a ella cuando el paciente ya no presenta piezas dentales en boca.",
              "Prótesis removible — También conocidas como \"prótesis metálicas\" o \"esqueléticas\", son prótesis con base metálica colada y cubiertas de resina que simula la encía, cuyos ganchos retenedores se apoyan sobre las piezas remanentes.",
              "Prótesis mixtas — Constituidas por una prótesis fija y una removible, unidas mediante anclajes (\"ataches\") para brindar mayor sujeción y estética al eliminar los ganchos retenedores. Si tu caso lo permite, es la MEJOR OPCIÓN.",
            ],
          },
        ],
      },
      {
        title: "Prótesis sobre implantes",
        content: [
          {
            type: "paragraph",
            text: "Tanto en piezas unitarias como en arcadas completas, estos elementos van fijados a los implantes. En la actualidad es la solución más empleada y eficaz para resolver la ausencia de dientes.",
          },
          {
            type: "paragraph",
            text: "El material empleado varía desde el económico acrílico, el convencional cerámico con base de metal o el más estético con base de circonio y acabado cerámico.",
          },
          {
            type: "cta",
            label: "Más información sobre implantes",
            href: "/tratamientos/implantes-dentales",
          },
        ],
      },
      {
        title: "Pérdida o deterioro de piezas dentales",
        content: [
          {
            type: "list",
            items: [
              "Coronas CEREC® CAD-CAM — Innovadoras fundas unitarias libres de metal diseñadas y realizadas en nuestro centro con la última tecnología CAD-CAM para aportar una estética excepcional.",
              "Coronas metal-cerámica — La más convencional, compatibles en piezas unitarias o puentes, aportan fiabilidad y una gran resistencia.",
            ],
          },
          {
            type: "highlight",
            text: "En nuestro centro disponemos de las últimas tecnologías para elaborar carillas dentales de gran naturalidad, así como fundas de zirconio más estéticas, sin base metálica y con gran resistencia.",
          },
        ],
      },
    ],
  },
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
  {
    name: "Financiación",
    slug: "financiacion",
    image: imgClinicRx,
    shortDesc: "Facilidades de pago adaptadas a tus necesidades.",
    description: "",
    benefits: [],
    isExternalLink: true,
    externalHref: "/financiacion",
  },
];
