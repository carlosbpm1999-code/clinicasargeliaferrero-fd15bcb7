import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import { treatments, ContentBlock } from "@/data/treatments";

const RenderBlock = ({ block }: { block: ContentBlock }) => {
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

const Tratamiento = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="text-2xl font-bold font-display text-foreground mb-4">
            Tratamiento no encontrado
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
        <section className="relative h-[50vh] min-h-[360px] max-h-[500px] overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/#tratamientos"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a tratamientos
                </Link>
                <h1
                  className="text-3xl lg:text-5xl font-bold text-white font-display"
                  style={{ lineHeight: "1.1" }}
                >
                  {treatment.name}
                </h1>
                <p className="mt-3 text-white/80 text-lg max-w-xl">
                  {treatment.shortDesc}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main */}
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                    Sobre este tratamiento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                    {treatment.description}
                  </p>
                </motion.div>

                {/* Extended sections */}
                {treatment.sections?.map((section, idx) => (
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

              {/* Sidebar */}
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
                    {treatment.benefits.map((b) => (
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
                      ¿Te interesa este tratamiento?
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

export default Tratamiento;
