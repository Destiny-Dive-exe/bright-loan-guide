
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "MBA from IIM Bangalore",
    content: "The loan comparison tool helped me find the best interest rate. The eligibility checker gave me confidence before applying. Got my loan approved in just 2 weeks!",
    rating: 5,
    loanAmount: "₹15 Lakhs",
    avatar: "PS"
  },
  {
    id: 2,
    name: "Arjun Patel",
    course: "MS in Computer Science, Stanford",
    content: "Studying abroad seemed impossible until I found this platform. They guided me through the entire process and helped me secure a loan for my dream university.",
    rating: 5,
    loanAmount: "₹45 Lakhs",
    avatar: "AP"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    course: "MBBS from AIIMS",
    content: "The advisor calls were incredibly helpful. They explained all the terms clearly and helped me understand the repayment options. No hidden surprises!",
    rating: 4,
    loanAmount: "₹8 Lakhs",
    avatar: "SR"
  }
];

const StudentTestimonials = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students sharing their education loan journey and how we helped them achieve their dreams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="interactive-card animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    <p className="text-sm font-medium text-primary">{testimonial.loanAmount} loan approved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div className="animate-bounce-gentle">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-sm text-muted-foreground">Students Helped</div>
          </div>
          <div className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">₹2000Cr+</div>
            <div className="text-sm text-muted-foreground">Loans Disbursed</div>
          </div>
          <div className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Approval Rate</div>
          </div>
          <div className="animate-bounce-gentle" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-primary mb-2">4.7★</div>
            <div className="text-sm text-muted-foreground">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
