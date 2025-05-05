
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Tech Enthusiast",
    content: "Techخيا has completely transformed my tech shopping experience. Their curated selection of premium products and seamless buying process make them my go-to for all tech purchases.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "David Chen",
    position: "Software Developer",
    content: "As someone who relies heavily on tech for work, I appreciate Techخيا's focus on quality. Their customer service is outstanding and the products always arrive faster than expected.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    name: "Leila Ahmed",
    position: "Content Creator",
    content: "Finding reliable camera accessories used to be difficult until I discovered Techخيا. They offer competitive prices and their product descriptions are always accurate and helpful.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what tech enthusiasts like you think about Techخيا.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 shadow hover:shadow-lg transition-shadow border-none">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover border-2 border-primary"
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
                    className="h-4 w-4 text-accent" 
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
