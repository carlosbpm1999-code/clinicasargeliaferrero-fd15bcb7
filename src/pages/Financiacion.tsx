import { motion } from "framer-motion";
import { CreditCard, FileText, Building2, ChevronRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const documentos = [
  {
    icon: FileText,
    titulo: "Trabajador por cuenta ajena",
    items: ["DNI", "Última nómina"],
  },
  {
    icon: Building2,
    titulo: "Autónomo",
    items: ["DNI", "IRPF e IVA trimestral", "Última declaración de la renta"],
  },
  {
    icon: FileText,
    titulo: "Pensionista",
    items: ["DNI", "Certificado de pensiones"],
  },
];

const Financiacion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero compacto */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/30 py-14 lg:py-20">
          <div className="container max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Facilidades de pago
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Financiación a tu medida
              </h1>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                En Clínica Dental Argelia Ferrero nos hacemos cargo de la importancia de realizar
                los tratamientos odontológicos que necesita cada paciente para mejorar tanto su
                salud bucodental como su calidad de vida.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mensaje principal */}
        <section className="py-12 lg:py-16">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/15 rounded-2xl p-8 lg:p-10 text-center"
            >
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-foreground text-lg font-medium leading-relaxed">
                Ofrecemos a nuestros pacientes la posibilidad de financiar sus tratamientos para
                que los puedan pagar lo más cómodamente posible.
              </p>
              <p className="mt-4 text-primary font-semibold text-xl">
                Tú eliges el número de cuotas y, por tanto, el importe mensual.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documentación necesaria */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground text-center mb-3"
            >
              Documentación necesaria
            </motion.h2>
            <p className="text-muted-foreground text-center mb-10">
              Para solicitar la financiación, tan solo deberás aportar:
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {documentos.map((doc, i) => (
                <motion.div
                  key={doc.titulo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <doc.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">{doc.titulo}</h3>
                  <ul className="space-y-2">
                    {doc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Requisito común */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 bg-background rounded-xl border border-border p-5 text-center"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">En todos los casos:</span>{" "}
                Un recibo o la cartilla de tu banco donde figure el número de cuenta de la que
                eres titular.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Proceso + Tarjeta de crédito */}
        <section className="py-12 lg:py-16">
          <div className="container max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-foreground text-lg leading-relaxed">
                Con esto, a través de una sencilla operativa desde nuestro centro, podemos
                solicitar la financiación que más te convenga.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/5 to-accent/10 border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
            >
              <CreditCard className="w-12 h-12 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pago con tarjeta de crédito</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Si dispones de tarjeta de crédito y efectúas el pago con ella, también existe la
                  posibilidad de pagar en cuotas mensuales. Esta opción se puede hacer, si tu banco
                  permite la operativa, a través de internet de forma sencilla y discreta.
                </p>
              </div>
            </motion.div>

            <div className="text-center pt-4">
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
