import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock, Mail, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

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

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground font-display" style={{ lineHeight: "1.1" }}>
                Contacto
              </h1>
              <p className="mt-3 text-muted-foreground text-lg max-w-xl">
                Estamos aquí para resolver cualquier duda y acompañarte en cada paso
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-16 lg:py-24">
          <div className="container">
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
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className={`relative z-10 w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <h3 className="relative z-10 font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="relative z-10 text-sm font-medium text-foreground/80 mb-1">{item.text}</p>
                  <p className="relative z-10 text-xs text-muted-foreground">{item.subtitle}</p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-primary/40 transition-all duration-500 group-hover:w-3/4" />
                </motion.a>
              ))}
            </div>

            {/* Schedule */}
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

        {/* Google Maps */}
        <section className="pb-16 lg:pb-24">
          <div className="container max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold font-display text-foreground text-center mb-4"
            >
              Encuéntranos
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.3!2d2.4444!3d41.5388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b3e0f1c2d3e4%3A0x1234567890abcdef!2sCarrer%20de%20Joan%20Larrea%2C%2011%2C%2008302%20Matar%C3%B3%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Dental Argelia Ferrero"
                className="grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              />
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

export default Contacto;
