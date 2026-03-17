import { motion } from "framer-motion";
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

const ClinicGallery = () => {
  return (
    <section id="centro" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Nuestro Centro
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Instalaciones modernas pensadas para su comodidad y bienestar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
  );
};

export default ClinicGallery;
