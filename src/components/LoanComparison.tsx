
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, FileText, Percent } from "lucide-react";

const loanProviders = [
  {
    id: 1,
    name: "State Bank of India",
    logo: "🏦",
    interestRate: "8.5% - 10.5%",
    processingFee: "₹10,000",
    maxAmount: "₹30 Lakhs",
    repaymentTerm: "Up to 15 years",
    rating: 4.2,
    reviews: 2847,
    highlights: ["Quick Processing", "Government Backed"],
    trustBadge: "verified"
  },
  {
    id: 2,
    name: "HDFC Credila",
    logo: "🏪",
    interestRate: "9.0% - 13.5%",
    processingFee: "₹0",
    maxAmount: "₹75 Lakhs",
    repaymentTerm: "Up to 15 years",
    rating: 4.5,
    reviews: 1923,
    highlights: ["Zero Processing Fee", "Study Abroad Specialist"],
    trustBadge: "partner"
  },
  {
    id: 3,
    name: "Axis Bank",
    logo: "🏛️",
    interestRate: "8.75% - 12.0%",
    processingFee: "₹15,000",
    maxAmount: "₹40 Lakhs",
    repaymentTerm: "Up to 20 years",
    rating: 4.3,
    reviews: 1654,
    highlights: ["Flexible Repayment", "Fast Approval"],
    trustBadge: "secure"
  }
];

const LoanComparison = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Top Education Loan Providers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Side-by-side comparison of interest rates, fees, and terms from trusted financial partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanProviders.map((provider, index) => (
            <Card 
              key={provider.id} 
              className={`interactive-card animate-slide-up border-2 hover:border-primary/20 ${
                index === 1 ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center items-center gap-3 mb-2">
                  <span className="text-3xl">{provider.logo}</span>
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                </div>
                
                <div className="flex justify-center items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{provider.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({provider.reviews} reviews)</span>
                </div>

                <Badge className={`trust-badge-${provider.trustBadge}`}>
                  {provider.trustBadge === 'verified' && 'RBI Verified'}
                  {provider.trustBadge === 'partner' && 'Trusted Partner'}
                  {provider.trustBadge === 'secure' && 'Secure Platform'}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Interest Rate</p>
                      <p className="font-semibold text-primary">{provider.interestRate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Processing Fee</p>
                      <p className="font-semibold">{provider.processingFee}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Max Amount</p>
                      <p className="font-semibold">{provider.maxAmount}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Repayment</p>
                      <p className="font-semibold">{provider.repaymentTerm}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {provider.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-2 pt-4">
                  <Button className="btn-primary w-full">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full smooth-hover">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="smooth-hover">
            View All Providers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoanComparison;
