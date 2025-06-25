
import { Brain, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">LiverCare AI</h3>
                <p className="text-blue-200 text-sm">Advanced Machine Learning for Liver Health</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing liver care through AI-powered prediction models for early detection 
              and prognosis of liver cirrhosis, enabling timely interventions and personalized treatment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Project Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Project Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Dataset Documentation</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Model Performance</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Technical Paper</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Source Code</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* ML Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ML Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="https://www.javatpoint.com/supervised-machine-learning" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Supervised Learning</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.javatpoint.com/machine-learning-random-forest-algorithm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Random Forest</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.analyticsvidhya.com/blog/2018/09/an-end-to-end-guide-to-understand-the-math-behind-xgboost/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>XGBoost Guide</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://www.analyticsvidhya.com/blog/2019/08/11-important-model-evaluation-error-metrics/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
                  <span>Evaluation Metrics</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 LiverCare AI. This project is for educational and research purposes.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              <strong>Disclaimer:</strong> Not for clinical use. Consult healthcare professionals for medical decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
