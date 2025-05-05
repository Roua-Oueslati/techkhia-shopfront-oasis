
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideData = [
  {
    id: 1,
    title: "Bespoke Tailoring",
    subtitle: "Handcrafted custom garments that reflect your unique style and personality",
    image: "https://images.unsplash.com/photo-1558931269-381a5393b1ad?auto=format&fit=crop&q=80&w=1200&h=600",
    cta: "Book Consultation",
    path: "/services/custom"
  },
  {
    id: 2,
    title: "Premium Fabrics",
    subtitle: "Explore our curated collection of luxurious fabrics from around the world",
    image: "https://images.unsplash.com/photo-1584304635456-ecd5bed8c7cc?auto=format&fit=crop&q=80&w=1200&h=600",
    cta: "Browse Collection",
    path: "/category/fabrics"
  },
  {
    id: 3,
    title: "Wedding Collection",
    subtitle: "Make your special day unforgettable with our custom bridal and groom wear",
    image: "https://images.unsplash.com/photo-1562348503-e8e77809f58d?auto=format&fit=crop&q=80&w=1200&h=600",
    cta: "View Collection",
    path: "/category/wedding"
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slideData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-6">
                <div className="max-w-lg text-white space-y-6 animate-slide-up">
                  <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                  <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>
                  <Button size="lg" className="mt-4 bg-[#800020] hover:bg-[#600018] text-white">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
