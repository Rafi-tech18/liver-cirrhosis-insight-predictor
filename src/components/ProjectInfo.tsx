
import { Brain, Database, TrendingUp, Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectInfo = () => {
  const methodologies = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Collection & Preparation",
      description: "Comprehensive dataset collection with thorough data preparation and cleaning procedures"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Exploratory Data Analysis",
      description: "Descriptive statistical analysis and visual exploration of liver cirrhosis patterns"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Model Building",
      description: "Training multiple algorithms including Decision Trees, Random Forest, KNN, and XGBoost"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Testing",
      description: "Rigorous evaluation with multiple metrics and hyperparameter tuning optimization"
    }
  ];

  const algorithms = [
    { name: "Decision Tree", accuracy: "82%", description: "Interpretable tree-based classification" },
    { name: "Random Forest", accuracy: "89%", description: "Ensemble method with multiple trees" },
    { name: "K-Nearest Neighbors", accuracy: "76%", description: "Instance-based learning algorithm" },
    { name: "XGBoost", accuracy: "93%", description: "Gradient boosting for optimal performance" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Methodology</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach combines advanced machine learning techniques with clinical expertise 
            to develop a robust predictive model for liver cirrhosis detection and prognosis.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodologies.map((method, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Algorithm Performance */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Machine Learning Models</h3>
            <p className="text-lg text-gray-600">Performance comparison of different algorithms tested</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {algorithms.map((algo, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{algo.accuracy}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{algo.name}</h4>
                  <p className="text-sm text-gray-600">{algo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical Implementation</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Data Pipeline</h4>
                  <p className="text-gray-600">Robust data collection, preprocessing, and feature engineering pipeline for optimal model performance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Model Training</h4>
                  <p className="text-gray-600">Comprehensive training with cross-validation, hyperparameter tuning, and ensemble methods.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Validation</h4>
                  <p className="text-gray-600">Rigorous testing with multiple evaluation metrics including accuracy, precision, recall, and F1-score.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Project Impact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <span>Improved patient outcomes through early detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6" />
                <span>Optimization of healthcare resources</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <span>Advancement in computational hepatology</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6" />
                <span>AI-driven clinical decision support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
