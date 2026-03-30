import { motion } from "framer-motion";
import { CreditCard, FileText, Building2, ChevronRight, Clock, CalendarCheck, BadgePercent } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: BadgePercent, value: "24 meses", label: "Sin intereses" },
  { icon: CalendarCheck, value: "60 meses", label: "Aplazamiento máximo" },
  { icon: Clock, value: "Tú eliges", label: "Cuotas a tu medida" },
];

const documentos = [
  { icon: FileText, titulo: "Asalariado", items: ["DNI", "Última nómina"] },
  { icon: Building2, titulo: "Autónomo", items: ["DNI", "IRPF e IVA trimestral", "Última declaración de la renta"] },
  { icon: FileText, titulo: "Pensionista", items: ["DNI", "Certificado de pensiones"] },
];

const Financiacion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 lg:py-16">
          <div className="container max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Facilidades de pago</span>
              <h1 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">Financiación a tu medida</h1>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Financia tu tratamiento dental de forma cómoda y sencilla, directamente desde nuestra clínica.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="pb-12 lg:pb-16">
          <div className="container max-w-3xl grid sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-primary/5 border border-primary/15 rounded-xl p-6 text-center cursor-default transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              >
                <h.icon className="w-7 h-7 text-primary mx-auto mb-3 transition-colors duration-300 group-hover:text-primary-foreground" />
                <p className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">{h.value}</p>
                <p className="text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-primary-foreground/80">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Documentación */}
        <section className="py-10 lg:py-14 bg-secondary/30">
          <div className="container max-w-3xl">
            <h2 className="text-xl font-bold text-foreground text-center mb-2">¿Qué necesitas?</h2>
            <p className="text-sm text-muted-foreground text-center mb-8">Según tu situación laboral:</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {documentos.map((doc, i) => (
                <motion.div
                  key={doc.titulo}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-background rounded-xl border border-border p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30"
                >
                  <doc.icon className="w-6 h-6 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold text-foreground text-sm mb-2">{doc.titulo}</h3>
                  <ul className="space-y-1.5">
                    {doc.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p className="mt-5 text-xs text-muted-foreground text-center">
              + Recibo o cartilla bancaria con tu número de cuenta.
            </p>
          </div>
        </section>

        {/* Tarjeta de crédito + CTA */}
        <section className="py-10 lg:py-14">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row items-center gap-5 bg-primary/5 border border-primary/15 rounded-xl p-6 transition-all duration-300 hover:bg-primary/10 hover:border-primary/25 cursor-default"
            >
              <CreditCard className="w-10 h-10 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                También puedes fraccionar el pago con tu <span className="font-medium text-foreground">tarjeta de crédito</span> en
                cuotas mensuales a través de tu banco, de forma sencilla y discreta.
              </p>
            </motion.div>

            <div className="text-center mt-8">
              <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                <a href="https://wa.me/34683606896" target="_blank" rel="noopener noreferrer">
                  Solicitar información
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Financiacion;
