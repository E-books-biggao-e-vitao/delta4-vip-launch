import heroImage from "@/assets/hero-group.jpg";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DELT4 Nova Coleção"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-0">
        <div className="animate-fade-in-up">
          <span className="inline-block text-accent text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 animate-pulse-soft">
            Lançamento Exclusivo
          </span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-6 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          DELT4
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-foreground/80 mb-4 font-light animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Nova Coleção 2025
        </p>
        
        <p 
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          Entre no nosso grupo VIP e tenha acesso antecipado às novidades, 
          promoções exclusivas e descontos especiais.
        </p>
        
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <WhatsAppButton size="large" />
        </div>

        <p 
          className="text-sm text-muted-foreground mt-6 animate-fade-in-up"
          style={{ animationDelay: "750ms" }}
        >
          +500 membros no grupo
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
