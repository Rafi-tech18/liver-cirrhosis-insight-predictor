
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Activity, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    albumin: "",
    alkalinePhosphatase: "",
    alanineAminotransferase: "",
    aspartateAminotransferase: "",
    bilirubin: "",
    cholinesterase: "",
    cholesterol: "",
    creatinine: "",
    gammaGlutamylTransferase: "",
    protein: ""
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prediction, setPrediction] = useState<{
    risk: 'low' | 'moderate' | 'high';
    confidence: number;
    recommendations: string[];
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const simulatePrediction = () => {
    // Simulate ML model prediction
    const risks = ['low', 'moderate', 'high'] as const;
    const randomRisk = risks[Math.floor(Math.random() * risks.length)];
    const confidence = Math.floor(Math.random() * 20) + 80; // 80-99% confidence
    
    const recommendations = {
      low: [
        "Continue regular health monitoring",
        "Maintain healthy lifestyle habits",
        "Annual liver function tests recommended"
      ],
      moderate: [
        "Schedule follow-up with hepatologist",
        "Consider lifestyle modifications",
        "Monitor liver function every 6 months"
      ],
      high: [
        "Immediate consultation with specialist required",
        "Comprehensive liver evaluation needed",
        "Discuss treatment options with healthcare provider"
      ]
    };

    return {
      risk: randomRisk,
      confidence,
      recommendations: recommendations[randomRisk]
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['age', 'gender', 'albumin', 'bilirubin'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsAnalyzing(true);
    setPrediction(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    const result = simulatePrediction();
    setPrediction(result);
    setIsAnalyzing(false);
    
    toast.success("Analysis complete! Results are ready.");
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      case 'moderate': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <Activity className="w-6 h-6" />;
      case 'moderate': return <AlertTriangle className="w-6 h-6" />;
      case 'high': return <AlertTriangle className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  return (
    <section id="prediction-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Liver Analysis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter the patient's clinical parameters below for advanced machine learning analysis
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-6 h-6" />
                  <span>Clinical Parameters</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter patient data for liver cirrhosis risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-sm font-medium text-gray-700">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className="border-2 focus:border-blue-500">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="albumin" className="text-sm font-medium text-gray-700">Albumin (g/dL) *</Label>
                      <Input
                        id="albumin"
                        type="number"
                        step="0.1"
                        placeholder="3.5-5.0"
                        value={formData.albumin}
                        onChange={(e) => handleInputChange('albumin', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bilirubin" className="text-sm font-medium text-gray-700">Bilirubin (mg/dL) *</Label>
                      <Input
                        id="bilirubin"
                        type="number"
                        step="0.1"
                        placeholder="0.3-1.2"
                        value={formData.bilirubin}
                        onChange={(e) => handleInputChange('bilirubin', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="alkalinePhosphatase" className="text-sm font-medium text-gray-700">Alkaline Phosphatase (U/L)</Label>
                      <Input
                        id="alkalinePhosphatase"
                        type="number"
                        placeholder="44-147"
                        value={formData.alkalinePhosphatase}
                        onChange={(e) => handleInputChange('alkalinePhosphatase', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="alanineAminotransferase" className="text-sm font-medium text-gray-700">ALT (U/L)</Label>
                      <Input
                        id="alanineAminotransferase"
                        type="number"
                        placeholder="7-56"
                        value={formData.alanineAminotransferase}
                        onChange={(e) => handleInputChange('alanineAminotransferase', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="aspartateAminotransferase" className="text-sm font-medium text-gray-700">AST (U/L)</Label>
                      <Input
                        id="aspartateAminotransferase"
                        type="number"
                        placeholder="10-40"
                        value={formData.aspartateAminotransferase}
                        onChange={(e) => handleInputChange('aspartateAminotransferase', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cholesterol" className="text-sm font-medium text-gray-700">Cholesterol (mg/dL)</Label>
                      <Input
                        id="cholesterol"
                        type="number"
                        placeholder="120-200"
                        value={formData.cholesterol}
                        onChange={(e) => handleInputChange('cholesterol', e.target.value)}
                        className="border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isAnalyzing}
                    className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Analyzing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Brain className="w-5 h-5" />
                        <span>Analyze with AI</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-6 h-6" />
                  <span>AI Analysis Results</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Machine learning prediction and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
                      <Brain className="absolute inset-0 m-auto w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis in Progress</h3>
                      <p className="text-gray-600">Processing clinical parameters...</p>
                    </div>
                  </div>
                ) : prediction ? (
                  <div className="space-y-6">
                    <div className={`p-6 rounded-2xl border-2 ${getRiskColor(prediction.risk)}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        {getRiskIcon(prediction.risk)}
                        <div>
                          <h3 className="text-xl font-bold capitalize">{prediction.risk} Risk</h3>
                          <p className="text-sm opacity-80">Confidence: {prediction.confidence}%</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Clinical Recommendations:</h4>
                      <ul className="space-y-3">
                        {prediction.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Disclaimer:</strong> This AI prediction is for educational purposes and should not replace professional medical diagnosis or treatment. Always consult with qualified healthcare professionals.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for Analysis</h3>
                      <p className="text-gray-600">Fill out the form and click "Analyze with AI" to get your prediction</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
