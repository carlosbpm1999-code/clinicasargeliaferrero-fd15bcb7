import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Financiación", href: "#financiacion" },
  { label: "Equipo", href: "#equipo" },
  { label: "Nuestro Centro", href: "#centro" },
  { label: "Contacto", href: "#contacto" },
  { label: "Noticias", href: "#noticias" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Clínica Argelia Ferrero" className="h-16 lg:h-20 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:938564659" className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" />
            93 856 46 59
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:938564659" className="px-3 py-2.5 text-sm font-medium text-primary flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              93 856 46 59
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
