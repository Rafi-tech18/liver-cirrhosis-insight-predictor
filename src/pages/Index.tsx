
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PredictionForm from "@/components/PredictionForm";
import ProjectInfo from "@/components/ProjectInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PredictionForm />
      <ProjectInfo />
      <Footer />
    </div>
  );
};

export default Index;
