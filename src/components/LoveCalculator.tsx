import React, { useState } from 'react';
import { Heart, Calculator, Sparkles, Crown } from 'lucide-react';

const LoveCalculator: React.FC = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<{
    percentage: number;
    message: string;
    isSpecialCouple: boolean;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) return;
    
    setIsCalculating(true);
    setResult(null);
    
    setTimeout(() => {
      const lowerName1 = name1.toLowerCase().trim();
      const lowerName2 = name2.toLowerCase().trim();
      
      // Special case for Saanvi and Arush
      if ((lowerName1 === 'saanvi' && lowerName2 === 'arush') || 
          (lowerName1 === 'arush' && lowerName2 === 'saanvi')) {
        setResult({
          percentage: 100,
          message: "Perfect match made in heaven! 😘 You two are destined to be together! 👑💖",
          isSpecialCouple: true
        });
      } else if (lowerName1 === 'saanvi' || lowerName2 === 'saanvi') {
        // If Saanvi is paired with someone else
        setResult({
          percentage: 0,
          message: "Nahi yaar, tu sirf Arush ki ho! 😏 Try with the right person! 💕",
          isSpecialCouple: false
        });
      } else if (lowerName1 === 'arush' || lowerName2 === 'arush') {
        // If Arush is paired with someone else
        setResult({
          percentage: 0,
          message: "Sorry, Arush ka dil sirf Saanvi ke paas hai! 💖 Try the perfect combination! 😊",
          isSpecialCouple: false
        });
      } else {
        // Random calculation for other names
        const randomPercentage = Math.floor(Math.random() * 80) + 10; // 10-89%
        let message = "";
        
        if (randomPercentage >= 70) {
          message = "Great compatibility! But not as perfect as Saanvi & Arush! 😉";
        } else if (randomPercentage >= 50) {
          message = "Good match! But have you tried 'Saanvi' and 'Arush'? 😏";
        } else {
          message = "Hmm, maybe try different names? Like 'Saanvi' and 'Arush'! 💕";
        }
        
        setResult({
          percentage: randomPercentage,
          message: message,
          isSpecialCouple: false
        });
      }
      
      setIsCalculating(false);
    }, 2000);
  };

  const resetCalculator = () => {
    setName1('');
    setName2('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-red-300 to-purple-300 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-4">
            Love Calculator 💕
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Enter two names and discover the love percentage! 😍
          </p>
          <p className="text-lg text-pink-600">
            Hint: Try "Saanvi" and "Arush" for a special surprise! 😏
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Calculator className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">
              Love Compatibility Test 💖
            </h3>
          </div>

          <div className="space-y-6">
            {/* Input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Couple Name 1 💕
                </label>
                <input
                  type="text"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  placeholder="Enter first name..."
                  className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  disabled={isCalculating}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Couple Name 2 💕
                </label>
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  placeholder="Enter second name..."
                  className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  disabled={isCalculating}
                />
              </div>
            </div>

            {/* Calculate button */}
            <div className="text-center">
              <button
                onClick={calculateLove}
                disabled={!name1.trim() || !name2.trim() || isCalculating}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  !name1.trim() || !name2.trim() || isCalculating
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 shadow-lg transform hover:scale-105'
                }`}
              >
                {isCalculating ? (
                  <div className="flex items-center">
                    <Sparkles className="w-6 h-6 animate-spin mr-2" />
                    Calculating Love...
                  </div>
                ) : (
                  'Calculate Love! 💖'
                )}
              </button>
            </div>
          </div>

          {/* Loading animation */}
          {isCalculating && (
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-6 h-6 text-pink-500 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <p className="text-pink-600 font-medium">
                Love algorithm processing... 💕
              </p>
            </div>
          )}

          {/* Result display */}
          {result && (
            <div className="mt-8 result-animation">
              <div className={`text-center p-6 rounded-2xl ${
                result.isSpecialCouple 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                  : 'bg-gradient-to-r from-gray-100 to-pink-100 text-gray-800'
              }`}>
                {result.isSpecialCouple && (
                  <div className="flex items-center justify-center mb-4">
                    <Crown className="w-8 h-8 text-yellow-300 animate-bounce mr-2" />
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-spin" />
                    <Crown className="w-8 h-8 text-yellow-300 animate-bounce ml-2" />
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`text-6xl font-bold mb-2 ${
                    result.percentage === 100 ? 'text-yellow-300' : 'text-pink-600'
                  }`}>
                    {result.percentage}%
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-4 mb-4">
                    <div
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        result.percentage === 100 
                          ? 'bg-yellow-400' 
                          : 'bg-pink-500'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-lg font-medium leading-relaxed mb-4">
                  {result.message}
                </p>
                
                {result.isSpecialCouple && (
                  <div className="space-y-2 text-yellow-200">
                    <p className="font-bold">🎉 PERFECT MATCH DETECTED! 🎉</p>
                    <p>Saanvi + Arush = Forever Love Story! 💖</p>
                    <p className="text-sm">Algorithm approved by Cupid himself! 💘</p>
                  </div>
                )}
              </div>
              
              <div className="text-center mt-6">
                <button
                  onClick={resetCalculator}
                  className="bg-white text-pink-600 px-6 py-3 rounded-xl font-bold hover:bg-pink-50 transition-colors shadow-lg"
                >
                  Try Again! 🔄
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Fun facts */}
        <div className="text-center mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Love Calculator Fun Facts 📊
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>💯 Perfect matches are rare... but Saanvi & Arush are special!</p>
              <p>💕 This calculator has 100% accuracy for true love!</p>
              <p>😏 Hint: The algorithm knows the perfect combination!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveCalculator;
