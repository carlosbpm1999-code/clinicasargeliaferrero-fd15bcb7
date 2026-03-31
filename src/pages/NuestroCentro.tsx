import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

import imgHallway from "@/assets/clinic-hallway.png";
import imgRoomKids from "@/assets/clinic-room-kids.png";
import imgRoom from "@/assets/clinic-room.png";
import imgOffice from "@/assets/clinic-office.png";
import imgReception from "@/assets/clinic-reception.png";
import imgWaiting from "@/assets/clinic-waiting.png";
import imgRx from "@/assets/clinic-rx.png";

const images = [
  { src: imgReception, alt: "Recepción de la clínica", span: "md:col-span-2 md:row-span-2" },
  { src: imgHallway, alt: "Pasillo y zonas de la clínica", span: "" },
  { src: imgRoomKids, alt: "Sala de odontopediatría", span: "" },
  { src: imgRoom, alt: "Gabinete dental", span: "md:col-span-2" },
  { src: imgWaiting, alt: "Sala de espera", span: "" },
  { src: imgRx, alt: "Sala Rx y gabinetes", span: "md:col-span-2" },
  { src: imgOffice, alt: "Despacho de consultas", span: "" },
];

const features = [
  { title: "Tecnología avanzada", desc: "Equipamiento digital de última generación, incluyendo TAC 3D y tecnología CAD-CAM." },
  { title: "Espacios diferenciados", desc: "Gabinetes especializados para adultos y niños, garantizando la comodidad de todos." },
  { title: "Esterilización rigurosa", desc: "Protocolos de higiene y esterilización que superan los estándares más exigentes." },
  { title: "Ubicación céntrica", desc: "En pleno centro de Mataró, fácilmente accesible en transporte público y con parking cercano." },
];

const NuestroCentro = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
          <img
            src={imgReception}
            alt="Clínica Dental Argelia Ferrero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al inicio
                </Link>
                <h1 className="text-3xl lg:text-5xl font-bold text-white font-display" style={{ lineHeight: "1.1" }}>
                  Nuestro Centro
                </h1>
                <p className="mt-3 text-white/80 text-lg max-w-xl">
                  Instalaciones modernas pensadas para su comodidad y bienestar
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-24">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-6">
                Un espacio diseñado para ti
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto">
                En Clínica Dental Argelia Ferrero hemos creado un entorno acogedor y equipado con la última tecnología para que cada visita sea una experiencia cómoda y segura. Nuestras instalaciones en Mataró cuentan con gabinetes especializados, salas de espera confortables y zonas adaptadas para los más pequeños.
              </p>
            </motion.div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group p-6 rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                >
                  <h3 className="font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-16 lg:pb-24">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold font-display text-foreground text-center mb-10"
            >
              Conoce nuestras instalaciones
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
              {images.map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`group relative rounded-xl overflow-hidden ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium text-primary-foreground">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-16 lg:pb-24">
          <div className="container max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold font-display text-foreground text-center mb-4"
            >
              Cómo llegar
            </motion.h2>
            <p className="text-muted-foreground text-center mb-8">
              c/ Joan Larrea, 11 · 08302 Mataró (Barcelona)
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.3!2d2.4444!3d41.5388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b3e0f1c2d3e4%3A0x1234567890abcdef!2sCarrer%20de%20Joan%20Larrea%2C%2011%2C%2008302%20Matar%C3%B3%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Clínica Dental Argelia Ferrero"
                  className="grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
      <WhatsAppChatButton />
    </div>
  );
};

export default NuestroCentro;
