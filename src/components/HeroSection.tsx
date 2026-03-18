import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dental-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Recepción Clínica Argelia Ferrero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>
      <div className="container relative z-10 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Salud dental basada en la experiencia y la honestidad
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Cuidando sonrisas en Mataró desde 1990. Su centro dental de confianza con más de 30 años de formación continuada a su servicio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              <a href="https://wa.me/34683606896" target="_blank" rel="noopener noreferrer">
                Pedir Cita
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm">
              <a href="#tratamientos">Ver Tratamientos</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
