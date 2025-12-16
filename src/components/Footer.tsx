const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-2xl font-bold text-gradient mb-2">DELT4</p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} DELT4. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
