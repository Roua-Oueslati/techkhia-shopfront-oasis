
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: "Custom Suits",
    image: "https://images.unsplash.com/photo-1598808503746-f34cfb6e1688?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/custom-suits",
    color: "from-[#800020] to-[#600018]",
  },
  {
    id: 2,
    name: "Evening Dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/evening-dresses",
    color: "from-[#800020]/80 to-[#600018]/80",
  },
  {
    id: 3,
    name: "Traditional Wear",
    image: "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/traditional",
    color: "from-[#800020]/60 to-[#600018]/60",
  },
  {
    id: 4,
    name: "Wedding Collection",
    image: "https://images.unsplash.com/photo-1593169158019-e33d5a325c4c?auto=format&fit=crop&q=80&w=400&h=400",
    path: "/category/wedding",
    color: "from-[#800020]/70 to-[#600018]/70",
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Explore Our <span className="text-[#800020]">Collections</span>
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
