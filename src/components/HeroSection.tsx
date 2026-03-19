import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg1 from "@/assets/hero-dental-bg.jpg";
import heroImg2 from "@/assets/hero-dental-bg-2.jpg";
import heroImg3 from "@/assets/hero-dental-bg-3.jpg";
import heroImg4 from "@/assets/hero-dental-bg-4.jpg";

const images = [heroImg1, heroImg2, heroImg3, heroImg4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Slideshow background */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={images[current]}
          alt="Clínica dental Argelia Ferrero"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-foreground/30"
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
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
