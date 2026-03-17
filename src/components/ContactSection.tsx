import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Contacto</h2>
          <p className="mt-3 text-muted-foreground">Estamos aquí para ayudarle</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Teléfono",
              text: "93 856 46 59",
              href: "tel:938564659",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              text: "683 606 896",
              href: "https://wa.me/34683606896",
            },
            {
              icon: MapPin,
              title: "Dirección",
              text: "c/ Joan Larrea, 11\nMataró - 08302 (Barcelona)",
              href: "https://maps.google.com/?q=c/+Joan+Larrea+11+Mataro+08302",
            },
          ].map((item) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow bg-card"
            >
              <item.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center whitespace-pre-line">{item.text}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
