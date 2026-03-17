import { motion } from "framer-motion";
import imgHallway from "@/assets/clinic-hallway.png";
import imgRoom from "@/assets/clinic-room.png";

const AboutSection = () => {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-xl overflow-hidden shadow-card aspect-[3/4]">
              <img src={imgHallway} alt="Interior de la clínica" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-card aspect-[3/4] mt-8">
              <img src={imgRoom} alt="Gabinete dental" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-5xl lg:text-7xl font-bold text-primary/15 mb-4">
              Desde 1990
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6]">
              <p>
                Desde que nuestro centro abrió sus puertas en 1990, la mejora de la calidad de los servicios e instalaciones ha sido una constante para nosotros y ponemos a su disposición toda la experiencia y formación continuada de nuestro equipo para que pueda mantener, o volver a tener, una buena salud dental.
              </p>
              <p>
                Mantenemos, en el nivel más exigente, un compromiso de calidad, garantía y honestidad en todos los tratamientos e intervenciones que realizamos.
              </p>
              <p className="font-medium text-foreground text-lg">
                Queremos ser, o seguir siendo, su centro dental de confianza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
