
import HeroSection from "@/components/HeroSection";
import LoanComparison from "@/components/LoanComparison";
import EligibilityChecker from "@/components/EligibilityChecker";
import GuidesResources from "@/components/GuidesResources";
import StudentTestimonials from "@/components/StudentTestimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LoanComparison />
      <EligibilityChecker />
      <GuidesResources />
      <StudentTestimonials />
      <Footer />
    </div>
  );
};

export default Index;
