
import { Brain, Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white shadow-2xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Brain className="w-8 h-8 text-teal-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                LiverCare AI
              </h1>
              <p className="text-blue-200 text-sm font-medium">Advanced Machine Learning for Liver Health</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">AI Model Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
