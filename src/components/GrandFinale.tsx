import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Crown, Gift } from 'lucide-react';

interface GrandFinaleProps {
  onRestart: () => void;
}

const GrandFinale: React.FC<GrandFinaleProps> = ({ onRestart }) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sequence the animations
    const timer1 = setTimeout(() => setShowFireworks(true), 500);
    const timer2 = setTimeout(() => setShowMessage(true), 2000);
    const timer3 = setTimeout(() => setShowButton(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-black py-20 relative overflow-hidden">
      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="firework absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🎆', '🎇', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart absolute text-red-400 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${1.5 + Math.random()}rem`
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {showMessage && (
          <div className="text-center finale-message-animation">
            {/* Crown Icon */}
            <div className="mb-8">
              <Crown className="w-32 h-32 text-yellow-400 mx-auto animate-bounce" />
            </div>

            {/* Main Message */}
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl text-white mb-8">
              <div className="flex items-center justify-center mb-8">
                <Heart className="w-12 h-12 text-red-400 animate-pulse mr-4" />
                <Sparkles className="w-12 h-12 text-yellow-400 animate-spin" />
                <Heart className="w-12 h-12 text-red-400 animate-pulse ml-4" />
              </div>

              <h1 className="text-6xl font-bold mb-8 glowing-text">
                I Love You Forever 💖
              </h1>

              <div className="space-y-6 text-xl leading-relaxed">
                <p className="text-pink-200">
                  Saanvi, yeh website sirf ek chhota sa token hai mere pyaar ka! 🎁
                </p>
                <p className="text-purple-200">
                  Tu meri life ki sabse badi khushi hai, meri CEO, meri everything! 👑
                </p>
                <p className="text-blue-200">
                  Happy Birthday meri jaan... tu deserve karti hai duniya ki saari khushiyan! 🌍✨
                </p>
                <p className="text-yellow-200 font-bold text-2xl">
                  Forever and always, tera Arush 💕
                </p>
              </div>

              {/* Special Birthday Message */}
              <div className="mt-8 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                <Gift className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <p className="text-lg italic">
                  "Tu meri zindagi mein aane wala sabse beautiful surprise hai! 
                  Har din tere saath ek naya adventure hai! 
                  Thank you for being my Ms. CEO, my partner, my everything! 
                  Yeh birthday sirf shururat hai... aur bhi celebrations aane wali hain! 🎉"
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-400">
                <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
                <p className="text-white font-medium">Days I'll Love You</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <p className="text-white font-medium">Perfect Match</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400">
                <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
                <p className="text-white font-medium">Queen of My Heart</p>
              </div>
            </div>

            {/* Restart Button */}
            {showButton && (
              <div className="restart-button-animation">
                <button
                  onClick={onRestart}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-2xl transform hover:scale-105"
                >
                  <div className="flex items-center">
                    <Sparkles className="w-6 h-6 mr-3" />
                    Relive the Surprise! 🎁
                    <Heart className="w-6 h-6 ml-3 animate-pulse" />
                  </div>
                </button>
                
                <p className="text-purple-300 mt-4 text-lg">
                  Want to experience the magic again? Click above! ✨
                </p>
              </div>
            )}
          </div>
        )}

        {/* Final Note */}
        {showButton && (
          <div className="text-center mt-12">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-400 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                The End... Or Is It? 😏
              </h3>
              <p className="text-white font-medium leading-relaxed">
                Yeh website khatam ho gayi, but tera birthday abhi shuru hua hai! 
                Real life mein aur bhi surprises waiting hain! 
                Get ready for more adventures Baby 💖
              </p>
              <p className="text-pink-300 mt-4 text-sm">
                Agar yeh gift pasand aaya, toh wait kar next surprise ka! 😘
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrandFinale;
