
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, AlertCircle, User, GraduationCap } from "lucide-react";

const EligibilityChecker = () => {
  const [result, setResult] = useState<'eligible' | 'alternatives' | null>(null);
  const [formData, setFormData] = useState({
    course: '',
    coSigner: '',
    academicScore: '',
    income: ''
  });

  const checkEligibility = () => {
    // Simple eligibility logic for demo
    const hasCoSigner = formData.coSigner === 'yes';
    const goodScore = parseInt(formData.academicScore) >= 60;
    const sufficientIncome = parseInt(formData.income) >= 300000;

    if (hasCoSigner && goodScore && sufficientIncome) {
      setResult('eligible');
    } else {
      setResult('alternatives');
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Check Your Eligibility</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant feedback on your loan eligibility with our quick assessment tool
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Quick Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course">Course Type</Label>
                <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="professional">Professional Course</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cosigner">Do you have a co-signer?</Label>
                <Select value={formData.coSigner} onValueChange={(value) => setFormData({...formData, coSigner: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, I have a co-signer</SelectItem>
                    <SelectItem value="no">No co-signer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="score">Academic Score (%)</Label>
                <Input 
                  id="score"
                  type="number" 
                  placeholder="Enter your percentage"
                  value={formData.academicScore}
                  onChange={(e) => setFormData({...formData, academicScore: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="income">Family Annual Income (₹)</Label>
                <Input 
                  id="income"
                  type="number" 
                  placeholder="Enter annual income"
                  value={formData.income}
                  onChange={(e) => setFormData({...formData, income: e.target.value})}
                />
              </div>

              <Button 
                onClick={checkEligibility} 
                className="btn-primary w-full mt-6"
                disabled={!formData.course || !formData.coSigner || !formData.academicScore || !formData.income}
              >
                Check Eligibility
              </Button>
            </CardContent>
          </Card>

          {/* Result Section */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Eligibility Result
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center min-h-[300px]">
              {!result ? (
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8" />
                  </div>
                  <p>Fill out the form to check your eligibility</p>
                </div>
              ) : result === 'eligible' ? (
                <div className="text-center animate-scale-in">
                  <div className="w-20 h-20 rounded-full status-eligible mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-success mb-2">You're Eligible!</h3>
                  <p className="text-muted-foreground mb-4">
                    Great news! You meet the basic requirements for most education loans.
                  </p>
                  <div className="space-y-2">
                    <Button className="btn-primary w-full">
                      View Recommended Loans
                    </Button>
                    <Button variant="outline" className="w-full">
                      Talk to an Advisor
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-warning/20 mx-auto mb-4 flex items-center justify-center">
                    <AlertCircle className="w-12 h-12 text-warning" />
                  </div>
                  <h3 className="text-2xl font-bold text-warning mb-2">Check Alternatives</h3>
                  <p className="text-muted-foreground mb-4">
                    Don't worry! We have alternative options that might work for you.
                  </p>
                  <div className="space-y-2">
                    <Button className="btn-accent w-full">
                      Explore Alternatives
                    </Button>
                    <Button variant="outline" className="w-full">
                      Improve Eligibility
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
