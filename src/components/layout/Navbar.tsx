
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Custom Designs", arabic: "تصاميم مخصصة", path: "/category/custom-designs" },
  { name: "Fabrics", arabic: "أقمشة", path: "/category/fabrics" },
  { name: "Wedding", arabic: "فساتين زفاف", path: "/category/wedding" },
  { name: "Men's Wear", arabic: "ملابس رجالية", path: "/category/mens" },
  { name: "Women's Wear", arabic: "ملابس نسائية", path: "/category/womens" },
];

const navLinks = [
  { name: "Home", arabic: "الرئيسية", path: "/" },
  { name: "About Us", arabic: "من نحن", path: "/about" },
  { name: "Contact", arabic: "اتصل بنا", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#800020]">Couture</span>
            <span className="text-2xl font-bold arabic-text text-[#800020]">خياطة</span>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex relative flex-1 mx-10 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search designs..." 
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
                <span className="absolute -top-1 -right-1 bg-[#800020] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:flex">
              <span className="mr-1">Sign In</span>
              <span className="arabic-text text-sm">تسجيل الدخول</span>
            </Button>
            <Button className="hidden md:flex bg-[#800020] hover:bg-[#600018]">
              <span className="mr-1">Register</span>
              <span className="arabic-text text-sm">إنشاء حساب</span>
            </Button>
            
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

        {/* Navigation links - desktop */}
        <nav className="hidden md:block border-t">
          <ul className="flex items-center justify-center space-x-8 py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="text-foreground/80 hover:text-[#800020] font-medium transition-colors flex flex-col items-center"
                >
                  <span>{link.name}</span>
                  <span className="arabic-text text-sm">{link.arabic}</span>
                </Link>
              </li>
            ))}
            <li className="relative group">
              <button className="text-foreground/80 hover:text-[#800020] font-medium transition-colors flex flex-col items-center">
                <span>Categories</span>
                <span className="arabic-text text-sm">الفئات</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#800020]"
                  >
                    <div className="flex justify-between">
                      <span>{category.name}</span>
                      <span className="arabic-text">{category.arabic}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
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
              <Input placeholder="Search designs..." className="pl-10 w-full" />
            </div>
            
            {/* Mobile nav links */}
            <nav>
              <p className="text-sm font-medium text-muted-foreground mb-2">Menu</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="block px-2 py-1 rounded-md hover:bg-muted text-foreground/80 hover:text-[#800020] font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex justify-between">
                        <span>{link.name}</span>
                        <span className="arabic-text">{link.arabic}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile categories */}
            <nav>
              <p className="text-sm font-medium text-muted-foreground mb-2">Categories</p>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={category.path}
                      className="block px-2 py-1 rounded-md hover:bg-muted text-foreground/80 hover:text-[#800020] font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex justify-between">
                        <span>{category.name}</span>
                        <span className="arabic-text">{category.arabic}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile actions */}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" className="w-full">
                <span className="mr-1">Sign In</span>
                <span className="arabic-text text-sm">تسجيل الدخول</span>
              </Button>
              <Button className="w-full bg-[#800020] hover:bg-[#600018]">
                <span className="mr-1">Register</span>
                <span className="arabic-text text-sm">إنشاء حساب</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
