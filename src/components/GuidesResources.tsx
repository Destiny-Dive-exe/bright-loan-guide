
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, TrendingUp, Award } from "lucide-react";

const guides = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Documents Required",
    items: [
      "Academic transcripts and certificates",
      "Admission letter from the institution",
      "Income proof of co-signer",
      "Identity and address proof",
      "Bank statements (last 6 months)",
      "Collateral documents (if applicable)"
    ]
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Repayment Terms",
    items: [
      "Moratorium period during studies + 6 months",
      "Simple interest during moratorium",
      "EMI options: Standard, Step-up, Flexible",
      "Prepayment allowed without penalty",
      "Tax benefits under Section 80E"
    ]
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Tips to Improve Eligibility",
    items: [
      "Choose a co-signer with good credit score",
      "Maintain consistent academic performance",
      "Select courses from recognized institutions",
      "Consider providing collateral for better rates",
      "Keep all financial documents ready"
    ]
  }
];

const faqs = [
  {
    question: "What is the maximum loan amount I can get?",
    answer: "The maximum loan amount varies by lender but typically ranges from ₹20 lakhs to ₹1.5 crore for studies abroad and up to ₹40 lakhs for domestic studies. The exact amount depends on your course, institution, and financial profile."
  },
  {
    question: "Can I get a loan without a co-signer?",
    answer: "Some lenders offer loans without co-signers for amounts up to ₹4-7 lakhs, especially for professional courses. However, having a co-signer significantly improves your chances and may get you better interest rates."
  },
  {
    question: "When do I start repaying the loan?",
    answer: "Most education loans have a moratorium period, meaning you don't pay EMIs during your course duration plus 6 months to 1 year after completion. You only pay simple interest during this period."
  },
  {
    question: "Are there any tax benefits on education loans?",
    answer: "Yes! Under Section 80E of the Income Tax Act, you can claim deduction on the entire interest paid on education loans. There's no upper limit on the deduction amount, and it's available for up to 8 years."
  },
  {
    question: "What happens if I can't repay the loan?",
    answer: "If you face difficulty, contact your lender immediately. Most lenders offer restructuring options, extended moratorium, or alternative repayment plans. Early communication is key to finding a solution."
  }
];

const GuidesResources = () => {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Guides & Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about education loans, simplified for students
          </p>
        </div>

        {/* Quick Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {guides.map((guide, index) => (
            <Card key={index} className="interactive-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  {guide.icon}
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {guide.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scholarship Integration */}
        <Card className="mb-12 border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Scholarship + Loan Combination</h3>
                <p className="text-muted-foreground mb-4">
                  Did you know scholarships can significantly reduce your loan amount? Many students combine merit scholarships, 
                  need-based aid, and education loans to minimize their financial burden.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Merit Scholarships</Badge>
                  <Badge variant="secondary">Need-based Aid</Badge>
                  <Badge variant="secondary">Government Schemes</Badge>
                  <Badge variant="secondary">Institution Grants</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuidesResources;
