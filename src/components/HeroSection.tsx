
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, GraduationCap, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header with trust indicators */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EduLoan</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find the Right Education Loan for You
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Compare loans from trusted partners, check eligibility instantly, and start your educational journey with confidence.
          </p>

          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">50,000+ Students Helped</span>
            </div>
          </div>
        </div>

        {/* Search and filter section */}
        <div className="card-gradient rounded-2xl p-8 shadow-lg animate-scale-in">
          <h3 className="text-xl font-semibold mb-6 text-center">Start Your Search</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Course Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Study Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
              </SelectContent>
            </Select>

            <Input 
              placeholder="Loan Amount (₹)" 
              className="h-12"
              type="number"
            />

            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Repayment Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 years</SelectItem>
                <SelectItem value="7">7 years</SelectItem>
                <SelectItem value="10">10 years</SelectItem>
                <SelectItem value="15">15 years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3 text-lg h-auto">
              <Search className="w-5 h-5 mr-2" />
              Find Loans
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg h-auto smooth-hover">
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
