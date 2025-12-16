import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "Juliana M.",
    text: "A qualidade das peças é incrível! O tecido é super confortável e o acabamento é impecável. Já comprei 3 macacões e amo todos.",
    rating: 5,
  },
  {
    name: "Rafael S.",
    text: "Finalmente uma marca que entende o que é qualidade. As camisetas não deformam nem depois de várias lavagens. Super recomendo!",
    rating: 5,
  },
  {
    name: "Camila R.",
    text: "Entrei no grupo VIP e consegui pegar uma promoção incrível! As peças chegaram super rápido e vieram até melhores do que nas fotos.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent text-sm md:text-base font-medium tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            O Que Dizem Sobre Nós
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de clientes satisfeitos com a qualidade DELT4
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
