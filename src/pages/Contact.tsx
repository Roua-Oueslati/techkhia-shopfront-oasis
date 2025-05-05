
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Map, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-[#f5f0e6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-[#800020]">Contact Us</h1>
            <h2 className="text-2xl mb-6 arabic-text text-[#800020]">اتصل بنا</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              We'd love to hear from you! Whether you have a question about our services,
              pricing, or would like to schedule a consultation, our team is here to help.
            </p>
            <p className="max-w-2xl mx-auto text-gray-700 arabic-text mt-2">
              يسعدنا أن نسمع منك! سواء كان لديك سؤال حول خدماتنا أو الأسعار أو ترغب في تحديد موعد للاستشارة، فإن فريقنا هنا للمساعدة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#800020]">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    <span className="mr-1">Name</span>
                    <span className="arabic-text text-sm">الاسم</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <span className="mr-1">Email</span>
                    <span className="arabic-text text-sm">البريد الإلكتروني</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <span className="mr-1">Phone</span>
                    <span className="arabic-text text-sm">رقم الهاتف</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">
                    <span className="mr-1">Message</span>
                    <span className="arabic-text text-sm">الرسالة</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[#800020] hover:bg-[#600018]">
                  <span className="mr-2">Send Message</span>
                  <span className="arabic-text">إرسال</span>
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#800020]">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Map className="h-5 w-5 text-[#800020] mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-gray-600">123 Fashion Avenue, Suite 200</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                      <p className="arabic-text text-right text-gray-600 mt-1">
                        123 شارع الأزياء، جناح 200، نيويورك، نيويورك 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#800020] mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#800020] mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-gray-600">info@couturexarabic.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#800020] mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Hours:</p>
                      <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                      <p className="arabic-text text-right text-gray-600 mt-1">
                        الاثنين - الجمعة: 9 صباحًا - 6 مساءً
                        <br />
                        السبت: 10 صباحًا - 4 مساءً
                        <br />
                        الأحد: مغلق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#800020]">Schedule an Appointment</h3>
                <h4 className="arabic-text mb-4 text-[#800020]">حدد موعدًا</h4>
                <p className="text-gray-700 mb-4">
                  For custom tailoring and fittings, we recommend scheduling an appointment with one of our expert tailors.
                </p>
                <p className="arabic-text text-right text-gray-700 mb-4">
                  للخياطة المخصصة والقياسات، نوصي بتحديد موعد مع أحد خياطينا الخبراء.
                </p>
                <Button className="w-full bg-[#800020] hover:bg-[#600018]">
                  <span className="mr-2">Book Appointment</span>
                  <span className="arabic-text">حجز موعد</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
