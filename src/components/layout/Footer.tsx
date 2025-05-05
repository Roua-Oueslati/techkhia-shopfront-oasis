
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#800020] text-white border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">Couture</span>
              <span className="text-2xl font-bold arabic-text text-[#f5f0e6]">خياطة</span>
            </Link>
            <p className="text-white/80 text-sm">
              <span className="block mb-1">Your premier destination for custom tailoring and couture designs.</span>
              <span className="block arabic-text">وجهتك المميزة للخياطة المخصصة وتصاميم الأزياء الراقية.</span>
            </p>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              <span className="block">Services</span>
              <span className="arabic-text text-sm">خدماتنا</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/custom-designs" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Custom Designs</span>
                  <span className="arabic-text text-sm">تصاميم مخصصة</span>
                </Link>
              </li>
              <li>
                <Link to="/category/fabrics" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Fabrics</span>
                  <span className="arabic-text text-sm">أقمشة</span>
                </Link>
              </li>
              <li>
                <Link to="/category/wedding" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Wedding</span>
                  <span className="arabic-text text-sm">فساتين زفاف</span>
                </Link>
              </li>
              <li>
                <Link to="/alterations" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Alterations</span>
                  <span className="arabic-text text-sm">تعديلات</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              <span className="block">Company</span>
              <span className="arabic-text text-sm">الشركة</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>About us</span>
                  <span className="arabic-text text-sm">من نحن</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Contact</span>
                  <span className="arabic-text text-sm">اتصل بنا</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Careers</span>
                  <span className="arabic-text text-sm">وظائف</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Blog</span>
                  <span className="arabic-text text-sm">المدونة</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              <span className="block">Help</span>
              <span className="arabic-text text-sm">المساعدة</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>FAQ</span>
                  <span className="arabic-text text-sm">أسئلة متكررة</span>
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Appointments</span>
                  <span className="arabic-text text-sm">المواعيد</span>
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Returns</span>
                  <span className="arabic-text text-sm">المرتجعات</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors flex justify-between">
                  <span>Terms & Conditions</span>
                  <span className="arabic-text text-sm">الشروط والأحكام</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-white/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Couture خياطة. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p>
              <span className="mr-1">Created with passion for exquisite tailoring</span>
              <span className="arabic-text">تم إنشاؤه بشغف للخياطة الراقية</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
