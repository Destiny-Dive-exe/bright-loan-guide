
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, GraduationCap, Shield, Award, Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">EduLoan</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering students to achieve their educational dreams through transparent, 
              accessible, and student-friendly loan solutions.
            </p>
            <div className="flex gap-2">
              <div className="trust-badge trust-badge-secure">
                <Shield className="w-3 h-3 mr-1" />
                Secure
              </div>
              <div className="trust-badge trust-badge-verified">
                <Award className="w-3 h-3 mr-1" />
                Verified
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-hover">Compare Loans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-hover">Eligibility Checker</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-hover">EMI Calculator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-hover">Student Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary smooth-hover">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Student Support</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">1800-123-LOAN</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">help@eduloan.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">Available 24/7 for student support</span>
              </div>
            </div>
            <Button className="btn-accent w-full sm:w-auto">
              Talk to an Advisor
            </Button>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get loan tips, scholarship alerts, and educational insights
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" className="text-sm" />
              <Button className="btn-secondary w-full text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Partner Logos */}
        <div className="mb-8">
          <h4 className="text-center text-sm font-medium text-muted-foreground mb-4">Trusted by Leading Financial Partners</h4>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="w-5 h-5" />
              <span className="text-sm font-medium">State Bank of India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="w-5 h-5" />
              <span className="text-sm font-medium">HDFC Bank</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="w-5 h-5" />
              <span className="text-sm font-medium">Axis Bank</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="w-5 h-5" />
              <span className="text-sm font-medium">ICICI Bank</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>&copy; 2024 EduLoan. All rights reserved.</span>
            <a href="#" className="hover:text-primary smooth-hover">Privacy Policy</a>
            <a href="#" className="hover:text-primary smooth-hover">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>RBI Licensed • SSL Secured • Student Protected</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
