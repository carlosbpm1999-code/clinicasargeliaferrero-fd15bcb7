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
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "683 606 896",
    subtitle: "Respuesta rápida",
    href: "https://wa.me/34683606896",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@clinicaferrero.com",
    subtitle: "Consultas y presupuestos",
    href: "mailto:info@clinicaferrero.com",
  },
];

const quickInfo = [
  { label: "Dirección", value: "Carrer de Joan Larrea, 11, 08302 Mataró, Barcelona" },
  { label: "Horario", value: "Lunes a Viernes · 9:00–13:00 / 16:00–20:00" },
  { label: "Cómo llegar", value: "Zona céntrica de Mataró, con acceso cómodo y servicios cercanos" },
];

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 lg:py-16">
          <div className="container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground font-display" style={{ lineHeight: "1.05" }}>
                Contacto
              </h1>
              <p className="mt-3 text-muted-foreground text-base lg:text-lg max-w-2xl">
                Pide tu cita, resuelve tus dudas o ven a visitarnos en nuestra clínica de Mataró.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-border bg-card p-6 lg:p-8 shadow-sm"
              >
                <div className="space-y-5">
                  {contactItems.map((item, i) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                      className={`group flex items-start gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                        item.title === "Llámanos" ? "hover:border-blue-400/50" :
                        item.title === "WhatsApp" ? "hover:border-emerald-400/50" :
                        "hover:border-violet-400/50"
                      }`}
                    >
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        item.title === "Llámanos" ? "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white" :
                        item.title === "WhatsApp" ? "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white" :
                        "bg-violet-500/10 text-violet-600 group-hover:bg-violet-500 group-hover:text-white"
                      }`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="text-base font-semibold text-foreground">{item.title}</h2>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="mt-1 text-sm font-medium text-foreground break-words">{item.text}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-muted p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium text-foreground">Horario de atención</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lunes a Viernes de 9:00 a 13:00 y de 16:00 a 20:00.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {quickInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                      className="rounded-2xl border border-border bg-background p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{item.label}</p>
                      <p className="text-sm leading-relaxed text-foreground">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="rounded-3xl border border-border bg-card p-3 shadow-sm"
              >
                <div className="rounded-[1.35rem] overflow-hidden border border-border bg-muted group">
                  <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-background/90">
                    <MapPin className="h-4 w-4 text-primary" />
                    <p className="text-sm text-foreground font-medium">Carrer de Joan Larrea, 11 · Mataró</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps?q=Carrer%20de%20Joan%20Larrea%2011%2C%2008302%20Matar%C3%B3%2C%20Barcelona&z=16&output=embed"
                    width="100%"
                    height="520"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Clínica Dental Argelia Ferrero"
                    className="w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
              </motion.div>
            </div>
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
