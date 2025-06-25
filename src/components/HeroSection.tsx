
import { Brain, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPrediction = () => {
    document.getElementById('prediction-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Revolutionizing Liver Care</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Predicting Liver{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 bg-clip-text text-transparent">
              Cirrhosis
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Using Advanced Machine Learning Techniques for early detection and prognosis of liver cirrhosis, 
            enabling healthcare professionals to initiate timely interventions and personalized treatment strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToPrediction}
              className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Prediction
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced machine learning algorithms for accurate prediction and early detection</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Accuracy</h3>
              <p className="text-gray-600">Trained on comprehensive datasets with rigorous validation and testing</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical Support</h3>
              <p className="text-gray-600">Designed to assist healthcare professionals in making informed decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
