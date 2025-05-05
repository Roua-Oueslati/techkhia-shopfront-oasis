
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/laptops",
    color: "from-teal-700 to-teal-500",
  },
  {
    id: 2,
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/smartphones",
    color: "from-terracotta-700 to-terracotta-500",
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/accessories",
    color: "from-gold-700 to-gold-500",
  },
  {
    id: 4,
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/smart-home",
    color: "from-primary to-teal-500",
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Shop by <span className="text-primary">Category</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.path} key={category.id}>
              <Card className="overflow-hidden h-60 product-card border-none">
                <CardContent className="p-0 h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${category.color} opacity-20 mix-blend-overlay`} />
                  <div className="product-image-container h-full">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="product-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-white font-semibold text-xl">{category.name}</h3>
                    <p className="text-white/80 text-sm mt-1 flex items-center">
                      Browse Collection
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
