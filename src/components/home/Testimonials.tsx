
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Bride",
    content: "Techخياطة created my dream wedding dress with impeccable attention to detail. The craftsmanship exceeded my expectations, and the fitting process was so personalized and professional.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Ahmed Al-Mansour",
    position: "Business Executive",
    content: "I've been getting my suits exclusively from Techخياطة for years. The quality of fabrics and precision of fit is unmatched. Their attention to detail makes all the difference in professional settings.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    name: "Leila Ahmed",
    position: "Fashion Designer",
    content: "As someone in the fashion industry, I have high standards for tailoring. Techخياطة consistently delivers exquisite garments with remarkable craftsmanship and innovative designs.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f5f0e6]/70">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          What Our <span className="text-[#800020]">Clients</span> Say
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what our valued clients think about our bespoke tailoring services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 shadow hover:shadow-lg transition-shadow border-none">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover border-2 border-[#800020]"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-[#800020]" 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <p className="text-sm leading-relaxed">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
