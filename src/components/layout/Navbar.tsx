
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Laptops", path: "/category/laptops" },
  { name: "Smartphones", path: "/category/smartphones" },
  { name: "Accessories", path: "/category/accessories" },
  { name: "Tablets", path: "/category/tablets" },
  { name: "Smart Home", path: "/category/smart-home" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Sample cart count

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Tech</span>
            <span className="text-2xl font-bold arabic-text text-secondary">خيا</span>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex relative flex-1 mx-10 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 w-full" 
            />
            <Button size="sm" className="absolute right-0 rounded-l-none">
              Search
            </Button>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:flex">Sign In</Button>
            <Button className="hidden md:flex">Register</Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Categories navigation - desktop */}
        <nav className="hidden md:block border-t">
          <ul className="flex items-center justify-center space-x-8 py-3">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  to={category.path}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-6">
            {/* Mobile search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10 w-full" />
            </div>
            
            {/* Mobile categories */}
            <nav>
              <p className="text-sm font-medium text-muted-foreground mb-2">Categories</p>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={category.path}
                      className="block px-2 py-1 rounded-md hover:bg-muted text-foreground/80 hover:text-primary font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile actions */}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
