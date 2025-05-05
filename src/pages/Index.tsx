
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import BrandsBanner from "@/components/home/BrandsBanner";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 bg-[#f5f0e6]">
        <div className="container mx-auto px-4 mt-6">
          <HeroBanner />
        </div>
        
        <FeaturedCategories />
        <FeaturedProducts />
        <PromoBanner />
        <BrandsBanner />
        <Testimonials />
        <Newsletter />
      </div>
    </Layout>
  );
};

export default Index;
