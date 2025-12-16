import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const products = [
  { src: collection1, alt: "Coleção DELT4 - Macacões fitness" },
  { src: collection2, alt: "Coleção DELT4 - Looks fitness" },
  { src: product1, alt: "Camiseta DELT4 Classic" },
  { src: product2, alt: "Camiseta DELT4 Oversized" },
];

const ProductGallery = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent text-sm md:text-base font-medium tracking-widest uppercase mb-4 block">
            Nova Coleção
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            Peças Exclusivas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conforto, estilo e qualidade premium. Conheça as peças que vão transformar seu guarda-roupa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[4/3] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
