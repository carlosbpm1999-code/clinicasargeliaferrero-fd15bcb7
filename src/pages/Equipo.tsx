import { motion } from "framer-motion";
import { Award, Stethoscope, UserRound, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

interface Doctor {
  name: string;
  col?: string;
  role: string;
  specialties?: string[];
  type: "doctor" | "staff";
}

const doctors: Doctor[] = [
  {
    name: "Dra. Argelia Ferrero Romero",
    col: "Col. nº 1978 COEC",
    role: "Odontóloga y Directora del Centro",
    specialties: [
      "Ortodoncia pediátrica y de adultos",
      "Estética dental",
      "Prótesis",
      "Implantología",
    ],
    type: "doctor",
  },
  {
    name: "Dr. Gabriel Demichelis Arneodo",
    col: "Col. nº 2727 COEC",
    role: "Odontólogo",
    specialties: ["Implantología", "Cirugía", "Periodoncia", "Prótesis"],
    type: "doctor",
  },
  {
    name: "Dr. Fadi Ghadban Mrad",
    col: "Col. nº 5567 COEC",
    role: "Odontólogo",
    specialties: ["Implantología", "Cirugía", "Prótesis"],
    type: "doctor",
  },
  {
    name: "Dra. Esther Guirao Valenzuela",
    col: "Col. nº 8170 COEC",
    role: "Odontóloga",
    specialties: ["Odontopediatría", "Prótesis y estética dental"],
    type: "doctor",
  },
];

const staff: Doctor[] = [
  {
    name: "Dra. Paula Álvarez Ferrero",
    col: "Col. nº 8270 COEC",
    role: "Administración clínica / Gerencia",
    type: "staff",
  },
  {
    name: "Juan Ant. Álvarez Martínez",
    role: "Gerencia",
    type: "staff",
  },
  {
    name: "Karim El Arguioui Molina",
    role: "Atención al paciente",
    type: "staff",
  },
  {
    name: "Adrián Álvarez Ferrero",
    role: "Auxiliar clínico",
    type: "staff",
  },
  {
    name: "Analía Ferrero Romero",
    role: "Higienista dental",
    type: "staff",
  },
  {
    name: "Pilar Matas Mínguez",
    role: "Higienista dental",
    type: "staff",
  },
  {
    name: "Giada Bruni González",
    role: "Higienista dental",
    type: "staff",
  },
  {
    name: "Anna Serra Casas",
    role: "Auxiliar dental",
    type: "staff",
  },
  {
    name: "Miriam Castillo Ruz",
    role: "Auxiliar administrativa y dental",
    type: "staff",
  },
  {
    name: "Clara Serrano Jiménez",
    role: "Auxiliar dental",
    type: "staff",
  },
];

const getInitials = (name: string) => {
  const parts = name.replace(/Dra?\.\s*/g, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const DoctorCard = ({ person, index }: { person: Doctor; index: number }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="group relative bg-card rounded-2xl border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(210_100%_35%/0.15)]"
  >
    {/* Accent line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-primary rounded-full transition-all duration-500 group-hover:w-2/3" />

    {/* Avatar */}
    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
      <span className="text-xl font-display font-bold text-primary">
        {getInitials(person.name)}
      </span>
    </div>

    <h3 className="text-lg font-display font-bold text-foreground text-center mb-1">
      {person.name}
    </h3>

    {person.col && (
      <p className="text-xs text-muted-foreground text-center mb-3 flex items-center justify-center gap-1.5">
        <Award className="w-3.5 h-3.5 text-primary/60" />
        {person.col}
      </p>
    )}

    <p className="text-sm font-medium text-primary text-center mb-5">
      {person.role}
    </p>

    {person.specialties && (
      <div className="space-y-2">
        {person.specialties.map((s) => (
          <div
            key={s}
            className="flex items-center gap-2.5 text-sm text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 transition-colors duration-300 group-hover:bg-primary" />
            {s}
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const StaffCard = ({ person, index }: { person: Doctor; index: number }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="group flex items-center gap-4 bg-card rounded-xl border border-border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_hsl(210_100%_35%/0.12)] hover:border-primary/20"
  >
    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-110">
      <span className="text-sm font-display font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
        {getInitials(person.name)}
      </span>
    </div>
    <div>
      <h4 className="text-sm font-display font-semibold text-foreground">
        {person.name}
      </h4>
      {person.col && (
        <p className="text-xs text-muted-foreground">{person.col}</p>
      )}
      <p className="text-xs text-primary font-medium mt-0.5">{person.role}</p>
    </div>
  </motion.div>
);

const Equipo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-10 lg:py-14 bg-muted overflow-hidden">
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-2xl lg:text-4xl font-bold text-foreground font-display mb-3" style={{ lineHeight: "1.1" }}>
                Profesionales a tu servicio
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
                Más de 30 años de experiencia avalan a nuestro equipo multidisciplinar, comprometido con tu salud dental.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-display">
                Equipo Médico
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.map((d, i) => (
                <DoctorCard key={d.name} person={d} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Staff */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UserRound className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-display">
                Equipo Clínico y Administración
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {staff.map((s, i) => (
                <StaffCard key={s.name} person={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
      <WhatsAppChatButton />
    </div>
  );
};

export default Equipo;
