import { useState, useRef, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { treatments } from "@/data/treatments";

const serviciosItems = [
  { label: "Ortopantomografía y Telerradiografía", href: "/servicios/radiologia-digital" },
  { label: "Financiación", href: "/financiacion" },
];

const navItems = [
  { label: "Inicio", href: "/", isRoute: true },
  { label: "Tratamientos", href: "#tratamientos", dropdown: "treatments" },
  { label: "Servicios", href: "#servicios", dropdown: "servicios" },
  { label: "Equipo", href: "/equipo", isRoute: true },
  { label: "Nuestro Centro", href: "/nuestro-centro", isRoute: true },
  { label: "Contacto", href: "/contacto", isRoute: true },
  { label: "Noticias", href: "#noticias" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getDropdownItems = (key: string) => {
    if (key === "treatments") {
      return treatments
        .filter((t) => t.slug !== "radiologia-digital")
        .map((t) => ({ label: t.name, href: `/tratamientos/${t.slug}` }));
    }
    if (key === "servicios") return serviciosItems;
    return [];
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Clínica Argelia Ferrero" className="h-16 lg:h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.dropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === item.dropdown ? "rotate-180" : ""}`} />
                </span>

                {openDropdown === item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                    <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden animate-fade-in">
                      {getDropdownItems(item.dropdown).map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group/item flex items-center px-4 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:pl-6"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 transition-all duration-300 group-hover/item:bg-primary-foreground group-hover/item:scale-150" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (item as any).isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3"
              >
                {item.label}
              </Link>
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
                    onClick={() => setMobileDropdown(mobileDropdown === item.dropdown ? null : (item.dropdown || null))}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === item.dropdown ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdown === item.dropdown && (
                    <div className="ml-4 border-l-2 border-primary/20 pl-3 mb-1">
                      {getDropdownItems(item.dropdown).map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (item as any).isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
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