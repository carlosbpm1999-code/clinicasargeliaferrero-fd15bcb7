import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import { services, ServiceContentBlock } from "@/data/services";

const RenderBlock = ({ block }: { block: ServiceContentBlock }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-muted-foreground leading-relaxed text-base mb-4">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h4 className="text-lg font-bold font-display text-foreground mb-3">
          {block.text}
        </h4>
      );
    case "list":
      return (
        <ul className="space-y-4 mb-4">
          {block.items?.map((item, i) => {
            const dashIndex = item.indexOf(" — ");
            const hasTitle = dashIndex > -1;
            return (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  {hasTitle ? (
                    <>
                      <strong className="text-foreground">{item.slice(0, dashIndex)}</strong>
                      {" — " + item.slice(dashIndex + 3)}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
    case "highlight":
      return (
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mb-4">
          <p className="text-sm text-foreground leading-relaxed font-medium">
            {block.text}
          </p>
        </div>
      );
    case "cta":
      return (
        <Link
          to={block.href || "/"}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] mb-4"
        >
          {block.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      );
    default:
      return null;
  }
};

const Servicio = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="text-2xl font-bold font-display text-foreground mb-4">
            Servicio no encontrado
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-10 lg:py-14">
          <div className="container">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al inicio
                </Link>
                <h1
                  className="text-3xl lg:text-5xl font-bold text-foreground font-display"
                  style={{ lineHeight: "1.1" }}
                >
                  {service.name}
                </h1>
                <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">
                  {service.shortDesc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-sm max-w-3xl lg:ml-auto"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[260px] md:h-[340px] lg:h-[380px] object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                    Sobre este servicio
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                    {service.description}
                  </p>
                </motion.div>

                {service.sections?.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-bold font-display text-foreground mb-4">
                      {section.title}
                    </h3>
                    {section.content.map((block, bIdx) => (
                      <RenderBlock key={bIdx} block={block} />
                    ))}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="bg-muted rounded-2xl p-6 lg:p-8 sticky top-28">
                  <h3 className="text-lg font-bold font-display text-foreground mb-5">
                    Beneficios
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">
                      ¿Necesitas más información?
                    </p>
                    <a
                      href="tel:938564659"
                      className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Phone className="w-4 h-4" />
                      Pedir cita: 93 856 46 59
                    </a>
                  </div>
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

export default Servicio;
