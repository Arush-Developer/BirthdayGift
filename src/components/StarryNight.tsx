import React, { useState } from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';

const StarryNight: React.FC = () => {
  const [clickedStars, setClickedStars] = useState<number[]>([]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const starMessages = [
    "Teri smile = mera daily charger 🔋❤️",
    "Tu meri life ki promotion hai 😏",
    "Tere bina mera dil incomplete lagta hai 💕",
    "Tu meri sabse favorite notification hai 📱💖",
    "Tera hasso = meri best medicine 😊",
    "Tu meri dreams ki CEO hai 👑",
    "Tere saath time = fast forward ho jaata hai ⏰",
    "Tu meri happiness ka permanent address hai 🏠💕"
  ];

  const handleStarClick = (starId: number) => {
    if (!clickedStars.includes(starId)) {
      setClickedStars(prev => [...prev, starId]);
      
      if (clickedStars.length + 1 >= 5) {
        setTimeout(() => setShowFinalMessage(true), 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black py-20 relative overflow-hidden">
      {/* Twinkling stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${0.5 + Math.random() * 0.5}rem`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Starry Night Sky 🌌
          </h2>
          <p className="text-xl text-blue-200 font-medium mb-4">
            Click on the stars to reveal hidden messages! ✨
          </p>
          <p className="text-lg text-purple-300">
            {clickedStars.length < 5 
              ? `Stars clicked: ${clickedStars.length} / 5 ⭐` 
              : 'All stars unlocked! 🌟'}
          </p>
        </div>

        {!showFinalMessage ? (
          <div className="relative h-96 mb-8">
            {starMessages.map((message, index) => (
              <div
                key={index}
                className={`absolute cursor-pointer transform transition-all duration-300 ${
                  clickedStars.includes(index) ? 'scale-150' : 'hover:scale-125'
                }`}
                style={{
                  left: `${15 + (index % 4) * 20}%`,
                  top: `${20 + Math.floor(index / 4) * 25}%`
                }}
                onClick={() => handleStarClick(index)}
              >
                <div className="relative">
                  <Star 
                    className={`w-8 h-8 ${
                      clickedStars.includes(index) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-blue-300 hover:text-yellow-300'
                    } transition-colors duration-300`}
                  />
                  
                  {clickedStars.includes(index) && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-yellow-200 star-message-appear">
                      <p className="text-gray-700 font-medium text-center leading-relaxed">
                        {message}
                      </p>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-yellow-200"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center final-message-animation">
            <div className="bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl p-12 shadow-2xl text-white">
              <Sparkles className="w-24 h-24 mx-auto animate-spin mb-6" />
              
              <h3 className="text-4xl font-bold mb-6 glowing-text">
                🌟 Final Message Unlocked! 🌟
              </h3>
              
              <div className="text-3xl font-bold mb-8 p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                "You're my brightest star, Saanvi 💖"
              </div>
              
              <div className="space-y-4">
                <p className="text-xl">
                  Saare stars se zyada tu chamakti hai! ✨
                </p>
                <p className="text-lg text-yellow-200">
                  Tu meri night sky ki sabse beautiful star hai! 🌙⭐
                </p>
              </div>
              
              <button
                onClick={() => {
                  setClickedStars([]);
                  setShowFinalMessage(false);
                }}
                className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
              >
                Click Stars Again! ⭐
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-300">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-400 animate-pulse mr-2" />
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              <Heart className="w-6 h-6 text-red-400 animate-pulse ml-2" />
            </div>
            <p className="text-blue-200 font-medium">
              {showFinalMessage 
                ? 'Tu sach mein meri brightest star hai! 💫' 
                : 'Aur stars click kar... surprise aa raha hai! 🌟'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarryNight;
