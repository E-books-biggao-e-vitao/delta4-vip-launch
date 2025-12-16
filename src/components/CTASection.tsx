import { Gift, Zap, Users } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const benefits = [
  {
    icon: Zap,
    title: "Acesso Antecipado",
    description: "Seja o primeiro a conhecer os lançamentos",
  },
  {
    icon: Gift,
    title: "Promoções Exclusivas",
    description: "Descontos especiais só para membros VIP",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Faça parte de um grupo seleto de clientes",
  },
];

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
          Faça Parte do Grupo VIP
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Não perca a oportunidade de garantir as melhores peças com condições exclusivas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <benefit.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <WhatsAppButton size="large" />
      </div>
    </section>
  );
};

export default CTASection;
