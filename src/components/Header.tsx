import { useState, useRef, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const treatments = [
  "Implantes Dentales",
  "Implantología Guiada 3D",
  "Ortodoncia Damon®",
  "Ortodoncia Spark®",
  "Ortodoncia Infantil",
  "Odontopediatría",
  "Periodoncia",
  "Estética Dental",
  "Blanqueamiento",
  "Prótesis",
];

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tratamientos", href: "#tratamientos", dropdown: true },
  { label: "Financiación", href: "#financiacion" },
  { label: "Equipo", href: "/equipo", isRoute: true },
  { label: "Nuestro Centro", href: "#centro" },
  { label: "Contacto", href: "#contacto" },
  { label: "Noticias", href: "#noticias" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Clínica Argelia Ferrero" className="h-16 lg:h-20 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <a
                  href={item.href}
                  className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                </a>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                    <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden animate-fade-in">
                      {treatments.map((t) => (
                        <a
                          key={t}
                          href="#tratamientos"
                          onClick={() => setDropdownOpen(false)}
                          className="group/item flex items-center px-4 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:pl-6"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 transition-all duration-300 group-hover/item:bg-primary-foreground group-hover/item:scale-150" />
                          {t}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3"
              >
                {item.label}
              </a>
            )
          )}
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
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="ml-4 border-l-2 border-primary/20 pl-3 mb-1">
                      {treatments.map((t) => (
                        <a
                          key={t}
                          href="#tratamientos"
                          onClick={() => { setMobileOpen(false); setMobileDropdownOpen(false); }}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
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
