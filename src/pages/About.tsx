
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-[#f5f0e6]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-[#800020]">About Us</h1>
          <h2 className="text-2xl mb-6 arabic-text text-[#800020]">من نحن</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Our atelier" 
                className="rounded-lg shadow-lg w-full h-80 object-cover" 
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our Story</h3>
              <p className="text-gray-700">
                Founded in 2010, Couture خياطة has been dedicated to the art of fine tailoring and custom couture. Our expert tailors bring decades of experience to create garments that perfectly fit your body and style.
              </p>
              <p className="arabic-text text-right text-gray-700">
                تأسست خياطة كوتور في عام 2010، وكرست نفسها لفن الخياطة الراقية والأزياء المخصصة. يجلب خياطونا المحترفون عقودًا من الخبرة لإنشاء ملابس تناسب جسمك وأسلوبك بشكل مثالي.
              </p>
              <p className="text-gray-700">
                What started as a small family business has grown into a premier destination for those seeking unique, handcrafted clothing that stands apart from mass-produced fashion.
              </p>
            </div>
          </div>
          
          <Separator className="my-10" />
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-[#800020]">Our Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#800020] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h4 className="text-lg font-medium mb-2">Consultation</h4>
                <h5 className="arabic-text mb-3">الاستشارة</h5>
                <p className="text-gray-600 text-sm">We discuss your vision, take measurements, and help you select the perfect fabrics.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#800020] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h4 className="text-lg font-medium mb-2">Design & Fitting</h4>
                <h5 className="arabic-text mb-3">التصميم والقياس</h5>
                <p className="text-gray-600 text-sm">Our designers create patterns and conduct initial fittings to ensure perfection.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#800020] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h4 className="text-lg font-medium mb-2">Creation</h4>
                <h5 className="arabic-text mb-3">الإنشاء</h5>
                <p className="text-gray-600 text-sm">Our master tailors bring your garment to life with meticulous attention to detail.</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-10" />
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-[#800020]">Our Team</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="Team member" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Master Tailor</p>
                  <p className="arabic-text text-sm text-gray-600">خياط رئيسي</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#800020]">Our Promise</h3>
            <h4 className="arabic-text mb-4 text-[#800020]">وعدنا</h4>
            <p className="text-gray-700 mb-4">
              At Couture خياطة, we promise to deliver garments of exceptional quality, perfect fit, and timeless style. Every piece we create is a testament to our commitment to craftsmanship and our respect for the art of tailoring.
            </p>
            <p className="arabic-text text-right text-gray-700">
              في كوتور خياطة، نعدك بتقديم ملابس ذات جودة استثنائية، ومقاس مثالي، وأناقة خالدة. كل قطعة نصنعها هي شهادة على التزامنا بالحرفية واحترامنا لفن الخياطة.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
