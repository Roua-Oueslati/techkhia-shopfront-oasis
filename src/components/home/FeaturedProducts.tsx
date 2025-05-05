
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from '@/components/products/ProductCard';

// Sample product data
const productData: Record<string, Product[]> = {
  trending: [
    {
      id: 1,
      name: "Tailored Italian Wool Suit",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Suits",
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Silk Evening Gown",
      price: 599.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Dresses",
      rating: 4.7,
      onSale: true
    },
    {
      id: 3,
      name: "Handcrafted Embroidered Kaftan",
      price: 349.99,
      originalPrice: 459.99,
      image: "https://images.unsplash.com/photo-1594427875262-ab303ee95e10?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Traditional",
      rating: 4.9,
      onSale: true
    },
    {
      id: 4,
      name: "Bespoke Linen Summer Dress",
      price: 289.99,
      image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Dresses",
      rating: 4.6
    }
  ],
  newest: [
    {
      id: 5,
      name: "Designer Tuxedo with Satin Lapel",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Formal Wear",
      rating: 4.5,
      isNew: true
    },
    {
      id: 6,
      name: "Custom Bridal Gown",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1596451190630-186a46d2df9c?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Wedding",
      rating: 4.7,
      isNew: true
    },
    {
      id: 7,
      name: "Premium Cotton Business Shirt",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Shirts",
      rating: 4.4,
      isNew: true
    },
    {
      id: 8,
      name: "Embroidered Silk Abaya",
      price: 459.99,
      image: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Traditional",
      rating: 4.6,
      isNew: true
    }
  ],
  popular: [
    {
      id: 9,
      name: "Three-Piece Cashmere Suit",
      price: 1249.99,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Suits",
      rating: 4.8
    },
    {
      id: 10,
      name: "Handmade Leather Dress Shoes",
      price: 349.99,
      originalPrice: 429.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Accessories",
      rating: 4.7,
      onSale: true
    },
    {
      id: 11,
      name: "Pure Silk Tie Collection",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1598615821969-e4e0fdc50b92?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Accessories",
      rating: 4.9
    },
    {
      id: 12,
      name: "Embroidered Wedding Sherwani",
      price: 899.99,
      originalPrice: 1099.99,
      image: "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Wedding",
      rating: 4.5,
      onSale: true
    }
  ],
  discounted: [
    {
      id: 13,
      name: "Summer Collection Linen Suit",
      price: 499.99,
      originalPrice: 699.99,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Suits",
      rating: 4.4,
      onSale: true
    },
    {
      id: 14,
      name: "Designer Evening Clutch",
      price: 129.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Accessories",
      rating: 4.6,
      onSale: true
    },
    {
      id: 15,
      name: "Cocktail Dress with Beading",
      price: 349.99,
      originalPrice: 499.99,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Dresses",
      rating: 4.3,
      onSale: true
    },
    {
      id: 16,
      name: "Hand-stitched Pocket Square Set",
      price: 49.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1614981651055-9b311590563f?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Accessories",
      rating: 4.5,
      onSale: true
    }
  ]
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured <span className="text-[#800020]">Collections</span>
        </h2>
        
        <Tabs 
          defaultValue="trending" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="newest">New Arrivals</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="discounted">On Sale</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(productData).map(([key, products]) => (
            <TabsContent 
              key={key} 
              value={key}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
