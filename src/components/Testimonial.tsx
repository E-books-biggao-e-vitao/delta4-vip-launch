import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
  delay?: number;
}

const Testimonial = ({ name, text, rating, delay = 0 }: TestimonialProps) => {
  return (
    <div 
      className="card-glass rounded-2xl p-6 md:p-8 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4">
        "{text}"
      </p>
      <p className="text-muted-foreground font-medium">{name}</p>
    </div>
  );
};

export default Testimonial;
