
import { Button } from "@/components/ui/button";

export default function PromoBanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric-pattern opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-primary to-teal-700 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 max-w-lg">
              <span className="inline-block text-white/80 text-sm font-medium px-3 py-1 mb-4 bg-white/10 rounded-full">Limited Time Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Summer Tech Sale
              </h2>
              <p className="text-white/90 mb-6">
                Get up to 40% off on selected premium tech products. From cutting-edge smartphones to powerful laptops - upgrade your tech game today!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  View Deals
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {/* Countdown elements */}
                {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, i) => (
                  <div key={unit} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                    <span className="block text-white text-3xl md:text-4xl font-bold">
                      {[5, 12, 45, 32][i]}
                    </span>
                    <span className="block text-white/70 text-sm mt-1">{unit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
