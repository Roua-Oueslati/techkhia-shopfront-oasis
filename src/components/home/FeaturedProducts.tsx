
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from '@/components/products/ProductCard';

// Sample product data
const productData: Record<string, Product[]> = {
  trending: [
    {
      id: 1,
      name: "MacBook Pro M3 13-inch",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Laptops",
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 899.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Smartphones",
      rating: 4.7,
      onSale: true
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Noise Cancelling Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Audio",
      rating: 4.9,
      onSale: true
    },
    {
      id: 4,
      name: "Dell XPS 15 OLED Laptop",
      price: 1599.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Laptops",
      rating: 4.6
    }
  ],
  newest: [
    {
      id: 5,
      name: "Google Pixel 7 Pro",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Smartphones",
      rating: 4.5,
      isNew: true
    },
    {
      id: 6,
      name: "Apple iPad Air",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Tablets",
      rating: 4.7,
      isNew: true
    },
    {
      id: 7,
      name: "Microsoft Surface Laptop Studio",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Laptops",
      rating: 4.4,
      isNew: true
    },
    {
      id: 8,
      name: "Samsung 4K Smart TV",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400&h=400",
      category: "TVs",
      rating: 4.6,
      isNew: true
    }
  ],
  popular: [
    {
      id: 9,
      name: "AirPods Pro 2nd Gen",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Audio",
      rating: 4.8
    },
    {
      id: 10,
      name: "DJI Mini 3 Pro Drone",
      price: 699.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Camera",
      rating: 4.7,
      onSale: true
    },
    {
      id: 11,
      name: "Logitech MX Master 3S Mouse",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Accessories",
      rating: 4.9
    },
    {
      id: 12,
      name: "Amazon Echo Show 10",
      price: 249.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Smart Home",
      rating: 4.5,
      onSale: true
    }
  ],
  discounted: [
    {
      id: 13,
      name: "Acer Predator Gaming Laptop",
      price: 999.99,
      originalPrice: 1399.99,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Laptops",
      rating: 4.4,
      onSale: true
    },
    {
      id: 14,
      name: "Bose QuietComfort 45 Headphones",
      price: 229.99,
      originalPrice: 329.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Audio",
      rating: 4.6,
      onSale: true
    },
    {
      id: 15,
      name: "OnePlus 10 Pro",
      price: 699.99,
      originalPrice: 899.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Smartphones",
      rating: 4.3,
      onSale: true
    },
    {
      id: 16,
      name: "LG 27\" 4K UHD Monitor",
      price: 349.99,
      originalPrice: 499.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=400",
      category: "Monitors",
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
          Featured <span className="text-primary">Products</span>
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
