import { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppChatButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "34683606896";
  const defaultMessage = "Hola, me gustaría solicitar información sobre sus tratamientos.";

  const handleSend = () => {
    const text = message.trim() || defaultMessage;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 rounded-xl shadow-lg border border-border bg-card overflow-hidden"
          >
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                <span className="text-sm font-semibold text-white">WhatsApp</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-muted rounded-lg p-3 mb-3">
                <p className="text-sm text-foreground font-medium">Clínica Argelia Ferrero</p>
                <p className="text-xs text-muted-foreground mt-1">
                  ¡Hola! 👋 ¿En qué podemos ayudarle? Escríbanos su consulta.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <button
                  onClick={handleSend}
                  className="rounded-lg bg-[#25D366] px-3 py-2 text-white hover:bg-[#20BD5A] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors flex items-center justify-center ml-auto"
        aria-label="Abrir chat de WhatsApp"
      >
        {open ? <X className="w-6 h-6" /> : <WhatsAppIcon className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default WhatsAppChatButton;
