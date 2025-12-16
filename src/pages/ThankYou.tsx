import thankYouImage from "@/assets/thank-you-group.jpg";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={thankYouImage}
            alt="Grupo de pessoas felizes DELT4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Obrigado por fazer parte!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Você agora faz parte do nosso grupo VIP exclusivo. Em breve você receberá acesso antecipado às novidades e promoções especiais da DELT4.
          </p>
          <p className="text-base md:text-lg text-white/70">
            Fique de olho no WhatsApp para não perder nenhuma novidade!
          </p>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
