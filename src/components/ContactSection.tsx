import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock, Mail, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Llámanos",
    text: "93 856 46 59",
    subtitle: "Atención directa",
    href: "tel:938564659",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-400/50",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "683 606 896",
    subtitle: "Respuesta inmediata",
    href: "https://wa.me/34683606896",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-400/50",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@clinicaferrero.com",
    subtitle: "Consultas y presupuestos",
    href: "mailto:info@clinicaferrero.com",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    borderColor: "hover:border-violet-400/50",
  },
  {
    icon: MapPin,
    title: "Visítanos",
    text: "c/ Joan Larrea, 11",
    subtitle: "Mataró · 08302 (Barcelona)",
    href: "https://maps.google.com/?q=c/+Joan+Larrea+11+Mataro+08302",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
    borderColor: "hover:border-rose-400/50",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            ¿Hablamos?
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-md mx-auto">
            Estamos aquí para resolver cualquier duda y acompañarte en cada paso
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative flex flex-col items-center text-center p-7 rounded-2xl border border-border/60 bg-card backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.02] ${item.borderColor}`}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Arrow indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
                <item.icon className={`w-6 h-6 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`} />
              </div>

              {/* Text */}
              <h3 className="relative z-10 font-bold text-foreground text-lg mb-1 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="relative z-10 text-sm font-medium text-foreground/80 mb-1">
                {item.text}
              </p>
              <p className="relative z-10 text-xs text-muted-foreground">
                {item.subtitle}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-primary/40 transition-all duration-500 group-hover:w-3/4" />
            </motion.a>
          ))}
        </div>

        {/* Schedule banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-5 px-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground text-center">
              <span className="font-semibold text-foreground">Horario:</span>{" "}
              Lunes a Viernes · 9:00–13:00 / 16:00–20:00
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
