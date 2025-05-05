
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  onSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card className="product-card overflow-hidden border-none shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="relative product-image-container aspect-square">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image w-full h-full object-cover" 
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary">New</Badge>
            )}
            {product.onSale && product.originalPrice && (
              <Badge className="bg-secondary">-{discount}%</Badge>
            )}
          </div>
          
          {/* Wishlist button */}
          <Button
            variant="ghost" 
            size="icon"
            className={`absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white ${
              isWishlisted ? 'text-red-500' : 'text-gray-500'
            }`}
            onClick={toggleWishlist}
          >
            <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
          </Button>
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center mb-1 text-sm">
            <span className="text-muted-foreground">{product.category}</span>
          </div>
          <h3 className="font-medium text-base line-clamp-2 h-12">{product.name}</h3>
          
          <div className="flex items-center mt-1">
            <div className="flex items-center text-accent">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  className="h-3.5 w-3.5" 
                  fill={i < product.rating ? "currentColor" : "none"} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">({product.rating.toFixed(1)})</span>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <Button size="sm" className="rounded-full" onClick={(e) => e.preventDefault()}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
