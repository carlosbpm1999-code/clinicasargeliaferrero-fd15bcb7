const Footer = () => {
  return (
    <footer className="bg-muted py-10 pb-24 lg:pb-10 border-t border-border">
      <div className="container text-center">
        <p className="font-semibold text-foreground">Clínica Argelia Ferrero</p>
        <p className="text-sm text-muted-foreground mt-1">
          c/ Joan Larrea, 11 · Mataró - 08302 (Barcelona)
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Tel. 93 856 46 59 · WhatsApp 683 606 896
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Clínica Argelia Ferrero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
