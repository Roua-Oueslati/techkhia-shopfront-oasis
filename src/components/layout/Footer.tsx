
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">Tech</span>
              <span className="text-2xl font-bold arabic-text text-gold-300">خيا</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Your premier destination for quality tech products. Discover innovation at competitive prices.
            </p>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/category/laptops" className="text-primary-foreground/80 hover:text-white transition-colors">Laptops</Link></li>
              <li><Link to="/category/smartphones" className="text-primary-foreground/80 hover:text-white transition-colors">Smartphones</Link></li>
              <li><Link to="/category/accessories" className="text-primary-foreground/80 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/new-arrivals" className="text-primary-foreground/80 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/deals" className="text-primary-foreground/80 hover:text-white transition-colors">Deals & Offers</Link></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Help links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-primary-foreground/80 hover:text-white transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-primary-foreground/80 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Techخيا. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p>Designed with ♥ for tech enthusiasts everywhere</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
