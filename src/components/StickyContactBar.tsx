import { Phone, MessageCircle } from "lucide-react";

const StickyContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary border-t border-primary/20">
      <div className="grid grid-cols-2">
        <a
          href="tel:938564659"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
        <a
          href="https://wa.me/34683606896"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-primary-foreground border-l border-primary-foreground/20 hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default StickyContactBar;
