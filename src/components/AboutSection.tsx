import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[65ch] mx-auto text-center"
        >
          <p className="text-5xl lg:text-7xl font-bold text-primary/15 mb-6">
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
            <p className="font-medium text-foreground">
              Queremos ser, o seguir siendo, su centro dental de confianza.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
