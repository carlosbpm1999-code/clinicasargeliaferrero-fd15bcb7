import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Award, Stethoscope, UserRound } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

interface Person {
  name: string;
  col?: string;
  role: string;
  specialties?: string[];
}

const doctors: Person[] = [
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
  },
  {
    name: "Dr. Gabriel Demichelis Arneodo",
    col: "Col. nº 2727 COEC",
    role: "Odontólogo",
    specialties: ["Implantología", "Cirugía", "Periodoncia", "Prótesis"],
  },
  {
    name: "Dr. Fadi Ghadban Mrad",
    col: "Col. nº 5567 COEC",
    role: "Odontólogo",
    specialties: ["Implantología", "Cirugía", "Prótesis"],
  },
  {
    name: "Dra. Esther Guirao Valenzuela",
    col: "Col. nº 8170 COEC",
    role: "Odontóloga",
    specialties: ["Odontopediatría", "Prótesis y estética dental"],
  },
];

const staff: Person[] = [
  { name: "Dra. Paula Álvarez Ferrero", col: "Col. nº 8270 COEC", role: "Administración clínica / Gerencia" },
  { name: "Juan Ant. Álvarez Martínez", role: "Gerencia" },
  { name: "Karim El Arguioui Molina", role: "Atención al paciente" },
  { name: "Adrián Álvarez Ferrero", role: "Auxiliar clínico" },
  { name: "Analía Ferrero Romero", role: "Higienista dental" },
  { name: "Pilar Matas Mínguez", role: "Higienista dental" },
  { name: "Giada Bruni González", role: "Higienista dental" },
  { name: "Anna Serra Casas", role: "Auxiliar dental" },
  { name: "Miriam Castillo Ruz", role: "Auxiliar administrativa y dental" },
  { name: "Clara Serrano Jiménez", role: "Auxiliar dental" },
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
      delay: i * 0.07,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

/* ── Atropos-style 3D tilt (pure CSS transform, no extra lib needed) ── */
function useAtroposTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}

/* ── Unified Card (same visual weight for doctors & staff) ── */
const PersonCard = ({ person, index }: { person: Person; index: number }) => {
  const tilt = useAtroposTilt();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group relative bg-card rounded-2xl border border-border p-7 transition-[box-shadow] duration-500 hover:shadow-[0_24px_64px_-16px_hsl(var(--primary)/0.18)] will-change-transform"
        style={{
          transition: "transform 0.25s cubic-bezier(.16,1,.3,1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-primary rounded-full transition-all duration-500 group-hover:w-2/3" />

        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
          <span className="text-lg font-display font-bold text-primary">
            {getInitials(person.name)}
          </span>
        </div>

        <h3 className="text-base font-display font-bold text-foreground text-center mb-1 leading-tight">
          {person.name}
        </h3>

        {person.col && (
          <p className="text-xs text-muted-foreground text-center mb-2 flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-primary/60" />
            {person.col}
          </p>
        )}

        <p className="text-sm font-medium text-primary text-center mb-4">
          {person.role}
        </p>

        {person.specialties && (
          <div className="space-y-1.5">
            {person.specialties.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 transition-colors duration-300 group-hover:bg-primary" />
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Equipo = () => (
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
            <h1
              className="text-2xl lg:text-4xl font-bold text-foreground font-display mb-3"
              style={{ lineHeight: "1.1" }}
            >
              Profesionales a tu servicio
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Más de 30 años de experiencia avalan a nuestro equipo
              multidisciplinar, comprometido con tu salud dental.
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
            className="flex items-center gap-3 mb-10"
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
              <PersonCard key={d.name} person={d} index={i} />
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
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <UserRound className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-display">
              Equipo Clínico y Administración
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((s, i) => (
              <PersonCard key={s.name} person={s} index={i} />
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

export default Equipo;
