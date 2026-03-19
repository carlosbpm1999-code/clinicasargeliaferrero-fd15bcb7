import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 pb-28 lg:pb-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1 - Marca */}
          <div>
            <h3 className="font-bold text-lg text-foreground">Clínica Argelia Ferrero</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Cuidando sonrisas en Mataró desde 1990. Más de 30 años de experiencia y formación continuada al servicio de su salud dental.
            </p>
          </div>

          {/* Columna 2 - Tratamientos */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Tratamientos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#tratamientos" className="hover:text-primary transition-colors">Implantología</a></li>
              <li><a href="#tratamientos" className="hover:text-primary transition-colors">Ortodoncia</a></li>
              <li><a href="#tratamientos" className="hover:text-primary transition-colors">Estética Dental</a></li>
              <li><a href="#tratamientos" className="hover:text-primary transition-colors">Odontopediatría</a></li>
              <li><a href="#tratamientos" className="hover:text-primary transition-colors">Periodoncia</a></li>
            </ul>
          </div>

          {/* Columna 3 - Horario */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Horario</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>Lunes a Viernes</p>
                  <p className="text-foreground font-medium">09:00 – 13:00 / 16:00 – 20:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>Sábados y Domingos</p>
                  <p className="text-foreground font-medium">Cerrado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>c/ Joan Larrea, 11<br />08302 Mataró (Barcelona)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:938564659" className="hover:text-primary transition-colors">93 856 46 59</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="https://wa.me/34683606896" className="hover:text-primary transition-colors">WhatsApp: 683 606 896</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@clinicaargeliaferrero.com" className="hover:text-primary transition-colors">info@clinicaargeliaferrero.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Clínica Argelia Ferrero. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
