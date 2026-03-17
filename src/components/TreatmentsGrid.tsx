import { motion } from "framer-motion";

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

const treatments = [
  { name: "Implantes Dentales", image: imgImplantes },
  { name: "Implantología Guiada 3D", image: imgImplantologia3D },
  { name: "Ortodoncia Damon®", image: imgDamon },
  { name: "Ortodoncia Spark®", image: imgSpark },
  { name: "Ortodoncia Infantil", image: imgOrtodonciaInfantil },
  { name: "Odontopediatría", image: imgOdontopediatria },
  { name: "Periodoncia", image: imgPeriodoncia },
  { name: "Estética Dental", image: imgEstetica },
  { name: "Blanqueamiento", image: imgBlanqueamiento },
  { name: "Prótesis", image: imgProtesis },
];

const TreatmentsGrid = () => {
  return (
    <section id="tratamientos" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Tratamientos y Servicios
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Ofrecemos una amplia gama de tratamientos con los últimos avances en odontología.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {treatments.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden shadow-card bg-card transition-all duration-500 group-hover:shadow-card-hover group-hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.7]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    <span className="text-primary-foreground text-sm font-semibold tracking-wide px-4 py-2 rounded-full border border-primary-foreground/30 backdrop-blur-sm">
                      Ver más
                    </span>
                  </div>
                </div>
                <div className="p-3 lg:p-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <h3 className="text-sm font-semibold text-center leading-tight transition-colors duration-300 group-hover:text-primary-foreground">
                    {t.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;
