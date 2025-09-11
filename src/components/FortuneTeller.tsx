import React, { useState } from 'react';
import { Italic as Crystal, Sparkles, Heart, Star } from 'lucide-react';

const FortuneTeller: React.FC = () => {
  const [currentFortune, setCurrentFortune] = useState<string | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [fortuneCount, setFortuneCount] = useState(0);

  const fortunes = [
    "Arush will pamper you with chocolates soon 🍫",
    "Agla date = ek surprise adventure 😏",
    "Tu aaj extra cute lag rahi hai... Arush ka dil melt ho jayega 💕",
    "Koi special gift aa raha hai tere paas... very soon! 🎁",
    "Tera smile aaj kisi ka din banane wala hai 😊",
    "Future mein ek romantic dinner planned hai... guess who? 🍽️✨",
    "Tu aaj koi compliment receive karegi... from your favorite person 😘",
    "Goa trip ke sapne jald reality ban jayenge 🏖️",
    "Arush tujhe miss kar raha hai right now... 100% sure! 💖",
    "Tera CEO mode aaj on fire hai... success coming your way! 👑",
    "Koi cute message aa raha hai tere phone mein... check kar! 📱💕",
    "Tu aaj kisi ki priority number 1 hai... guess who? 😏"
  ];

  const handleCrystalClick = () => {
    if (isReading) return;
    
    setIsReading(true);
    setCurrentFortune(null);
    
    // Simulate crystal ball reading animation
    setTimeout(() => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setCurrentFortune(randomFortune);
      setIsReading(false);
      setFortuneCount(prev => prev + 1);
    }, 2000);
  };

  const resetFortune = () => {
    setCurrentFortune(null);
    setFortuneCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black py-20 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400 opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${0.8 + Math.random() * 0.7}rem`
            }}
          >
            {['✨', '🔮', '⭐', '💫'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Mini Fortune Teller 🔮
          </h2>
          <p className="text-xl text-purple-200 font-medium mb-4">
            Crystal ball mein tera future dekh... click kar! ✨
          </p>
          <p className="text-lg text-pink-300">
            {fortuneCount > 0 ? `Fortunes read: ${fortuneCount} 🎯` : 'Ready for your first fortune? 💫'}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Crystal Ball */}
            <div
              className={`w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full shadow-2xl cursor-pointer transform transition-all duration-300 ${
                isReading ? 'animate-pulse scale-110' : 'hover:scale-105'
              } crystal-ball-glow`}
              onClick={handleCrystalClick}
            >
              <div className="absolute inset-4 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
              
              {/* Crystal ball center */}
              <div className="absolute inset-16 flex items-center justify-center">
                {isReading ? (
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-white animate-spin mb-2" />
                    <p className="text-white font-bold text-sm">Reading...</p>
                  </div>
                ) : currentFortune ? (
                  <Crystal className="w-12 h-12 text-white animate-pulse" />
                ) : (
                  <div className="text-center">
                    <Crystal className="w-12 h-12 text-white mb-2" />
                    <p className="text-white font-bold text-xs">Click Me!</p>
                  </div>
                )}
              </div>
              
              {/* Mystical sparkles around crystal ball */}
              {isReading && (
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-yellow-300 text-2xl sparkle-orbit"
                      style={{
                        transform: `rotate(${i * 45}deg) translateX(140px)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Crystal ball base */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gradient-to-r from-yellow-700 to-yellow-900 rounded-full"></div>
          </div>
        </div>

        {/* Fortune Display */}
        {currentFortune && (
          <div className="fortune-reveal text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-400 animate-pulse mr-3" />
                <Crystal className="w-8 h-8 text-purple-200" />
                <Star className="w-8 h-8 text-yellow-400 animate-pulse ml-3" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">🔮 Your Fortune 🔮</h3>
              
              <div className="fortune-text bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
                <p className="text-2xl font-medium leading-relaxed italic">
                  "{currentFortune}"
                </p>
              </div>
              
              <div className="mt-6 space-y-3">
                <p className="text-lg text-purple-200">
                  Crystal ball never lies! 😏✨
                </p>
                <p className="text-sm text-pink-200">
                  Fortune accuracy: 100% (when it comes to Arush's feelings) 💕
                </p>
              </div>
              
              <div className="mt-8 space-x-4">
                <button
                  onClick={handleCrystalClick}
                  disabled={isReading}
                  className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-lg disabled:opacity-50"
                >
                  Another Fortune! 🔮
                </button>
                <button
                  onClick={resetFortune}
                  className="bg-purple-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-800 transition-colors shadow-lg"
                >
                  Clear Crystal 🌟
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mystical instructions */}
        <div className="text-center mt-12">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-400 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-400 animate-pulse mr-2" />
              <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              <Heart className="w-6 h-6 text-red-400 animate-pulse ml-2" />
            </div>
            <h3 className="text-xl font-bold text-purple-300 mb-3">
              Fortune Teller's Note 📜
            </h3>
            <p className="text-purple-200 font-medium leading-relaxed">
              {currentFortune 
                ? 'Crystal ball has spoken! Yeh predictions mostly true hote hain... especially Arush wale! 😘' 
                : 'Crystal ball click kar aur apna future dekh! Mystical powers activated! 🔮✨'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortuneTeller;
